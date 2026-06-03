const NEWS_TARGET_COUNT = 240;
const MAX_RECORDS_PER_SOURCE = 60;
const RSS_FETCH_TIMEOUT_MS = 2500;
const GDELT_FETCH_TIMEOUT_MS = 8000;

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

  const globalNews = globalSupplement.length ? globalSupplement : fallbackGlobalNews();
  const chinaNews = chinaSupplement.length ? chinaSupplement : fallbackChinaNews();

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
        summary: rawSummary,
        url: normalizeNewsUrl(url),
      };
    })
    .filter((item) => item.title && item.url && !hasBrokenEncoding(`${item.title} ${item.summary}`));
}

function isFurnitureNews(item) {
  const text = `${item.title} ${item.summary} ${item.source}`.toLowerCase();
  return /家具|沙发|软体|家居|家装|海绵|面料|关税|海关|外贸|出口|展会|furniture|sofa|couch|upholster|interior|home furnishing|woodworking|foam|fabric|tariff|customs|export|retail|design|material/.test(text);
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
