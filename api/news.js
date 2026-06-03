const NEWS_TARGET_COUNT = 240;
const MAX_RECORDS_PER_SOURCE = 60;
const RSS_FETCH_TIMEOUT_MS = 2500;
const GDELT_FETCH_TIMEOUT_MS = 8000;
const TRANSLATE_FETCH_TIMEOUT_MS = 3500;
const MAX_TRANSLATED_GLOBAL_ITEMS = 80;

const GLOBAL_QUERIES = [
  "sofa OR couch furniture news",
  "upholstered furniture industry sofa",
  "furniture export policy tariff customs",
  "furniture new materials sustainable fabric foam upholstery",
  "sofa design trends modular sectional recliner",
  "furniture manufacturing supply chain upholstery",
  "furniture retail market sofa",
  "international furniture fair sofa",
];

const CHINA_QUERIES = [
  "沙发 家具 新闻",
  "软体家具 沙发 行业",
  "家具 出口 政策 关税 海关",
  "家具 新材料 环保 面料 海绵",
  "沙发 设计 趋势 模块 功能",
  "家具 外贸 订单 出口",
  "家具展 沙发 软体家具",
  "功能沙发 智能家具 市场",
];

const MIXED_GDELT_QUERY = '(sofa OR couch OR furniture OR upholstery OR "furniture export" OR "furniture tariff" OR "furniture materials" OR "sofa design" OR 家具 OR 沙发 OR 软体家具 OR 家居 OR 家具出口 OR 家具关税 OR 家具新材料 OR 沙发设计)';

const GLOBAL_FEEDS = [
  "https://www.furnituretoday.com/feed/",
  "https://www.furniturenews.net/feed/",
  "https://www.dezeen.com/interiors/furniture/feed/",
  "https://www.woodworkingnetwork.com/rss.xml",
];

const CHINA_FEEDS = [
  "https://www.jjgle.com/rss.xml",
  "https://www.jia360.com/rss.xml",
];

module.exports = async function handler(request, response) {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { ok: false, message: "Method not allowed" });
    return;
  }

  const target = clampNumber(request.query?.target, 1, NEWS_TARGET_COUNT, NEWS_TARGET_COUNT);
  const gdeltItems = await fetchGdeltNews(MIXED_GDELT_QUERY, "家具资讯", Math.min(250, target * 2)).catch(() => []);
  const [globalSupplement, chinaSupplement] = await Promise.all([
    fetchNewsGroup({
      seedItems: gdeltItems
        .filter((item) => !hasChineseText(`${item.title} ${item.summary}`))
        .map((item) => ({ ...item, region: "国外资讯" })),
      queries: GLOBAL_QUERIES,
      feeds: GLOBAL_FEEDS,
      region: "国外资讯",
      target,
      chinaOnly: false,
    }),
    fetchNewsGroup({
      seedItems: gdeltItems
        .filter((item) => hasChineseText(`${item.title} ${item.summary}`))
        .map((item) => ({ ...item, region: "国内资讯" })),
      queries: CHINA_QUERIES,
      feeds: CHINA_FEEDS,
      region: "国内资讯",
      target,
      chinaOnly: true,
    }),
  ]);

  const globalNews = enrichNewsItems(globalSupplement.length ? await translateGlobalNews(globalSupplement) : fallbackGlobalNews());
  const chinaNews = enrichNewsItems(chinaSupplement.length ? chinaSupplement : fallbackChinaNews());

  sendJson(response, 200, {
    ok: true,
    target,
    fetchedAt: new Date().toISOString(),
    sources: {
      gdeltQueries: 1,
      globalQueries: GLOBAL_QUERIES.length,
      chinaQueries: CHINA_QUERIES.length,
      globalFeeds: GLOBAL_FEEDS.length,
      chinaFeeds: CHINA_FEEDS.length,
    },
    global: globalNews,
    china: chinaNews,
  });
};

async function fetchNewsGroup({ seedItems = [], queries, feeds, region, target, chinaOnly }) {
  const tasks = [
    ...queries.slice(0, 3).map((query) => fetchBingNews(query, region, chinaOnly)),
    ...queries.slice(0, 3).map((query) => fetchGoogleNews(query, region, chinaOnly)),
    ...feeds.map((url) => fetchRssFeed(url, region, chinaOnly)),
  ];

  const results = await Promise.allSettled(tasks);
  const items = [
    ...seedItems,
    ...results
      .filter((result) => result.status === "fulfilled")
      .flatMap((result) => result.value),
  ]
    .filter((item) => item.title && item.url)
    .filter(isFurnitureNews)
    .filter((item) => !chinaOnly || hasChineseText(`${item.title} ${item.summary}`));

  return sortNews(dedupeNews(items)).slice(0, target);
}

async function fetchBingNews(query, region, chinaOnly) {
  const params = new URLSearchParams({
    q: query,
    format: "rss",
    setlang: chinaOnly ? "zh-CN" : "en-US",
    cc: chinaOnly ? "CN" : "US",
  });
  return fetchRssFeed(`https://www.bing.com/news/search?${params.toString()}`, region, chinaOnly);
}

async function fetchGoogleNews(query, region, chinaOnly) {
  const params = new URLSearchParams({
    q: query,
    hl: chinaOnly ? "zh-CN" : "en-US",
    gl: chinaOnly ? "CN" : "US",
    ceid: chinaOnly ? "CN:zh-Hans" : "US:en",
  });
  return fetchRssFeed(`https://news.google.com/rss/search?${params.toString()}`, region, chinaOnly);
}

async function fetchGdeltNews(query, region, target = MAX_RECORDS_PER_SOURCE) {
  const params = new URLSearchParams({
    query,
    mode: "ArtList",
    format: "json",
    maxrecords: String(Math.min(250, Math.max(MAX_RECORDS_PER_SOURCE, target))),
    sort: "DateDesc",
  });
  const data = await fetchJson(`https://api.gdeltproject.org/api/v2/doc/doc?${params.toString()}`);
  return (data.articles || [])
    .filter((article) => article.title && article.url)
    .map((article) => ({
      date: formatNewsDate(article.seendate),
      region,
      source: article.domain || getNewsDomain(article.url) || "GDELT",
      title: article.title,
      summary: article.title,
      url: article.url,
    }));
}

async function fetchRssFeed(url, region) {
  const xml = await fetchText(url);
  return parseRssItems(xml, region);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 GCSOFA furniture news monitor",
      Accept: "application/rss+xml, application/xml, text/xml, text/html;q=0.8, */*;q=0.5",
    },
    signal: AbortSignal.timeout(RSS_FETCH_TIMEOUT_MS),
  });
  if (!response.ok) return "";
  return response.text();
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 GCSOFA furniture news monitor",
      Accept: "application/json",
    },
    signal: AbortSignal.timeout(GDELT_FETCH_TIMEOUT_MS),
  });
  if (!response.ok) return {};
  return response.json();
}

function parseRssItems(xml, region) {
  return [...String(xml || "").matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
    .slice(0, MAX_RECORDS_PER_SOURCE)
    .map((match) => {
      const itemXml = match[1];
      const rawTitle = decodeXml(getXmlValue(itemXml, "title"));
      const url = decodeXml(getXmlValue(itemXml, "link")) || decodeXml(getXmlValue(itemXml, "guid"));
      const source = decodeXml(getXmlValue(itemXml, "source")) || getSourceFromGoogleTitle(rawTitle) || getNewsDomain(url) || "News";
      const title = removeGoogleSourceSuffix(rawTitle, source);
      const rawSummary = stripTags(decodeXml(getXmlValue(itemXml, "description"))) || title;
      return {
        date: formatNewsDate(decodeXml(getXmlValue(itemXml, "pubDate")) || decodeXml(getXmlValue(itemXml, "updated"))),
        region,
        source,
        title,
        summary: cleanNewsSummary(rawSummary),
        url: normalizeNewsUrl(url),
      };
    })
    .filter((item) => item.title && item.url && !hasBrokenEncoding(`${item.title} ${item.summary}`));
}

function isFurnitureNews(item) {
  const text = `${item.title} ${item.summary} ${item.source}`.toLowerCase();
  return /家具|沙发|软体|家居|家装|海绵|面料|关税|海关|外贸|出口|展会|furniture|sofa|couch|upholster|interior|home furnishing|woodworking|foam|fabric|tariff|customs|export|retail|design|material/.test(text);
}

function enrichNewsItems(items) {
  return items.map((item) => {
    const cleanTitle = cleanNewsSummary(item.title);
    const cleanSummary = cleanNewsSummary(item.summary);
    const details = buildNewsDetails({
      ...item,
      title: cleanTitle,
      summary: cleanSummary,
    });
    return {
      ...item,
      title: cleanTitle,
      summary: cleanSummary,
      details,
    };
  });
}

function buildNewsDetails(item) {
  const profile = getNewsTopicProfile(item);
  const title = cleanNewsSummary(item.title);
  const summary = stripNewsSummaryPrefix(cleanNewsSummary(item.summary));
  const source = cleanNewsSummary(item.source) || "新闻来源";
  const date = item.date || "最新";
  const sourceLine = `${date} 来自 ${source} 的资讯，主题集中在“${profile.label}”。${summary && summary !== title ? `原始摘要提到：${summary}` : `标题显示：${title}`}`;
  const impactLine = `对家具和沙发企业的参考价值：${profile.impact}`;
  const actionLine = `建议跟进：${profile.action}`;
  return [sourceLine, impactLine, actionLine];
}

function getNewsTopicProfile(item) {
  const text = `${item.title} ${item.summary} ${item.source}`.toLowerCase();
  if (/关税|海关|政策|外贸|出口|进口|301|tariff|customs|export|import|trade/.test(text)) {
    return {
      label: "出口政策与贸易环境",
      impact: "这类信息会影响报价有效期、目的港成本、清关资料、原产地说明和客户下单节奏，尤其适合外贸业务和报价人员重点关注。",
      action: "复核目标市场的关税、认证、标签和申报要求；报价时预留政策变化说明，并把可能影响交期或成本的条款提前告知客户。",
    };
  }
  if (/新材料|环保|面料|海绵|织物|皮革|foam|fabric|material|sustainable|upholstery|leather/.test(text)) {
    return {
      label: "材料、面料与可持续趋势",
      impact: "材料新闻通常关系到沙发卖点、成本结构、舒适度、耐磨性、环保认证和产品详情页表达，适合产品开发与采购同步查看。",
      action: "记录可用于新品开发的面料、海绵、填充和环保关键词；向供应商确认样品、检测报告、MOQ、交期和可替代材料。",
    };
  }
  if (/零售|电商|市场|销售|门店|京东|天猫|618|retail|market|sales|store|consumer|brand/.test(text)) {
    return {
      label: "市场、零售与消费变化",
      impact: "市场资讯能反映终端需求、库存变化、促销节奏和消费者偏好，对业务报价、备货建议和主推款选择有帮助。",
      action: "留意畅销价格带、渠道反馈和库存压力；把适合目标市场的款式放到首页、产品分类和业务推荐资料中。",
    };
  }
  if (/设计|趋势|模块|客厅|室内|功能沙发|design|trend|modular|sectional|recliner|interior|living room/.test(text)) {
    return {
      label: "沙发设计与消费趋势",
      impact: "设计类资讯能帮助判断海外买家偏好的轮廓、颜色、组合方式和场景搭配，对选款、拍摄、详情图文案和展厅陈列都有参考意义。",
      action: "把出现频率高的设计元素整理成开发清单，例如模块组合、低矮坐感、圆润扶手、功能位、收纳或小户型尺寸。",
    };
  }
  if (/展会|家具展|设计周|fair|expo|exhibition|show|salone|interzum/.test(text)) {
    return {
      label: "展会与渠道动态",
      impact: "展会信息能反映买家关注点、竞品展示方向和市场热词，也适合安排业务拜访、样册准备和新品展示节奏。",
      action: "关注展会中反复出现的款式、材料和价格带；把适合工厂的展示主题沉淀到产品资料、报价表和业务话术里。",
    };
  }
  if (/制造|工厂|供应链|物流|生产|woodworking|manufacturing|supply chain|logistics|factory/.test(text)) {
    return {
      label: "生产制造与供应链",
      impact: "这类内容对排产、物料准备、包装、物流和交付稳定性有参考价值，能帮助工厂提前识别效率和成本风险。",
      action: "结合本厂生产进度表检查关键工序瓶颈；重点跟进木架、裁剪、车工、包装、物流周期和异常订单处理机制。",
    };
  }
  return {
    label: "家具行业综合动态",
    impact: "这条资讯可作为行业观察入口，用于了解家具、沙发、家居渠道或相关企业的最新变化。",
    action: "点击原文核对细节后，再判断是否需要更新产品资料、报价说明、开发方向或客户沟通重点。",
  };
}

async function translateGlobalNews(items) {
  const normalizedItems = items.map((item) => ({
    ...item,
    title: cleanNewsSummary(item.title),
    summary: cleanNewsSummary(item.summary),
    originalTitle: item.title,
    originalSummary: item.summary,
  }));
  const translateTargets = [];

  normalizedItems.slice(0, MAX_TRANSLATED_GLOBAL_ITEMS).forEach((item, index) => {
    if (!hasChineseText(item.title)) {
      translateTargets.push({ index, field: "title", text: item.title });
    }
  });

  const translated = await Promise.all(translateTargets.map((target) => translateTextToChinese(target.text).catch(() => "")));
  translated.forEach((value, offset) => {
    if (!value) return;
    const target = translateTargets[offset];
    normalizedItems[target.index][target.field] = value;
    if (!hasChineseText(normalizedItems[target.index].summary)) {
      normalizedItems[target.index].summary = `摘要：${value}`;
    }
  });

  return normalizedItems.map((item) => ({
    ...item,
    translated: true,
  }));
}

async function translateTextToChinese(text) {
  const cleanText = cleanNewsSummary(text);
  if (!cleanText || hasChineseText(cleanText)) return cleanText;
  const params = new URLSearchParams({
    client: "gtx",
    sl: "auto",
    tl: "zh-CN",
    dt: "t",
    q: cleanText,
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 GCSOFA furniture news translator",
      Accept: "application/json, text/plain, */*",
    },
    signal: AbortSignal.timeout(TRANSLATE_FETCH_TIMEOUT_MS),
  });
  if (!response.ok) return "";
  const data = await response.json();
  const translated = Array.isArray(data?.[0])
    ? data[0].map((part) => part?.[0] || "").join("")
    : "";
  return cleanNewsSummary(translated);
}

function cleanNewsSummary(value) {
  return decodeXml(String(value || ""))
    .replace(/&nbsp;/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripNewsSummaryPrefix(value) {
  return String(value || "").replace(/^摘要[：:]\s*/, "").trim();
}

function fallbackGlobalNews() {
  const today = new Date().toISOString().slice(0, 10);
  return [
    {
      date: today,
      region: "国外资讯",
      source: "实时接口备用",
      title: "全球家具资讯接口暂时拥堵，建议稍后重新刷新",
      summary: "页面已接入全球新闻索引、搜索新闻源和家具行业 RSS。外部接口限流时会先显示备用提示，稍后刷新会重新抓取实时内容。",
      details: [
        "当前外部新闻源临时限流，页面先显示备用说明，避免全球资讯栏目空白。",
        "接口恢复后会继续按家具、沙发、出口政策、新材料、设计趋势等关键词抓取实时内容。",
        "建议稍后点击刷新资讯，或直接打开搜索链接查看最新全球家具新闻。",
      ],
      url: "https://www.google.com/search?q=sofa+furniture+industry+news",
    },
  ];
}

function fallbackChinaNews() {
  const today = new Date().toISOString().slice(0, 10);
  return [
    {
      date: today,
      region: "国内资讯",
      source: "实时接口备用",
      title: "国内家具资讯接口暂时拥堵，建议稍后重新刷新",
      summary: "页面已接入家具、沙发、出口政策、新材料、设计趋势等关键词的实时新闻抓取。外部接口限流时会先显示备用提示。",
      details: [
        "当前外部新闻源临时限流，页面先显示备用说明，避免国内资讯栏目空白。",
        "接口恢复后会继续抓取家具、沙发、外贸出口、材料、展会和市场相关内容。",
        "建议稍后点击刷新资讯，或直接打开搜索链接查看最新国内家具新闻。",
      ],
      url: "https://www.baidu.com/s?wd=%E6%B2%99%E5%8F%91%20%E5%AE%B6%E5%85%B7%20%E8%B5%84%E8%AE%AF",
    },
  ];
}

function dedupeNews(items) {
  const seen = new Set();
  return items.filter((item) => {
    const titleKey = normalizeDedupeText(item.title);
    const urlKey = normalizeDedupeUrl(item.url);
    const key = urlKey || `${titleKey}-${normalizeDedupeText(item.source)}`;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortNews(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getXmlValue(xml, tag) {
  const match = String(xml || "").match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? match[1].trim() : "";
}

function decodeXml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function stripTags(value) {
  return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatNewsDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const gdeltDate = String(value).match(/^(\d{4})(\d{2})(\d{2})/);
  if (gdeltDate) return `${gdeltDate[1]}-${gdeltDate[2]}-${gdeltDate[3]}`;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
}

function hasChineseText(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

function hasBrokenEncoding(value) {
  return /[�]{2,}|[\u00c0-\u00ff]{3,}/.test(String(value || ""));
}

function getSourceFromGoogleTitle(title) {
  const match = String(title || "").match(/\s-\s([^-]+)$/);
  return match ? match[1].trim() : "";
}

function removeGoogleSourceSuffix(title, source) {
  if (!source) return String(title || "");
  return String(title || "").replace(new RegExp(`\\s-\\s${escapeRegExp(source)}$`), "").trim();
}

function normalizeNewsUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  try {
    const parsed = new URL(value);
    return parsed.href;
  } catch {
    return value;
  }
}

function normalizeDedupeUrl(url) {
  try {
    const parsed = new URL(url);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      parsed.searchParams.delete(key);
    });
    return `${parsed.hostname}${parsed.pathname}`.replace(/\/+$/, "").toLowerCase();
  } catch {
    return "";
  }
}

function normalizeDedupeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function getNewsDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=86400");
}

function sendJson(response, statusCode, data) {
  response.status(statusCode).json(data);
}
