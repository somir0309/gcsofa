const fs = require("fs");
const path = require("path");

const SITE_ROOT = path.resolve(__dirname, "..");
const DATA_PATH = path.join(SITE_ROOT, "data.js");
const MAP_PATH = path.join(SITE_ROOT, "product-image-map.js");

function findObjectEnd(text, start) {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (inString) {
      if (escape) escape = false;
      else if (char === "\\") escape = true;
      else if (char === "\"") inString = false;
      continue;
    }
    if (char === "\"") inString = true;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  throw new Error("Cannot find object end");
}

function loadJsonObject(filePath, marker) {
  const text = fs.readFileSync(filePath, "utf8");
  const start = text.indexOf(marker);
  if (start < 0) throw new Error(`Marker not found: ${marker}`);
  const objectStart = start + marker.length;
  const objectEnd = findObjectEnd(text, objectStart);
  return {
    text,
    start: objectStart,
    end: objectEnd,
    value: JSON.parse(text.slice(objectStart, objectEnd)),
  };
}

function pick(items, seed) {
  return items[Math.abs(seed) % items.length];
}

function hashId(id) {
  return String(id)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function compact(items) {
  return [...new Set(items.filter(Boolean))];
}

function getText(copy) {
  return [
    copy.summary,
    ...(copy.tags || []),
    ...(copy.homes || []),
    ...(copy.audience || []),
    ...Object.values(copy.specs || {}),
  ].join(" ");
}

function detectLayout(text) {
  if (hasAny(text, ["1/2/3人位", "1P/2P/3P", "1/2/3"])) return "多款式客厅沙发";
  if (hasAny(text, ["沙发床", "折叠", "睡眠"])) return "可坐可躺沙发床";
  if (hasAny(text, ["电动", "功能", "摇椅", "躺椅", "伸展"])) return "功能休闲沙发";
  if (hasAny(text, ["L型", "L 型", "转角", "贵妃", "右贵妃", "左贵妃", "chaise"])) return "转角组合沙发";
  if (hasAny(text, ["模块", "组合", "2P+1P", "3P+1P", "单人位与脚踏", "脚踏"])) return "模块组合沙发";
  if (hasAny(text, ["单人位", "1P", "单椅"])) return "单人休闲沙发";
  if (hasAny(text, ["双人位", "2P"])) return "双人位沙发";
  if (hasAny(text, ["三人位", "3P"])) return "三人位沙发";
  return "客厅沙发";
}

function detectStyle(text) {
  if (hasAny(text, ["云朵", "豆腐块", "蓬松", "奶油"])) return "云朵感";
  if (hasAny(text, ["弧形", "曲线", "圆弧"])) return "柔和曲线";
  if (hasAny(text, ["低矮", "低背", "矮背"])) return "低矮休闲";
  if (hasAny(text, ["轻奢", "高级", "真皮", "皮艺"])) return "轻奢质感";
  if (hasAny(text, ["现代", "简约", "简洁"])) return "现代简约";
  return "现代生活方式";
}

function detectFabric(text) {
  if (hasAny(text, ["真皮", "皮艺", "皮面", "皮质"])) return "皮面";
  if (hasAny(text, ["绒", "绒感", "羊羔", "麂皮"])) return "绒感面料";
  if (hasAny(text, ["科技布"])) return "科技布";
  if (hasAny(text, ["防火"])) return "防火布";
  if (hasAny(text, ["布艺", "亲肤布艺", "面料"])) return "布艺";
  return "亲肤面料";
}

function detectColor(text) {
  const colors = [
    "米白", "白色", "奶油", "灰色", "深灰", "浅灰", "黑色", "蓝色", "绿色",
    "橙棕", "棕色", "咖色", "黄色", "粉色", "红色", "米色", "卡其",
  ];
  return colors.find((color) => text.includes(color)) || "";
}

function detectScene(layout, text) {
  if (layout.includes("沙发床")) return "单间公寓、出租房、客卧两用空间";
  if (layout.includes("功能")) return "休闲客厅、家庭影音区、功能体验区";
  if (layout.includes("转角")) return "中大户型客厅、整屋配套和样板间";
  if (layout.includes("模块")) return "门店组合陈列、套系销售和多户型搭配";
  if (layout.includes("单人")) return "卧室角落、阳台休闲区和门店补充陈列";
  if (hasAny(text, ["小客厅", "公寓", "小户型"])) return "公寓、小户型客厅和线上爆款专区";
  return "家庭客厅、门店样板间和线上目录";
}

function detectCustomer(layout) {
  if (layout.includes("沙发床")) return "公寓渠道、跨境平台和租赁配套客户";
  if (layout.includes("功能")) return "注重体验感的零售门店、平台招商和区域经销商";
  if (layout.includes("转角")) return "整装渠道、家具卖场和中高客单客户";
  if (layout.includes("模块")) return "批发客户、连锁门店和整屋配套客户";
  if (layout.includes("单人")) return "软装渠道、样板间项目和补充型零售客户";
  return "批发客户、门店客户和线上线下零售渠道";
}

function getCommercialTags(copy) {
  const weak = new Set(["客厅沙发", "沙发", "GCSOFA", "多角度展示", "亲肤布艺", "布艺面料", "现代休闲"]);
  return (copy.tags || [])
    .filter((tag) => tag && !weak.has(tag))
    .slice(0, 3);
}

function buildSummary(id, copy, entry) {
  const seed = hashId(id);
  const text = getText(copy);
  const layout = detectLayout(text);
  const style = detectStyle(text);
  const fabric = detectFabric(text);
  const color = detectColor(text);
  const scene = detectScene(layout, text);
  const customer = detectCustomer(layout);
  const code = copy.code || `GC-S${id}`;
  const imageCount = entry?.images?.length || entry?.thumbs?.length || 0;
  const commercialTags = getCommercialTags(copy);
  const tagPhrase = commercialTags.length ? commercialTags.join("、") : `${style}${layout}`;
  const colorLead = color ? `${color}系` : "";
  const opening = pick([
    `${code} 主打${tagPhrase}`,
    `${code} 是${colorLead}${layout}，整体呈现${style}气质`,
    `${code} 适合做${scene}的主推款`,
    `${code} 以${colorLead}${style}${layout}为核心卖点`,
  ], seed).replace(/^系/, "");
  const value = pick([
    `外观耐看、接受度高，适合${customer}作为稳定销售款引入`,
    `场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围`,
    `组合关系清楚，适合围绕不同户型和预算做系列推荐`,
    `整体风格不挑空间，适合常规备货、新品上样和套餐搭配`,
  ], seed + 1);
  const proof = imageCount
    ? `多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。`
    : "产品呈现清楚，适合用于门店展示和客户方案推荐。";
  const detail = pick([
    `${fabric}触感和饱满坐感能突出舒适卖点，适合${scene}`,
    `搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列`,
    `卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值`,
    `适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力`,
  ], seed + 2);
  return `${opening}，${value}。${proof}${detail}。`;
}

function buildHighlights(id, copy) {
  const seed = hashId(id);
  const text = getText(copy);
  const layout = detectLayout(text);
  const style = detectStyle(text);
  const fabric = detectFabric(text);
  const color = detectColor(text);
  const scene = detectScene(layout, text);
  const customer = detectCustomer(layout);
  const code = copy.code || `GC-S${id}`;
  const intro = color
    ? `${code} 采用${color}系外观搭配${style}轮廓，视觉更容易融入主流家居场景。`
    : `${code} 采用${style}轮廓，外观接受度高，适合做稳定型目录款。`;
  return compact([
    intro,
    `${layout}定位明确，适合${customer}用于${scene}，上样后能快速形成清晰的销售场景。`,
    `${fabric}能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。`,
    pick([
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。",
    ], seed),
  ]);
}

function main() {
  const data = loadJsonObject(DATA_PATH, "const GCSOFA_PRODUCT_COPY_MAP = ");
  const productMap = loadJsonObject(MAP_PATH, "window.GCSOFA_PRODUCT_IMAGE_MAP = ").value;
  const ids = Object.keys(productMap).sort((a, b) => Number(a) - Number(b));

  for (const id of ids) {
    const copy = data.value[id] || {
      name: `GC-S${id}`,
      code: `GC-S${id}`,
      sku: `GC-S${id}`,
      category: "欧洲款式",
      tags: [],
      specs: {},
    };
    copy.summary = buildSummary(id, copy, productMap[id]);
    copy.highlights = buildHighlights(id, copy);
    data.value[id] = copy;
  }

  const ordered = Object.fromEntries(
    Object.keys(data.value)
      .sort((a, b) => Number(a) - Number(b))
      .map((id) => [id, data.value[id]]),
  );
  const nextText = data.text.slice(0, data.start)
    + JSON.stringify(ordered, null, 2)
    + data.text.slice(data.end);
  fs.writeFileSync(DATA_PATH, nextText, "utf8");
  console.log(JSON.stringify({ updated: ids.length, first: ids[0], last: ids[ids.length - 1] }, null, 2));
}

main();
