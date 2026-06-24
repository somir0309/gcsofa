const ROLE_LEVELS = [
  { id: "guest", label: "未登录用户" },
  { id: "registered", label: "登陆用户" },
  { id: "customer", label: "客户" },
  { id: "employee", label: "员工" },
  { id: "sales", label: "业务" },
  { id: "boss", label: "老板" },
  { id: "admin", label: "网站管理员" },
];

const PERMISSION_MODULES = [
  { id: "images", label: "图片" },
  { id: "specs", label: "产品规格" },
  { id: "sellingPoints", label: "卖点" },
  { id: "dimensions", label: "尺寸图" },
  { id: "internal", label: "内部功能" },
  { id: "price", label: "售价" },
  { id: "priceEdit", label: "售价增删改" },
  { id: "costUpload", label: "成本分析表上传" },
  { id: "costDownload", label: "成本分析表下载" },
  { id: "topSofas", label: "热销选品" },
  { id: "production", label: "生产进度" },
  { id: "productionEdit", label: "生产进度增删改" },
  { id: "productionDeptCutting", label: "生产进度-裁剪" },
  { id: "productionDeptFoam", label: "生产进度-开棉" },
  { id: "productionDeptSewing", label: "生产进度-车工" },
  { id: "productionDeptWood", label: "生产进度-木工" },
  { id: "productionDeptBase", label: "生产进度-打底" },
  { id: "productionDeptPadding", label: "生产进度-贴棉" },
  { id: "productionDeptUpholstery", label: "生产进度-扪工" },
  { id: "productionDeptPacking", label: "生产进度-包装" },
];

const DEFAULT_ROLE_PERMISSIONS = {
  guest: ["images", "specs", "sellingPoints", "dimensions"],
  registered: ["images", "specs", "sellingPoints", "dimensions"],
  customer: ["images", "specs", "sellingPoints", "dimensions", "internal", "price"],
  employee: ["images", "specs", "sellingPoints", "dimensions", "production"],
  sales: ["images", "specs", "sellingPoints", "dimensions", "internal", "price", "production"],
  boss: ["images", "specs", "sellingPoints", "dimensions", "internal", "price", "priceEdit", "costUpload", "costDownload", "topSofas", "production", "productionEdit", "productionDeptCutting", "productionDeptFoam", "productionDeptSewing", "productionDeptWood", "productionDeptBase", "productionDeptPadding", "productionDeptUpholstery", "productionDeptPacking"],
  admin: ["images", "specs", "sellingPoints", "dimensions", "internal", "price", "priceEdit", "costUpload", "costDownload", "topSofas", "production", "productionEdit", "productionDeptCutting", "productionDeptFoam", "productionDeptSewing", "productionDeptWood", "productionDeptBase", "productionDeptPadding", "productionDeptUpholstery", "productionDeptPacking"],
};

const GCSOFA_DEFAULT_ACCOUNTS = {
  song: {
    password: "27347134",
    name: "宋老板",
    role: "boss",
  },
  ming: {
    password: "123456ss",
    name: "明管理员",
    role: "admin",
  },
  normal: {
    password: "123456",
    name: "普通用户",
    role: "registered",
  }
};

const GCSOFA_DEFAULT_PRODUCTS = [
  {
    id: "luna-sectional",
    name: "Luna 云舒转角沙发",
    category: "欧洲款式",
    image: "assets/gcsofa-sectional.webp",
    summary: "适合客厅与样板间的 L 型组合沙发，坐感宽厚，整体气质温和高级。",
    tags: ["L 型组合", "可拆洗布套", "大户型"],
    specs: {
      尺寸: "3200 x 1850 x 880 mm",
      面料: "高密织纹布",
      填充: "高回弹海绵 + 羽绒棉",
      颜色: "暖灰 / 米白 / 深咖",
    },
    views: ["正视图", "侧面视图", "场景搭配"],
    highlights: ["可左右互换贵妃位", "坐垫分区支撑", "布套可拆洗维护"],
    homes: ["三居室客厅", "大平层", "样板间"],
    audience: ["重视收纳与舒适的家庭", "民宿与软装设计客户", "经销门店主推款"],
    suggestedPrice: "¥8,980",
    internalNotes: [
      "常规色库存周期 7-10 天，定制色生产周期约 25 天。",
      "主推卖点为模块化组合与高回弹坐感，可搭配地毯和茶几套餐销售。",
    ],
    costRows: [
      ["面料", 1280, 1, 1280, "高密织纹布"],
      ["海绵与填充", 920, 1, 920, "高回弹海绵 + 羽绒棉"],
      ["木架五金", 760, 1, 760, "实木框架"],
      ["人工包装", 520, 1, 520, "含质检"],
      ["物流预估", 380, 1, 380, "按华东仓"],
    ],
    productionRows: [
      ["打样确认", "已完成", "结构与面料已确认"],
      ["木架生产", "进行中", "预计 3 天完成"],
      ["软包缝制", "待开始", "等待木架入库"],
      ["质检包装", "待开始", "出货前抽检"],
    ],
  },
  {
    id: "nova-recliner",
    name: "Nova 头等舱功能沙发",
    category: "日本款式",
    image: "assets/gcsofa-recliner.webp",
    summary: "三人位真皮功能沙发，适合家庭影院、休闲客厅和高端公寓场景。",
    tags: ["真皮触感", "可调头枕", "功能位"],
    specs: {
      尺寸: "2180 x 980 x 1020 mm",
      材质: "头层牛皮接触面",
      功能: "手动 / 电动可选",
      颜色: "焦糖棕 / 深灰",
    },
    views: ["正面视图", "功能展开", "皮纹细节"],
    highlights: ["靠背与头枕可调", "皮面耐磨易清洁", "小户型三人位"],
    homes: ["家庭影音室", "两居室客厅", "高端公寓"],
    audience: ["喜欢观影休闲的家庭", "注重真皮质感的客户", "公寓精装项目"],
    suggestedPrice: "¥12,800",
    internalNotes: [
      "电动版毛利更高，报价时优先推荐电动双功能位。",
      "华东仓常备焦糖棕，深灰色建议按单生产。",
    ],
    costRows: [
      ["皮料", 2680, 1, 2680, "接触面头层牛皮"],
      ["功能铁架", 1380, 1, 1380, "手动版"],
      ["海绵填充", 860, 1, 860, "高密度海绵"],
      ["人工包装", 680, 1, 680, "含调试"],
      ["物流预估", 460, 1, 460, "按标准包装"],
    ],
    productionRows: [
      ["功能架备料", "已完成", "核心五金已入库"],
      ["皮料裁剪", "进行中", "焦糖棕批次生产"],
      ["总装调试", "待开始", "电机版本需额外测试"],
      ["包装出库", "待开始", "预计 10 天内"],
    ],
  },
  {
    id: "mira-curve",
    name: "Mira 弧境设计沙发",
    category: "中东款式",
    image: "assets/gcsofa-curve.webp",
    summary: "弧形造型与柔软绒感面料结合，适合设计型客厅、会所和展厅空间。",
    tags: ["弧形设计", "绒感面料", "展厅推荐"],
    specs: {
      尺寸: "2600 x 1050 x 760 mm",
      面料: "羊羔绒质感布",
      结构: "实木框架 + 蛇形弹簧",
      风格: "中古 / 奶油 / 轻奢",
    },
    views: ["弧形轮廓", "面料细节", "空间陈列"],
    highlights: ["弧形轮廓更柔和", "绒感面料触感蓬松", "适合软装出片"],
    homes: ["设计型客厅", "会所接待区", "商业展厅"],
    audience: ["软装设计师", "追求造型感的家庭", "会所与展厅客户"],
    suggestedPrice: "¥10,600",
    internalNotes: [
      "弧形框架包装体积较大，物流报价需按泡货核算。",
      "设计师渠道可提供面料小样，但需登记项目名称和预计数量。",
    ],
    costRows: [
      ["面料", 1680, 1, 1680, "羊羔绒质感布"],
      ["弧形木架", 1180, 1, 1180, "异形框架"],
      ["弹簧海绵", 820, 1, 820, "蛇形弹簧"],
      ["人工包装", 620, 1, 620, "异形加固"],
      ["物流预估", 520, 1, 520, "泡货核算"],
    ],
    productionRows: [
      ["结构开料", "已完成", "弧形木架已加工"],
      ["面料备货", "已完成", "羊羔绒库存充足"],
      ["软包成型", "进行中", "重点检查弧面平整度"],
      ["成品拍摄", "待开始", "用于展厅资料"],
    ],
  },
];

const GCSOFA_DEFAULT_CATEGORIES = [
  { id: "europe", name: "欧洲款式" },
  { id: "japan", name: "日本款式" },
  { id: "middle-east", name: "中东款式" },
  { id: "latin-america", name: "拉美款式" },
];

const GCSOFA_DEFAULT_FACTORY_PROFILE = {
  heroEyebrow: "Factory Profile",
  heroTitle: "惠州市欣冠城智能科技有限公司",
  heroDescription:
    "欣冠城始于2008年，专注OEM/ODM沙发套装、沙发床、L型沙发、躺椅等软体家具的设计、研发与生产。公司面向全球客户提供稳定品质、灵活定制和持续交付能力，产品在Wayfair、亚马逊等线上平台及线下实体渠道拥有良好口碑。",
  heroImage: "assets/factory-hero-2026.webp",
  stats: [
    { value: "2008", label: "开始深耕软体家具制造" },
    { value: "18+年", label: "OEM/ODM设计与生产经验" },
    { value: "4万㎡", label: "厂房面积" },
    { value: "120-160柜", label: "月生产能力" },
  ],
  profileTitle: "专业出口沙发制造工厂",
  profileDescription:
    "公司拥有200+工作人员，其中办公室人员约45人，围绕产品设计、打样、生产、品质检验和售后服务建立完整协作流程。凭借具有竞争力的价格、更具吸引力的外观和全面的品质把控，欣冠城与全球客户保持长期合作。",
  advantagesEyebrow: "Advantages",
  advantagesTitle: "我们的优势",
  advantages: [
    {
      title: "专业OEM/ODM代工",
      description: "专注沙发类产品研发与生产，支持客户款式开发、结构优化和批量订单交付。",
    },
    {
      title: "稳定产能交付",
      description: "4万平方米厂房，月产能约120-160柜，适合海外批量订单和持续补货需求。",
    },
    {
      title: "品质与服务并重",
      description: "全面品质检验贯穿生产流程，并提供贴心售后服务，保障产品品质稳定。",
    },
    {
      title: "全球客户合作",
      description: "产品面向海外线上线下平台销售，长期服务多地区家具品牌与渠道客户。",
    },
  ],
  historyEyebrow: "Production",
  historyTitle: "生产与配套能力",
  historyDescription: "从五金配套、材料准备到软包组装与成品质检，工厂以分区化流程支持多款式沙发生产。",
  historyItems: [
    {
      label: "生产车间",
      title: "分区化生产流程",
      description: "木架、五金、裁剪、缝纫、软包、组装和包装按流程推进，提升订单执行效率。",
    },
    {
      label: "品质管控",
      title: "全面品质检验",
      description: "围绕外观、结构、尺寸、包装和出货环节进行检查，确保产品品质稳定。",
    },
    {
      label: "海外交付",
      title: "适配线上线下渠道",
      description: "支持海外平台、品牌客户、批发商和实体门店的多规格产品需求。",
    },
  ],
  galleryEyebrow: "Workshop",
  galleryTitle: "工厂场地与车间",
  galleryDescription: "保留网站现有图片，展示厂区、生产车间与裁剪缝纫区域。",
  galleryItems: [
    {
      image: "assets/factory-hero-2026.webp",
      title: "工厂场地",
      description: "规范化厂区与装卸区域，便于样品展示、订单出货和批量交付。",
    },
    {
      image: "assets/factory-production-line.webp",
      title: "生产车间",
      description: "沙发框架、软包、坐垫和成品组装按流程推进，强调稳定品质。",
    },
    {
      image: "assets/factory-fabric-workshop.webp",
      title: "裁剪缝纫车间",
      description: "面料裁剪、缝纫和版型管理集中处理，为不同款式提供基础保障。",
    },
  ],
  clientsEyebrow: "Partners",
  clientsTitle: "长期合作客户",
  clientsDescription: "全球客户资源，10余年持续合作经验，服务多地区家具品牌、零售渠道与电商平台。",
  clientsImage: "assets/customer-logos-2026.webp",
  contactEyebrow: "Contact",
  contactTitle: "联系我们",
  contactItems: [
    { label: "地址", value: "广东省惠州市惠阳三和街道小布仔坝心二路1号" },
    { label: "电话", value: "0752-3557012" },
    { label: "邮箱", value: "GCSOFA@GCSOFA.COM" },
  ],
};

const PRODUCT_STORE_KEY = "gcsofa-products";
const CATEGORY_STORE_KEY = "gcsofa-categories";
const USER_STORE_KEY = "gcsofa-user";
const ACCOUNT_STORE_KEY = "gcsofa-accounts";
const PERMISSION_STORE_KEY = "gcsofa-permissions";
const FACTORY_STORE_KEY = "gcsofa-factory-profile";
const CLOUD_DATA_ENDPOINT = "/api/site-data";
const CLOUD_STORE_KEYS = {
  products: PRODUCT_STORE_KEY,
  categories: CATEGORY_STORE_KEY,
  factoryProfile: FACTORY_STORE_KEY,
  accounts: ACCOUNT_STORE_KEY,
  permissions: PERMISSION_STORE_KEY,
  staff: "gcsofa-staff",
  productionOrders: "gcsofa-production-board",
  productionTables: "gcsofa-production-weekly-tables",
  productionCalendar: "gcsofa-production-calendar",
};
const CLOUD_KEY_BY_STORE = Object.entries(CLOUD_STORE_KEYS).reduce((map, [cloudKey, storeKey]) => {
  map[storeKey] = cloudKey;
  return map;
}, {});
const pendingCloudSaves = {};
let cloudDataLoaded = false;
let cloudDataLoadError = null;

window.GCSOFA_DATA_READY = loadCloudSiteData();

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function cloneProducts(products) {
  return cloneData(products);
}

const WHITE_BACKGROUND_VIEW_LABELS = ["视角1", "视角2", "视角3", "视角4"];
const LEGACY_WHITE_BACKGROUND_VIEW_PATTERN = /^(正视图|正面图|正面视图|45\s*度(?:角)?(?:图|视图)|侧视图|侧面图|侧面视图|背视图|背面图|背面视图|视角[1-4])$/;

function normalizeProductViewLabels(views = []) {
  if (!Array.isArray(views)) return [];
  return views
    .map((view, index) => {
      const value = String(view || "").trim();
      if (index < WHITE_BACKGROUND_VIEW_LABELS.length && LEGACY_WHITE_BACKGROUND_VIEW_PATTERN.test(value)) {
        return WHITE_BACKGROUND_VIEW_LABELS[index];
      }
      return value;
    })
    .filter(Boolean);
}

function normalizeProductViewCopy(product) {
  return {
    ...product,
    views: normalizeProductViewLabels(product.views),
  };
}

function normalizeProductsViewCopy(products) {
  return products.map(normalizeProductViewCopy);
}

function getProductImageKey(product = {}, source = "") {
  const candidates = [
    product.id,
    product.name,
    product.code,
    product.sku,
    source,
    product.image,
  ];
  for (const value of candidates) {
    const match = String(value || "").match(/(?:GC[-_\s]*S)?(2\d{3})/i);
    if (match) return match[1];
  }
  return "";
}

function getProductImageAsset(product = {}, role = "fallback", source = "") {
  const key = getProductImageKey(product, source);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key];
  if (!entry) return "";
  if (role === "thumb") return entry.thumbFallback || entry.thumbScene || entry.thumb || entry.thumbFront || entry.fallback || "";
  if (role === "scene") return entry.scene || entry.fallback || entry.angle || entry.front || "";
  if (["front", "angle", "side", "back"].includes(role)) return entry[role] || "";
  return entry[role] || entry.fallback || entry.angle || entry.front || "";
}

function isLocalOnlyImageSource(source = "") {
  const value = String(source || "").trim();
  return (
    !value ||
    /^blob:/i.test(value) ||
    /^file:/i.test(value) ||
    /^[a-z]:[\\/]/i.test(value) ||
    /^\\\\/.test(value) ||
    /(^|[\\/])UP[\\/]/i.test(value) ||
    /192\.168\./i.test(value)
  );
}

function isMappedProductImageSource(source = "") {
  return /(^|\/)assets\/(?:products|product-thumbs)\//i.test(String(source || ""));
}

function hasManualExtraIntroImages(images = []) {
  return images.some((item) => item?.image && !isMappedProductImageSource(item.image));
}

function resolveProductImage(product = {}, source = "", role = "fallback") {
  const fallback = getProductImageAsset(product, role, source);
  if (isMappedProductImageSource(source)) return source || fallback || "";
  if (isLocalOnlyImageSource(source)) return fallback || source || "";
  return source || fallback || "";
}

function getProductImageErrorFallback(product = {}, role = "fallback") {
  return getProductImageAsset(product, role);
}

function getProductImageAssets(product = {}) {
  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key];
  return Array.isArray(entry?.images) ? entry.images : [];
}

function getProductGalleryImages(product = {}) {
  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key];
  if (!entry || !Array.isArray(entry.images)) return [];

  const reservedImages = new Set(
    [entry.scene, entry.front, entry.angle, entry.side, entry.back].filter(Boolean)
  );
  const uniqueImages = new Set();
  return entry.images.filter((image) => {
    if (!image || reservedImages.has(image) || uniqueImages.has(image)) return false;
    uniqueImages.add(image);
    return true;
  });
}

async function loadCloudSiteData() {
  if (location.protocol === "file:") {
    cloudDataLoaded = true;
    return {};
  }

  try {
    const localSnapshot = getExistingLocalCloudData();
    window.GCSOFA_LOCAL_DATA_SNAPSHOT = localSnapshot;
    const response = await fetch(`${CLOUD_DATA_ENDPOINT}?v=${Date.now()}`);
    if (!response.ok) throw new Error(`Cloud data request failed: ${response.status}`);
    const payload = await response.json();
    Object.entries(payload.data || {}).forEach(([cloudKey, value]) => {
      const storeKey = CLOUD_STORE_KEYS[cloudKey];
      if (storeKey && value !== undefined) {
        localStorage.setItem(storeKey, JSON.stringify(value));
      }
    });
    seedMissingCloudData(payload.data || {}, localSnapshot);
    cloudDataLoaded = true;
    return payload.data || {};
  } catch (error) {
    cloudDataLoadError = error;
    cloudDataLoaded = true;
    return {};
  }
}

function getExistingLocalCloudData() {
  return Object.entries(CLOUD_STORE_KEYS).reduce((snapshot, [cloudKey, storeKey]) => {
    const saved = localStorage.getItem(storeKey);
    if (!saved) return snapshot;
    try {
      snapshot[cloudKey] = JSON.parse(saved);
    } catch {
      // Ignore invalid local cache during cloud migration.
    }
    return snapshot;
  }, {});
}

function seedMissingCloudData(cloudData, localSnapshot = getExistingLocalCloudData()) {
  Object.entries(CLOUD_STORE_KEYS).forEach(([cloudKey, storeKey]) => {
    if (Object.prototype.hasOwnProperty.call(cloudData, cloudKey)) return;
    if (localSnapshot[cloudKey] !== undefined) {
      saveCloudStore(storeKey, localSnapshot[cloudKey]);
    }
  });
}

function seedLocalCloudData(localSnapshot, overwriteCloud = false) {
  Object.entries(CLOUD_STORE_KEYS).forEach(([cloudKey, storeKey]) => {
    if (localSnapshot[cloudKey] === undefined) return;
    localStorage.setItem(storeKey, JSON.stringify(localSnapshot[cloudKey]));
    if (overwriteCloud) saveCloudStore(storeKey, localSnapshot[cloudKey]);
  });
}

function whenSiteDataReady(callback) {
  return window.GCSOFA_DATA_READY.finally(callback);
}

function saveCloudStore(storeKey, value) {
  localStorage.setItem(storeKey, JSON.stringify(value));
  const cloudKey = CLOUD_KEY_BY_STORE[storeKey];
  if (!cloudKey || location.protocol === "file:") return Promise.resolve();

  clearTimeout(pendingCloudSaves[cloudKey]);
  return new Promise((resolve) => {
    pendingCloudSaves[cloudKey] = setTimeout(async () => {
      try {
        await fetch(`${CLOUD_DATA_ENDPOINT}?key=${encodeURIComponent(cloudKey)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });
      } catch (error) {
        console.warn("Cloud data save failed", cloudKey, error);
      } finally {
        resolve();
      }
    }, 150);
  });
}

function syncLocalDataToCloud(cloudKeys = Object.keys(CLOUD_STORE_KEYS)) {
  const snapshot = window.GCSOFA_LOCAL_DATA_SNAPSHOT || getExistingLocalCloudData();
  const tasks = cloudKeys
    .map((cloudKey) => {
      const storeKey = CLOUD_STORE_KEYS[cloudKey];
      const value = snapshot[cloudKey];
      if (!storeKey || value === undefined) return null;
      localStorage.setItem(storeKey, JSON.stringify(value));
      return saveCloudStore(storeKey, value);
    })
    .filter(Boolean);
  return Promise.all(tasks);
}

function hasCloudDataLoaded() {
  return cloudDataLoaded;
}

function getCloudDataLoadError() {
  return cloudDataLoadError;
}

const GCSOFA_PRODUCT_COPY_MAP = {
  "2370": {
    "name": "GC-S2370",
    "code": "GC-S2370",
    "sku": "GC-S2370",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "贵妃位",
      "转角组合",
      "单人位",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S23701P: 80.5 x 72 x 72 cm; 转角: 70 x 70 x 72 cm; 贵妃: 115.5 x 72 x 72 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "贵妃转角沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2370.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2370/GC-S2370-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2370/GC-S2370-cost-sheet.xlsx",
      "size": 1430628,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2370\\S2370.xlsx"
    }
  },
  "2373": {
    "name": "GC-S2373",
    "code": "GC-S2373",
    "sku": "GC-S2373",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2/3人位可选",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S23733P: 209 x 75 x 73 cm; 2P: 153 x 75 x 73 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2373（2202改款）2023-8-22.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2373/GC-S2373-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2373/GC-S2373-cost-sheet.xlsx",
      "size": 233672,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2373\\S2373（2202改款）2023-8-22.xlsx"
    }
  },
  "2381": {
    "name": "GC-S2381",
    "code": "GC-S2381",
    "sku": "GC-S2381",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "1/2/3人位可选",
      "全KD结构",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S23813P: 196 x 83 x 79 cm; 2P: 139 x 83 x 79 cm; 1P: 82 x 83 x 79 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2381 并、扶手全KD沙发 2024-3-15.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2381/GC-S2381-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2381/GC-S2381-cost-sheet.xlsx",
      "size": 105026,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2381\\S2381 并、扶手全KD沙发 2024-3-15.xlsx"
    }
  },
  "2393": {
    "name": "GC-S2393",
    "code": "GC-S2393",
    "sku": "GC-S2393",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+贵妃",
      "转角贵妃",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S23932P+贵妃+转角贵妃: 273 x 140-79 x 85 cm; 2P: 121 x 79 x 85 cm; 转角贵妃: 79 x 140 x 85 cm; 贵妃: 79 x 140 x 85 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "大空间里不显单薄，能把客厅气场撑起来，适合主推给升级型家庭客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2393  贵妃+2P+转角贵妃 2023-9-6.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2393/GC-S2393-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2393/GC-S2393-cost-sheet.xlsx",
      "size": 771170,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2393\\S2393  贵妃+2P+转角贵妃 2023-9-6.xlsx"
    }
  },
  "2395": {
    "name": "GC-S2395",
    "code": "GC-S2395",
    "sku": "GC-S2395",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "单人位",
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S23953P: 202 x 89 x 78 cm; 2P: 152 x 89 x 78 cm; 1.5P: 121 x 89 x 78 cm; 1P: 93 x 89 x 78 cm; 脚踏: 80.5 x 70 x 48 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "脚踏休闲沙发多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ]
  },
  "2398": {
    "name": "GC-S2398",
    "code": "GC-S2398",
    "sku": "GC-S2398",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+贵妃",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2398总: 252 x 85-162.5 x 74 cm; 2P: 162 x 85 x 74 cm; 贵妃: 91 x 162.5 x 74 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2398 2P+贵妃 普通不防火 2024-10-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2398/GC-S2398-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2398/GC-S2398-cost-sheet.xlsx",
      "size": 1035165,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2398\\S2398 2P+贵妃 普通不防火 2024-10-10.xlsx"
    }
  },
  "2401": {
    "name": "GC-S2401",
    "code": "GC-S2401",
    "sku": "GC-S2401",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+2P+转角",
      "防火版",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2401总: 253 x 85 x 82 cm; 2P: 173 x 85 x 82 cm; 转角: 81 x 81 x 82 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "转角会客组合围合感强，能把客厅自然划分成交流区，适合喜欢一家人围坐的家庭。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "防火版本更适合公寓、工程和海外渠道采购，安全卖点明确，成交理由更充分。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2401 2P+2P+转角 英标防火  2023-12-18.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2401/GC-S2401-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2401/GC-S2401-cost-sheet.xlsx",
      "size": 664718,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2401\\S2401 2P+2P+转角 英标防火  2023-12-18.xlsx"
    }
  },
  "2402": {
    "name": "GC-S2402",
    "code": "GC-S2402",
    "sku": "GC-S2402",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+贵妃",
      "防火版",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2402贵妃: 82 x 161 x 78 cm; 2P: 155 x 78 x 78-88 cm; 总尺寸: 236 x 78-161 x 78-88 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "防火版本更适合公寓、工程和海外渠道采购，安全卖点明确，成交理由更充分。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2402（2348改款）2P+贵妃 英标防火版  2023-11-24.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2402/GC-S2402-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2402/GC-S2402-cost-sheet.xlsx",
      "size": 183922,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2402\\S2402（2348改款）2P+贵妃 英标防火版  2023-11-24.xlsx"
    }
  },
  "2404": {
    "name": "GC-S2404",
    "code": "GC-S2404",
    "sku": "GC-S2404",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+贵妃",
      "防火版",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2404总: 250 x 87-160 x 79 cm; 2P: 160 x 87 x 79 cm; 贵妃: 90 x 160 x 79 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "防火版本更适合公寓、工程和海外渠道采购，安全卖点明确，成交理由更充分。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2404 2P+贵妃（2360改款）英标防火 2023-12-25.converted.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2404/GC-S2404-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2404/GC-S2404-cost-sheet.xlsx",
      "size": 48249,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2404\\S2404 2P+贵妃（2360改款）英标防火 2023-12-25.converted.xlsx"
    }
  },
  "2406": {
    "name": "GC-S2406",
    "code": "GC-S2406",
    "sku": "GC-S2406",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "三人位",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "3P: 179 x 81 x 85 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2406 2023-12-21.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2406/GC-S2406-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2406/GC-S2406-cost-sheet.xlsx",
      "size": 876467,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2406\\S2406 2023-12-21.xlsx"
    }
  },
  "2408": {
    "name": "GC-S2408",
    "code": "GC-S2408",
    "sku": "GC-S2408",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "沙发床",
      "单人位",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24081P: 70 x 81 x 79 cm; 沙发床打平尺寸: 187 x 81 x 42 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "多功能沙发床一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "轻巧体量降低搭配难度，新房、租住空间和样板间都容易推荐。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2408.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2408/GC-S2408-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2408/GC-S2408-cost-sheet.xlsx",
      "size": 132200,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2408\\S2408.xlsx"
    }
  },
  "2411": {
    "name": "GC-S2411",
    "code": "GC-S2411",
    "sku": "GC-S2411",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "双人位",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24112P: 137 x 84 x 75 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "双人位沙发体量轻巧但坐感完整，小客厅、公寓、卧室休闲区都能放得自然。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "轻巧体量降低搭配难度，新房、租住空间和样板间都容易推荐。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2411.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2411/GC-S2411-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2411/GC-S2411-cost-sheet.xlsx",
      "size": 61189,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2411\\S2411.xlsx"
    }
  },
  "2413": {
    "name": "GC-S2413",
    "code": "GC-S2413",
    "sku": "GC-S2413",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "单人位",
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24133P: 210 x 87 x 79 cm; 2P: 160 x 87 x 79 cm; 1P: 98 x 87 x 79 cm; 脚踏: 72 x 61 x 43 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "脚踏休闲沙发多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2413.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2413/GC-S2413-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2413/GC-S2413-cost-sheet.xlsx",
      "size": 111489,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2413\\S2413.xlsx"
    }
  },
  "2414": {
    "name": "GC-S2414",
    "code": "GC-S2414",
    "sku": "GC-S2414",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "不KD结构",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S24142P+脚踏: 150 x 84-144 x 70 cm; 2P: 150 x 84 x 70 cm; 脚踏: 60 x 60 x 35 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "脚踏休闲沙发多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2414 2P+脚踏 不KD沙发 2025-8-9.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2414/GC-S2414-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2414/GC-S2414-cost-sheet.xlsx",
      "size": 738090,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2414\\S2414 2P+脚踏 不KD沙发 2025-8-9.xlsx"
    }
  },
  "2417": {
    "name": "GC-S2417",
    "code": "GC-S2417",
    "sku": "GC-S2417",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+贵妃",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2417总: 250 x 87-160 x 79 cm; 2P: 160 x 87 x 79 cm; 贵妃: 90 x 160 x 79 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "大空间里不显单薄，能把客厅气场撑起来，适合主推给升级型家庭客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2417 2P+贵妃 2024-1-29 .converted.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2417/GC-S2417-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2417/GC-S2417-cost-sheet.xlsx",
      "size": 45047,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2417\\S2417 2P+贵妃 2024-1-29 .converted.xlsx"
    }
  },
  "2421": {
    "name": "GC-S2421",
    "code": "GC-S2421",
    "sku": "GC-S2421",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24213P: 194 x 93 x 80 cm; 2P: 152 x 93 x 80 cm; 1P: 92 x 93 x 80 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2421.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2421/GC-S2421-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2421/GC-S2421-cost-sheet.xlsx",
      "size": 407918,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2421\\S2421.xlsx"
    }
  },
  "2425": {
    "name": "GC-S2425",
    "code": "GC-S2425",
    "sku": "GC-S2425",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24253P: 227 x 81 x 80 cm; 2P: 169 x 81 x 80 cm; 1P: 111 x 81 x 80 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2425.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2425/GC-S2425-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2425/GC-S2425-cost-sheet.xlsx",
      "size": 743279,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2425\\S2425.xlsx"
    }
  },
  "2426": {
    "name": "GC-S2426",
    "code": "GC-S2426",
    "sku": "GC-S2426",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "三人位",
      "压缩包装",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24263P: 202 x 82 x 87 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2426 并包、座包压缩 2024-4-25.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2426/GC-S2426-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2426/GC-S2426-cost-sheet.xlsx",
      "size": 798316,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2426\\S2426 并包、座包压缩 2024-4-25.xlsx"
    }
  },
  "2427": {
    "name": "GC-S2427",
    "code": "GC-S2427",
    "sku": "GC-S2427",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24273P: 208 x 84 x 88 cm; 2P: 150 x 84 x 88 cm; 1P: 92 x 84 x 88 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2427.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2427/GC-S2427-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2427/GC-S2427-cost-sheet.xlsx",
      "size": 88393,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2427\\S2427.xlsx"
    }
  },
  "2428": {
    "name": "GC-S2428",
    "code": "GC-S2428",
    "sku": "GC-S2428",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2/3人位可选",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24283P: 204 x 77 x 83 cm; 2P: 169 x 77 x 83 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2428（1692加长版）.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2428/GC-S2428-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2428/GC-S2428-cost-sheet.xlsx",
      "size": 99324,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2428\\S2428（1692加长版）.xlsx"
    }
  },
  "2429": {
    "name": "GC-S2429",
    "code": "GC-S2429",
    "sku": "GC-S2429",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "三人位",
      "压缩包装",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24293P: 202 x 81 x 87 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2429 并包压缩 2024-4-24.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2429/GC-S2429-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2429/GC-S2429-cost-sheet.xlsx",
      "size": 595513,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2429\\S2429 并包压缩 2024-4-24.xlsx"
    }
  },
  "2430": {
    "name": "GC-S2430",
    "code": "GC-S2430",
    "sku": "GC-S2430",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "沙发床",
      "单人位",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S24301P: 75 x 84-144.5 x 79.5 cm; 沙发床拉出尺寸: 75 x 169 x 51 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "多功能沙发床一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "尺寸更容易落位，小户型也能拥有完整休闲感，不会让空间显得拥挤。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2430 .xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2430/GC-S2430-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2430/GC-S2430-cost-sheet.xlsx",
      "size": 995140,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2430\\S2430 .xlsx"
    }
  },
  "2431": {
    "name": "GC-S2431",
    "code": "GC-S2431",
    "sku": "GC-S2431",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "模块组合",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2431侧位+侧位+中位: 213 x 77.5 x 75 cm; 侧位: 73.5 x 77.5 x 75 cm; 中位: 69 x 77.5 x 75 cm; 脚踏: 69 x 69 x 43 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2431 侧位+侧位+中位+脚踏 2024-5-30.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2431/GC-S2431-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2431/GC-S2431-cost-sheet.xlsx",
      "size": 5451956,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2431\\S2431 侧位+侧位+中位+脚踏 2024-5-30.xlsx"
    }
  },
  "2432": {
    "name": "GC-S2432",
    "code": "GC-S2432",
    "sku": "GC-S2432",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S24322P面左+2P面右: 329 x 89.5 x 81 cm; 2P带扶手面左: 157 x 89.5 x 81 cm; 2P带茶几面右: 173 x 89.5 x 81 cm; 脚踏: 85.5 x 69.5 x 44 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "脚踏休闲沙发多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "轻巧体量降低搭配难度，新房、租住空间和样板间都容易推荐。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2432 2P带扶手面左+2P带茶几板面右+脚踏 2024-6-5.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2432/GC-S2432-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2432/GC-S2432-cost-sheet.xlsx",
      "size": 653715,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2432\\S2432 2P带扶手面左+2P带茶几板面右+脚踏 2024-6-5.xlsx"
    }
  },
  "2433": {
    "name": "GC-S2433",
    "code": "GC-S2433",
    "sku": "GC-S2433",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "三人位",
      "扶手可KD",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24333P: 183 x 84 x 77 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2433 扶手可KD 3P沙发 2024-6-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2433/GC-S2433-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2433/GC-S2433-cost-sheet.xlsx",
      "size": 371885,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2433\\S2433 扶手可KD 3P沙发 2024-6-10.xlsx"
    }
  },
  "2436": {
    "name": "GC-S2436",
    "code": "GC-S2436",
    "sku": "GC-S2436",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "带脚踏",
      "模块组合",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2436侧位+侧位+中位+脚踏: 194 x 136.5-72.5 x 70 cm; 侧位: 65 x 72.5 x 70 cm; 中位: 60 x 72.5 x 70 cm; 脚踏: 60 x 63 x 35 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2436 侧位+侧位+中位+脚踏  2024-6-13.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2436/GC-S2436-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2436/GC-S2436-cost-sheet.xlsx",
      "size": 1062952,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2436\\S2436 侧位+侧位+中位+脚踏  2024-6-13.xlsx"
    }
  },
  "2437": {
    "name": "GC-S2437",
    "code": "GC-S2437",
    "sku": "GC-S2437",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "三人位",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24373P: 197 x 94 x 71.5-84 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2437.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2437/GC-S2437-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2437/GC-S2437-cost-sheet.xlsx",
      "size": 3736083,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2437\\S2437.xlsx"
    }
  },
  "2438": {
    "name": "GC-S2438",
    "code": "GC-S2438",
    "sku": "GC-S2438",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "沙发床",
      "三人位",
      "并位可KD",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S24383P: 186 x 88 x 85 cm; 床拉出尺寸: 186 x 225 x 85-45 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "多功能沙发床一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2438（推拉床） 3P 并可KD 2024-8-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2438/GC-S2438-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2438/GC-S2438-cost-sheet.xlsx",
      "size": 994823,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2438\\S2438（推拉床） 3P 并可KD 2024-8-10.xlsx"
    }
  },
  "2439": {
    "name": "GC-S2439",
    "code": "GC-S2439",
    "sku": "GC-S2439",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "模块组合",
      "压缩包装",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2439侧位+侧位+中位: 259 x 88 x 73 cm; 侧位: 94 x 88 x 73 cm; 中位: 72 x 88 x 73 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2439 侧位+侧位+中位 35D 全自动压缩沙发 2024-7-4.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2439/GC-S2439-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2439/GC-S2439-cost-sheet.xlsx",
      "size": 1285714,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2439\\S2439 侧位+侧位+中位 35D 全自动压缩沙发 2024-7-4.xlsx"
    }
  },
  "2440": {
    "name": "GC-S2440",
    "code": "GC-S2440",
    "sku": "GC-S2440",
    "category": "欧洲款式",
    "summary": "现代休闲沙发，线条简洁，坐感舒适，适合客厅、样板间和休闲会客空间。",
    "tags": [
      "2P+1P组合",
      "1/2/3人位可选",
      "不KD结构",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S24403P: 217 x 83 x 71 cm; 2P: 157 x 83 x 71 cm; 1P: 97 x 83 x 71 cm",
      "面料": "可选",
      "填充": "高回弹海绵",
      "颜色": "以图片为准"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2440 3P+2P+1P 不KD沙发 2024-7-16.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2440/GC-S2440-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2440/GC-S2440-cost-sheet.xlsx",
      "size": 700984,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2440\\S2440 3P+2P+1P 不KD沙发 2024-7-16.xlsx"
    }
  },
  "2441": {
    "name": "GC-S2441",
    "code": "GC-S2441",
    "sku": "GC-S2441",
    "category": "产品目录",
    "summary": "GC-S2441 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "带脚踏",
      "模块组合",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2441",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "大空间里不显单薄，能把客厅气场撑起来，适合主推给升级型家庭客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2441 侧位+侧位+中位+脚踏 可拆洗组合沙发 2024-7-11.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2441/GC-S2441-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2441/GC-S2441-cost-sheet.xlsx",
      "size": 871255,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2441\\S2441 侧位+侧位+中位+脚踏 可拆洗组合沙发 2024-7-11.xlsx"
    }
  },
  "2442": {
    "name": "GC-S2442",
    "code": "GC-S2442",
    "sku": "GC-S2442",
    "category": "产品目录",
    "summary": "GC-S2442 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "标准沙发",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2442",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "现代客厅沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2442.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2442/GC-S2442-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2442/GC-S2442-cost-sheet.xlsx",
      "size": 299310,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2442\\S2442.xlsx"
    }
  },
  "2443": {
    "name": "GC-S2443",
    "code": "GC-S2443",
    "sku": "GC-S2443",
    "category": "产品目录",
    "summary": "GC-S2443 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "2P+贵妃",
      "防火版",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2443",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "防火版本更适合公寓、工程和海外渠道采购，安全卖点明确，成交理由更充分。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2443（2395改款） 2P+贵妃  座包改弹簧包 英标防火 2025-9-21.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2443/GC-S2443-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2443/GC-S2443-cost-sheet.xlsx",
      "size": 1146833,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2443\\S2443（2395改款） 2P+贵妃  座包改弹簧包 英标防火 2025-9-21.xlsx"
    }
  },
  "2445": {
    "name": "GC-S2445",
    "code": "GC-S2445",
    "sku": "GC-S2445",
    "category": "产品目录",
    "summary": "GC-S2445 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "标准沙发",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2445",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "现代客厅沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2445 1.8米床 2024-6-16.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2445/GC-S2445-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2445/GC-S2445-cost-sheet.xlsx",
      "size": 333854,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2445\\S2445 1.8米床 2024-6-16.xlsx"
    }
  },
  "2446": {
    "name": "GC-S2446",
    "code": "GC-S2446",
    "sku": "GC-S2446",
    "category": "产品目录",
    "summary": "GC-S2446 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "双人位",
      "不KD结构",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2446",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "双人位沙发体量轻巧但坐感完整，小客厅、公寓、卧室休闲区都能放得自然。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2446 2P 不KD沙发 2024-5-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2446/GC-S2446-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2446/GC-S2446-cost-sheet.xlsx",
      "size": 474154,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2446\\S2446 2P 不KD沙发 2024-5-10.xlsx"
    }
  },
  "2447": {
    "name": "GC-S2447",
    "code": "GC-S2447",
    "sku": "GC-S2447",
    "category": "产品目录",
    "summary": "GC-S2447 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "标准沙发",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2447",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "现代客厅沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2447 普通款.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2447/GC-S2447-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2447/GC-S2447-cost-sheet.xlsx",
      "size": 323937,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2447\\S2447 普通款.xlsx"
    }
  },
  "2448": {
    "name": "GC-S2448",
    "code": "GC-S2448",
    "sku": "GC-S2448",
    "category": "产品目录",
    "summary": "GC-S2448 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "模块+贵妃",
      "模块组合",
      "座可KD",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2448",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块贵妃组合自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2448 侧位+中位+贵妃 座可KD沙发 2024-6-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2448/GC-S2448-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2448/GC-S2448-cost-sheet.xlsx",
      "size": 25431445,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2448\\S2448 侧位+中位+贵妃 座可KD沙发 2024-6-10.xlsx"
    }
  },
  "2449": {
    "name": "GC-S2449",
    "code": "GC-S2449",
    "sku": "GC-S2449",
    "category": "产品目录",
    "summary": "GC-S2449 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "2P+贵妃",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2449",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2449 2P+贵妃 贵妃带储物沙发 2024-5-25.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2449/GC-S2449-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2449/GC-S2449-cost-sheet.xlsx",
      "size": 615783,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2449\\S2449 2P+贵妃 贵妃带储物沙发 2024-5-25.xlsx"
    }
  },
  "2451": {
    "name": "GC-S2451",
    "code": "GC-S2451",
    "sku": "GC-S2451",
    "category": "产品目录",
    "summary": "GC-S2451 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "带脚踏",
      "双二人位组合",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2451",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "双二人位客厅组合多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2451 2P+2P+脚踏 2024-5-3.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2451/GC-S2451-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2451/GC-S2451-cost-sheet.xlsx",
      "size": 1080909,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2451\\S2451 2P+2P+脚踏 2024-5-3.xlsx"
    }
  },
  "2452": {
    "name": "GC-S2452",
    "code": "GC-S2452",
    "sku": "GC-S2452",
    "category": "产品目录",
    "summary": "GC-S2452 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "三人位",
      "不KD结构",
      "防火版",
      "家庭客厅"
    ],
    "specs": {
      "型号": "GC-S2452",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "防火版本更适合公寓、工程和海外渠道采购，安全卖点明确，成交理由更充分。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2452 3P拖拉床 不kD沙发 英标防火 2024-8-18.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2452/GC-S2452-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2452/GC-S2452-cost-sheet.xlsx",
      "size": 101646,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2452\\S2452 3P拖拉床 不kD沙发 英标防火 2024-8-18.xlsx"
    }
  },
  "2453": {
    "name": "GC-S2453",
    "code": "GC-S2453",
    "sku": "GC-S2453",
    "category": "产品目录",
    "summary": "GC-S2453 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "标准沙发",
      "压缩包装",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2453",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "现代客厅沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2453 儿童椅 全海绵沙发 压缩款 2024-9-3.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2453/GC-S2453-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2453/GC-S2453-cost-sheet.xlsx",
      "size": 271901,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2453\\S2453 儿童椅 全海绵沙发 压缩款 2024-9-3.xlsx"
    }
  },
  "2456": {
    "name": "GC-S2456",
    "code": "GC-S2456",
    "sku": "GC-S2456",
    "category": "产品目录",
    "summary": "GC-S2456 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "沙发床",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2456",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "多功能沙发床一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2456 沙发床 两箱包 李继军客人 2025-9-17.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2456/GC-S2456-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2456/GC-S2456-cost-sheet.xlsx",
      "size": 1565991,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2456\\S2456 沙发床 两箱包 李继军客人 2025-9-17.xlsx"
    }
  },
  "2457": {
    "name": "GC-S2457",
    "code": "GC-S2457",
    "sku": "GC-S2457",
    "category": "产品目录",
    "summary": "GC-S2457 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2457",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "单人休闲椅占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "尺寸更容易落位，小户型也能拥有完整休闲感，不会让空间显得拥挤。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2457 1P拉床 2024-5-25.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2457/GC-S2457-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2457/GC-S2457-cost-sheet.xlsx",
      "size": 403755,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2457\\S2457 1P拉床 2024-5-25.xlsx"
    }
  },
  "2458": {
    "name": "GC-S2458",
    "code": "GC-S2458",
    "sku": "GC-S2458",
    "category": "产品目录",
    "summary": "GC-S2458 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "双人位",
      "压缩包装",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2458",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "双人位沙发体量轻巧但坐感完整，小客厅、公寓、卧室休闲区都能放得自然。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2458 2P 座、并、扶手压缩沙发 无底框 2024-9-6.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2458/GC-S2458-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2458/GC-S2458-cost-sheet.xlsx",
      "size": 1253208,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2458\\S2458 2P 座、并、扶手压缩沙发 无底框 2024-9-6.xlsx"
    }
  },
  "2461": {
    "name": "GC-S2461",
    "code": "GC-S2461",
    "sku": "GC-S2461",
    "category": "产品目录",
    "summary": "GC-S2461 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "2P+1P+脚踏",
      "全KD结构",
      "客厅沙发"
    ],
    "specs": {
      "型号": "GC-S2461",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "双人位沙发多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2461 2P+1P+脚踏 全KD沙发 2024-6-26.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2461/GC-S2461-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2461/GC-S2461-cost-sheet.xlsx",
      "size": 914158,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2461\\S2461 2P+1P+脚踏 全KD沙发 2024-6-26.xlsx"
    }
  },
  "2462": {
    "name": "GC-S2462",
    "code": "GC-S2462",
    "sku": "GC-S2462",
    "category": "产品目录",
    "summary": "GC-S2462 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "三人位",
      "座可KD",
      "家庭客厅"
    ],
    "specs": {
      "型号": "GC-S2462",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2462 3P 座可KD沙发 2024-7-4.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2462/GC-S2462-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2462/GC-S2462-cost-sheet.xlsx",
      "size": 169313,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2462\\S2462 3P 座可KD沙发 2024-7-4.xlsx"
    }
  },
  "2463": {
    "name": "GC-S2463",
    "code": "GC-S2463",
    "sku": "GC-S2463",
    "category": "产品目录",
    "summary": "GC-S2463 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "三人位",
      "可KD结构",
      "家庭客厅"
    ],
    "specs": {
      "型号": "GC-S2463",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2463 并架可KD 3P拖拉床沙发 2024-8-14.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2463/GC-S2463-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2463/GC-S2463-cost-sheet.xlsx",
      "size": 1938455,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2463\\S2463 并架可KD 3P拖拉床沙发 2024-8-14.xlsx"
    }
  },
  "2464": {
    "name": "GC-S2464",
    "code": "GC-S2464",
    "sku": "GC-S2464",
    "category": "产品目录",
    "summary": "GC-S2464 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "带脚踏",
      "模块组合",
      "全KD结构",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2464",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2464 (左右扶手+中位无扶手）+脚踏 全KD沙发  2024-7-19.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2464/GC-S2464-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2464/GC-S2464-cost-sheet.xlsx",
      "size": 1695591,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2464\\S2464 (左右扶手+中位无扶手）+脚踏 全KD沙发  2024-7-19.xlsx"
    }
  },
  "2465": {
    "name": "GC-S2465",
    "code": "GC-S2465",
    "sku": "GC-S2465",
    "category": "产品目录",
    "summary": "GC-S2465 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "模块组合",
      "可KD结构",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2465",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2465 侧位+侧位+中位 并、座KD沙发 2024-8-4.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2465/GC-S2465-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2465/GC-S2465-cost-sheet.xlsx",
      "size": 115479,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2465\\S2465 侧位+侧位+中位 并、座KD沙发 2024-8-4.xlsx"
    }
  },
  "2466": {
    "name": "GC-S2466",
    "code": "GC-S2466",
    "sku": "GC-S2466",
    "category": "产品目录",
    "summary": "GC-S2466 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2466",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "单人休闲椅占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "尺寸更容易落位，小户型也能拥有完整休闲感，不会让空间显得拥挤。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2466 （1P小拖拉床） 2024-8-1.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2466/GC-S2466-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2466/GC-S2466-cost-sheet.xlsx",
      "size": 1863487,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2466\\S2466 （1P小拖拉床） 2024-8-1.xlsx"
    }
  },
  "2467": {
    "name": "GC-S2467",
    "code": "GC-S2467",
    "sku": "GC-S2467",
    "category": "产品目录",
    "summary": "GC-S2467 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "2P+贵妃",
      "全KD结构",
      "中大户型客厅"
    ],
    "specs": {
      "型号": "GC-S2467",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "L型贵妃沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2467 2P+贵妃 全KD沙发 2025-8-2.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2467/GC-S2467-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2467/GC-S2467-cost-sheet.xlsx",
      "size": 16247162,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2467\\S2467 2P+贵妃 全KD沙发 2025-8-2.xlsx"
    }
  },
  "2468": {
    "name": "GC-S2468",
    "code": "GC-S2468",
    "sku": "GC-S2468",
    "category": "产品目录",
    "summary": "GC-S2468 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "三人位",
      "可KD结构",
      "家庭客厅"
    ],
    "specs": {
      "型号": "GC-S2468",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2468 3P(拖拉床) 并架可KD沙发 2024-8-1.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2468/GC-S2468-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2468/GC-S2468-cost-sheet.xlsx",
      "size": 1283017,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2468\\S2468 3P(拖拉床) 并架可KD沙发 2024-8-1.xlsx"
    }
  },
  "2469": {
    "name": "GC-S2469",
    "code": "GC-S2469",
    "sku": "GC-S2469",
    "category": "产品目录",
    "summary": "GC-S2469 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "三人位",
      "压缩包装",
      "家庭客厅"
    ],
    "specs": {
      "型号": "GC-S2469",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "三人位主沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2469 3P带抱枕 35D 全海绵压缩款 2024-8-20.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2469/GC-S2469-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2469/GC-S2469-cost-sheet.xlsx",
      "size": 1081544,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2469\\S2469 3P带抱枕 35D 全海绵压缩款 2024-8-20.xlsx"
    }
  },
  "2470": {
    "name": "GC-S2470",
    "code": "GC-S2470",
    "sku": "GC-S2470",
    "category": "产品目录",
    "summary": "GC-S2470 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "单人位",
      "不KD结构",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2470",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "单人休闲椅占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2470 3+2+1P 不KD沙发 2024-7-22.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2470/GC-S2470-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2470/GC-S2470-cost-sheet.xlsx",
      "size": 1273508,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2470\\S2470 3+2+1P 不KD沙发 2024-7-22.xlsx"
    }
  },
  "2471": {
    "name": "GC-S2471",
    "code": "GC-S2471",
    "sku": "GC-S2471",
    "category": "产品目录",
    "summary": "GC-S2471 现代休闲沙发，3P+2P+1P 全KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2471",
      "结构": "3P+2P+1P 全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P+2P+1P 全KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2471 3P+2P+1P 全KD沙发 2024-7-21.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2471/GC-S2471-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2471/GC-S2471-cost-sheet.xlsx",
      "size": 537396,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2471\\S2471 3P+2P+1P 全KD沙发 2024-7-21.xlsx"
    }
  },
  "2472": {
    "name": "GC-S2472",
    "code": "GC-S2472",
    "sku": "GC-S2472",
    "category": "产品目录",
    "summary": "GC-S2472 现代休闲沙发，3P+2P+1P 并包不压缩全KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "全KD结构",
      "压缩包装",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2472",
      "结构": "3P+2P+1P 并包不压缩全KD沙发",
      "包装/工艺": "全KD拆装 / 压缩包装",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2+1客厅套装成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2472 3P+2P+1P 并包不压缩 全KD沙发 2024-7-26.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2472/GC-S2472-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2472/GC-S2472-cost-sheet.xlsx",
      "size": 645949,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2472\\S2472 3P+2P+1P 并包不压缩 全KD沙发 2024-7-26.xlsx"
    }
  },
  "2473": {
    "name": "GC-S2473",
    "code": "GC-S2473",
    "sku": "GC-S2473",
    "category": "产品目录",
    "summary": "GC-S2473 现代休闲沙发，2P+贵妃，座包和并包35D海绵压缩，带底框沙发，适合中等户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "双人位+贵妃",
      "转角贵妃",
      "躺坐休闲",
      "压缩包装",
      "35D海绵",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2473",
      "结构": "2P+贵妃，座包和并包35D海绵压缩，带底框沙发",
      "包装/工艺": "压缩包装 / 35D海绵",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2P+贵妃自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "35D海绵支撑感更扎实，坐下有弹性、久坐不易塌，适合追求耐用坐感的客户。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "中等户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中小户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2473 2P+贵妃 座、并35D海绵压缩 带底框沙发 高军客人 2024-12-27.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2473/GC-S2473-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2473/GC-S2473-cost-sheet.xlsx",
      "size": 762417,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2473\\S2473 2P+贵妃 座、并35D海绵压缩 带底框沙发 高军客人 2024-12-27.xlsx"
    }
  },
  "2474": {
    "name": "GC-S2474",
    "code": "GC-S2474",
    "sku": "GC-S2474",
    "category": "产品目录",
    "summary": "GC-S2474 现代休闲沙发，3P无抱枕，35D全海绵压缩沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "压缩包装",
      "35D海绵",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2474",
      "结构": "3P无抱枕，35D全海绵压缩沙发",
      "包装/工艺": "压缩包装 / 35D海绵",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P无抱枕是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "35D海绵支撑感更扎实，坐下有弹性、久坐不易塌，适合追求耐用坐感的客户。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2474 3P  无抱枕 35D 全海绵压缩沙发 2024-8-28.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2474/GC-S2474-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2474/GC-S2474-cost-sheet.xlsx",
      "size": 514667,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2474\\S2474 3P  无抱枕 35D 全海绵压缩沙发 2024-8-28.xlsx"
    }
  },
  "2475": {
    "name": "GC-S2475",
    "code": "GC-S2475",
    "sku": "GC-S2475",
    "category": "产品目录",
    "summary": "GC-S2475 现代休闲沙发，3P座包、并包压缩，带排骨条沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "压缩包装",
      "排骨条承托",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2475",
      "结构": "3P座包、并包压缩，带排骨条沙发",
      "包装/工艺": "压缩包装 / 排骨条承托",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P座包、并包压缩是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "排骨条承托让座面更有回弹，坐下不空、起身不费力，日常使用更耐久。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2475 3P 座包、并包压缩 带排骨条沙发 2024-8-25.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2475/GC-S2475-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2475/GC-S2475-cost-sheet.xlsx",
      "size": 769502,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2475\\S2475 3P 座包、并包压缩 带排骨条沙发 2024-8-25.xlsx"
    }
  },
  "2478": {
    "name": "GC-S2478",
    "code": "GC-S2478",
    "sku": "GC-S2478",
    "category": "产品目录",
    "summary": "GC-S2478 现代休闲沙发，2378改款并KD组合沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "模块组合",
      "KD拆装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2478",
      "结构": "2378改款并KD组合沙发",
      "包装/工艺": "局部KD拆装",
      "图片": "已整理5张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2378改款并KD组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "休闲会客区",
      "高端样板间"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2478（2378改款）并KD组合沙发 2024-9-10.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2478/GC-S2478-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2478/GC-S2478-cost-sheet.xlsx",
      "size": 1852380,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2478\\S2478（2378改款）并KD组合沙发 2024-9-10.xlsx"
    }
  },
  "2480": {
    "name": "GC-S2480",
    "code": "GC-S2480",
    "sku": "GC-S2480",
    "category": "产品目录",
    "summary": "GC-S2480 现代休闲沙发，3P沙发床，适合小户型客厅、公寓客卧及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "沙发床",
      "坐卧两用",
      "功能款",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2480",
      "结构": "3P沙发床",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P沙发床一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "小户型客厅",
      "公寓客卧",
      "书房或多功能房",
      "民宿及出租房"
    ],
    "audience": [
      "需要客卧两用的家庭用户",
      "公寓及民宿采购客户",
      "偏好功能沙发的年轻用户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2480 3P 沙发床 NT客人 2024-10-3.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2480/GC-S2480-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2480/GC-S2480-cost-sheet.xlsx",
      "size": 326419,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2480\\S2480 3P 沙发床 NT客人 2024-10-3.xlsx"
    }
  },
  "2481": {
    "name": "GC-S2481",
    "code": "GC-S2481",
    "sku": "GC-S2481",
    "category": "产品目录",
    "summary": "GC-S2481 现代休闲沙发，1P全海绵压缩沙发，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配",
      "压缩包装",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2481",
      "结构": "1P全海绵压缩沙发",
      "包装/工艺": "压缩包装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "1P全海绵压缩沙发占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "全海绵软包边角更柔和，坐感饱满亲和，老人、小孩使用也更安心。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店补充陈列客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2481 1P 全海绵压缩沙发 新款 2024-10-20.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2481/GC-S2481-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2481/GC-S2481-cost-sheet.xlsx",
      "size": 451850,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2481\\S2481 1P 全海绵压缩沙发 新款 2024-10-20.xlsx"
    }
  },
  "2482": {
    "name": "GC-S2482",
    "code": "GC-S2482",
    "sku": "GC-S2482",
    "category": "产品目录",
    "summary": "GC-S2482 现代休闲沙发，2P+大1P+小1P+转角+大脚踏+小脚踏，带铁架组合沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "大型组合",
      "转角组合",
      "脚踏组合",
      "铁架支撑",
      "大户型适配",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2482",
      "结构": "2P+大1P+小1P+转角+大脚踏+小脚踏，带铁架组合沙发",
      "包装/工艺": "铁架支撑",
      "图片": "已整理9张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "铁架细节让这款转角组合沙发更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "铁架底部支撑更稳，组合摆放时不松散，长期使用也能保持利落线条。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "别墅或复式会客区",
      "高端样板间"
    ],
    "audience": [
      "大户型家庭用户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2482 2P+大1P+小1P+转角+大脚踏+小脚踏 带铁架沙发 范科客人 2024-10-30.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2482/GC-S2482-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2482/GC-S2482-cost-sheet.xlsx",
      "size": 15648536,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2482\\S2482 2P+大1P+小1P+转角+大脚踏+小脚踏 带铁架沙发 范科客人 2024-10-30.xlsx"
    }
  },
  "2483": {
    "name": "GC-S2483",
    "code": "GC-S2483",
    "sku": "GC-S2483",
    "category": "产品目录",
    "summary": "GC-S2483 现代休闲沙发，3P拖拉床并架KD沙发，适合小户型客厅、公寓客卧及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "沙发床",
      "坐卧两用",
      "功能款",
      "KD拆装结构"
    ],
    "specs": {
      "型号": "GC-S2483",
      "结构": "3P拖拉床并架KD沙发",
      "包装/工艺": "局部KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P拖拉床并架KD沙发一件兼顾会客和临时睡眠，白天坐着舒适，晚上展开就能补充客卧功能。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小户型客厅",
      "公寓客卧",
      "书房或多功能房",
      "民宿及出租房"
    ],
    "audience": [
      "需要客卧两用的家庭用户",
      "公寓及民宿采购客户",
      "偏好功能沙发的年轻用户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2483 3P拖拉床 并架KD沙发 李继军客人 2024-11-2.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2483/GC-S2483-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2483/GC-S2483-cost-sheet.xlsx",
      "size": 1000544,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2483\\S2483 3P拖拉床 并架KD沙发 李继军客人 2024-11-2.xlsx"
    }
  },
  "2484": {
    "name": "GC-S2484",
    "code": "GC-S2484",
    "sku": "GC-S2484",
    "category": "产品目录",
    "summary": "GC-S2484 现代休闲沙发，2P铁架拖拉床，螺杆KD沙发，适合小户型客厅、公寓客卧及经销展示使用。",
    "tags": [
      "双人位",
      "中小户型",
      "沙发床",
      "坐卧两用",
      "功能款",
      "KD拆装结构"
    ],
    "specs": {
      "型号": "GC-S2484",
      "结构": "2P铁架拖拉床，螺杆KD沙发",
      "包装/工艺": "局部KD拆装 / 铁架支撑",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "铁架细节让这款2P铁架拖拉床更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "铁架底部支撑更稳，组合摆放时不松散，长期使用也能保持利落线条。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小户型客厅",
      "公寓客卧",
      "书房或多功能房",
      "民宿及出租房"
    ],
    "audience": [
      "需要客卧两用的家庭用户",
      "公寓及民宿采购客户",
      "偏好功能沙发的年轻用户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2484 2P铁架 拖拉床 螺杆KD沙发 2024-11-7.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2484/GC-S2484-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2484/GC-S2484-cost-sheet.xlsx",
      "size": 438623,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2484\\S2484 2P铁架 拖拉床 螺杆KD沙发 2024-11-7.xlsx"
    }
  },
  "2486": {
    "name": "GC-S2486",
    "code": "GC-S2486",
    "sku": "GC-S2486",
    "category": "产品目录",
    "summary": "GC-S2486 现代休闲沙发，侧位+侧位+中位+脚踏+脚踏，35D全海绵压缩组合沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "模块组合",
      "压缩包装",
      "35D海绵",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2486",
      "结构": "侧位+侧位+中位+脚踏+脚踏，35D全海绵压缩组合沙发",
      "包装/工艺": "压缩包装 / 35D海绵",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "侧位+侧位+中位+脚踏+脚踏组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "35D海绵支撑感更扎实，坐下有弹性、久坐不易塌，适合追求耐用坐感的客户。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "休闲会客区",
      "高端样板间"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2486 侧位+侧位+中位+脚踏+脚踏 35D 全海绵压缩沙发  范科客人 2024-12-10.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2486/GC-S2486-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2486/GC-S2486-cost-sheet.xlsx",
      "size": 297192,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2486\\S2486 侧位+侧位+中位+脚踏+脚踏 35D 全海绵压缩沙发  范科客人 2024-12-10.xlsx"
    }
  },
  "2488": {
    "name": "GC-S2488",
    "code": "GC-S2488",
    "sku": "GC-S2488",
    "category": "产品目录",
    "summary": "GC-S2488 现代休闲沙发，2P+贵妃，带实木底框，座可KD沙发，适合中等户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "双人位+贵妃",
      "转角贵妃",
      "躺坐休闲",
      "KD拆装结构",
      "实木底框",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2488",
      "结构": "2P+贵妃，带实木底框，座可KD沙发",
      "包装/工艺": "局部KD拆装 / 实木底框",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "实木细节让这款2P+贵妃更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "实木底框带来沉稳落座感，细节更显品质，适合做客厅质感款。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中等户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中小户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2488 2P+贵妃 带实木底框 座可KD沙发 高军客人 2024-12-18.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2488/GC-S2488-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2488/GC-S2488-cost-sheet.xlsx",
      "size": 5014704,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2488\\S2488 2P+贵妃 带实木底框 座可KD沙发 高军客人 2024-12-18.xlsx"
    }
  },
  "2489": {
    "name": "GC-S2489",
    "code": "GC-S2489",
    "sku": "GC-S2489",
    "category": "产品目录",
    "summary": "GC-S2489 现代休闲沙发，2485改款2P全KD沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "双人位",
      "中小户型",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2489",
      "结构": "2485改款2P全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理7张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2485改款2P全KD沙发体量轻巧但坐感完整，小客厅、公寓、卧室休闲区都能放得自然。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2489 （2485改款）2P 全KD沙发 SallY客人 2024-12-11.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2489/GC-S2489-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2489/GC-S2489-cost-sheet.xlsx",
      "size": 131244,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2489\\S2489 （2485改款）2P 全KD沙发 SallY客人 2024-12-11.xlsx"
    }
  },
  "2490": {
    "name": "GC-S2490",
    "code": "GC-S2490",
    "sku": "GC-S2490",
    "category": "产品目录",
    "summary": "GC-S2490 现代休闲沙发，3P+脚踏，座包、并包压缩，并包和扶手KD沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "三人位+脚踏",
      "脚踏组合",
      "客厅休闲",
      "KD拆装结构",
      "压缩包装",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2490",
      "结构": "3P+脚踏，座包、并包压缩，并包和扶手KD沙发",
      "包装/工艺": "局部KD拆装 / 压缩包装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P+脚踏多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "休闲会客区",
      "高端样板间"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2490 3P+脚踏 座包、并包压缩 并、扶手KD沙发 2025-1-12.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2490/GC-S2490-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2490/GC-S2490-cost-sheet.xlsx",
      "size": 1130156,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2490\\S2490 3P+脚踏 座包、并包压缩 并、扶手KD沙发 2025-1-12.xlsx"
    }
  },
  "2491": {
    "name": "GC-S2491",
    "code": "GC-S2491",
    "sku": "GC-S2491",
    "category": "产品目录",
    "summary": "GC-S2491 现代休闲沙发，不可KD整装沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "KD拆装结构",
      "整装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2491",
      "结构": "不可KD整装沙发",
      "包装/工艺": "局部KD拆装 / 整装结构",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "不可KD整装沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2491 不可KD沙发  2025-1-13.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2491/GC-S2491-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2491/GC-S2491-cost-sheet.xlsx",
      "size": 381081,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2491\\S2491 不可KD沙发  2025-1-13.xlsx"
    }
  },
  "2492": {
    "name": "GC-S2492",
    "code": "GC-S2492",
    "sku": "GC-S2492",
    "category": "产品目录",
    "summary": "GC-S2492 现代休闲沙发，3+2+1P可拆洗全KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "全KD结构",
      "可拆洗",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2492",
      "结构": "3+2+1P可拆洗全KD沙发",
      "包装/工艺": "全KD拆装 / 可拆洗设计",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2+1P可拆洗全KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2492 3+2+1P 可拆洗沙发 全KD沙发 2025-3-10.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2492/GC-S2492-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2492/GC-S2492-cost-sheet.xlsx",
      "size": 426312,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2492\\S2492 3+2+1P 可拆洗沙发 全KD沙发 2025-3-10.xlsx"
    }
  },
  "2493": {
    "name": "GC-S2493",
    "code": "GC-S2493",
    "sku": "GC-S2493",
    "category": "产品目录",
    "summary": "GC-S2493 现代休闲沙发，3P+2P+1P不KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "KD拆装结构",
      "整装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2493",
      "结构": "3P+2P+1P不KD沙发",
      "包装/工艺": "局部KD拆装 / 整装结构",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P+2P+1P不KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2493 3P+2P+1P 不KD沙发 2025-3-1.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2493/GC-S2493-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2493/GC-S2493-cost-sheet.xlsx",
      "size": 1270193,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2493\\S2493 3P+2P+1P 不KD沙发 2025-3-1.xlsx"
    }
  },
  "2495": {
    "name": "GC-S2495",
    "code": "GC-S2495",
    "sku": "GC-S2495",
    "category": "产品目录",
    "summary": "GC-S2495 现代休闲沙发，全KD沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2495",
      "结构": "全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "全KD沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2495 全KD沙发 2025-3-6.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2495/GC-S2495-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2495/GC-S2495-cost-sheet.xlsx",
      "size": 350261,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2495\\S2495 全KD沙发 2025-3-6.xlsx"
    }
  },
  "2496": {
    "name": "GC-S2496",
    "code": "GC-S2496",
    "sku": "GC-S2496",
    "category": "产品目录",
    "summary": "GC-S2496 现代休闲沙发，2485改款3P全KD沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2496",
      "结构": "2485改款3P全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理5张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2485改款3P全KD沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2496（2485改款）3P 全KD沙发 2025-3-9.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2496/GC-S2496-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2496/GC-S2496-cost-sheet.xlsx",
      "size": 487007,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2496\\S2496（2485改款）3P 全KD沙发 2025-3-9.xlsx"
    }
  },
  "2498": {
    "name": "GC-S2498",
    "code": "GC-S2498",
    "sku": "GC-S2498",
    "category": "产品目录",
    "summary": "GC-S2498 现代休闲沙发，2P+贵妃普通不防火沙发，适合中等户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "双人位+贵妃",
      "转角贵妃",
      "躺坐休闲",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2498",
      "结构": "2P+贵妃普通不防火沙发",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2P+贵妃组合自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "适合中等户型和开放式客餐厅，既能撑起客厅主视觉，又不会占满动线。"
    ],
    "homes": [
      "中等户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中小户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2398 2P+贵妃 普通不防火 2024-10-10.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2498/GC-S2498-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2498/GC-S2498-cost-sheet.xlsx",
      "size": 1035165,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2498\\S2398 2P+贵妃 普通不防火 2024-10-10.xlsx"
    }
  },
  "2500": {
    "name": "GC-S2500",
    "code": "GC-S2500",
    "sku": "GC-S2500",
    "category": "产品目录",
    "summary": "GC-S2500 现代休闲沙发，3+2+1P全KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2500",
      "结构": "3+2+1P全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理12张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2+1P全KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2500 3+2+1P 全KD沙发  2025-4-5.xlsx",
      "uploadedAt": "2026-06-18 17:44",
      "dataUrl": "/server-data/cost-sheets/gc-s2500/GC-S2500-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2500/GC-S2500-cost-sheet.xlsx",
      "size": 125430,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2500\\S2500 3+2+1P 全KD沙发  2025-4-5.xlsx"
    }
  },
  "2501": {
    "name": "GC-S2501",
    "code": "GC-S2501",
    "sku": "GC-S2501",
    "category": "产品目录",
    "summary": "GC-S2501 现代休闲沙发，3P扶手KD沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "KD拆装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2501",
      "结构": "3P扶手KD沙发",
      "包装/工艺": "局部KD拆装",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P扶手KD沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2501 3P 扶手KD沙发 AGL客人 2025-4-10.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2501/GC-S2501-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2501/GC-S2501-cost-sheet.xlsx",
      "size": 141566,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2501\\S2501 3P 扶手KD沙发 AGL客人 2025-4-10.xlsx"
    }
  },
  "2502": {
    "name": "GC-S2502",
    "code": "GC-S2502",
    "sku": "GC-S2502",
    "category": "产品目录",
    "summary": "GC-S2502 现代休闲沙发，单椅电动功能椅，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配",
      "电动功能",
      "功能椅",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2502",
      "结构": "单椅电动功能椅",
      "包装/工艺": "电动功能",
      "图片": "已整理7张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "电动功能单椅把抬脚、后仰和休息姿势整合在一起，一坐下就有专属休闲位的享受感。",
      "厚靠背配合功能伸展，肩颈、腰背和腿部都能得到更完整的放松。",
      "尺寸更容易落位，小户型也能拥有完整休闲感，不会让空间显得拥挤。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店搭配采购客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2502 单椅 电动功能椅 2025-4-27.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2502/GC-S2502-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2502/GC-S2502-cost-sheet.xlsx",
      "size": 448304,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2502\\S2502 单椅 电动功能椅 2025-4-27.xlsx"
    }
  },
  "2503": {
    "name": "GC-S2503",
    "code": "GC-S2503",
    "sku": "GC-S2503",
    "category": "产品目录",
    "summary": "GC-S2503 现代休闲沙发，3+2+1P并架KD沙发，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "KD拆装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2503",
      "结构": "3+2+1P并架KD沙发",
      "包装/工艺": "局部KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2+1P并架KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店搭配采购客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2503 3+2+1P 并架KD沙发 2025-5-12.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2503/GC-S2503-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2503/GC-S2503-cost-sheet.xlsx",
      "size": 1071612,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2503\\S2503 3+2+1P 并架KD沙发 2025-5-12.xlsx"
    }
  },
  "2504": {
    "name": "GC-S2504",
    "code": "GC-S2504",
    "sku": "GC-S2504",
    "category": "产品目录",
    "summary": "GC-S2504 现代休闲沙发，单椅带转盘休闲椅，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配",
      "旋转功能",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2504",
      "结构": "单椅带转盘休闲椅",
      "包装/工艺": "旋转底座",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "旋转休闲单椅自带互动感，转身聊天、看电视、取物都轻松，小空间也能用得灵活。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "轻巧体量降低搭配难度，新房、租住空间和样板间都容易推荐。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店搭配采购客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2504 单椅 带转盘 2025-5-10.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2504/GC-S2504-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2504/GC-S2504-cost-sheet.xlsx",
      "size": 735596,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2504\\S2504 单椅 带转盘 2025-5-10.xlsx"
    }
  },
  "2505": {
    "name": "GC-S2505",
    "code": "GC-S2505",
    "sku": "GC-S2505",
    "category": "产品目录",
    "summary": "GC-S2505 现代休闲沙发，B款3P+脚踏，并包、座包、扶手包压缩沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "三人位+脚踏",
      "脚踏组合",
      "客厅休闲",
      "压缩包装",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2505",
      "结构": "B款3P+脚踏，并包、座包、扶手包压缩沙发",
      "包装/工艺": "压缩包装",
      "图片": "已整理9张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "B款3P+脚踏多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "休闲会客区",
      "高端样板间"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2505 B款 3P+脚踏 并包、座包、扶手包压缩沙发 范科客人 2025-12-13.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2505/GC-S2505-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2505/GC-S2505-cost-sheet.xlsx",
      "size": 1028434,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2505\\S2505 B款 3P+脚踏 并包、座包、扶手包压缩沙发 范科客人 2025-12-13.xlsx"
    }
  },
  "2508": {
    "name": "GC-S2508",
    "code": "GC-S2508",
    "sku": "GC-S2508",
    "category": "产品目录",
    "summary": "GC-S2508 现代休闲沙发，1P单人休闲沙发，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "单人位",
      "小户型适配",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2508",
      "结构": "1P单人休闲沙发",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "1P单人休闲沙发占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "尺寸更容易落位，小户型也能拥有完整休闲感，不会让空间显得拥挤。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店搭配采购客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2508 1P 2025-6-4.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2508/GC-S2508-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2508/GC-S2508-cost-sheet.xlsx",
      "size": 416426,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2508\\S2508 1P 2025-6-4.xlsx"
    }
  },
  "2509": {
    "name": "GC-S2509",
    "code": "GC-S2509",
    "sku": "GC-S2509",
    "category": "产品目录",
    "summary": "GC-S2509 现代休闲沙发，30D全海绵压缩沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "压缩包装",
      "全海绵结构",
      "30D海绵",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2509",
      "结构": "30D全海绵压缩沙发",
      "包装/工艺": "压缩包装 / 全海绵结构 / 30D海绵",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "30D全海绵压缩沙发线条干净，风格百搭，不挑软装，适合作为门店和家庭客厅的耐看款。",
      "全海绵软包边角更柔和，坐感饱满亲和，老人、小孩使用也更安心。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2509 30D 全海绵压缩沙发 2025-6-9.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2509/GC-S2509-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2509/GC-S2509-cost-sheet.xlsx",
      "size": 545545,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2509\\S2509 30D 全海绵压缩沙发 2025-6-9.xlsx"
    }
  },
  "2510": {
    "name": "GC-S2510",
    "code": "GC-S2510",
    "sku": "GC-S2510",
    "category": "产品目录",
    "summary": "GC-S2510 现代休闲沙发，3+2+1P全KD沙发，适合卧室休闲角、公寓客厅及经销展示使用。",
    "tags": [
      "3+2+1组合",
      "客厅套装",
      "大户型适配",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2510",
      "结构": "3+2+1P全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2+1P全KD沙发成套摆放气场完整，主沙发、双人位和单椅一次配齐，客厅更像精装样板间。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "卧室休闲角",
      "公寓客厅",
      "书房",
      "门店搭配区"
    ],
    "audience": [
      "单人休闲用户",
      "小户型客户",
      "门店搭配采购客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2510 3+2+1P 全KD沙发 2025-6-15.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2510/GC-S2510-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2510/GC-S2510-cost-sheet.xlsx",
      "size": 449630,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2510\\S2510 3+2+1P 全KD沙发 2025-6-15.xlsx"
    }
  },
  "2512": {
    "name": "GC-S2512",
    "code": "GC-S2512",
    "sku": "GC-S2512",
    "category": "产品目录",
    "summary": "GC-S2512 现代休闲沙发，侧位+侧位+中位+脚踏全KD组合沙发，适合大客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "全KD结构",
      "模块组合",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2512",
      "结构": "侧位+侧位+中位+脚踏全KD组合沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "模块组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "开放式客餐厅",
      "休闲会客区",
      "高端样板间"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2512 侧位+侧位+中位+脚踏 全KD沙发 2025-7-15.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2512/GC-S2512-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2512/GC-S2512-cost-sheet.xlsx",
      "size": 1691958,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2512\\S2512 侧位+侧位+中位+脚踏 全KD沙发 2025-7-15.xlsx"
    }
  },
  "2514": {
    "name": "GC-S2514",
    "code": "GC-S2514",
    "sku": "GC-S2514",
    "category": "产品目录",
    "summary": "GC-S2514 现代休闲沙发，转角+中位+中位+脚踏组合沙发，适合中大户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "模块组合",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2514",
      "结构": "转角+中位+中位+脚踏组合沙发",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理7张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "转角+中位+中位+脚踏组合沙发组合感强，可以根据客厅尺度灵活调整，换房型或换陈列也不容易过时。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中大户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2514 转角+中位+中位+脚踏 张翔客人 2025-7-8.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2514/GC-S2514-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2514/GC-S2514-cost-sheet.xlsx",
      "size": 591047,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2514\\S2514 转角+中位+中位+脚踏 张翔客人 2025-7-8.xlsx"
    }
  },
  "2515": {
    "name": "GC-S2515",
    "code": "GC-S2515",
    "sku": "GC-S2515",
    "category": "产品目录",
    "summary": "GC-S2515 现代休闲沙发，3P扶手、并包KD沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "KD拆装结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2515",
      "结构": "3P扶手、并包KD沙发",
      "包装/工艺": "局部KD拆装",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3P扶手、并包KD沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2515 3P 扶手、并KD沙发 宋新豪客人 2025-7-12.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2515/GC-S2515-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2515/GC-S2515-cost-sheet.xlsx",
      "size": 516111,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2515\\S2515 3P 扶手、并KD沙发 宋新豪客人 2025-7-12.xlsx"
    }
  },
  "2518": {
    "name": "GC-S2518",
    "code": "GC-S2518",
    "sku": "GC-S2518",
    "category": "产品目录",
    "summary": "GC-S2518 现代休闲沙发，3+2P全KD沙发，适合大客厅、别墅或复式会客区及经销展示使用。",
    "tags": [
      "3+2组合",
      "客厅套装",
      "中大户型",
      "全KD结构",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2518",
      "结构": "3+2P全KD沙发",
      "包装/工艺": "全KD拆装",
      "图片": "已整理7张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "3+2P全KD沙发坐位数量充足，家人同坐、朋友来访都从容，成套搭配比单品更有档次。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "大客厅",
      "别墅或复式会客区",
      "样板间",
      "经销门店展示区"
    ],
    "audience": [
      "整套客厅采购客户",
      "工程及样板房客户",
      "经销商与批发客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2518 3+2P 全KD沙发 宋好语客人 2025-8-1.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2518/GC-S2518-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2518/GC-S2518-cost-sheet.xlsx",
      "size": 114493,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2518\\S2518 3+2P 全KD沙发 宋好语客人 2025-8-1.xlsx"
    }
  },
  "2602": {
    "name": "GC-S2602",
    "code": "GC-S2602",
    "sku": "GC-S2602",
    "category": "日本款式",
    "summary": "深绿色单人折叠沙发，带铁架支撑，可坐可躺，适合小空间休闲放松。",
    "tags": [
      "单人位",
      "功能沙发",
      "绿色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26021P: 97 x 146 x 47 cm; 沙发打平尺寸: 97 x 176 x 32 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "深绿色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深绿色色调搭配铁架质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "铁架底部支撑更稳，组合摆放时不松散，长期使用也能保持利落线条。",
      "适合公寓、卧室角落和小客厅补位，用较小面积换来明显的舒适提升。"
    ],
    "homes": [
      "小户型、公寓、卧室、书房休闲角。"
    ],
    "audience": [
      "独居用户、租房用户、喜欢灵活坐卧家具的人群。"
    ],
    "suggestedPrice": "US$88",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2602 1P沙发 带铁架 新款 2024-10-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2602/GC-S2602-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2602/GC-S2602-cost-sheet.xlsx",
      "size": 1016944,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2602\\S2602 1P沙发 带铁架 新款 2024-10-10.xlsx"
    }
  },
  "2605": {
    "name": "GC-S2605",
    "code": "GC-S2605",
    "sku": "GC-S2605",
    "category": "日本款式",
    "summary": "深绿色全海绵单人沙发，包裹感强、坐感柔软，适合舒适休闲空间。",
    "tags": [
      "单人位",
      "绿色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26051P: 85 x 96 x 74 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "深绿色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深绿色色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "全海绵软包边角更柔和，坐感饱满亲和，老人、小孩使用也更安心。",
      "适合公寓、卧室角落和小客厅补位，用较小面积换来明显的舒适提升。"
    ],
    "homes": [
      "小户型、公寓客厅、卧室、休闲区。"
    ],
    "audience": [
      "年轻用户、独居用户、偏好柔软坐感的人群。"
    ],
    "suggestedPrice": "US$75",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2605 全海绵沙发 28D NT客人 2024-10-6.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2605/GC-S2605-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2605/GC-S2605-cost-sheet.xlsx",
      "size": 60001,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2605\\S2605 全海绵沙发 28D NT客人 2024-10-6.xlsx"
    }
  },
  "2608": {
    "name": "GC-S2608",
    "code": "GC-S2608",
    "sku": "GC-S2608",
    "category": "日本款式",
    "summary": "浅蓝绿色三人位全KD沙发，线条简洁、坐感舒适，适合现代家庭客厅。",
    "tags": [
      "三人位",
      "全KD结构",
      "绿色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26083P: 203 x 82 x 82 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅蓝绿色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "蓝绿色色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "中小户型、三房客厅、现代会客区。"
    ],
    "audience": [
      "家庭用户、年轻客群、重视运输效率的采购客户。"
    ],
    "suggestedPrice": "US$125",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2608 3P 全KD沙发 2024-11-22.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2608/GC-S2608-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2608/GC-S2608-cost-sheet.xlsx",
      "size": 772561,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2608\\S2608 3P 全KD沙发 2024-11-22.xlsx"
    }
  },
  "2609": {
    "name": "GC-S2609",
    "code": "GC-S2609",
    "sku": "GC-S2609",
    "category": "欧洲款式",
    "summary": "深灰色L型贵妃沙发，坐躺两用、模块舒展，适合打造沉稳舒适的现代客厅。",
    "tags": [
      "贵妃位",
      "带脚踏",
      "模块组合",
      "扶手可KD",
      "深灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2609侧位+侧位+中位+脚踏: 272 x 80-139 x 91 cm; 侧位: 95 x 80 x 91 cm; 中位: 87 x 80 x 91 cm; 脚踏: 87 x 60 x 49 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "深灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中大户型、三房两厅、开放式客厅。"
    ],
    "audience": [
      "家庭用户、喜欢躺坐休闲和沉稳风格的人群。"
    ],
    "suggestedPrice": "US$199/套（压缩）；US$219/套（不压缩）",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2609 侧位+侧位+中位+脚踏 并、扶手可KD沙发 何奕山客人 2024-10-30.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2609/GC-S2609-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2609/GC-S2609-cost-sheet.xlsx",
      "size": 2370368,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2609\\S2609 侧位+侧位+中位+脚踏 并、扶手可KD沙发 何奕山客人 2024-10-30.xlsx"
    }
  },
  "2610": {
    "name": "GC-S2610",
    "code": "GC-S2610",
    "sku": "GC-S2610",
    "category": "日本款式",
    "summary": "粉色模块布艺沙发，柔和轻快、组合灵活，为小户型空间增添温馨感。",
    "tags": [
      "1/2/3人位可选",
      "布艺面料",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26101P: 104 x 104 x 83 cm; 2P: 206 x 104 x 83 cm; 3P: 307 x 104 x 83 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "粉色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "粉色色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "小户型、公寓、卧室、休闲角。"
    ],
    "audience": [
      "年轻女性、租房用户、喜欢柔和治愈风的人群。"
    ],
    "suggestedPrice": "US$79",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2610 1P 2024-12-20.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2610/GC-S2610-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2610/GC-S2610-cost-sheet.xlsx",
      "size": 428157,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2610\\S2610 1P 2024-12-20.xlsx"
    }
  },
  "2611": {
    "name": "GC-S2611",
    "code": "GC-S2611",
    "sku": "GC-S2611",
    "category": "日本款式",
    "summary": "灰色双人布艺沙发，线条简洁、木脚轻盈，轻松适配现代小客厅。",
    "tags": [
      "双人位",
      "不KD结构",
      "布艺面料",
      "高脚设计",
      "灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26112P: 161 x 76 x 73 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "布艺细节让这款灰色双人布艺沙发更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "小户型、公寓、书房、次卧。"
    ],
    "audience": [
      "情侣、小家庭、租房用户和偏爱简约风的人群。"
    ],
    "suggestedPrice": "US$95",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2611 2P 并、扶手不KD沙发 高军客人 2024-11-24.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2611/GC-S2611-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2611/GC-S2611-cost-sheet.xlsx",
      "size": 1231975,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2611\\S2611 2P 并、扶手不KD沙发 高军客人 2024-11-24.xlsx"
    }
  },
  "2612": {
    "name": "GC-S2612",
    "code": "GC-S2612",
    "sku": "GC-S2612",
    "category": "欧洲款式",
    "summary": "焦糖棕双人沙发，复古暖色与圆润扶手结合，营造温暖耐看的客厅氛围。",
    "tags": [
      "双人位",
      "全KD结构",
      "棕色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26122P: 156 x 76 x 75 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "焦糖棕"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "焦糖棕色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "小中户型、公寓、复古风客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、喜欢暖色复古家居的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2612 2P 全KD沙发 ENA客人 2024-12-16.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2612/GC-S2612-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2612/GC-S2612-cost-sheet.xlsx",
      "size": 644062,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2612\\S2612 2P 全KD沙发 ENA客人 2024-12-16.xlsx"
    }
  },
  "2613": {
    "name": "GC-S2613",
    "code": "GC-S2613",
    "sku": "GC-S2613",
    "category": "功能配套",
    "summary": "深咖色储物脚踏凳，坐、搁脚、收纳多用，是卧室与客厅的实用补充。",
    "tags": [
      "带脚踏",
      "棕色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S2613脚踏: 110 x 38 x 38 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "深咖色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深咖色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "卧室、客厅、玄关、床尾空间。"
    ],
    "audience": [
      "重视收纳、喜欢多功能家具和小户型用户。"
    ],
    "suggestedPrice": "US$20",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2613 脚踏  范科客人 BOM  2024-11-16.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2613/GC-S2613-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2613/GC-S2613-cost-sheet.xlsx",
      "size": 125885,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2613\\S2613 脚踏  范科客人 BOM  2024-11-16.xlsx"
    }
  },
  "2618": {
    "name": "GC-S2618",
    "code": "GC-S2618",
    "sku": "GC-S2618",
    "category": "欧洲款式",
    "summary": "深蓝色模块沙发，低矮利落、坐感宽厚，为现代客厅带来稳重质感。",
    "tags": [
      "模块组合",
      "压缩包装",
      "低背造型",
      "蓝色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2618侧位+侧位+中位: 260 x 90 x 65 cm; 侧位: 94 x 90 x 65 cm; 中位: 73 x 90 x 65 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "深蓝色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深蓝色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "中大户型、现代客厅、会客区。"
    ],
    "audience": [
      "年轻家庭、商务公寓、喜欢深色高级感的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2618 侧位+侧位+中位 35D 含3个并包 全自动压缩沙发 高军客人 2025-5-29.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2618/GC-S2618-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2618/GC-S2618-cost-sheet.xlsx",
      "size": 1055411,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2618\\S2618 侧位+侧位+中位 35D 含3个并包 全自动压缩沙发 高军客人 2025-5-29.xlsx"
    }
  },
  "2619": {
    "name": "GC-S2619",
    "code": "GC-S2619",
    "sku": "GC-S2619",
    "category": "功能沙发",
    "summary": "奶白色沙发床，圆弧坐面与可打平结构兼具颜值和临时睡眠功能。",
    "tags": [
      "沙发床",
      "2/3人位可选",
      "压缩包装",
      "功能沙发",
      "米白色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26193P: 201 x 122-112 x 79 cm; 沙发打平尺寸: 201 x 145 x 41 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "奶白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "坐垫厚实、靠背饱满，坐着不硬，展开后也能提供临时睡眠所需的承托。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "小户型、公寓、客卧、民宿。"
    ],
    "audience": [
      "租房用户、小家庭、需要临时床位的人群。"
    ],
    "suggestedPrice": "US$229",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2619 2P（床） 全海绵压缩沙发 2024-12-25.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2619/GC-S2619-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2619/GC-S2619-cost-sheet.xlsx",
      "size": 61748,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2619\\S2619 2P（床） 全海绵压缩沙发 2024-12-25.xlsx"
    }
  },
  "2621": {
    "name": "GC-S2621",
    "code": "GC-S2621",
    "sku": "GC-S2621",
    "category": "功能沙发",
    "summary": "拼色单椅脚踏组合，造型个性、坐躺灵活，为休闲角带来鲜明视觉焦点。",
    "tags": [
      "带脚踏",
      "单人位",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26211P: 76 x 92 x 65 cm; 脚踏: 76 x 58 x 39 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "拼色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "拼色单椅脚踏组合多了脚踏之后休闲感立刻提升，伸腿、临时加座、做茶几替代都很实用。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "轻巧体量降低搭配难度，新房、租住空间和样板间都容易推荐。"
    ],
    "homes": [
      "公寓、书房、休闲角、潮流客厅。"
    ],
    "audience": [
      "年轻人、设计爱好者、喜欢个性拼色家具的人群。"
    ],
    "suggestedPrice": "四件套 US$189；四件套 12元布 US$179；压缩 1P US$58；ST US$48；扶手 US$4",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2621 1P+脚踏 新款 2025-1-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2621/GC-S2621-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2621/GC-S2621-cost-sheet.xlsx",
      "size": 182762,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2621\\S2621 1P+脚踏 新款 2025-1-10.xlsx"
    }
  },
  "2622": {
    "name": "GC-S2622",
    "code": "GC-S2622",
    "sku": "GC-S2622",
    "category": "欧洲款式",
    "summary": "浅灰色转角模块沙发，组合丰富、坐位宽敞，轻松承载家庭会客与休闲。",
    "tags": [
      "转角组合",
      "带脚踏",
      "模块组合",
      "全KD结构",
      "浅灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2622侧位+中位*2+转角: 259 x 73-87 x 75 cm; 侧位: 61.5 x 73 x 75 cm; 中位: 54 x 73 x 75 cm; 角位: 101 x 87 x 75 cm; 脚踏: 70.5 x 53 x 36 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "中大户型、三房两厅、开放式客厅。"
    ],
    "audience": [
      "家庭用户、多人会客场景、喜欢模块化搭配的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2622 侧位+中位2+角位+脚踏 全KD沙发 2025-1-17.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2622/GC-S2622-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2622/GC-S2622-cost-sheet.xlsx",
      "size": 477109,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2622\\S2622 侧位+中位2+角位+脚踏 全KD沙发 2025-1-17.xlsx"
    }
  },
  "2625": {
    "name": "GC-S2625",
    "code": "GC-S2625",
    "sku": "GC-S2625",
    "category": "欧洲款式",
    "summary": "米白色三人布艺沙发，圆润扶手与柔软坐垫结合，营造温暖松弛的家居感。",
    "tags": [
      "3P+1P组合",
      "可KD结构",
      "布艺面料",
      "米白色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S26253P: 239 x 87 x 79 cm; 1P: 112 x 87 x 79 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "米白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中户型、三房客厅、温馨风住宅。"
    ],
    "audience": [
      "家庭用户、喜欢柔和浅色和舒适坐感的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2625 3+1P 座、并架KD沙发 2025-2-23.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2625/GC-S2625-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2625/GC-S2625-cost-sheet.xlsx",
      "size": 1612143,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2625\\S2625 3+1P 座、并架KD沙发 2025-2-23.xlsx"
    }
  },
  "2626": {
    "name": "GC-S2626",
    "code": "GC-S2626",
    "sku": "GC-S2626",
    "category": "日本款式",
    "summary": "浅灰色三人沙发，细脚轻盈、线条简洁，适合打造清爽现代的小中户型客厅。",
    "tags": [
      "三人位",
      "全KD结构",
      "高脚设计",
      "浅灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26263P: 196 x 81 x 81 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "小中户型、公寓、现代客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、喜欢简洁轻盈家具的人群。"
    ],
    "suggestedPrice": "US$99；改12元布 扣减 US$8",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2626 3P 全KD沙发 2025-3-4.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2626/GC-S2626-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2626/GC-S2626-cost-sheet.xlsx",
      "size": 375520,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2626\\S2626 3P 全KD沙发 2025-3-4.xlsx"
    }
  },
  "2627": {
    "name": "GC-S2627",
    "code": "GC-S2627",
    "sku": "GC-S2627",
    "category": "功能单椅",
    "summary": "绿色花纹转盘休闲椅，轻巧灵动、坐感放松，为角落空间增添自然活力。",
    "tags": [
      "标准沙发",
      "绿色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S2627单椅: 70 x 100 x 82 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "绿色花纹"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "绿色色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "客厅角落、书房、卧室、阳台休闲区。"
    ],
    "audience": [
      "独居用户、阅读爱好者、喜欢自然复古风的人群。"
    ],
    "suggestedPrice": "US$68",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2627 单椅带转盘 2025-3-10.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2627/GC-S2627-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2627/GC-S2627-cost-sheet.xlsx",
      "size": 311096,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2627\\S2627 单椅带转盘 2025-3-10.xlsx"
    }
  },
  "2630": {
    "name": "GC-S2630",
    "code": "GC-S2630",
    "sku": "GC-S2630",
    "category": "日本款式",
    "summary": "米白色木扶手沙发，柔软布艺搭配实木扶手，带来温润自然的北欧气质。",
    "tags": [
      "1/2/3人位可选",
      "可KD结构",
      "布艺面料",
      "米白色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26303P: 197 x 89 x 83 cm; 2P: 140 x 89 x 83 cm; 1P: 83 x 89 x 83 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "米白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小中户型、北欧风客厅、书房会客区。"
    ],
    "audience": [
      "年轻家庭、喜欢木质元素和清爽家居的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2630 3+2+1P 扶手带实木板 并KD沙发 2025-3-17.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2630/GC-S2630-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2630/GC-S2630-cost-sheet.xlsx",
      "size": 808820,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2630\\S2630 3+2+1P 扶手带实木板 并KD沙发 2025-3-17.xlsx"
    }
  },
  "2632": {
    "name": "GC-S2632",
    "code": "GC-S2632",
    "sku": "GC-S2632",
    "category": "日本款式",
    "summary": "珊瑚橙布艺沙发，色彩明快、线条轻巧，为现代客厅注入温暖活力。",
    "tags": [
      "1/2/3人位可选",
      "全KD结构",
      "布艺面料",
      "橙色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26323P: 170 x 79 x 75 cm; 2P: 120 x 79 x 75 cm; 1P: 70 x 79 x 75 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "珊瑚橙"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "珊瑚橙色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "小中户型、公寓、年轻化客厅。"
    ],
    "audience": [
      "年轻家庭、设计感公寓、喜欢明快色彩的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2632 3+2+1P 全KD沙发 2025-3-15.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2632/GC-S2632-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2632/GC-S2632-cost-sheet.xlsx",
      "size": 250952,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2632\\S2632 3+2+1P 全KD沙发 2025-3-15.xlsx"
    }
  },
  "2633": {
    "name": "GC-S2633",
    "code": "GC-S2633",
    "sku": "GC-S2633",
    "category": "产品目录",
    "summary": "GC-S2633 现代休闲沙发，线条简洁耐看，适合客厅、样板间和经销展示使用。",
    "tags": [
      "单人位",
      "全KD结构",
      "小户型适配"
    ],
    "specs": {
      "型号": "GC-S2633",
      "图片": "多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "单人休闲椅占地小、存在感强，单独放在角落就能形成一个舒服的阅读休闲位。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2633 3+2+1P 全KD沙发 2025-4-2.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2633/GC-S2633-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2633/GC-S2633-cost-sheet.xlsx",
      "size": 111368,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2633\\S2633 3+2+1P 全KD沙发 2025-4-2.xlsx"
    }
  },
  "2634": {
    "name": "GC-S2634",
    "code": "GC-S2634",
    "sku": "GC-S2634",
    "category": "功能沙发",
    "summary": "棕色多规格布艺沙发，坐感厚实、线条利落，兼顾会客舒适与多色搭配。",
    "tags": [
      "1/2/3人位可选",
      "可KD结构",
      "布艺面料",
      "棕色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26343P: 173.5 x 81 x 85 cm; 2P: 123.5 x 81 x 85 cm; 1P: 82.5 x 81 x 85 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "棕色，可选蓝色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "棕色色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小中户型、三房客厅、公寓会客区。"
    ],
    "audience": [
      "年轻家庭、租房用户、喜欢暖色和实用组合的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2634 3+2+1P 并KD沙发 2025-4-7.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2634/GC-S2634-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2634/GC-S2634-cost-sheet.xlsx",
      "size": 1155295,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2634\\S2634 3+2+1P 并KD沙发 2025-4-7.xlsx"
    }
  },
  "2635": {
    "name": "GC-S2635",
    "code": "GC-S2635",
    "sku": "GC-S2635",
    "category": "欧洲款式",
    "summary": "棕色三人布艺沙发，软包圆润、坐感松弛，多色可选满足不同客厅风格。",
    "tags": [
      "三人位",
      "全KD结构",
      "布艺面料",
      "灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26353P: 200 x 81 x 81 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "棕色，可选灰/绿/白"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "棕色色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "中户型、三房客厅、休闲会客区。"
    ],
    "audience": [
      "家庭用户、喜欢松弛坐感和多色选择的人群。"
    ],
    "suggestedPrice": "US$128",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2635 3P 全KD沙发 AGL客人 2025-4-8.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2635/GC-S2635-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2635/GC-S2635-cost-sheet.xlsx",
      "size": 432043,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2635\\S2635 3P 全KD沙发 AGL客人 2025-4-8.xlsx"
    }
  },
  "2636": {
    "name": "GC-S2636",
    "code": "GC-S2636",
    "sku": "GC-S2636",
    "category": "日本款式",
    "summary": "奶白绒感单椅，圆润包裹、坐感柔和，为小空间增添温暖休闲感。",
    "tags": [
      "标准沙发",
      "绒感面料",
      "米白色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S2636单椅: 77 x 80 x 80 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "奶白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配绒感质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "绒感面料触感柔软，视觉上更温暖，适合打造有亲和力的客厅氛围。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "小户型、公寓卧室、休闲角。"
    ],
    "audience": [
      "独居用户、年轻家庭、喜欢柔和奶油风的人群。"
    ],
    "suggestedPrice": "US$69-71",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2636 单椅 2025-4-23.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2636/GC-S2636-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2636/GC-S2636-cost-sheet.xlsx",
      "size": 2215416,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2636\\S2636 单椅 2025-4-23.xlsx"
    }
  },
  "2637": {
    "name": "GC-S2637",
    "code": "GC-S2637",
    "sku": "GC-S2637",
    "category": "欧洲款式",
    "summary": "米白全KD组合沙发，厚实靠包与宽坐感设计，适合现代家庭客厅。",
    "tags": [
      "模块组合",
      "全KD结构",
      "宽坐深坐",
      "米白色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2637侧位+侧位+中位: 282 x 92-103 x 83-78 cm; 侧位+侧位: 201 x 92-103 x 83-78 cm; 中位: 80 x 92-103 x 83-78 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "米白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "中户型、三房客厅、公寓会客区。"
    ],
    "audience": [
      "家庭用户、海外电商客户、偏好浅色软包的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2637  侧位+侧位+中位 全KD沙发 2025-6-24.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2637/GC-S2637-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2637/GC-S2637-cost-sheet.xlsx",
      "size": 1675559,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2637\\S2637  侧位+侧位+中位 全KD沙发 2025-6-24.xlsx"
    }
  },
  "2640": {
    "name": "GC-S2640",
    "code": "GC-S2640",
    "sku": "GC-S2640",
    "category": "欧洲款式",
    "summary": "浅粉L型组合沙发，转角围合感强，柔和色调适合温馨客厅。",
    "tags": [
      "转角组合",
      "模块组合",
      "扶手可KD",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2640总长: 252 x 87 x 74 cm; 侧位: 80 x 87 x 74 cm; 中位: 59 x 87 x 74 cm; 转角: 120 x 120 x 74 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅粉色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "粉色色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中大户型、三房客厅、开放式会客区。"
    ],
    "audience": [
      "家庭用户、年轻客群、喜欢柔和色彩和转角组合的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2640 侧位+侧位+中位+转角 并架、扶手可KD沙发 2025-5-18.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2640/GC-S2640-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2640/GC-S2640-cost-sheet.xlsx",
      "size": 469415,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2640\\S2640 侧位+侧位+中位+转角 并架、扶手可KD沙发 2025-5-18.xlsx"
    }
  },
  "2641": {
    "name": "GC-S2641",
    "code": "GC-S2641",
    "sku": "GC-S2641",
    "category": "日本款式",
    "summary": "灰色双人压缩沙发，木脚轻盈、软包舒适，适合紧凑型客厅。",
    "tags": [
      "双人位",
      "压缩包装",
      "高脚设计",
      "灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26412P: 158 x 72 x 70 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "木脚细节让这款灰色双人压缩沙发更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "压缩包装减少运输体积，能帮助控制物流成本，适合跨境、电商和批量采购。"
    ],
    "homes": [
      "小中户型、公寓客厅、租赁住宅。"
    ],
    "audience": [
      "年轻家庭、租房用户、重视包装运输效率的客户。"
    ],
    "suggestedPrice": "US$89",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2641 2P 座包、并包压缩沙发 范科客人 2025-5-14.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2641/GC-S2641-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2641/GC-S2641-cost-sheet.xlsx",
      "size": 381575,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2641\\S2641 2P 座包、并包压缩沙发 范科客人 2025-5-14.xlsx"
    }
  },
  "2642": {
    "name": "GC-S2642",
    "code": "GC-S2642",
    "sku": "GC-S2642",
    "category": "日本款式",
    "summary": "卡其灰单椅，圆润扶手与厚坐垫设计，带来柔软放松的休闲坐感。",
    "tags": [
      "标准沙发",
      "灰色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S2642单椅: 87 x 78 x 88 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "卡其灰"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "卡其灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "小户型、卧室、书房、客厅休闲角。"
    ],
    "audience": [
      "独居用户、家庭补充座、喜欢柔软休闲椅的人群。"
    ],
    "suggestedPrice": "US$65",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2642 单椅 2025-5-20.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2642/GC-S2642-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2642/GC-S2642-cost-sheet.xlsx",
      "size": 522030,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2642\\S2642 单椅 2025-5-20.xlsx"
    }
  },
  "2643": {
    "name": "GC-S2643",
    "code": "GC-S2643",
    "sku": "GC-S2643",
    "category": "日本款式",
    "summary": "红色双人沙发，纽扣靠背与木脚设计鲜明利落，适合打造明亮活力的客厅焦点。",
    "tags": [
      "双人位",
      "不KD结构",
      "高脚设计",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26432P: 123 x 84 x 77 cm; 座包拉出尺寸: 202 x 84 x 55 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "红色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "红色色调搭配木脚质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "小中户型、公寓客厅、休闲会客区。"
    ],
    "audience": [
      "年轻家庭、单身公寓、喜欢亮色软装的人群。"
    ],
    "suggestedPrice": "US$78",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2643 2P 不KD沙发 宋君客人 2025-5-19.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2643/GC-S2643-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2643/GC-S2643-cost-sheet.xlsx",
      "size": 437207,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2643\\S2643 2P 不KD沙发 宋君客人 2025-5-19.xlsx"
    }
  },
  "2645": {
    "name": "GC-S2645",
    "code": "GC-S2645",
    "sku": "GC-S2645",
    "category": "日本款式",
    "summary": "浅灰3+2+1组合沙发，柔和扶手与木脚轻盈百搭，适合完整客厅会客组合。",
    "tags": [
      "1/2/3人位可选",
      "全KD结构",
      "高脚设计",
      "浅灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S26453P: 215 x 86 x 74 cm; 2P: 159 x 86 x 74 cm; 1P: 104 x 86 x 74 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰色调搭配木脚质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "中大户型、家庭客厅、会客空间。"
    ],
    "audience": [
      "家庭用户、批量采购客户、重视运输效率的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2645 3+2+1P 全KD沙发 2025-6-11.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2645/GC-S2645-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2645/GC-S2645-cost-sheet.xlsx",
      "size": 876512,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2645\\S2645 3+2+1P 全KD沙发 2025-6-11.xlsx"
    }
  },
  "2647": {
    "name": "GC-S2647",
    "code": "GC-S2647",
    "sku": "GC-S2647",
    "category": "欧洲款式",
    "summary": "米白转角组合沙发，模块围合感强，宽坐深躺适合中大客厅放松会客。",
    "tags": [
      "转角组合",
      "模块组合",
      "宽坐深坐",
      "米白色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2647侧位+侧位+中位+转角: 328 x 136-87 x 71 cm; 侧位+侧位+中位: 248 x 87 x 71 cm; 侧位+侧位: 175 x 87 x 71 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "米白色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "中大户型、三房客厅、开放式会客区。"
    ],
    "audience": [
      "家庭用户、喜欢转角组合、重视舒适坐深的人群。"
    ],
    "suggestedPrice": "US$308；US$299",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2647 侧位+侧位+中位+转角 2025-6-13.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2647/GC-S2647-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2647/GC-S2647-cost-sheet.xlsx",
      "size": 756995,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2647\\S2647 侧位+侧位+中位+转角 2025-6-13.xlsx"
    }
  },
  "2649": {
    "name": "GC-S2649",
    "code": "GC-S2649",
    "sku": "GC-S2649",
    "category": "日本款式",
    "summary": "浅灰双人功能沙发，厚坐包与可KD结构兼顾舒适坐感和运输便利。",
    "tags": [
      "三人位",
      "座可KD",
      "功能沙发",
      "浅灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26493P: 222 x 88 x 82 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "浅灰色"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小中户型、公寓客厅、休闲会客区。"
    ],
    "audience": [
      "年轻家庭、租赁住宅、重视包装运输效率的客户。"
    ],
    "suggestedPrice": "US$148",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2649 并、座可KD沙发 2025-6-20.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2649/GC-S2649-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2649/GC-S2649-cost-sheet.xlsx",
      "size": 546364,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2649\\S2649 并、座可KD沙发 2025-6-20.xlsx"
    }
  },
  "2650": {
    "name": "GC-S2650",
    "code": "GC-S2650",
    "sku": "GC-S2650",
    "category": "日本款式",
    "summary": "米灰色L型贵妃沙发，宽坐深躺、木脚轻盈，适合打造温暖耐看的现代客厅。",
    "tags": [
      "2P+贵妃",
      "背架可KD",
      "布艺面料",
      "高脚设计",
      "宽坐深坐",
      "米灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S26502P+贵妃: 239 x 97-163 x 77-91 cm; 2P: 153 x 95 x 77-91 cm; 贵妃: 87 x 163 x 77-91 cm",
      "面料": "细纹布艺，可选",
      "填充": "可选",
      "颜色": "米灰色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米灰色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中大户型、三房客厅、开放式客厅、样板间。"
    ],
    "audience": [
      "年轻家庭、品质型用户、喜欢简约温馨风和休闲躺坐的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2650 2P+贵妃 座、背架KD AGL客人 2025-6-30.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2650/GC-S2650-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2650/GC-S2650-cost-sheet.xlsx",
      "size": 4835601,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2650\\S2650 2P+贵妃 座、背架KD AGL客人 2025-6-30.xlsx"
    }
  },
  "2653": {
    "name": "GC-S2653",
    "code": "GC-S2653",
    "sku": "GC-S2653",
    "category": "欧洲款式",
    "summary": "奶油白模块沙发，圆润饱满、坐感柔软，为客厅带来干净温柔的云朵感。",
    "tags": [
      "模块组合",
      "全KD结构",
      "布艺面料",
      "米色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2653侧位+侧位+中位: 260 x 89 x 75 cm; 侧位（单边）: 95 x 89 x 75 cm; 中位: 74 x 89 x 75 cm",
      "面料": "柔软布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "奶油白，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "奶油白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "小户型、公寓、两房客厅、三房客厅、休闲区。"
    ],
    "audience": [
      "年轻家庭、情侣、民宿客户、喜欢奶油风和柔和空间的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2653 侧位+侧位+中位 全KD沙发 2025-7-15.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2653/GC-S2653-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2653/GC-S2653-cost-sheet.xlsx",
      "size": 457896,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2653\\S2653 侧位+侧位+中位 全KD沙发 2025-7-15.xlsx"
    }
  },
  "2655": {
    "name": "GC-S2655",
    "code": "GC-S2655",
    "sku": "GC-S2655",
    "category": "欧洲款式",
    "summary": "深蓝布艺三人沙发，木质底框稳重有型，多色可选，兼具复古质感与日常舒适。",
    "tags": [
      "三人位",
      "不KD结构",
      "布艺面料",
      "浅灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26553P: 209 x 84 x 72 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "深蓝 / 绿色 / 浅灰，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "两房客厅、三房客厅、公寓、样板间、民宿空间。"
    ],
    "audience": [
      "家庭用户、经销门店、喜欢复古色彩和木质细节的人群。"
    ],
    "suggestedPrice": "US$159",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2655 3P 不KD带底框沙发 高军客人 2025-7-21.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2655/GC-S2655-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2655/GC-S2655-cost-sheet.xlsx",
      "size": 812893,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2655\\S2655 3P 不KD带底框沙发 高军客人 2025-7-21.xlsx"
    }
  },
  "2656": {
    "name": "GC-S2656",
    "code": "GC-S2656",
    "sku": "GC-S2656",
    "category": "欧洲款式",
    "summary": "米白模块贵妃沙发，靠包饱满、组合灵活，轻松营造清爽舒适的家庭客厅。",
    "tags": [
      "模块+贵妃",
      "模块组合",
      "全KD结构",
      "布艺面料",
      "米白色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2656侧位+中位+贵妃: 210 x 73-140 x 63 cm; 侧位: 74 x 73 x 63 cm; 中位: 65.5 x 73 x 63 cm; 贵妃: 74 x 140 x 63 cm",
      "面料": "细纹布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "米白色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "三房客厅、开放式客厅、公寓、样板间。"
    ],
    "audience": [
      "年轻家庭、亲子家庭、喜欢浅色简约风和灵活组合的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2656 侧位+中位+贵妃 全KD沙发 2025-8-5.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2656/GC-S2656-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2656/GC-S2656-cost-sheet.xlsx",
      "size": 546836,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2656\\S2656 侧位+中位+贵妃 全KD沙发 2025-8-5.xlsx"
    }
  },
  "2658": {
    "name": "GC-S2658",
    "code": "GC-S2658",
    "sku": "GC-S2658",
    "category": "欧洲款式",
    "summary": "奶油色宽坐沙发，柔和翻边扶手搭配蓬松靠包，带来松弛舒适的客厅氛围。",
    "tags": [
      "3P+1P组合",
      "全KD结构",
      "布艺面料",
      "宽坐深坐",
      "米色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S26583P: 237 x 97 x 85 cm; 1P: 110 x 97 x 85 cm",
      "面料": "柔软布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "奶油米色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "布艺细节让这款奶油色宽坐沙发更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "两房客厅、三房客厅、休闲客厅、软装样板间。"
    ],
    "audience": [
      "注重舒适坐感的家庭、喜欢奶油风/现代风的客户、民宿软装客户。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2658 3+1P 全KD沙发 2025-8-18.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2658/GC-S2658-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2658/GC-S2658-cost-sheet.xlsx",
      "size": 1718082,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2658\\S2658 3+1P 全KD沙发 2025-8-18.xlsx"
    }
  },
  "2660": {
    "name": "GC-S2660",
    "code": "GC-S2660",
    "sku": "GC-S2660",
    "category": "欧洲款式",
    "summary": "米灰L型贵妃沙发，分格靠背与利落高脚设计结合，兼顾支撑感和现代轻盈感。",
    "tags": [
      "2P+贵妃",
      "座可KD",
      "布艺面料",
      "高脚设计",
      "米灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S26602P+贵妃: 236 x 100-164 x 71-84 cm; 2P: 151 x 100 x 71-84 cm; 贵妃: 86 x 164 x 71-84 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "米灰色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米灰色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中大户型、三房客厅、开放式客厅、样板间。"
    ],
    "audience": [
      "家庭用户、经销门店、喜欢简约实用和休闲躺坐的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2660 2P+贵妃 座可KD沙发 宋好语客人 2025-8-13.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2660/GC-S2660-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2660/GC-S2660-cost-sheet.xlsx",
      "size": 265819,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2660\\S2660 2P+贵妃 座可KD沙发 宋好语客人 2025-8-13.xlsx"
    }
  },
  "2661": {
    "name": "GC-S2661",
    "code": "GC-S2661",
    "sku": "GC-S2661",
    "category": "欧洲款式",
    "summary": "低矮休闲沙发搭配脚踏，造型轻松、坐躺自在，米白与橙棕色都很出片。",
    "tags": [
      "3P+脚踏",
      "并位可KD",
      "布艺面料",
      "低背造型",
      "米白色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S26613P+脚踏: 201 x 97-172 x 84 cm; 3P: 201 x 97 x 84 cm; 脚踏: 75 x 75 x 37 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "米白 / 橙棕，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "公寓客厅、两房客厅、休闲区、民宿空间。"
    ],
    "audience": [
      "年轻用户、情侣、租房/公寓用户、喜欢松弛感和拍照氛围的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2661 3P+脚踏 并可KD沙发 宋好语客人 2025-8-21.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2661/GC-S2661-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2661/GC-S2661-cost-sheet.xlsx",
      "size": 2219411,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2661\\S2661 3P+脚踏 并可KD沙发 宋好语客人 2025-8-21.xlsx"
    }
  },
  "2662": {
    "name": "GC-S2662",
    "code": "GC-S2662",
    "sku": "GC-S2662",
    "category": "欧洲款式",
    "summary": "白色模块组合沙发，双人位、单人位与脚踏灵活搭配，简洁干净又实用。",
    "tags": [
      "2P+1P+脚踏",
      "布艺面料",
      "米白色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S26622P+1P+脚踏: 171 x 120-67 x 63 cm; 2P: 119 x 67 x 63 cm; 1P: 53 x 67 x 63 cm; 脚踏: 83 x 53 x 38 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "白色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合公寓、卧室角落和小客厅补位，用较小面积换来明显的舒适提升。"
    ],
    "homes": [
      "小户型、公寓、两房客厅、休闲区、样板间。"
    ],
    "audience": [
      "年轻家庭、单身公寓用户、民宿客户、喜欢灵活组合的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2662 2P+1P+脚踏 何奕山客人 2025-8-26.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2662/GC-S2662-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2662/GC-S2662-cost-sheet.xlsx",
      "size": 1611490,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2662\\S2662 2P+1P+脚踏 何奕山客人 2025-8-26.xlsx"
    }
  },
  "2664": {
    "name": "GC-S2664",
    "code": "GC-S2664",
    "sku": "GC-S2664",
    "category": "欧洲款式",
    "summary": "珊瑚橙休闲沙发，低矮无扶手造型利落轻快，为空间增加明亮活力。",
    "tags": [
      "三人位",
      "并位可KD",
      "布艺面料",
      "低背造型",
      "橙色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26643P: 170 x 79 x 70 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "珊瑚橙，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "珊瑚橙色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "公寓、休闲区、书房、民宿、样板间。"
    ],
    "audience": [
      "年轻用户、软装设计师、民宿客户、喜欢亮色与轻盈家具的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2664 3P 并可KD沙发 2025-9-2.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2664/GC-S2664-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2664/GC-S2664-cost-sheet.xlsx",
      "size": 592236,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2664\\S2664 3P 并可KD沙发 2025-9-2.xlsx"
    }
  },
  "2669": {
    "name": "GC-S2669",
    "code": "GC-S2669",
    "sku": "GC-S2669",
    "category": "欧洲款式",
    "summary": "深灰布艺三人沙发，外扩扶手搭配木脚，沉稳耐看，适合现代家庭客厅。",
    "tags": [
      "三人位",
      "全KD结构",
      "布艺面料",
      "高脚设计",
      "深灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26693P: 215 x 91 x 92 cm",
      "面料": "布艺，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "深灰色，可选"
    },
    "views": [
      "正面视图",
      "45度视图",
      "场景搭配"
    ],
    "highlights": [
      "深灰色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "木质细节中和软包的厚重感，让整体更自然，也更容易搭配原木风空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "两房客厅、三房客厅、公寓、经销门店样品区。"
    ],
    "audience": [
      "家庭用户、务实型客户、喜欢深色耐脏和稳重风格的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2669 3P 全KD沙发 2025-10-22.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2669/GC-S2669-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2669/GC-S2669-cost-sheet.xlsx",
      "size": 249791,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2669\\S2669 3P 全KD沙发 2025-10-22.xlsx"
    }
  },
  "2670": {
    "name": "GC-S2670",
    "code": "GC-S2670",
    "sku": "GC-S2670",
    "category": "欧洲款式",
    "summary": "墨绿色绒感双人沙发，方正简洁、金属高脚轻盈利落，为客厅带来复古又高级的质感。",
    "tags": [
      "三人位",
      "座可KD",
      "绒感面料",
      "高脚设计",
      "绿色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26703P: 221 x 88 x 81 cm",
      "面料": "绒感布，可选",
      "填充": "高回弹海绵，可选",
      "颜色": "墨绿色，可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "墨绿色色调搭配绒感质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "绒感面料触感柔软，视觉上更温暖，适合打造有亲和力的客厅氛围。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小户型、公寓、两房客厅、三房客厅、样板间。"
    ],
    "audience": [
      "年轻家庭、情侣、单身公寓用户、喜欢复古轻奢和精致客厅氛围的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2670 3P 座可KD沙发 张翔客人 2026-3-20.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2670/GC-S2670-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2670/GC-S2670-cost-sheet.xlsx",
      "size": 925700,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2670\\S2670 3P 座可KD沙发 张翔客人 2026-3-20.xlsx"
    }
  },
  "2672": {
    "name": "GC-S2672",
    "code": "GC-S2672",
    "sku": "GC-S2672",
    "category": "产品目录",
    "summary": "GC-S2672 现代休闲沙发，2P+贵妃+脚踏组合沙发，适合中大户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "双人位+贵妃",
      "脚踏组合",
      "躺坐休闲",
      "模块组合",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2672",
      "结构": "2P+贵妃+脚踏组合沙发",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理7张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "2P+贵妃+脚踏组合沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "大空间里不显单薄，能把客厅气场撑起来，适合主推给升级型家庭客户。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中大户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2672 2P+贵妃+脚踏 AGL客人 2025-12-17.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2672/GC-S2672-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2672/GC-S2672-cost-sheet.xlsx",
      "size": 586106,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2672\\S2672 2P+贵妃+脚踏 AGL客人 2025-12-17.xlsx"
    }
  },
  "2673": {
    "name": "GC-S2673",
    "code": "GC-S2673",
    "sku": "GC-S2673",
    "category": "欧洲款式",
    "summary": "米白色多功能贵妃沙发，简约百搭、坐躺舒适，兼具储物实用性与温馨家居感。",
    "tags": [
      "2P+贵妃",
      "可KD结构",
      "功能沙发",
      "米白色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S26732P+贵妃: 247 x 97-145 x 90 cm; 2P: 125 x 97 x 90 cm; 贵妃: 125 x 145 x 90 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "小户型、公寓、两房客厅、三房客厅、开放式客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、租房用户、喜欢奶油风/简约风、注重收纳和舒适体验的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2673 2P+贵妃 扶手、并KD沙发 AGL客人 2026-1-7.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2673/GC-S2673-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2673/GC-S2673-cost-sheet.xlsx",
      "size": 1691526,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2673\\S2673 2P+贵妃 扶手、并KD沙发 AGL客人 2026-1-7.xlsx"
    }
  },
  "2674": {
    "name": "GC-S2674",
    "code": "GC-S2674",
    "sku": "GC-S2674",
    "category": "欧洲款式",
    "summary": "焦糖棕皮感三人沙发，经典复古又高级，轻松提升客厅质感。",
    "tags": [
      "三人位",
      "皮感面料",
      "棕色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S26743P: 194 x 76 x 83 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "焦糖棕色调搭配皮感质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "皮感表面更显利落高级，日常打理轻松，适合喜欢干净质感的客厅。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "中小户型、三房两厅、公寓、现代客厅、复古风客厅。"
    ],
    "audience": [
      "年轻家庭、品质型用户、喜欢复古轻奢风、追求耐看耐用和高级质感的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2692": {
    "name": "GC-S2692",
    "code": "GC-S2692",
    "sku": "GC-S2692",
    "category": "欧洲款式",
    "summary": "深咖色模块布艺沙发，低矮宽坐、沉稳耐看，轻松打造温暖高级的现代客厅氛围。",
    "tags": [
      "标准沙发",
      "布艺面料",
      "低背造型",
      "宽坐深坐",
      "棕色",
      "客厅沙发"
    ],
    "specs": {
      "尺寸": "S26924P: 280 x 90 x 68 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "深咖色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "外观耐看、受众面广，适合做长期主推款，家庭自用和渠道销售都稳妥。"
    ],
    "homes": [
      "中小户型、公寓、三房两厅、现代客厅、开放式客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、租房用户、喜欢简约沉稳风格、注重实用舒适的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2693": {
    "name": "GC-S2693",
    "code": "GC-S2693",
    "sku": "GC-S2693",
    "category": "产品目录",
    "summary": "GC-S2693 现代休闲沙发，米白色2P+贵妃组合，适合中大户型客厅、开放式客餐厅及经销展示使用。",
    "tags": [
      "双人位+贵妃",
      "L型组合",
      "米白色",
      "高脚设计",
      "中大户型",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2693",
      "结构": "2P+贵妃组合沙发",
      "包装/工艺": "常规沙发结构 / 高脚设计",
      "图片": "已整理6张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "米白色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "靠包与坐包比例协调，既有柔软包裹，也保留支撑感，不会一坐就塌。",
      "大空间里不显单薄，能把客厅气场撑起来，适合主推给升级型家庭客户。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
      "家庭影音区",
      "样板间"
    ],
    "audience": [
      "重视躺坐舒适感的家庭用户",
      "中大户型客户",
      "软装设计师和门店客户"
    ],
    "suggestedPrice": "",
    "internalNotes": []
  },
  "2704": {
    "name": "GC-S2704",
    "code": "GC-S2704",
    "sku": "GC-S2704",
    "category": "欧洲款式",
    "summary": "深灰色休闲布艺沙发，宽大坐面搭配柔软靠包，兼具舒适躺坐与现代居家质感。",
    "tags": [
      "1/2/3人位可选",
      "并位可KD",
      "布艺面料",
      "深灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27043P: 198 x 88 x 84 cm; 2P: 159 x 88 x 84 cm; 1P: 100.5 x 88 x 84 cm",
      "面料": "可选",
      "填充": "可定制",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "深灰色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "中小户型、三房两厅、公寓客厅、现代客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、租房用户、喜欢简约实用和舒适躺坐的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2704 3+2+1P 并可KD沙发 2025-6-28.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2704/GC-S2704-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2704/GC-S2704-cost-sheet.xlsx",
      "size": 941202,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2704\\S2704 3+2+1P 并可KD沙发 2025-6-28.xlsx"
    }
  },
  "2705": {
    "name": "GC-S2705",
    "code": "GC-S2705",
    "sku": "GC-S2705",
    "category": "欧洲款式",
    "summary": "浅灰米色双人布艺沙发，简约轻盈、柔软舒适，轻松打造温馨耐看的现代客厅。",
    "tags": [
      "1/2/3人位可选",
      "布艺面料",
      "浅灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27053P: 174 x 72 x 68 cm; 2P: 134 x 72 x 68 cm; 1P: 79 x 72 x 68 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "浅灰米色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "小户型、公寓、书房、次卧、中小客厅。"
    ],
    "audience": [
      "年轻人、情侣、小家庭、租房用户、喜欢简约北欧风的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2706": {
    "name": "GC-S2706",
    "code": "GC-S2706",
    "sku": "GC-S2706",
    "category": "欧洲款式",
    "summary": "云朵般包裹感与轻奢线条结合，一款兼具颜值与舒适度的现代休闲沙发。",
    "tags": [
      "1/2/3人位可选",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27063P: 208 x 87 x 86 cm; 2P: 168 x 87 x 86 cm; 1P: 108 x 87 x 86 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "云朵般包裹感与轻奢线条结合提供多规格选择，可单件补位，也能成套搭配，门店推荐时更容易匹配不同户型。",
      "靠背角度和座深更偏日常舒适，既适合端坐会客，也适合下班后放松。",
      "面料和颜色可按空间风格搭配，门店推荐时更容易覆盖不同客户审美。"
    ],
    "homes": [
      "中小户型、公寓、现代住宅、轻奢客厅。"
    ],
    "audience": [
      "年轻家庭、都市白领、注重舒适体验与家居颜值的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2708": {
    "name": "GC-S2708",
    "code": "GC-S2708",
    "sku": "GC-S2708",
    "category": "日本款式",
    "summary": "灰蓝色双人布艺沙发，简约轻巧、坐感舒适，为小户型客厅带来清新自然的北欧氛围。",
    "tags": [
      "1/2/3人位可选",
      "布艺面料",
      "灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27083P: 180 x 83 x 84 cm; 2P: 140 x 83 x 84 cm; 1P: 80 x 83 x 84 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "灰蓝色调搭配布艺质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "小户型、公寓、书房、次卧、休闲区。"
    ],
    "audience": [
      "年轻人、情侣、小家庭、租房用户、喜欢简约北欧风的人群。"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2712": {
    "name": "GC-S2712",
    "code": "GC-S2712",
    "sku": "GC-S2712",
    "category": "欧洲款式",
    "summary": "深灰色模块沙发，简约耐看、坐感宽厚，轻松打造现代舒适客厅。",
    "tags": [
      "模块+贵妃",
      "模块组合",
      "深灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2712侧位+中位+贵妃: 209 x 73-123 x 69 cm; 侧位: 75 x 73 x 69 cm; 中位: 63 x 73 x 69 cm; 贵妃: 73 x 123 x 69 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "深灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "宽坐深躺的休闲感更明显，靠包承托自然，坐着聊天或躺着看电视都舒服。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "中小户型、三房两厅、公寓、现代客厅。"
    ],
    "audience": [
      "年轻家庭、情侣、租房公寓用户、喜欢简约实用风格的人群。"
    ],
    "suggestedPrice": "US$139/套",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2713": {
    "name": "GC-S2713",
    "code": "GC-S2713",
    "sku": "GC-S2713",
    "category": "欧洲款式",
    "summary": "奶油风模块沙发，柔软大坐深搭配左贵妃位，打造慵懒舒适的高级客厅氛围。",
    "tags": [
      "贵妃位",
      "带脚踏",
      "模块组合",
      "宽坐深坐",
      "米色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2713侧位+侧位+中位: 280 x 100 x 85 cm; 侧位: 100 x 100 x 85 cm; 中位: 80 x 100 x 85 cm; 脚踏: 100 x 80 x 47 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "奶油风模块沙发自带可躺可坐的休闲延展位，追剧、午休、亲子陪伴都比直排沙发更放松。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "中大户型、横厅、开放式客厅、大平层。"
    ],
    "audience": [
      "年轻家庭、情侣、喜欢奶油风/极简风、追求舒适躺坐体验的人群。"
    ],
    "suggestedPrice": "US$239",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ]
  },
  "2715": {
    "name": "GC-S2715",
    "code": "GC-S2715",
    "sku": "GC-S2715",
    "category": "欧洲款式",
    "summary": "清爽蓝色布艺双人沙发，线条简洁、坐感舒适，为客厅带来轻松自然的居家氛围。",
    "tags": [
      "1/2/3人位可选",
      "全KD结构",
      "布艺面料",
      "蓝色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27153P: 173 x 73 x 77 cm; 2P: 137 x 73 x 77 cm; 1P: 80 x 73 x 77 cm",
      "面料": "可选",
      "填充": "可选",
      "颜色": "可选"
    },
    "views": [
      "正面视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "布艺细节让这款清爽蓝色布艺双人沙发更有质感，近看有层次，远看也能撑起客厅主视觉。",
      "软包比例饱满，坐感亲和，能让客厅从“好看”变成真正愿意久待的空间。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "小户型、中小客厅、公寓、书房、休闲区。"
    ],
    "audience": [
      "年轻家庭、情侣、单身公寓用户、喜欢简约清新风格的人群。"
    ],
    "suggestedPrice": "$122",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2715 3+2+1P 全KD沙发 2025-12-13.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2715/GC-S2715-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2715/GC-S2715-cost-sheet.xlsx",
      "size": 582587,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2715\\S2715 3+2+1P 全KD沙发 2025-12-13.xlsx"
    }
  },
  "2719": {
    "name": "GC-S2719",
    "code": "GC-S2719",
    "sku": "GC-S2719",
    "category": "欧洲款式",
    "summary": "奶油米白色布艺沙发，圆润饱满的轮廓搭配细腻肌理面料，营造温柔高级的家居氛围。加厚分区坐垫带来舒适承托，大尺寸靠包提升背部支撑感，两侧圆弧扶手柔和舒适，既适合日常会客，也适合休闲放松。整体造型简洁大气，百搭耐看，是现代客厅中兼具颜值与舒适度的理想选择。",
    "tags": [
      "三人位",
      "可KD结构",
      "绒感面料",
      "灰色",
      "家庭客厅"
    ],
    "specs": {
      "尺寸": "S27193P: 225 x 99 x 92 cm; 3P并架打平尺寸: 225 x 145 x 62 cm",
      "面料": "高密织纹布",
      "填充": "高回弹海绵 + 羽绒棉",
      "颜色": "暖灰 / 米白 / 深咖"
    },
    "views": [
      "正视图",
      "侧面视图",
      "场景搭配"
    ],
    "highlights": [
      "奶油米白色调搭配绒感质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "绒感面料触感柔软，视觉上更温暖，适合打造有亲和力的客厅氛围。",
      "关键部位可拆装，入户安装更轻松，也方便门店备货、配送和售后维护。"
    ],
    "homes": [
      "适合客厅、影音室、公寓、样板间等空间。"
    ],
    "audience": [
      "适合日常会客、休闲、看电视使用。"
    ],
    "suggestedPrice": "$133",
    "internalNotes": [
      "常规色库存周期 7-10 天，定制色生产周期约 25 天。",
      "主推卖点为模块化组合与高回弹坐感，可搭配地毯和茶几套餐销售。"
    ],
    "costSheet": {
      "name": "S2719  3P 扶手、并KD AGL客人报价.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2719/GC-S2719-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2719/GC-S2719-cost-sheet.xlsx",
      "size": 2436360,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2719\\S2719  3P 扶手、并KD AGL客人报价.xlsx"
    }
  },
  "2720": {
    "name": "GC-S2720",
    "code": "GC-S2720",
    "sku": "GC-S2720",
    "category": "产品目录",
    "summary": "GC-S2720 现代休闲沙发，S1539改款3P沙发，适合家庭客厅、公寓空间及经销展示使用。",
    "tags": [
      "三人位",
      "家庭客厅",
      "现代休闲"
    ],
    "specs": {
      "型号": "GC-S2720",
      "结构": "S1539改款3P沙发",
      "包装/工艺": "常规沙发结构",
      "图片": "已整理8张多角度产品图",
      "风格": "现代休闲"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "S1539改款3P沙发是客厅主位的安心选择，尺寸够用又不夸张，日常会客和家庭观影都合适。",
      "高回弹海绵带来柔软但不松垮的坐感，靠背承托自然，日常聊天、观影都舒服。",
      "款式不挑软装，能适配现代、奶油、北欧等多种客厅风格，成交覆盖面更广。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [],
    "costSheet": {
      "name": "S2720（S1539改款） 3P 2026-1-5.xlsx",
      "uploadedAt": "2026-06-22 15:58",
      "dataUrl": "/server-data/cost-sheets/gc-s2720/GC-S2720-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2720/GC-S2720-cost-sheet.xlsx",
      "size": 715421,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2720\\S2720（S1539改款） 3P 2026-1-5.xlsx"
    }
  },
  "2721": {
    "name": "GC-S2721",
    "code": "GC-S2721",
    "sku": "GC-S2721",
    "category": "欧洲款式",
    "summary": "绿色灯芯绒模块沙发，圆润扶手与厚实坐包带来柔软放松的坐感，适合客厅、样板间和轻松自然的家居空间。",
    "tags": [
      "模块组合",
      "绒感面料",
      "浅灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S2721侧位+侧位: 209 x 112-126 x 78 cm",
      "面料": "可选",
      "填充": "高回弹海绵 / 弹簧包",
      "颜色": "绿色 / 米白 / 浅灰"
    },
    "views": [
      "正面视图",
      "45度视图",
      "侧面视图",
      "背面视图",
      "场景搭配"
    ],
    "highlights": [
      "米白色调搭配灯芯绒质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "绒感面料触感柔软，视觉上更温暖，适合打造有亲和力的客厅氛围。",
      "放进大客厅更显完整，能承担家庭会客、休闲观影和亲友聚会的核心位置。"
    ],
    "homes": [
      "家庭客厅",
      "公寓会客区",
      "样板间",
      "休闲空间"
    ],
    "audience": [
      "重视舒适坐感的家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "后台新增产品，可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2721 侧位+侧位 AGL客人 2026-1-31.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2721/GC-S2721-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2721/GC-S2721-cost-sheet.xlsx",
      "size": 1046776,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2721\\S2721 侧位+侧位 AGL客人 2026-1-31.xlsx"
    }
  },
  "2728": {
    "name": "GC-S2728",
    "code": "GC-S2728",
    "sku": "GC-S2728",
    "category": "欧洲款式",
    "summary": "绿色绒布贵妃沙发，圆润扶手搭配厚实坐垫，触感柔软，适合小客厅和休闲空间使用。",
    "tags": [
      "贵妃位",
      "3P+脚踏",
      "不KD结构",
      "绒感面料",
      "绿色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "S27283P: 159 x 73 x 79 cm; 脚踏: 72 x 52 x 43 cm",
      "面料": "可选",
      "颜色": "绿色"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "绿色色调搭配绒感质感，视觉温暖又有层次，摆进客厅马上更有生活氛围。",
      "绒感面料触感柔软，视觉上更温暖，适合打造有亲和力的客厅氛围。",
      "整装结构整体感更强，落座稳定扎实，适合强调品质和长期使用感的客户。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2728 3P+脚踏 不KD沙发 宋好语客人 2026-4-28.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2728/GC-S2728-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2728/GC-S2728-cost-sheet.xlsx",
      "size": 696370,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2728\\S2728 3P+脚踏 不KD沙发 宋好语客人 2026-4-28.xlsx"
    }
  },
  "2733": {
    "name": "GC-S2733",
    "code": "GC-S2733",
    "sku": "GC-S2733",
    "category": "欧洲款式",
    "summary": "灰色弧形双人沙发，低矮圆润造型搭配柔软靠包，整体简洁舒适，适合现代客厅和公寓空间。",
    "tags": [
      "双人位",
      "全KD结构",
      "低背造型",
      "灰色",
      "小户型适配"
    ],
    "specs": {
      "尺寸": "S27332P: 155 x 86 x 60 cm",
      "面料": "可选",
      "颜色": "灰色"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "灰色弧形双人沙发体量轻巧但坐感完整，小客厅、公寓、卧室休闲区都能放得自然。",
      "坐包厚实、回弹稳定，长时间坐着也不容易疲惫，适合高频使用的家庭客厅。",
      "全KD结构便于包装、搬运和入户，高楼层、公寓门洞、海外运输都更省心。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ],
    "costSheet": {
      "name": "S2733 2P 全KD沙发 余露客人 2026-6-8.xlsx",
      "uploadedAt": "2026-06-15 18:13",
      "dataUrl": "/server-data/cost-sheets/gc-s2733/GC-S2733-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2733/GC-S2733-cost-sheet.xlsx",
      "size": 1106885,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2733\\S2733 2P 全KD沙发 余露客人 2026-6-8.xlsx"
    }
  },
  "2734": {
    "name": "GC-S2734",
    "code": "GC-S2734",
    "sku": "GC-S2734",
    "category": "欧洲款式",
    "summary": "浅灰色模块转角沙发，方正线条搭配灵活组合结构，适合客厅、样板间和休闲会客区域。",
    "tags": [
      "转角组合",
      "浅灰色",
      "中大户型客厅"
    ],
    "specs": {
      "尺寸": "待补充",
      "面料": "可选",
      "颜色": "浅灰色"
    },
    "views": [
      "正面图",
      "45度图",
      "侧面图",
      "背面图",
      "场景图"
    ],
    "highlights": [
      "浅灰色调干净耐看，能提亮客厅氛围，也让整套空间更容易拍出高级感。",
      "坐面留给身体的余量更充足，盘腿、侧坐、半躺都自在，客厅放松感更强。",
      "适合开放式客餐厅和中大户型，摆出来空间更饱满，也更容易形成成交记忆点。"
    ],
    "homes": [
      "家庭客厅",
      "公寓空间",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "家庭用户",
      "软装设计师",
      "经销门店与样板间客户"
    ],
    "suggestedPrice": "",
    "internalNotes": [
      "从本地资料上传的新产品，后续可继续补充内部备注。"
    ]
  }
};

function getMappedDefaultProducts() {
  const map = window.GCSOFA_PRODUCT_IMAGE_MAP || {};
  const entries = Object.entries(map).sort(([a], [b]) => Number(b) - Number(a));
  if (!entries.length) return normalizeProductsViewCopy(cloneProducts(GCSOFA_DEFAULT_PRODUCTS));
  return entries.map(([key, entry], index) => {
    const productCode = `GC-S${key}`;
    const copy = GCSOFA_PRODUCT_COPY_MAP[key] || {};
    return {
      id: `gc-s${key}`,
      name: copy.name || productCode,
      code: copy.code || productCode,
      sku: copy.sku || productCode,
      category: copy.category || "产品目录",
      image: entry.thumbFallback || entry.thumb || entry.thumbScene || entry.fallback || entry.scene || entry.front || entry.images?.[0] || "",
      summary: copy.summary || `${productCode} 沙发产品，点击图片查看多角度详情图。`,
      tags: copy.tags?.length ? copy.tags : [productCode, "GCSOFA", "沙发"],
      specs: Object.keys(copy.specs || {}).length ? copy.specs : { "型号": productCode, "图片": "多角度产品图" },
      views: normalizeProductViewLabels(copy.views?.length ? copy.views : ["视角1", "视角2", "视角3", "视角4", "场景图"]),
      highlights: copy.highlights?.length ? copy.highlights : ["已整理产品图片", "支持详情页多图展示"],
      homes: copy.homes?.length ? copy.homes : ["客厅", "样板间", "经销展示"],
      audience: copy.audience?.length ? copy.audience : ["经销客户", "工程客户", "家居零售客户"],
      suggestedPrice: copy.suggestedPrice || "",
      introImages: {
        front: entry.front || "",
        angle: entry.angle || "",
        side: entry.side || "",
        back: entry.back || "",
        dimensions: entry.dimensions || ""
      },
      extraIntroImages: (entry.images || [])
        .filter(Boolean)
        .filter((image, imageIndex, images) => {
          const reservedImages = new Set([entry.scene, entry.front, entry.angle, entry.side, entry.back].filter(Boolean));
          return !reservedImages.has(image) && images.indexOf(image) === imageIndex;
        })
        .map((image, imageIndex) => ({
        id: `extra-intro-gc-s${key}-${imageIndex + 1}`,
        label: `产品图 ${imageIndex + 1}`,
        title: productCode,
        description: `${productCode} 产品展示图 ${imageIndex + 1}`,
        image,
        position: "center center"
      })),
      internalNotes: copy.internalNotes || [],
      costSheet: copy.costSheet || null,
      costRows: [],
      productionRows: [],
      createdAt: 1780000000000 + index,
      sortOrder: index
    };
  });
}

function mergeProductCopy(products, mappedDefaults) {
  const copyByKey = new Map(mappedDefaults.map((product) => [getProductImageKey(product), product]));
  const mergedKeys = new Set();
  const mergedProducts = sortProducts(products).map((product) => {
    const key = getProductImageKey(product);
    const source = copyByKey.get(key);
    if (!source) return normalizeProductViewCopy(product);
    mergedKeys.add(key);
    const placeholderSummary = !product.summary || /沙发产品，点击图片查看多角度详情图/.test(product.summary);
    return {
      ...product,
      name: product.name || source.name,
      code: product.code || source.code,
      sku: product.sku || source.sku,
      image:
        product.image && !isLocalOnlyImageSource(product.image) && !isMappedProductImageSource(product.image)
          ? product.image
          : source.image || product.image,
      category: product.category && product.category !== '产品目录' ? product.category : source.category,
      summary: placeholderSummary ? source.summary : product.summary,
      tags: product.tags?.length && !product.tags.includes('GCSOFA') ? product.tags : source.tags,
      specs: Object.keys(product.specs || {}).length > 2 ? product.specs : source.specs,
      views: normalizeProductViewLabels(product.views?.length ? product.views : source.views),
      highlights: product.highlights?.length && !product.highlights.includes('已整理产品图片') ? product.highlights : source.highlights,
      homes: product.homes?.length && !product.homes.includes('客厅') ? product.homes : source.homes,
      audience: product.audience?.length && !product.audience.includes('经销客户') ? product.audience : source.audience,
      suggestedPrice: product.suggestedPrice || source.suggestedPrice,
      extraIntroImages: hasManualExtraIntroImages(product.extraIntroImages) ? product.extraIntroImages : source.extraIntroImages,
      internalNotes: product.internalNotes?.length ? product.internalNotes : source.internalNotes,
      costSheet: product.costSheet?.dataUrl || product.costSheet?.path ? product.costSheet : source.costSheet,
    };
  });
  const missingMappedProducts = mappedDefaults.filter((product) => !mergedKeys.has(getProductImageKey(product)));
  return sortProducts([...mergedProducts, ...missingMappedProducts]);
}

function getDefaultProducts() {
  return sortProducts(getMappedDefaultProducts());
}
function getProducts() {
  const mappedDefaults = getDefaultProducts();
  const saved = localStorage.getItem(PRODUCT_STORE_KEY);
  if (!saved) return mappedDefaults;

  try {
    const products = sortProducts(JSON.parse(saved));
    return products.length ? mergeProductCopy(products, mappedDefaults) : mappedDefaults;
  } catch {
    return mappedDefaults;
  }
}

function saveProducts(products) {
  saveCloudStore(PRODUCT_STORE_KEY, products);
}

function findProduct(id) {
  return getProducts().find((product) => product.id === id);
}

function upsertProduct(product) {
  const products = getProducts();
  const index = products.findIndex((item) => item.id === product.id);
  if (index >= 0) {
    products[index] = {
      ...product,
      createdAt: products[index].createdAt || product.createdAt || Date.now(),
      sortOrder: Number.isFinite(Number(products[index].sortOrder)) ? Number(products[index].sortOrder) : index,
    };
  } else {
    products.unshift({
      ...product,
      createdAt: Date.now(),
      sortOrder: -1,
    });
  }
  saveProducts(normalizeProductOrder(products));
}

function deleteProduct(id) {
  saveProducts(normalizeProductOrder(getProducts().filter((product) => product.id !== id)));
}

function sortProducts(products) {
  const hasManualOrder = products.some((product) => product.sortOrder !== undefined);
  return [...products].sort((a, b) => {
    if (hasManualOrder) {
      const orderA = Number.isFinite(Number(a.sortOrder)) ? Number(a.sortOrder) : Number.MAX_SAFE_INTEGER;
      const orderB = Number.isFinite(Number(b.sortOrder)) ? Number(b.sortOrder) : Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) return orderA - orderB;
    }
    return (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0);
  });
}

function normalizeProductOrder(products) {
  return sortProducts(products).map((product, index) => ({
    ...product,
    sortOrder: index,
  }));
}

function saveOrderedProducts(products) {
  saveProducts(products.map((product, index) => ({ ...product, sortOrder: index })));
}

function getCategories() {
  const saved = localStorage.getItem(CATEGORY_STORE_KEY);
  if (!saved) {
    return cloneData(GCSOFA_DEFAULT_CATEGORIES);
  }

  try {
    return JSON.parse(saved);
  } catch {
    return cloneData(GCSOFA_DEFAULT_CATEGORIES);
  }
}

function saveCategories(categories) {
  saveCloudStore(CATEGORY_STORE_KEY, categories);
}

function findCategory(id) {
  return getCategories().find((category) => category.id === id);
}

function findCategoryByName(name) {
  return getCategories().find((category) => category.name === name);
}

function upsertCategory(category, previousName = "") {
  const categories = getCategories();
  const index = categories.findIndex((item) => item.id === category.id);
  if (index >= 0) {
    categories[index] = category;
  } else {
    categories.push(category);
  }
  saveCategories(categories);

  if (previousName && previousName !== category.name) {
    const products = getProducts().map((product) =>
      product.category === previousName ? { ...product, category: category.name } : product
    );
    saveProducts(products);
  }
}

function deleteCategory(id) {
  saveCategories(getCategories().filter((category) => category.id !== id));
}

function getFactoryProfile() {
  const saved = localStorage.getItem(FACTORY_STORE_KEY);
  if (!saved) {
    return cloneData(GCSOFA_DEFAULT_FACTORY_PROFILE);
  }

  try {
    const profile = JSON.parse(saved);
    return {
      ...cloneData(GCSOFA_DEFAULT_FACTORY_PROFILE),
      ...profile,
      historyItems: profile.historyItems?.length ? profile.historyItems : cloneData(GCSOFA_DEFAULT_FACTORY_PROFILE.historyItems),
      galleryItems: profile.galleryItems?.length ? profile.galleryItems : cloneData(GCSOFA_DEFAULT_FACTORY_PROFILE.galleryItems),
    };
  } catch {
    return cloneData(GCSOFA_DEFAULT_FACTORY_PROFILE);
  }
}

function saveFactoryProfile(profile) {
  saveCloudStore(FACTORY_STORE_KEY, profile);
}

function getCategoryLink(category) {
  return `products.html?category=${encodeURIComponent(category.id)}#products`;
}

function renderCategoryMenus() {
  const categories = getCategories();
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.innerHTML = categories
      .map((category) => `<a href="${getCategoryLink(category)}">${category.name}</a>`)
      .join("");
  });
}

function getAccounts() {
  const accounts = cloneData(GCSOFA_DEFAULT_ACCOUNTS);
  const savedAccounts = getSavedAccounts();

  Object.entries(savedAccounts).forEach(([username, account]) => {
    if (account === null) {
      if (GCSOFA_DEFAULT_ACCOUNTS[username]?.role === "sales") return;
      delete accounts[username];
    } else {
      accounts[username] = account;
    }
  });

  return accounts;
}

function getSavedAccounts() {
  const saved = localStorage.getItem(ACCOUNT_STORE_KEY);
  if (!saved) return {};

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

function saveAccounts(accounts) {
  saveCloudStore(ACCOUNT_STORE_KEY, accounts);
}

function upsertAccount(username, account) {
  const accounts = getSavedAccounts();
  accounts[username] = {
    password: account.password,
    name: account.name || username,
    role: account.role || "registered",
  };
  saveAccounts(accounts);
}

function deleteAccount(username) {
  const accounts = getSavedAccounts();
  if (GCSOFA_DEFAULT_ACCOUNTS[username]) {
    accounts[username] = null;
  } else {
    delete accounts[username];
  }
  saveAccounts(accounts);

  const permissions = getPermissionMap();
  delete permissions[username];
  savePermissionMap(permissions);
}

function getRoleLabel(role) {
  return ROLE_LEVELS.find((item) => item.id === role)?.label || "登陆用户";
}

function getDefaultPermissionsForRole(role) {
  const allowed = DEFAULT_ROLE_PERMISSIONS[role] || DEFAULT_ROLE_PERMISSIONS.registered;
  return PERMISSION_MODULES.reduce((permissions, module) => {
    permissions[module.id] = allowed.includes(module.id);
    return permissions;
  }, {});
}

function getPermissionMap() {
  const saved = localStorage.getItem(PERMISSION_STORE_KEY);
  if (!saved) return {};

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

function savePermissionMap(permissions) {
  saveCloudStore(PERMISSION_STORE_KEY, permissions);
}

function getPermissionsForUser(user) {
  if (!user) {
    return getDefaultPermissionsForRole("guest");
  }

  const saved = getPermissionMap()[user.username];
  const permissions = {
    ...getDefaultPermissionsForRole(user.role),
    ...(saved || {}),
  };
  if (saved?.cost) {
    if (saved.costUpload === undefined) permissions.costUpload = true;
    if (saved.costDownload === undefined) permissions.costDownload = true;
  }
  delete permissions.cost;
  return permissions;
}

function saveUserPermissions(username, permissions) {
  const map = getPermissionMap();
  map[username] = permissions;
  savePermissionMap(map);
}

function userCan(moduleId, user = getCurrentUser()) {
  return Boolean(getPermissionsForUser(user)[moduleId]);
}

function slugify(value) {
  return (
    String(value)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `product-${Date.now()}`
  );
}
