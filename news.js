const auth = setupAuth();
const globalNewsFeed = document.querySelector("#globalNewsFeed");
const chinaNewsFeed = document.querySelector("#chinaNewsFeed");
const newsLoader = document.querySelector("#newsLoader");
const refreshNewsBtn = document.querySelector("#refreshNewsBtn");
const newsRefreshStatus = document.querySelector("#newsRefreshStatus");
const newsPageSize = 6;
const NEWS_TARGET_COUNT = 200;
const NEWS_RECORDS_PER_QUERY = 100;

let renderedNewsCount = 0;
let globalNews = [];
let chinaNews = [];

const fallbackGlobalNews = [
  {
    date: "2026-05-22",
    region: "全球",
    source: "家具行业媒体",
    title: "全球沙发零售渠道关注库存周转与客厅消费恢复",
    summary: "沙发作为大件耐用品，零售端更关注库存深度、面料颜色更新和客厅组合套装的成交效率。",
    url: "https://www.furnituretoday.com/",
  },
  {
    date: "2026-05-18",
    region: "欧洲",
    source: "米兰家具展",
    title: "欧洲展会继续强化模块化沙发和低矮客厅轮廓",
    summary: "米兰方向的沙发趋势更强调模块组合、低坐姿、柔和转角和自然织物，适合参考欧洲款式开发。",
    url: "https://www.salonemilano.it/en",
  },
  {
    date: "2026-05-15",
    region: "北美",
    source: "木工与家具行业媒体",
    title: "沙发制造端关注木架稳定性、裁剪效率和柔性生产",
    summary: "工厂侧资讯对沙发木架、海绵、缝纫和订单切换效率有参考价值，适合用于生产管理升级。",
    url: "https://www.woodworkingnetwork.com/news/woodworking-industry-news",
  },
  {
    date: "2026-05-10",
    region: "全球",
    source: "家具资讯媒体",
    title: "沙发品牌加强线上图册、规格资料和买家下载内容",
    summary: "海外买家越来越依赖高清场景图、尺寸图、面料说明和报价资料，线上产品页成为批发沟通入口。",
    url: "https://www.furniturenews.net/",
  },
  {
    date: "2026-04-28",
    region: "亚洲",
    source: "亚洲家具展",
    title: "亚洲市场偏好公寓型沙发、轻量包装和高性价比组合",
    summary: "东南亚和日本等市场更关注空间效率、布艺耐用性、可拆装包装和交付成本。",
    url: "https://www.iffs.com.sg/",
  },
  {
    date: "2026-04-22",
    region: "中东",
    source: "迪拜家居展",
    title: "中东沙发需求关注大户型、酒店项目和定制面料",
    summary: "中东市场常见大尺寸客厅和项目采购需求，沙发开发可突出体量感、耐磨面料和高端配色。",
    url: "https://www.indexexhibition.com/",
  },
  {
    date: "2026-04-16",
    region: "全球",
    source: "家具行业媒体",
    title: "家具出口企业关注关税、原产地和合规文件更新",
    summary: "出口型家具企业需要持续关注不同市场的关税、标签、木制品申报和原产地资料，减少清关沟通成本。",
    url: "https://www.furnituretoday.com/",
  },
  {
    date: "2026-04-08",
    region: "欧洲",
    source: "科隆家具材料展",
    title: "软体家具新材料聚焦环保海绵、再生面料和低气味胶水",
    summary: "新材料方向更重视可持续认证、低 VOC、耐磨性和触感表现，适合沙发工厂优化面料与辅料资料。",
    url: "https://www.interzum.com/",
  },
  {
    date: "2026-03-29",
    region: "全球",
    source: "国际设计媒体",
    title: "沙发设计继续向低矮轮廓、圆润边角和模块组合发展",
    summary: "国际设计媒体中的客厅趋势显示，柔和曲线、宽扶手、低靠背和自由拼接模块仍是新品开发重点。",
    url: "https://www.dezeen.com/",
  },
  {
    date: "2026-03-18",
    region: "北美",
    source: "家具行业媒体",
    title: "北美家具渠道重视可拆装包装和快速补货能力",
    summary: "面向零售和电商渠道的沙发产品，需要兼顾包装尺寸、组装便利、库存周转和售后配件供应。",
    url: "https://www.furnituretoday.com/",
  },
  {
    date: "2026-03-06",
    region: "亚洲",
    source: "马来西亚国际家具展",
    title: "亚洲家具买家关注性价比、耐用面料和中小户型组合",
    summary: "亚洲渠道采购更看重可量产款式、交期稳定和空间适配，公寓型沙发与组合款仍具备询盘基础。",
    url: "https://miff.com.my/",
  },
  {
    date: "2026-02-24",
    region: "全球",
    source: "可持续家具组织",
    title: "可持续家具采购推动再生纤维、认证木材和环保包装",
    summary: "越来越多买家询问材料来源、环保认证和包装减量，沙发工厂可提前整理材料说明和供应商证明。",
    url: "https://sustainablefurnishings.org/",
  },
];

const fallbackChinaNews = [
  {
    date: "2026-05-20",
    region: "China",
    source: "中国家博会",
    title: "国内沙发供应链持续关注布艺、真皮与功能款组合",
    summary: "国内展会和渠道资讯显示，沙发买家仍关注面料耐用性、舒适坐感、模块化组合和交期稳定性。",
    url: "https://www.ciff-gz.com/",
  },
  {
    date: "2026-05-12",
    region: "China",
    source: "深圳时尚家居设计周",
    title: "国内设计渠道重视客厅场景化展示和套系化销售",
    summary: "沙发不再只以单品呈现，更多通过地毯、茶几、灯具和软装组合展示整体客厅方案。",
    url: "https://www.szcreativeweek.com/",
  },
  {
    date: "2026-05-06",
    region: "China",
    source: "名家具展",
    title: "沙发工厂强化外贸资料包和高清产品图交付",
    summary: "国内沙发出口企业越来越重视产品详情图、尺寸图、报价资料和业务员在线触达效率。",
    url: "https://www.gde3f.net/",
  },
  {
    date: "2026-04-27",
    region: "China",
    source: "行业观察",
    title: "小户型沙发、可拆装包装和高性价比产品仍有需求",
    summary: "面向公寓和跨境渠道的沙发产品，需要兼顾包装体积、安装便利、面料颜色和售后维护。",
    url: "https://www.ciff-gz.com/",
  },
  {
    date: "2026-04-18",
    region: "China",
    source: "家具产业资讯",
    title: "国内沙发企业继续提升面料开发和交付稳定性",
    summary: "从面料裁剪、缝纫到木架和海绵配置，稳定交付能力仍然是沙发工厂竞争重点。",
    url: "https://www.ciff-gz.com/",
  },
  {
    date: "2026-04-09",
    region: "China",
    source: "软体家具观察",
    title: "功能沙发和模块沙发成为国内外贸询盘重点之一",
    summary: "带储物、可调节、可组合的沙发款式更容易承接不同市场和项目客户的需求。",
    url: "https://www.gde3f.net/",
  },
  {
    date: "2026-04-02",
    region: "China",
    source: "海关与外贸资讯",
    title: "家具出口企业加强报关资料、包装标识和目的国认证管理",
    summary: "沙发出口涉及材质说明、包装唛头、合同发票和目的国要求，规范资料有助于提升交付确定性。",
    url: "https://www.customs.gov.cn/",
  },
  {
    date: "2026-03-26",
    region: "China",
    source: "中国家博会",
    title: "环保面料、科技布和高回弹海绵成为软体家具材料关注点",
    summary: "材料端持续围绕耐磨、易清洁、低气味和舒适支撑升级，适合用于沙发详情页和业务报价资料。",
    url: "https://www.ciff-gz.com/",
  },
  {
    date: "2026-03-15",
    region: "China",
    source: "设计上海",
    title: "客厅沙发设计强调曲线造型、松弛坐感和场景搭配",
    summary: "设计渠道对沙发的关注从单件产品扩展到整体空间，图片素材、搭配建议和尺寸表达更重要。",
    url: "https://www.designshanghai.com/",
  },
  {
    date: "2026-03-05",
    region: "China",
    source: "家具产业资讯",
    title: "沙发外贸工厂加快建设产品资料库和多语言报价内容",
    summary: "外贸客户更希望快速获取款式图、尺寸图、包装信息、面料选项和交期说明，资料完整度影响沟通效率。",
    url: "https://www.ciff-gz.com/",
  },
  {
    date: "2026-02-21",
    region: "China",
    source: "行业观察",
    title: "跨境家具渠道关注可压缩包装、轻量化结构和售后配件",
    summary: "沙发进入跨境和线上渠道时，包装体积、破损率、安装说明和配件补发能力成为重要竞争点。",
    url: "https://www.gde3f.net/",
  },
  {
    date: "2026-02-12",
    region: "China",
    source: "软体家具观察",
    title: "布艺沙发开发增加防污、宠物友好和可拆洗卖点",
    summary: "国内外消费者对清洁维护的关注提高，面料防污、可拆洗坐垫套和耐抓耐磨说明有助于提升成交信心。",
    url: "https://www.ciff-gz.com/",
  },
];

function createNewsCard(item) {
  return `
    <article class="news-card">
      <div class="news-card-copy">
        <div class="news-meta">
          <span>${escapeNewsText(item.date)}</span>
          <span>${escapeNewsText(item.region)}</span>
          <span>${escapeNewsText(item.source)}</span>
        </div>
        <h2>${escapeNewsText(item.title)}</h2>
        <p>${escapeNewsText(item.summary)}</p>
      </div>
    </article>
  `;
}

function resetNews(globalItems, chinaItems) {
  globalNews = sortNews(globalItems);
  chinaNews = sortNews(chinaItems);
  renderedNewsCount = 0;
  globalNewsFeed.innerHTML = "";
  chinaNewsFeed.innerHTML = "";
  window.addEventListener("scroll", maybeLoadMoreNews, { passive: true });
  appendNews();
}

function appendNews() {
  const nextGlobal = globalNews.slice(renderedNewsCount, renderedNewsCount + newsPageSize);
  const nextChina = chinaNews.slice(renderedNewsCount, renderedNewsCount + newsPageSize);

  if (!nextGlobal.length && !nextChina.length) {
    newsLoader.textContent = "已显示当前收录的全部资讯";
    window.removeEventListener("scroll", maybeLoadMoreNews);
    return;
  }

  appendToFeed(globalNewsFeed, nextGlobal);
  appendToFeed(chinaNewsFeed, nextChina);
  renderedNewsCount += newsPageSize;
  newsLoader.textContent = "下滑加载更多资讯";
}

function appendToFeed(feed, items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = createNewsCard(item);
    fragment.appendChild(wrapper.firstElementChild);
  });
  feed.appendChild(fragment);
}

function maybeLoadMoreNews() {
  if (window.innerHeight + window.scrollY > document.body.offsetHeight - 700) {
    appendNews();
  }
}

async function refreshNews() {
  refreshNewsBtn.disabled = true;
  newsRefreshStatus.textContent = `正在抓取国外和国内家具资讯，各 ${NEWS_TARGET_COUNT} 条...`;

  try {
    const localBundle = await fetchLocalNewsBundle();
    if (localBundle) {
      resetNews(localBundle.global, localBundle.china);
      newsRefreshStatus.textContent = `已抓取国外资讯 ${localBundle.global.length} 条、国内资讯 ${localBundle.china.length} 条，最新内容置顶，下滑继续加载。`;
      return;
    }

    const [globalResult, chinaResult] = await Promise.allSettled([
      fetchGdeltNewsGroup(
        [
          "sofa OR couch furniture",
          "furniture export policy OR tariff OR customs",
          "furniture new materials sustainable fabric foam",
          "sofa design modular sectional upholstery trends",
        ],
        "Global"
      ),
      fetchGdeltNewsGroup(
        [
          "沙发 家具",
          "家具 出口 政策 关税 海关",
          "家具 新材料 环保 面料 海绵",
          "沙发 设计 模块 客厅 趋势",
        ],
        "China"
      ),
    ]);

    const nextGlobal = globalResult.status === "fulfilled" && globalResult.value.length ? globalResult.value : fallbackGlobalNews;
    const nextChina = chinaResult.status === "fulfilled" && chinaResult.value.length ? chinaResult.value : fallbackChinaNews;
    const usedFallback = nextGlobal === fallbackGlobalNews || nextChina === fallbackChinaNews;

    resetNews(nextGlobal, nextChina);
    newsRefreshStatus.textContent = usedFallback
      ? "已刷新为本地沙发资讯。网络接口可用时会自动抓取最新内容。"
      : `已抓取国外资讯 ${nextGlobal.length} 条、国内资讯 ${nextChina.length} 条，最新内容置顶，下滑继续加载。`;
  } finally {
    refreshNewsBtn.disabled = false;
  }
}

async function fetchLocalNewsBundle() {
  const endpoint = location.protocol === "file:"
    ? `http://localhost:8080/api/news?target=${NEWS_TARGET_COUNT}`
    : `/api/news?target=${NEWS_TARGET_COUNT}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) return null;
    const data = await response.json();
    if (!data.ok || !data.global?.length || !data.china?.length) return null;
    return {
      global: data.global,
      china: data.china,
    };
  } catch {
    return null;
  }
}

async function fetchGdeltNewsGroup(queries, region) {
  const results = await Promise.allSettled(queries.map((query) => fetchGdeltNews(query, region)));
  return sortNews(dedupeNews(
    results
      .filter((result) => result.status === "fulfilled")
      .flatMap((result) => result.value)
  )).slice(0, NEWS_TARGET_COUNT);
}

async function fetchGdeltNews(query, region) {
  const params = new URLSearchParams({
    query,
    mode: "ArtList",
    format: "json",
    maxrecords: String(NEWS_RECORDS_PER_QUERY),
    sort: "HybridRel",
  });
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  const response = await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?${params.toString()}`, {
    signal: controller.signal,
  }).finally(() => clearTimeout(timeoutId));
  if (!response.ok) return [];
  const data = await response.json();
  return (data.articles || [])
    .filter((article) => article.title && article.url)
    .map((article) => ({
      date: formatGdeltDate(article.seendate),
      region,
      source: article.domain || "News",
      title: article.title,
      summary: article.title,
      url: article.url,
    }));
}

function dedupeNews(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.url || `${item.title}-${item.source}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortNews(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatGdeltDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const normalized = String(value).replace(/^(\d{4})(\d{2})(\d{2}).*/, "$1-$2-$3");
  return /^\d{4}-\d{2}-\d{2}$/.test(normalized) ? normalized : new Date().toISOString().slice(0, 10);
}

function getPreciseNewsUrl(item) {
  const url = String(item.url || "").trim();
  if (url && !isBroadSourceUrl(url)) {
    return url;
  }
  return buildNewsSearchUrl(item, url);
}

function isBroadSourceUrl(url) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "");
    return !path || ["/en", "/cn", "/zh", "/zh-cn"].includes(path.toLowerCase());
  } catch (error) {
    return true;
  }
}

function buildNewsSearchUrl(item, sourceUrl) {
  const domain = getNewsDomain(sourceUrl);
  const siteScope = domain ? `site:${domain} ` : "";
  const topicKeyword = item.region === "国内资讯" || item.region === "China" ? "沙发 家具 国内" : "沙发 家具 国际";
  const query = `${siteScope}${item.title} ${topicKeyword}`;
  return `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
}

function getNewsDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return "";
  }
}

function escapeNewsText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

refreshNewsBtn.addEventListener("click", refreshNews);
refreshNews();

