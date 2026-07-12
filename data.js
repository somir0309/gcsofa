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
    const match = String(value || "").match(/(?:GC[-_\s]*S)?(\d{4})/i);
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
  return new Promise((resolve, reject) => {
    pendingCloudSaves[cloudKey] = setTimeout(async () => {
      try {
        const response = await fetch(`${CLOUD_DATA_ENDPOINT}?key=${encodeURIComponent(cloudKey)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });
        let payload = null;
        try {
          payload = await response.json();
        } catch (parseError) {
          payload = null;
        }
        if (!response.ok || payload?.ok === false) {
          throw new Error(payload?.message || `Cloud data save failed: ${response.status}`);
        }
        resolve(payload);
      } catch (error) {
        console.warn("Cloud data save failed", cloudKey, error);
        reject(error);
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
  "1600": {
    "name": "GC-S1600",
    "code": "GC-S1600",
    "sku": "GC-S1600",
    "category": "欧洲款式",
    "summary": "GC-S1600 是一款轻柔现代无扶手休闲单椅，采用奶白色绒感布艺，弧形绗缝靠背与低重心坐面带来放松包裹感。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "无扶手休闲单椅",
      "轻柔现代",
      "绒感布艺",
      "奶白色"
    ],
    "specs": {
      "型号": "GC-S1600",
      "类型": "无扶手休闲单椅",
      "风格": "轻柔现代",
      "面料": "绒感布艺",
      "颜色": "奶白色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "弧形绗缝靠背与低重心坐面带来放松包裹感，让产品在视觉和使用体验上都有清晰辨识度。",
      "奶白色绒感布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1602": {
    "name": "GC-S1602",
    "code": "GC-S1602",
    "sku": "GC-S1602",
    "category": "欧洲款式",
    "summary": "GC-S1602 是一款北欧休闲脚踏组合双人沙发，采用棕色/灰色柔软布艺，外扩扶手搭配独立脚踏，兼顾日常会客与舒展休息。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "脚踏组合双人沙发",
      "北欧休闲",
      "柔软布艺",
      "棕色/灰色"
    ],
    "specs": {
      "型号": "GC-S1602",
      "类型": "脚踏组合双人沙发",
      "风格": "北欧休闲",
      "面料": "柔软布艺",
      "颜色": "棕色/灰色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "外扩扶手搭配独立脚踏，兼顾日常会客与舒展休息，让产品在视觉和使用体验上都有清晰辨识度。",
      "棕色/灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1603": {
    "name": "GC-S1603",
    "code": "GC-S1603",
    "sku": "GC-S1603",
    "category": "欧洲款式",
    "summary": "GC-S1603 是一款现代简约直排客厅沙发，采用橄榄绿色耐磨布艺，利落扶手与轻盈金属脚形成清爽、易搭配的客厅轮廓。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "直排客厅沙发",
      "现代简约",
      "耐磨布艺",
      "橄榄绿色"
    ],
    "specs": {
      "型号": "GC-S1603",
      "类型": "直排客厅沙发",
      "风格": "现代简约",
      "面料": "耐磨布艺",
      "颜色": "橄榄绿色",
      "图片": "已整理2张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "利落扶手与轻盈金属脚形成清爽、易搭配的客厅轮廓，让产品在视觉和使用体验上都有清晰辨识度。",
      "橄榄绿色耐磨布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1605": {
    "name": "GC-S1605",
    "code": "GC-S1605",
    "sku": "GC-S1605",
    "category": "欧洲款式",
    "summary": "GC-S1605 是一款慵懒现代低矮模块沙发，采用浅灰色柔软布艺，低重心模块可灵活调整组合，适合休闲坐卧与开放式空间。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "低矮模块沙发",
      "慵懒现代",
      "柔软布艺",
      "浅灰色"
    ],
    "specs": {
      "型号": "GC-S1605",
      "类型": "低矮模块沙发",
      "风格": "慵懒现代",
      "面料": "柔软布艺",
      "颜色": "浅灰色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "低重心模块可灵活调整组合，适合休闲坐卧与开放式空间，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1606": {
    "name": "GC-S1606",
    "code": "GC-S1606",
    "sku": "GC-S1606",
    "category": "欧洲款式",
    "summary": "GC-S1606 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1606",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1606 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "1608": {
    "name": "GC-S1608",
    "code": "GC-S1608",
    "sku": "GC-S1608",
    "category": "欧洲款式",
    "summary": "GC-S1608 是一款北欧复古客厅沙发套系，采用蓝色/绿色柔软布艺，弧形扶手与外展木脚增强亲和感，套系陈列完整统一。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "客厅沙发套系",
      "北欧复古",
      "柔软布艺",
      "蓝色/绿色"
    ],
    "specs": {
      "型号": "GC-S1608",
      "类型": "客厅沙发套系",
      "风格": "北欧复古",
      "面料": "柔软布艺",
      "颜色": "蓝色/绿色",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "弧形扶手与外展木脚增强亲和感，套系陈列完整统一，让产品在视觉和使用体验上都有清晰辨识度。",
      "蓝色/绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1612": {
    "name": "GC-S1612",
    "code": "GC-S1612",
    "sku": "GC-S1612",
    "category": "欧洲款式",
    "summary": "GC-S1612 是一款复古轻奢皮艺休闲单椅，采用棕色皮艺面料，竖向拉线高背与细金属脚兼具包裹感和精致感。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "皮艺休闲单椅",
      "复古轻奢",
      "皮艺面料",
      "棕色"
    ],
    "specs": {
      "型号": "GC-S1612",
      "类型": "皮艺休闲单椅",
      "风格": "复古轻奢",
      "面料": "皮艺面料",
      "颜色": "棕色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "竖向拉线高背与细金属脚兼具包裹感和精致感，让产品在视觉和使用体验上都有清晰辨识度。",
      "棕色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1613": {
    "name": "GC-S1613",
    "code": "GC-S1613",
    "sku": "GC-S1613",
    "category": "欧洲款式",
    "summary": "GC-S1613 是一款现代都市转角组合沙发，采用深灰色耐磨布艺，贵妃位与直排座位衔接自然，可满足会客与舒展坐卧。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "转角组合沙发",
      "现代都市",
      "耐磨布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1613",
      "类型": "转角组合沙发",
      "风格": "现代都市",
      "面料": "耐磨布艺",
      "颜色": "深灰色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "贵妃位与直排座位衔接自然，可满足会客与舒展坐卧，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色耐磨布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1615": {
    "name": "GC-S1615",
    "code": "GC-S1615",
    "sku": "GC-S1615",
    "category": "欧洲款式",
    "summary": "GC-S1615 是一款现代简约大型转角组合沙发，采用灰色柔软布艺，多模块转角布局拥有充足承托，适合营造完整家庭会客中心。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "大型转角组合沙发",
      "现代简约",
      "柔软布艺",
      "灰色"
    ],
    "specs": {
      "型号": "GC-S1615",
      "类型": "大型转角组合沙发",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "灰色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "多模块转角布局拥有充足承托，适合营造完整家庭会客中心，让产品在视觉和使用体验上都有清晰辨识度。",
      "灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1618": {
    "name": "GC-S1618",
    "code": "GC-S1618",
    "sku": "GC-S1618",
    "category": "欧洲款式",
    "summary": "GC-S1618 是一款经典现代客厅沙发套系，采用深灰/浅灰柔软布艺，端正扶手和饱满靠包带来稳定坐感，套系搭配协调耐看。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "客厅沙发套系",
      "经典现代",
      "柔软布艺",
      "深灰/浅灰"
    ],
    "specs": {
      "型号": "GC-S1618",
      "类型": "客厅沙发套系",
      "风格": "经典现代",
      "面料": "柔软布艺",
      "颜色": "深灰/浅灰",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "端正扶手和饱满靠包带来稳定坐感，套系搭配协调耐看，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰/浅灰柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1619": {
    "name": "GC-S1619",
    "code": "GC-S1619",
    "sku": "GC-S1619",
    "category": "欧洲款式",
    "summary": "GC-S1619 是一款现代简约直排客厅沙发，采用深灰色柔软布艺，宽阔坐面与利落方扶手呈现稳重大方的会客气质。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "直排客厅沙发",
      "现代简约",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1619",
      "类型": "直排客厅沙发",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "宽阔坐面与利落方扶手呈现稳重大方的会客气质，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1621": {
    "name": "GC-S1621",
    "code": "GC-S1621",
    "sku": "GC-S1621",
    "category": "欧洲款式",
    "summary": "GC-S1621 是一款舒适现代单椅脚踏组合，采用深灰色柔软布艺，独立脚踏与高靠背形成完整休闲组合，坐姿和腿部承托更放松。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "单椅脚踏组合",
      "舒适现代",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1621",
      "类型": "单椅脚踏组合",
      "风格": "舒适现代",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "独立脚踏与高靠背形成完整休闲组合，坐姿和腿部承托更放松，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1622": {
    "name": "GC-S1622",
    "code": "GC-S1622",
    "sku": "GC-S1622",
    "category": "欧洲款式",
    "summary": "GC-S1622 是一款经典简约直排客厅沙发，采用深灰色柔软布艺，圆润扶手和厚实坐垫强调舒适感，整体轮廓稳重耐用。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "直排客厅沙发",
      "经典简约",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1622",
      "类型": "直排客厅沙发",
      "风格": "经典简约",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "圆润扶手和厚实坐垫强调舒适感，整体轮廓稳重耐用，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1623": {
    "name": "GC-S1623",
    "code": "GC-S1623",
    "sku": "GC-S1623",
    "category": "欧洲款式",
    "summary": "GC-S1623 是一款美式经典卷扶手沙发套系，采用蓝色/橙色/棕色/米色布艺面料，卷边扶手与柔和靠垫塑造经典家居气质，多色选择覆盖不同软装风格。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "卷扶手沙发套系",
      "美式经典",
      "布艺面料",
      "蓝色/橙色/棕色/米色"
    ],
    "specs": {
      "型号": "GC-S1623",
      "类型": "卷扶手沙发套系",
      "风格": "美式经典",
      "面料": "布艺面料",
      "颜色": "蓝色/橙色/棕色/米色",
      "图片": "已整理12张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "卷边扶手与柔和靠垫塑造经典家居气质，多色选择覆盖不同软装风格，让产品在视觉和使用体验上都有清晰辨识度。",
      "蓝色/橙色/棕色/米色布艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1627": {
    "name": "GC-S1627",
    "code": "GC-S1627",
    "sku": "GC-S1627",
    "category": "欧洲款式",
    "summary": "GC-S1627 是一款自然休闲木架多功能沙发，采用湖蓝色柔软布艺，外露木架带来轻盈自然感，坐垫展开后可兼顾临时休息。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合公寓客厅、客卧两用空间、休闲娱乐区。",
    "tags": [
      "木架多功能沙发",
      "自然休闲",
      "柔软布艺",
      "湖蓝色"
    ],
    "specs": {
      "型号": "GC-S1627",
      "类型": "木架多功能沙发",
      "风格": "自然休闲",
      "面料": "柔软布艺",
      "颜色": "湖蓝色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "外露木架带来轻盈自然感，坐垫展开后可兼顾临时休息，让产品在视觉和使用体验上都有清晰辨识度。",
      "湖蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "公寓客厅",
      "客卧两用空间",
      "休闲娱乐区"
    ],
    "audience": [
      "小户型住户",
      "租住人群",
      "需要临时留宿功能的家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1628": {
    "name": "GC-S1628",
    "code": "GC-S1628",
    "sku": "GC-S1628",
    "category": "欧洲款式",
    "summary": "GC-S1628 是一款现代简约直排客厅沙发，采用米白色柔软布艺，简洁高靠背与纤细脚架让空间显得明亮利落。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "直排客厅沙发",
      "现代简约",
      "柔软布艺",
      "米白色"
    ],
    "specs": {
      "型号": "GC-S1628",
      "类型": "直排客厅沙发",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "米白色",
      "图片": "已整理2张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "简洁高靠背与纤细脚架让空间显得明亮利落，让产品在视觉和使用体验上都有清晰辨识度。",
      "米白色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1629": {
    "name": "GC-S1629",
    "code": "GC-S1629",
    "sku": "GC-S1629",
    "category": "欧洲款式",
    "summary": "GC-S1629 是一款现代工业餐桌椅组合，采用原木色/黑色木质/金属/皮艺，简洁金属框架搭配木质桌面和软包座椅，组合完整实用。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭餐厅、开放式餐厨区、休闲会聚空间。",
    "tags": [
      "餐桌椅组合",
      "现代工业",
      "木质/金属/皮艺",
      "原木色/黑色"
    ],
    "specs": {
      "型号": "GC-S1629",
      "类型": "餐桌椅组合",
      "风格": "现代工业",
      "面料": "木质/金属/皮艺",
      "颜色": "原木色/黑色",
      "图片": "已整理1张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "简洁金属框架搭配木质桌面和软包座椅，组合完整实用，让产品在视觉和使用体验上都有清晰辨识度。",
      "原木色/黑色木质/金属/皮艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭餐厅",
      "开放式餐厨区",
      "休闲会聚空间"
    ],
    "audience": [
      "重视聚餐氛围的家庭",
      "餐厨一体空间用户",
      "喜欢休闲用餐的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1630": {
    "name": "GC-S1630",
    "code": "GC-S1630",
    "sku": "GC-S1630",
    "category": "欧洲款式",
    "summary": "GC-S1630 是一款现代休闲转角组合沙发，采用浅灰/深灰/蓝灰柔软布艺，贵妃位与圆柱靠枕提升舒展感，多色版本适合不同客厅基调。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "转角组合沙发",
      "现代休闲",
      "柔软布艺",
      "浅灰/深灰/蓝灰"
    ],
    "specs": {
      "型号": "GC-S1630",
      "类型": "转角组合沙发",
      "风格": "现代休闲",
      "面料": "柔软布艺",
      "颜色": "浅灰/深灰/蓝灰",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "贵妃位与圆柱靠枕提升舒展感，多色版本适合不同客厅基调，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰/深灰/蓝灰柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1632": {
    "name": "GC-S1632",
    "code": "GC-S1632",
    "sku": "GC-S1632",
    "category": "欧洲款式",
    "summary": "GC-S1632 是一款清新现代储物转角沙发，采用浅绿色柔软布艺，贵妃位内置储物结构，在保持整洁外观的同时增加收纳能力。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "储物转角沙发",
      "清新现代",
      "柔软布艺",
      "浅绿色"
    ],
    "specs": {
      "型号": "GC-S1632",
      "类型": "储物转角沙发",
      "风格": "清新现代",
      "面料": "柔软布艺",
      "颜色": "浅绿色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "贵妃位内置储物结构，在保持整洁外观的同时增加收纳能力，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1633": {
    "name": "GC-S1633",
    "code": "GC-S1633",
    "sku": "GC-S1633",
    "category": "欧洲款式",
    "summary": "GC-S1633 是一款复古轻奢拉扣卷扶手沙发，采用红色绒感布艺，深拉扣靠背、卷扶手和金属脚形成鲜明而精致的视觉焦点。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "拉扣卷扶手沙发",
      "复古轻奢",
      "绒感布艺",
      "红色"
    ],
    "specs": {
      "型号": "GC-S1633",
      "类型": "拉扣卷扶手沙发",
      "风格": "复古轻奢",
      "面料": "绒感布艺",
      "颜色": "红色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "深拉扣靠背、卷扶手和金属脚形成鲜明而精致的视觉焦点，让产品在视觉和使用体验上都有清晰辨识度。",
      "红色绒感布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1635": {
    "name": "GC-S1635",
    "code": "GC-S1635",
    "sku": "GC-S1635",
    "category": "欧洲款式",
    "summary": "GC-S1635 是一款慵懒现代可调节沙发床，采用白色/棕色/绿色柔软布艺，靠背可调并可展开为平整坐卧面，圆润绗缝造型柔和亲切。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合公寓客厅、客卧两用空间、休闲娱乐区。",
    "tags": [
      "可调节沙发床",
      "慵懒现代",
      "柔软布艺",
      "白色/棕色/绿色"
    ],
    "specs": {
      "型号": "GC-S1635",
      "类型": "可调节沙发床",
      "风格": "慵懒现代",
      "面料": "柔软布艺",
      "颜色": "白色/棕色/绿色",
      "图片": "已整理11张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "靠背可调并可展开为平整坐卧面，圆润绗缝造型柔和亲切，让产品在视觉和使用体验上都有清晰辨识度。",
      "白色/棕色/绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "公寓客厅",
      "客卧两用空间",
      "休闲娱乐区"
    ],
    "audience": [
      "小户型住户",
      "租住人群",
      "需要临时留宿功能的家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1638": {
    "name": "GC-S1638",
    "code": "GC-S1638",
    "sku": "GC-S1638",
    "category": "欧洲款式",
    "summary": "GC-S1638 是一款现代美式沙发椅脚踏套系，采用米色/深灰柔软布艺，直排沙发、单椅与脚踏形成完整套系，方正轮廓中加入柔软靠包。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "沙发椅脚踏套系",
      "现代美式",
      "柔软布艺",
      "米色/深灰"
    ],
    "specs": {
      "型号": "GC-S1638",
      "类型": "沙发椅脚踏套系",
      "风格": "现代美式",
      "面料": "柔软布艺",
      "颜色": "米色/深灰",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "直排沙发、单椅与脚踏形成完整套系，方正轮廓中加入柔软靠包，让产品在视觉和使用体验上都有清晰辨识度。",
      "米色/深灰柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1639": {
    "name": "GC-S1639",
    "code": "GC-S1639",
    "sku": "GC-S1639",
    "category": "欧洲款式",
    "summary": "GC-S1639 是一款现代简约折叠沙发床，采用浅灰色柔软布艺，扶手与靠背可调节展开，日常坐用与临时睡眠切换直接。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合公寓客厅、客卧两用空间、休闲娱乐区。",
    "tags": [
      "折叠沙发床",
      "现代简约",
      "柔软布艺",
      "浅灰色"
    ],
    "specs": {
      "型号": "GC-S1639",
      "类型": "折叠沙发床",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "浅灰色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "扶手与靠背可调节展开，日常坐用与临时睡眠切换直接，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "公寓客厅",
      "客卧两用空间",
      "休闲娱乐区"
    ],
    "audience": [
      "小户型住户",
      "租住人群",
      "需要临时留宿功能的家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1640": {
    "name": "GC-S1640",
    "code": "GC-S1640",
    "sku": "GC-S1640",
    "category": "欧洲款式",
    "summary": "GC-S1640 是一款轻奢现代绒感直排沙发，采用绿色/蓝色/玫红色绒感面料，细金属脚、圆柱腰枕和饱和色面料共同增强精致感与陈列吸引力。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "绒感直排沙发",
      "轻奢现代",
      "绒感面料",
      "绿色/蓝色/玫红色"
    ],
    "specs": {
      "型号": "GC-S1640",
      "类型": "绒感直排沙发",
      "风格": "轻奢现代",
      "面料": "绒感面料",
      "颜色": "绿色/蓝色/玫红色",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "细金属脚、圆柱腰枕和饱和色面料共同增强精致感与陈列吸引力，让产品在视觉和使用体验上都有清晰辨识度。",
      "绿色/蓝色/玫红色绒感面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1641": {
    "name": "GC-S1641",
    "code": "GC-S1641",
    "sku": "GC-S1641",
    "category": "欧洲款式",
    "summary": "GC-S1641 是一款现代工业金属架双人沙发，采用军绿色柔软布艺，外露金属框架搭配柔软坐垫，结构轻盈并带有清晰设计感。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "金属架双人沙发",
      "现代工业",
      "柔软布艺",
      "军绿色"
    ],
    "specs": {
      "型号": "GC-S1641",
      "类型": "金属架双人沙发",
      "风格": "现代工业",
      "面料": "柔软布艺",
      "颜色": "军绿色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "外露金属框架搭配柔软坐垫，结构轻盈并带有清晰设计感，让产品在视觉和使用体验上都有清晰辨识度。",
      "军绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1642": {
    "name": "GC-S1642",
    "code": "GC-S1642",
    "sku": "GC-S1642",
    "category": "欧洲款式",
    "summary": "GC-S1642 是一款经典现代沙发单椅套系，采用深灰色柔软布艺，铆钉扶手与挺括轮廓增加细节层次，沙发和单椅组合统一。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "沙发单椅套系",
      "经典现代",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1642",
      "类型": "沙发单椅套系",
      "风格": "经典现代",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "铆钉扶手与挺括轮廓增加细节层次，沙发和单椅组合统一，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1645": {
    "name": "GC-S1645",
    "code": "GC-S1645",
    "sku": "GC-S1645",
    "category": "欧洲款式",
    "summary": "GC-S1645 是一款现代轻奢模块脚踏组合沙发，采用墨绿色/深棕色绒感/皮艺面料，独立座位、脚踏与边几可重新组合，细金属脚保持视觉轻盈。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "模块脚踏组合沙发",
      "现代轻奢",
      "绒感/皮艺面料",
      "墨绿色/深棕色"
    ],
    "specs": {
      "型号": "GC-S1645",
      "类型": "模块脚踏组合沙发",
      "风格": "现代轻奢",
      "面料": "绒感/皮艺面料",
      "颜色": "墨绿色/深棕色",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "独立座位、脚踏与边几可重新组合，细金属脚保持视觉轻盈，让产品在视觉和使用体验上都有清晰辨识度。",
      "墨绿色/深棕色绒感/皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1646": {
    "name": "GC-S1646",
    "code": "GC-S1646",
    "sku": "GC-S1646",
    "category": "欧洲款式",
    "summary": "GC-S1646 是一款复古工业皮艺脚踏组合沙发，采用深棕色皮艺面料，外露金属框架与木质扶手搭配独立脚踏，兼具质感和放松体验。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "皮艺脚踏组合沙发",
      "复古工业",
      "皮艺面料",
      "深棕色"
    ],
    "specs": {
      "型号": "GC-S1646",
      "类型": "皮艺脚踏组合沙发",
      "风格": "复古工业",
      "面料": "皮艺面料",
      "颜色": "深棕色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "外露金属框架与木质扶手搭配独立脚踏，兼具质感和放松体验，让产品在视觉和使用体验上都有清晰辨识度。",
      "深棕色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1647": {
    "name": "GC-S1647",
    "code": "GC-S1647",
    "sku": "GC-S1647",
    "category": "欧洲款式",
    "summary": "GC-S1647 是一款现代休闲大型模块组合沙发，采用蓝色/灰色柔软布艺，双脚踏与宽阔转角布局提供灵活坐卧方式，适合多人共享。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "大型模块组合沙发",
      "现代休闲",
      "柔软布艺",
      "蓝色/灰色"
    ],
    "specs": {
      "型号": "GC-S1647",
      "类型": "大型模块组合沙发",
      "风格": "现代休闲",
      "面料": "柔软布艺",
      "颜色": "蓝色/灰色",
      "图片": "已整理4张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "双脚踏与宽阔转角布局提供灵活坐卧方式，适合多人共享，让产品在视觉和使用体验上都有清晰辨识度。",
      "蓝色/灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1648": {
    "name": "GC-S1648",
    "code": "GC-S1648",
    "sku": "GC-S1648",
    "category": "欧洲款式",
    "summary": "GC-S1648 是一款经典轻奢拉扣皮艺沙发，采用深棕色皮艺面料，拉扣靠背、铆钉扶手和雕塑感沙发脚呈现经典厚重质感。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "拉扣皮艺沙发",
      "经典轻奢",
      "皮艺面料",
      "深棕色"
    ],
    "specs": {
      "型号": "GC-S1648",
      "类型": "拉扣皮艺沙发",
      "风格": "经典轻奢",
      "面料": "皮艺面料",
      "颜色": "深棕色",
      "图片": "已整理4张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "拉扣靠背、铆钉扶手和雕塑感沙发脚呈现经典厚重质感，让产品在视觉和使用体验上都有清晰辨识度。",
      "深棕色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1650": {
    "name": "GC-S1650",
    "code": "GC-S1650",
    "sku": "GC-S1650",
    "category": "欧洲款式",
    "summary": "GC-S1650 是一款慵懒现代低矮贵妃沙发，采用灰色/蓝色柔软布艺，超低靠背与宽大贵妃位营造开放坐卧体验，适合轻松休闲空间。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "低矮贵妃沙发",
      "慵懒现代",
      "柔软布艺",
      "灰色/蓝色"
    ],
    "specs": {
      "型号": "GC-S1650",
      "类型": "低矮贵妃沙发",
      "风格": "慵懒现代",
      "面料": "柔软布艺",
      "颜色": "灰色/蓝色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "超低靠背与宽大贵妃位营造开放坐卧体验，适合轻松休闲空间，让产品在视觉和使用体验上都有清晰辨识度。",
      "灰色/蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1651": {
    "name": "GC-S1651",
    "code": "GC-S1651",
    "sku": "GC-S1651",
    "category": "欧洲款式",
    "summary": "GC-S1651 是一款现代休闲转角组合沙发，采用深灰色柔软布艺，厚实靠包与贵妃位形成舒适包裹，整体造型稳重耐看。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "转角组合沙发",
      "现代休闲",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1651",
      "类型": "转角组合沙发",
      "风格": "现代休闲",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "厚实靠包与贵妃位形成舒适包裹，整体造型稳重耐看，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1658": {
    "name": "GC-S1658",
    "code": "GC-S1658",
    "sku": "GC-S1658",
    "category": "欧洲款式",
    "summary": "GC-S1658 是一款经典现代皮艺沙发套系，采用黑色/棕色皮艺面料，拉扣靠背与圆润扶手提升经典气质，沙发和单椅可成套搭配。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "皮艺沙发套系",
      "经典现代",
      "皮艺面料",
      "黑色/棕色"
    ],
    "specs": {
      "型号": "GC-S1658",
      "类型": "皮艺沙发套系",
      "风格": "经典现代",
      "面料": "皮艺面料",
      "颜色": "黑色/棕色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "拉扣靠背与圆润扶手提升经典气质，沙发和单椅可成套搭配，让产品在视觉和使用体验上都有清晰辨识度。",
      "黑色/棕色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1659": {
    "name": "GC-S1659",
    "code": "GC-S1659",
    "sku": "GC-S1659",
    "category": "欧洲款式",
    "summary": "GC-S1659 是一款清爽现代沙发单椅套系，采用米白色柔软布艺，简洁直排轮廓与轻盈高脚减少厚重感，套系组合明亮自然。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "沙发单椅套系",
      "清爽现代",
      "柔软布艺",
      "米白色"
    ],
    "specs": {
      "型号": "GC-S1659",
      "类型": "沙发单椅套系",
      "风格": "清爽现代",
      "面料": "柔软布艺",
      "颜色": "米白色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "简洁直排轮廓与轻盈高脚减少厚重感，套系组合明亮自然，让产品在视觉和使用体验上都有清晰辨识度。",
      "米白色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1660": {
    "name": "GC-S1660",
    "code": "GC-S1660",
    "sku": "GC-S1660",
    "category": "欧洲款式",
    "summary": "GC-S1660 是一款实用现代储物沙发套系，采用深蓝色柔软布艺，座位内置储物空间并提供不同座位组合，兼顾会客与收纳。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "储物沙发套系",
      "实用现代",
      "柔软布艺",
      "深蓝色"
    ],
    "specs": {
      "型号": "GC-S1660",
      "类型": "储物沙发套系",
      "风格": "实用现代",
      "面料": "柔软布艺",
      "颜色": "深蓝色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "座位内置储物空间并提供不同座位组合，兼顾会客与收纳，让产品在视觉和使用体验上都有清晰辨识度。",
      "深蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1663": {
    "name": "GC-S1663",
    "code": "GC-S1663",
    "sku": "GC-S1663",
    "category": "欧洲款式",
    "summary": "GC-S1663 是一款北欧简约无扶手休闲单椅，采用浅蓝色柔软布艺，干净无扶手轮廓搭配木脚，适合作为轻量补充座位。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "无扶手休闲单椅",
      "北欧简约",
      "柔软布艺",
      "浅蓝色"
    ],
    "specs": {
      "型号": "GC-S1663",
      "类型": "无扶手休闲单椅",
      "风格": "北欧简约",
      "面料": "柔软布艺",
      "颜色": "浅蓝色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "干净无扶手轮廓搭配木脚，适合作为轻量补充座位，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1665": {
    "name": "GC-S1665",
    "code": "GC-S1665",
    "sku": "GC-S1665",
    "category": "欧洲款式",
    "summary": "GC-S1665 是一款现代休闲可调节双人沙发，采用浅蓝色柔软布艺，靠背可多档调节并展开坐卧，细黑金属框架保持轻盈感。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合公寓客厅、客卧两用空间、休闲娱乐区。",
    "tags": [
      "可调节双人沙发",
      "现代休闲",
      "柔软布艺",
      "浅蓝色"
    ],
    "specs": {
      "型号": "GC-S1665",
      "类型": "可调节双人沙发",
      "风格": "现代休闲",
      "面料": "柔软布艺",
      "颜色": "浅蓝色",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "靠背可多档调节并展开坐卧，细黑金属框架保持轻盈感，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "公寓客厅",
      "客卧两用空间",
      "休闲娱乐区"
    ],
    "audience": [
      "小户型住户",
      "租住人群",
      "需要临时留宿功能的家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1667": {
    "name": "GC-S1667",
    "code": "GC-S1667",
    "sku": "GC-S1667",
    "category": "欧洲款式",
    "summary": "GC-S1667 是一款复古现代高背休闲单椅，采用黄绿色柔软布艺，翼背拉扣造型与撞色扶手内侧形成鲜明识别度。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "高背休闲单椅",
      "复古现代",
      "柔软布艺",
      "黄绿色"
    ],
    "specs": {
      "型号": "GC-S1667",
      "类型": "高背休闲单椅",
      "风格": "复古现代",
      "面料": "柔软布艺",
      "颜色": "黄绿色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "翼背拉扣造型与撞色扶手内侧形成鲜明识别度，让产品在视觉和使用体验上都有清晰辨识度。",
      "黄绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1668": {
    "name": "GC-S1668",
    "code": "GC-S1668",
    "sku": "GC-S1668",
    "category": "欧洲款式",
    "summary": "GC-S1668 是一款现代简约转角组合沙发，采用深灰色柔软布艺，宽阔贵妃位与方正扶手满足多人会客及日常躺靠。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "转角组合沙发",
      "现代简约",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1668",
      "类型": "转角组合沙发",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "宽阔贵妃位与方正扶手满足多人会客及日常躺靠，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1669": {
    "name": "GC-S1669",
    "code": "GC-S1669",
    "sku": "GC-S1669",
    "category": "欧洲款式",
    "summary": "GC-S1669 是一款现代实用多座位沙发套系，采用深蓝色柔软布艺，直排沙发、双人位与可展开结构形成完整家庭客厅组合。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "多座位沙发套系",
      "现代实用",
      "柔软布艺",
      "深蓝色"
    ],
    "specs": {
      "型号": "GC-S1669",
      "类型": "多座位沙发套系",
      "风格": "现代实用",
      "面料": "柔软布艺",
      "颜色": "深蓝色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "直排沙发、双人位与可展开结构形成完整家庭客厅组合，让产品在视觉和使用体验上都有清晰辨识度。",
      "深蓝色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1670": {
    "name": "GC-S1670",
    "code": "GC-S1670",
    "sku": "GC-S1670",
    "category": "欧洲款式",
    "summary": "GC-S1670 是一款复古轻奢高背休闲单椅，采用蓝色/绿色/灰色绒感布艺，翼背轮廓、卷形扶手和木质脚强调包裹感，多色面料选择丰富。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "高背休闲单椅",
      "复古轻奢",
      "绒感布艺",
      "蓝色/绿色/灰色"
    ],
    "specs": {
      "型号": "GC-S1670",
      "类型": "高背休闲单椅",
      "风格": "复古轻奢",
      "面料": "绒感布艺",
      "颜色": "蓝色/绿色/灰色",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "翼背轮廓、卷形扶手和木质脚强调包裹感，多色面料选择丰富，让产品在视觉和使用体验上都有清晰辨识度。",
      "蓝色/绿色/灰色绒感布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1671": {
    "name": "GC-S1671",
    "code": "GC-S1671",
    "sku": "GC-S1671",
    "category": "欧洲款式",
    "summary": "GC-S1671 是一款现代简约直排客厅沙发，采用深灰色柔软布艺，利落扶手与简洁高脚适合构建整洁、不厚重的客厅氛围。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "直排客厅沙发",
      "现代简约",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1671",
      "类型": "直排客厅沙发",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理2张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "利落扶手与简洁高脚适合构建整洁、不厚重的客厅氛围，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1672": {
    "name": "GC-S1672",
    "code": "GC-S1672",
    "sku": "GC-S1672",
    "category": "欧洲款式",
    "summary": "GC-S1672 是一款新古典卷扶手皮艺沙发，采用深棕色皮艺面料，卷形扶手、弧线木饰和高脚结构呈现优雅经典气质。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "卷扶手皮艺沙发",
      "新古典",
      "皮艺面料",
      "深棕色"
    ],
    "specs": {
      "型号": "GC-S1672",
      "类型": "卷扶手皮艺沙发",
      "风格": "新古典",
      "面料": "皮艺面料",
      "颜色": "深棕色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "卷形扶手、弧线木饰和高脚结构呈现优雅经典气质，让产品在视觉和使用体验上都有清晰辨识度。",
      "深棕色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1676": {
    "name": "GC-S1676",
    "code": "GC-S1676",
    "sku": "GC-S1676",
    "category": "欧洲款式",
    "summary": "GC-S1676 是一款经典现代沙发单椅套系，采用棕色/绿色柔软布艺，直排沙发与单椅形成统一套系，挺括轮廓适合长期陈列和日常使用。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "沙发单椅套系",
      "经典现代",
      "柔软布艺",
      "棕色/绿色"
    ],
    "specs": {
      "型号": "GC-S1676",
      "类型": "沙发单椅套系",
      "风格": "经典现代",
      "面料": "柔软布艺",
      "颜色": "棕色/绿色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "直排沙发与单椅形成统一套系，挺括轮廓适合长期陈列和日常使用，让产品在视觉和使用体验上都有清晰辨识度。",
      "棕色/绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1677": {
    "name": "GC-S1677",
    "code": "GC-S1677",
    "sku": "GC-S1677",
    "category": "欧洲款式",
    "summary": "GC-S1677 是一款现代工业餐桌椅组合，采用原木色/黑色木质/金属/皮艺，木质桌面、金属框架与软包长凳组合，适合用餐与休闲会聚。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭餐厅、开放式餐厨区、休闲会聚空间。",
    "tags": [
      "餐桌椅组合",
      "现代工业",
      "木质/金属/皮艺",
      "原木色/黑色"
    ],
    "specs": {
      "型号": "GC-S1677",
      "类型": "餐桌椅组合",
      "风格": "现代工业",
      "面料": "木质/金属/皮艺",
      "颜色": "原木色/黑色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "木质桌面、金属框架与软包长凳组合，适合用餐与休闲会聚，让产品在视觉和使用体验上都有清晰辨识度。",
      "原木色/黑色木质/金属/皮艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭餐厅",
      "开放式餐厨区",
      "休闲会聚空间"
    ],
    "audience": [
      "重视聚餐氛围的家庭",
      "餐厨一体空间用户",
      "喜欢休闲用餐的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1680": {
    "name": "GC-S1680",
    "code": "GC-S1680",
    "sku": "GC-S1680",
    "category": "欧洲款式",
    "summary": "GC-S1680 是一款北欧简约高脚直排沙发，采用米白/浅灰柔软布艺，纤细木脚与简洁直线轮廓让客厅显得轻盈开阔。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "高脚直排沙发",
      "北欧简约",
      "柔软布艺",
      "米白/浅灰"
    ],
    "specs": {
      "型号": "GC-S1680",
      "类型": "高脚直排沙发",
      "风格": "北欧简约",
      "面料": "柔软布艺",
      "颜色": "米白/浅灰",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "纤细木脚与简洁直线轮廓让客厅显得轻盈开阔，让产品在视觉和使用体验上都有清晰辨识度。",
      "米白/浅灰柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1681": {
    "name": "GC-S1681",
    "code": "GC-S1681",
    "sku": "GC-S1681",
    "category": "欧洲款式",
    "summary": "GC-S1681 是一款现代简约皮艺双人沙发，采用黑色皮艺面料，紧凑直排轮廓与低扶手兼顾正式会客和日常易打理需求。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "皮艺双人沙发",
      "现代简约",
      "皮艺面料",
      "黑色"
    ],
    "specs": {
      "型号": "GC-S1681",
      "类型": "皮艺双人沙发",
      "风格": "现代简约",
      "面料": "皮艺面料",
      "颜色": "黑色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "紧凑直排轮廓与低扶手兼顾正式会客和日常易打理需求，让产品在视觉和使用体验上都有清晰辨识度。",
      "黑色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1682": {
    "name": "GC-S1682",
    "code": "GC-S1682",
    "sku": "GC-S1682",
    "category": "欧洲款式",
    "summary": "GC-S1682 是一款现代商务方扶手直排沙发，采用黑色皮艺面料，宽厚方扶手与平直靠背呈现稳定端正的空间气质。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "方扶手直排沙发",
      "现代商务",
      "皮艺面料",
      "黑色"
    ],
    "specs": {
      "型号": "GC-S1682",
      "类型": "方扶手直排沙发",
      "风格": "现代商务",
      "面料": "皮艺面料",
      "颜色": "黑色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "宽厚方扶手与平直靠背呈现稳定端正的空间气质，让产品在视觉和使用体验上都有清晰辨识度。",
      "黑色皮艺面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1683": {
    "name": "GC-S1683",
    "code": "GC-S1683",
    "sku": "GC-S1683",
    "category": "欧洲款式",
    "summary": "GC-S1683 是一款现代设计非对称休闲长椅，采用深灰色柔软布艺，高低错落靠背与纤细金属脚形成独特、轻盈的视觉节奏。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合客厅一角、卧室休闲区、阅读与会客空间。",
    "tags": [
      "非对称休闲长椅",
      "现代设计",
      "柔软布艺",
      "深灰色"
    ],
    "specs": {
      "型号": "GC-S1683",
      "类型": "非对称休闲长椅",
      "风格": "现代设计",
      "面料": "柔软布艺",
      "颜色": "深灰色",
      "图片": "已整理2张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "高低错落靠背与纤细金属脚形成独特、轻盈的视觉节奏，让产品在视觉和使用体验上都有清晰辨识度。",
      "深灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "客厅一角",
      "卧室休闲区",
      "阅读与会客空间"
    ],
    "audience": [
      "独居人群",
      "年轻家庭",
      "重视个人休闲体验的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1686": {
    "name": "GC-S1686",
    "code": "GC-S1686",
    "sku": "GC-S1686",
    "category": "欧洲款式",
    "summary": "GC-S1686 是一款温馨现代储物沙发套系，采用灰色/薄荷绿柔软布艺，座位储物结构隐藏在整洁轮廓中，沙发套系兼顾舒适与实用。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "储物沙发套系",
      "温馨现代",
      "柔软布艺",
      "灰色/薄荷绿"
    ],
    "specs": {
      "型号": "GC-S1686",
      "类型": "储物沙发套系",
      "风格": "温馨现代",
      "面料": "柔软布艺",
      "颜色": "灰色/薄荷绿",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "座位储物结构隐藏在整洁轮廓中，沙发套系兼顾舒适与实用，让产品在视觉和使用体验上都有清晰辨识度。",
      "灰色/薄荷绿柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1687": {
    "name": "GC-S1687",
    "code": "GC-S1687",
    "sku": "GC-S1687",
    "category": "欧洲款式",
    "summary": "GC-S1687 是一款北欧简约沙发套系，采用浅灰色柔软布艺，外展扶手与高脚结构呈现轻盈比例，不同座位规格便于成套搭配。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "沙发套系",
      "北欧简约",
      "柔软布艺",
      "浅灰色"
    ],
    "specs": {
      "型号": "GC-S1687",
      "类型": "沙发套系",
      "风格": "北欧简约",
      "面料": "柔软布艺",
      "颜色": "浅灰色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "外展扶手与高脚结构呈现轻盈比例，不同座位规格便于成套搭配，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1688": {
    "name": "GC-S1688",
    "code": "GC-S1688",
    "sku": "GC-S1688",
    "category": "欧洲款式",
    "summary": "GC-S1688 是一款现代简约沙发套系，采用浅灰色柔软布艺，柔和扶手曲线与简洁高脚兼顾亲和感和空间通透度。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "沙发套系",
      "现代简约",
      "柔软布艺",
      "浅灰色"
    ],
    "specs": {
      "型号": "GC-S1688",
      "类型": "沙发套系",
      "风格": "现代简约",
      "面料": "柔软布艺",
      "颜色": "浅灰色",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "柔和扶手曲线与简洁高脚兼顾亲和感和空间通透度，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1689": {
    "name": "GC-S1689",
    "code": "GC-S1689",
    "sku": "GC-S1689",
    "category": "欧洲款式",
    "summary": "GC-S1689 是一款实用现代储物直排沙发，采用浅蓝/灰色柔软布艺，翻起式座位储物扩展收纳能力，同时保持完整客厅沙发外观。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "储物直排沙发",
      "实用现代",
      "柔软布艺",
      "浅蓝/灰色"
    ],
    "specs": {
      "型号": "GC-S1689",
      "类型": "储物直排沙发",
      "风格": "实用现代",
      "面料": "柔软布艺",
      "颜色": "浅蓝/灰色",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "翻起式座位储物扩展收纳能力，同时保持完整客厅沙发外观，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅蓝/灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1691": {
    "name": "GC-S1691",
    "code": "GC-S1691",
    "sku": "GC-S1691",
    "category": "欧洲款式",
    "summary": "GC-S1691 是一款复古工业金属架沙发椅套系，采用棕色/灰色皮艺/仿皮面料，金属框架与木质扶手形成复古轮廓，多种座位组合适合成套布置。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "金属架沙发椅套系",
      "复古工业",
      "皮艺/仿皮面料",
      "棕色/灰色"
    ],
    "specs": {
      "型号": "GC-S1691",
      "类型": "金属架沙发椅套系",
      "风格": "复古工业",
      "面料": "皮艺/仿皮面料",
      "颜色": "棕色/灰色",
      "图片": "已整理11张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "金属框架与木质扶手形成复古轮廓，多种座位组合适合成套布置，让产品在视觉和使用体验上都有清晰辨识度。",
      "棕色/灰色皮艺/仿皮面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1692": {
    "name": "GC-S1692",
    "code": "GC-S1692",
    "sku": "GC-S1692",
    "category": "欧洲款式",
    "summary": "GC-S1692 是一款北欧休闲弧扶手直排沙发，采用浅灰/绿色柔软布艺，微弧扶手与外展木脚塑造亲和轮廓，多色选择便于融入温馨软装。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "弧扶手直排沙发",
      "北欧休闲",
      "柔软布艺",
      "浅灰/绿色"
    ],
    "specs": {
      "型号": "GC-S1692",
      "类型": "弧扶手直排沙发",
      "风格": "北欧休闲",
      "面料": "柔软布艺",
      "颜色": "浅灰/绿色",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "微弧扶手与外展木脚塑造亲和轮廓，多色选择便于融入温馨软装，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰/绿色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1693": {
    "name": "GC-S1693",
    "code": "GC-S1693",
    "sku": "GC-S1693",
    "category": "欧洲款式",
    "summary": "GC-S1693 是一款现代休闲餐桌沙发组合，采用原木色/灰绿色木质/金属/布艺，软包长凳、单椅与餐桌组成休闲用餐场景，兼顾聚会和日常交流。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭餐厅、开放式餐厨区、休闲会聚空间。",
    "tags": [
      "餐桌沙发组合",
      "现代休闲",
      "木质/金属/布艺",
      "原木色/灰绿色"
    ],
    "specs": {
      "型号": "GC-S1693",
      "类型": "餐桌沙发组合",
      "风格": "现代休闲",
      "面料": "木质/金属/布艺",
      "颜色": "原木色/灰绿色",
      "图片": "已整理4张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "软包长凳、单椅与餐桌组成休闲用餐场景，兼顾聚会和日常交流，让产品在视觉和使用体验上都有清晰辨识度。",
      "原木色/灰绿色木质/金属/布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭餐厅",
      "开放式餐厨区",
      "休闲会聚空间"
    ],
    "audience": [
      "重视聚餐氛围的家庭",
      "餐厨一体空间用户",
      "喜欢休闲用餐的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1695": {
    "name": "GC-S1695",
    "code": "GC-S1695",
    "sku": "GC-S1695",
    "category": "欧洲款式",
    "summary": "GC-S1695 是一款复古现代金属架双人沙发，采用芥末黄色皮艺/仿皮面料，木质扶手、细金属架与暖黄色座面形成醒目的复古气质。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "金属架双人沙发",
      "复古现代",
      "皮艺/仿皮面料",
      "芥末黄色"
    ],
    "specs": {
      "型号": "GC-S1695",
      "类型": "金属架双人沙发",
      "风格": "复古现代",
      "面料": "皮艺/仿皮面料",
      "颜色": "芥末黄色",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "木质扶手、细金属架与暖黄色座面形成醒目的复古气质，让产品在视觉和使用体验上都有清晰辨识度。",
      "芥末黄色皮艺/仿皮面料强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1696": {
    "name": "GC-S1696",
    "code": "GC-S1696",
    "sku": "GC-S1696",
    "category": "欧洲款式",
    "summary": "GC-S1696 是一款现代休闲贵妃组合沙发，采用浅灰/深灰柔软布艺，多色贵妃组合搭配饱满靠包，适合建立舒适、完整的客厅中心。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "贵妃组合沙发",
      "现代休闲",
      "柔软布艺",
      "浅灰/深灰"
    ],
    "specs": {
      "型号": "GC-S1696",
      "类型": "贵妃组合沙发",
      "风格": "现代休闲",
      "面料": "柔软布艺",
      "颜色": "浅灰/深灰",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "多色贵妃组合搭配饱满靠包，适合建立舒适、完整的客厅中心，让产品在视觉和使用体验上都有清晰辨识度。",
      "浅灰/深灰柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1698": {
    "name": "GC-S1698",
    "code": "GC-S1698",
    "sku": "GC-S1698",
    "category": "欧洲款式",
    "summary": "GC-S1698 是一款经典现代卷扶手直排沙发，采用灰色柔软布艺，柔和卷扶手与挺括坐垫兼顾亲和感和端正会客形象。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、公寓起居区、日常会客空间。",
    "tags": [
      "卷扶手直排沙发",
      "经典现代",
      "柔软布艺",
      "灰色"
    ],
    "specs": {
      "型号": "GC-S1698",
      "类型": "卷扶手直排沙发",
      "风格": "经典现代",
      "面料": "柔软布艺",
      "颜色": "灰色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "柔和卷扶手与挺括坐垫兼顾亲和感和端正会客形象，让产品在视觉和使用体验上都有清晰辨识度。",
      "灰色柔软布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "公寓起居区",
      "日常会客空间"
    ],
    "audience": [
      "年轻家庭",
      "城市居住人群",
      "偏爱舒适客厅生活的用户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1699": {
    "name": "GC-S1699",
    "code": "GC-S1699",
    "sku": "GC-S1699",
    "category": "欧洲款式",
    "summary": "GC-S1699 是一款现代轻奢红色沙发套系，采用红色绒感布艺，鲜明红色、拉扣靠背与高脚结构带来强烈陈列焦点，套系搭配完整。整体外观完整耐看，既能突出舒适坐感，也能与现代家居、木质家具和柔和软装自然搭配，适合家庭客厅、开放式起居区、整屋配套空间。",
    "tags": [
      "红色沙发套系",
      "现代轻奢",
      "绒感布艺",
      "红色"
    ],
    "specs": {
      "型号": "GC-S1699",
      "类型": "红色沙发套系",
      "风格": "现代轻奢",
      "面料": "绒感布艺",
      "颜色": "红色",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "鲜明红色、拉扣靠背与高脚结构带来强烈陈列焦点，套系搭配完整，让产品在视觉和使用体验上都有清晰辨识度。",
      "红色绒感布艺强化温度感与质感，容易融入不同客厅和软装主题。",
      "轮廓、坐面与靠背关系协调，兼顾日常舒适、空间整洁和长期耐看。",
      "多角度与场景图片能够完整呈现产品外观、背部结构和实际搭配效果。"
    ],
    "homes": [
      "家庭客厅",
      "开放式起居区",
      "整屋配套空间"
    ],
    "audience": [
      "多人家庭",
      "重视整体搭配的用户",
      "经常会客的人群"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1701": {
    "name": "GC-S1701",
    "code": "GC-S1701",
    "sku": "GC-S1701",
    "category": "欧洲款式",
    "summary": "GC-S1701 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1701",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1701 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1702": {
    "name": "GC-S1702",
    "code": "GC-S1702",
    "sku": "GC-S1702",
    "category": "欧洲款式",
    "summary": "GC-S1702 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1702",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1702 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1703": {
    "name": "GC-S1703",
    "code": "GC-S1703",
    "sku": "GC-S1703",
    "category": "欧洲款式",
    "summary": "GC-S1703 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1703",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1703 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1705": {
    "name": "GC-S1705",
    "code": "GC-S1705",
    "sku": "GC-S1705",
    "category": "欧洲款式",
    "summary": "GC-S1705 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1705",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1705 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1707": {
    "name": "GC-S1707",
    "code": "GC-S1707",
    "sku": "GC-S1707",
    "category": "欧洲款式",
    "summary": "GC-S1707 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1707",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1707 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1708": {
    "name": "GC-S1708",
    "code": "GC-S1708",
    "sku": "GC-S1708",
    "category": "欧洲款式",
    "summary": "GC-S1708 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1708",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1708 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1711": {
    "name": "GC-S1711",
    "code": "GC-S1711",
    "sku": "GC-S1711",
    "category": "欧洲款式",
    "summary": "GC-S1711 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理12张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1711",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理12张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1711 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1712": {
    "name": "GC-S1712",
    "code": "GC-S1712",
    "sku": "GC-S1712",
    "category": "欧洲款式",
    "summary": "GC-S1712 是一款现代简约休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "现代简约",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1712",
      "类型": "休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1712 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1715": {
    "name": "GC-S1715",
    "code": "GC-S1715",
    "sku": "GC-S1715",
    "category": "欧洲款式",
    "summary": "GC-S1715 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1715",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1715 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1716": {
    "name": "GC-S1716",
    "code": "GC-S1716",
    "sku": "GC-S1716",
    "category": "欧洲款式",
    "summary": "GC-S1716 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1716",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1716 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1719": {
    "name": "GC-S1719",
    "code": "GC-S1719",
    "sku": "GC-S1719",
    "category": "欧洲款式",
    "summary": "GC-S1719 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1719",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1719 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1720": {
    "name": "GC-S1720",
    "code": "GC-S1720",
    "sku": "GC-S1720",
    "category": "欧洲款式",
    "summary": "GC-S1720 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1720",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1720 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1722": {
    "name": "GC-S1722",
    "code": "GC-S1722",
    "sku": "GC-S1722",
    "category": "欧洲款式",
    "summary": "GC-S1722 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1722",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1722 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1725": {
    "name": "GC-S1725",
    "code": "GC-S1725",
    "sku": "GC-S1725",
    "category": "欧洲款式",
    "summary": "GC-S1725 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1725",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1725 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1726": {
    "name": "GC-S1726",
    "code": "GC-S1726",
    "sku": "GC-S1726",
    "category": "欧洲款式",
    "summary": "GC-S1726 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1726",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1726 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1727": {
    "name": "GC-S1727",
    "code": "GC-S1727",
    "sku": "GC-S1727",
    "category": "欧洲款式",
    "summary": "GC-S1727 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1727",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1727 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1729": {
    "name": "GC-S1729",
    "code": "GC-S1729",
    "sku": "GC-S1729",
    "category": "欧洲款式",
    "summary": "GC-S1729 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1729",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1729 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1730": {
    "name": "GC-S1730",
    "code": "GC-S1730",
    "sku": "GC-S1730",
    "category": "欧洲款式",
    "summary": "GC-S1730 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1730",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1730 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1731": {
    "name": "GC-S1731",
    "code": "GC-S1731",
    "sku": "GC-S1731",
    "category": "欧洲款式",
    "summary": "GC-S1731 是一款轻松休闲组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1731",
      "类型": "组合沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1731 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1732": {
    "name": "GC-S1732",
    "code": "GC-S1732",
    "sku": "GC-S1732",
    "category": "欧洲款式",
    "summary": "GC-S1732 是一款耐看百搭小户型沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "小户型沙发",
      "耐看百搭",
      "亲肤布艺",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1732",
      "类型": "小户型沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1732 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1733": {
    "name": "GC-S1733",
    "code": "GC-S1733",
    "sku": "GC-S1733",
    "category": "欧洲款式",
    "summary": "GC-S1733 是一款温馨家居模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1733",
      "类型": "模块组合沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1733 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1735": {
    "name": "GC-S1735",
    "code": "GC-S1735",
    "sku": "GC-S1735",
    "category": "欧洲款式",
    "summary": "GC-S1735 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1735",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1735 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1737": {
    "name": "GC-S1737",
    "code": "GC-S1737",
    "sku": "GC-S1737",
    "category": "欧洲款式",
    "summary": "GC-S1737 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1737",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1737 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1738": {
    "name": "GC-S1738",
    "code": "GC-S1738",
    "sku": "GC-S1738",
    "category": "欧洲款式",
    "summary": "GC-S1738 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1738",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1738 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1739": {
    "name": "GC-S1739",
    "code": "GC-S1739",
    "sku": "GC-S1739",
    "category": "欧洲款式",
    "summary": "GC-S1739 是一款轻松休闲休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "轻松休闲",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1739",
      "类型": "休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1739 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1740": {
    "name": "GC-S1740",
    "code": "GC-S1740",
    "sku": "GC-S1740",
    "category": "欧洲款式",
    "summary": "GC-S1740 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1740",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1740 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1741": {
    "name": "GC-S1741",
    "code": "GC-S1741",
    "sku": "GC-S1741",
    "category": "欧洲款式",
    "summary": "GC-S1741 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1741",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1741 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "1742": {
    "name": "GC-S1742",
    "code": "GC-S1742",
    "sku": "GC-S1742",
    "category": "欧洲款式",
    "summary": "GC-S1742 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1742",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1742 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1745": {
    "name": "GC-S1745",
    "code": "GC-S1745",
    "sku": "GC-S1745",
    "category": "欧洲款式",
    "summary": "GC-S1745 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1745",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1745 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1746": {
    "name": "GC-S1746",
    "code": "GC-S1746",
    "sku": "GC-S1746",
    "category": "欧洲款式",
    "summary": "GC-S1746 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1746",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1746 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1747": {
    "name": "GC-S1747",
    "code": "GC-S1747",
    "sku": "GC-S1747",
    "category": "欧洲款式",
    "summary": "GC-S1747 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1747",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1747 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1748": {
    "name": "GC-S1748",
    "code": "GC-S1748",
    "sku": "GC-S1748",
    "category": "欧洲款式",
    "summary": "GC-S1748 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1748",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1748 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1749": {
    "name": "GC-S1749",
    "code": "GC-S1749",
    "sku": "GC-S1749",
    "category": "欧洲款式",
    "summary": "GC-S1749 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1749",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1749 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1750": {
    "name": "GC-S1750",
    "code": "GC-S1750",
    "sku": "GC-S1750",
    "category": "欧洲款式",
    "summary": "GC-S1750 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1750",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1750 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1752": {
    "name": "GC-S1752",
    "code": "GC-S1752",
    "sku": "GC-S1752",
    "category": "欧洲款式",
    "summary": "GC-S1752 是一款现代简约组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1752",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1752 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1753": {
    "name": "GC-S1753",
    "code": "GC-S1753",
    "sku": "GC-S1753",
    "category": "欧洲款式",
    "summary": "GC-S1753 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1753",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1753 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1756": {
    "name": "GC-S1756",
    "code": "GC-S1756",
    "sku": "GC-S1756",
    "category": "欧洲款式",
    "summary": "GC-S1756 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1756",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1756 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1757": {
    "name": "GC-S1757",
    "code": "GC-S1757",
    "sku": "GC-S1757",
    "category": "欧洲款式",
    "summary": "GC-S1757 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1757",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1757 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1758": {
    "name": "GC-S1758",
    "code": "GC-S1758",
    "sku": "GC-S1758",
    "category": "欧洲款式",
    "summary": "GC-S1758 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1758",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1758 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1759": {
    "name": "GC-S1759",
    "code": "GC-S1759",
    "sku": "GC-S1759",
    "category": "欧洲款式",
    "summary": "GC-S1759 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1759",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1759 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1760": {
    "name": "GC-S1760",
    "code": "GC-S1760",
    "sku": "GC-S1760",
    "category": "欧洲款式",
    "summary": "GC-S1760 是一款温馨家居模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1760",
      "类型": "模块组合沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1760 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1761": {
    "name": "GC-S1761",
    "code": "GC-S1761",
    "sku": "GC-S1761",
    "category": "欧洲款式",
    "summary": "GC-S1761 是一款现代简约组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1761",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1761 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1762": {
    "name": "GC-S1762",
    "code": "GC-S1762",
    "sku": "GC-S1762",
    "category": "欧洲款式",
    "summary": "GC-S1762 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1762",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1762 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1763": {
    "name": "GC-S1763",
    "code": "GC-S1763",
    "sku": "GC-S1763",
    "category": "欧洲款式",
    "summary": "GC-S1763 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1763",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1763 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1765": {
    "name": "GC-S1765",
    "code": "GC-S1765",
    "sku": "GC-S1765",
    "category": "欧洲款式",
    "summary": "GC-S1765 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1765",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1765 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1766": {
    "name": "GC-S1766",
    "code": "GC-S1766",
    "sku": "GC-S1766",
    "category": "欧洲款式",
    "summary": "GC-S1766 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1766",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1766 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1767": {
    "name": "GC-S1767",
    "code": "GC-S1767",
    "sku": "GC-S1767",
    "category": "欧洲款式",
    "summary": "GC-S1767 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1767",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1767 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1768": {
    "name": "GC-S1768",
    "code": "GC-S1768",
    "sku": "GC-S1768",
    "category": "欧洲款式",
    "summary": "GC-S1768 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1768",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1768 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1769": {
    "name": "GC-S1769",
    "code": "GC-S1769",
    "sku": "GC-S1769",
    "category": "欧洲款式",
    "summary": "GC-S1769 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1769",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1769 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1771": {
    "name": "GC-S1771",
    "code": "GC-S1771",
    "sku": "GC-S1771",
    "category": "欧洲款式",
    "summary": "GC-S1771 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1771",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1771 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1773": {
    "name": "GC-S1773",
    "code": "GC-S1773",
    "sku": "GC-S1773",
    "category": "欧洲款式",
    "summary": "GC-S1773 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1773",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1773 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1775": {
    "name": "GC-S1775",
    "code": "GC-S1775",
    "sku": "GC-S1775",
    "category": "欧洲款式",
    "summary": "GC-S1775 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1775",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1775 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1776": {
    "name": "GC-S1776",
    "code": "GC-S1776",
    "sku": "GC-S1776",
    "category": "欧洲款式",
    "summary": "GC-S1776 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1776",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1776 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1777": {
    "name": "GC-S1777",
    "code": "GC-S1777",
    "sku": "GC-S1777",
    "category": "欧洲款式",
    "summary": "GC-S1777 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1777",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1777 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1778": {
    "name": "GC-S1778",
    "code": "GC-S1778",
    "sku": "GC-S1778",
    "category": "欧洲款式",
    "summary": "GC-S1778 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1778",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1778 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1779": {
    "name": "GC-S1779",
    "code": "GC-S1779",
    "sku": "GC-S1779",
    "category": "欧洲款式",
    "summary": "GC-S1779 是一款轻松休闲组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1779",
      "类型": "组合沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1779 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1781": {
    "name": "GC-S1781",
    "code": "GC-S1781",
    "sku": "GC-S1781",
    "category": "欧洲款式",
    "summary": "GC-S1781 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1781",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1781 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1782": {
    "name": "GC-S1782",
    "code": "GC-S1782",
    "sku": "GC-S1782",
    "category": "欧洲款式",
    "summary": "GC-S1782 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1782",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1782 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1783": {
    "name": "GC-S1783",
    "code": "GC-S1783",
    "sku": "GC-S1783",
    "category": "欧洲款式",
    "summary": "GC-S1783 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1783",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1783 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1785": {
    "name": "GC-S1785",
    "code": "GC-S1785",
    "sku": "GC-S1785",
    "category": "欧洲款式",
    "summary": "GC-S1785 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1785",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1785 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1787": {
    "name": "GC-S1787",
    "code": "GC-S1787",
    "sku": "GC-S1787",
    "category": "欧洲款式",
    "summary": "GC-S1787 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1787",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1787 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1788": {
    "name": "GC-S1788",
    "code": "GC-S1788",
    "sku": "GC-S1788",
    "category": "欧洲款式",
    "summary": "GC-S1788 是一款轻松休闲组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1788",
      "类型": "组合沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1788 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1791": {
    "name": "GC-S1791",
    "code": "GC-S1791",
    "sku": "GC-S1791",
    "category": "欧洲款式",
    "summary": "GC-S1791 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1791",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1791 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1792": {
    "name": "GC-S1792",
    "code": "GC-S1792",
    "sku": "GC-S1792",
    "category": "欧洲款式",
    "summary": "GC-S1792 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1792",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1792 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1793": {
    "name": "GC-S1793",
    "code": "GC-S1793",
    "sku": "GC-S1793",
    "category": "欧洲款式",
    "summary": "GC-S1793 是一款轻松休闲模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1793",
      "类型": "模块组合沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1793 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1795": {
    "name": "GC-S1795",
    "code": "GC-S1795",
    "sku": "GC-S1795",
    "category": "欧洲款式",
    "summary": "GC-S1795 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1795",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1795 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1796": {
    "name": "GC-S1796",
    "code": "GC-S1796",
    "sku": "GC-S1796",
    "category": "欧洲款式",
    "summary": "GC-S1796 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1796",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1796 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "1799": {
    "name": "GC-S1799",
    "code": "GC-S1799",
    "sku": "GC-S1799",
    "category": "欧洲款式",
    "summary": "GC-S1799 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1799",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1799 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1800": {
    "name": "GC-S1800",
    "code": "GC-S1800",
    "sku": "GC-S1800",
    "category": "欧洲款式",
    "summary": "GC-S1800 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1800",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1800 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1801": {
    "name": "GC-S1801",
    "code": "GC-S1801",
    "sku": "GC-S1801",
    "category": "欧洲款式",
    "summary": "GC-S1801 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1801",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1801 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1802": {
    "name": "GC-S1802",
    "code": "GC-S1802",
    "sku": "GC-S1802",
    "category": "欧洲款式",
    "summary": "GC-S1802 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1802",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1802 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1803": {
    "name": "GC-S1803",
    "code": "GC-S1803",
    "sku": "GC-S1803",
    "category": "欧洲款式",
    "summary": "GC-S1803 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1803",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1803 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1806": {
    "name": "GC-S1806",
    "code": "GC-S1806",
    "sku": "GC-S1806",
    "category": "欧洲款式",
    "summary": "GC-S1806 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1806",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1806 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1807": {
    "name": "GC-S1807",
    "code": "GC-S1807",
    "sku": "GC-S1807",
    "category": "欧洲款式",
    "summary": "GC-S1807 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1807",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1807 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1808": {
    "name": "GC-S1808",
    "code": "GC-S1808",
    "sku": "GC-S1808",
    "category": "欧洲款式",
    "summary": "GC-S1808 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1808",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1808 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1809": {
    "name": "GC-S1809",
    "code": "GC-S1809",
    "sku": "GC-S1809",
    "category": "欧洲款式",
    "summary": "GC-S1809 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1809",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1809 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1810": {
    "name": "GC-S1810",
    "code": "GC-S1810",
    "sku": "GC-S1810",
    "category": "欧洲款式",
    "summary": "GC-S1810 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1810",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1810 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1811": {
    "name": "GC-S1811",
    "code": "GC-S1811",
    "sku": "GC-S1811",
    "category": "欧洲款式",
    "summary": "GC-S1811 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1811",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1811 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1812": {
    "name": "GC-S1812",
    "code": "GC-S1812",
    "sku": "GC-S1812",
    "category": "欧洲款式",
    "summary": "GC-S1812 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1812",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1812 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1813": {
    "name": "GC-S1813",
    "code": "GC-S1813",
    "sku": "GC-S1813",
    "category": "欧洲款式",
    "summary": "GC-S1813 是一款耐看百搭小户型沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "小户型沙发",
      "耐看百搭",
      "亲肤布艺",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1813",
      "类型": "小户型沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1813 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1817": {
    "name": "GC-S1817",
    "code": "GC-S1817",
    "sku": "GC-S1817",
    "category": "欧洲款式",
    "summary": "GC-S1817 是一款耐看百搭休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "耐看百搭",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1817",
      "类型": "休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1817 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1818": {
    "name": "GC-S1818",
    "code": "GC-S1818",
    "sku": "GC-S1818",
    "category": "欧洲款式",
    "summary": "GC-S1818 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1818",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1818 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1819": {
    "name": "GC-S1819",
    "code": "GC-S1819",
    "sku": "GC-S1819",
    "category": "欧洲款式",
    "summary": "GC-S1819 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1819",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1819 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1820": {
    "name": "GC-S1820",
    "code": "GC-S1820",
    "sku": "GC-S1820",
    "category": "欧洲款式",
    "summary": "GC-S1820 是一款现代简约休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "现代简约",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1820",
      "类型": "休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1820 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1821": {
    "name": "GC-S1821",
    "code": "GC-S1821",
    "sku": "GC-S1821",
    "category": "欧洲款式",
    "summary": "GC-S1821 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1821",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1821 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1822": {
    "name": "GC-S1822",
    "code": "GC-S1822",
    "sku": "GC-S1822",
    "category": "欧洲款式",
    "summary": "GC-S1822 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1822",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1822 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1823": {
    "name": "GC-S1823",
    "code": "GC-S1823",
    "sku": "GC-S1823",
    "category": "欧洲款式",
    "summary": "GC-S1823 是一款温馨家居模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1823",
      "类型": "模块组合沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1823 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1825": {
    "name": "GC-S1825",
    "code": "GC-S1825",
    "sku": "GC-S1825",
    "category": "欧洲款式",
    "summary": "GC-S1825 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1825",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1825 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1826": {
    "name": "GC-S1826",
    "code": "GC-S1826",
    "sku": "GC-S1826",
    "category": "欧洲款式",
    "summary": "GC-S1826 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1826",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1826 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1831": {
    "name": "GC-S1831",
    "code": "GC-S1831",
    "sku": "GC-S1831",
    "category": "欧洲款式",
    "summary": "GC-S1831 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1831",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1831 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1832": {
    "name": "GC-S1832",
    "code": "GC-S1832",
    "sku": "GC-S1832",
    "category": "欧洲款式",
    "summary": "GC-S1832 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1832",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1832 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1835": {
    "name": "GC-S1835",
    "code": "GC-S1835",
    "sku": "GC-S1835",
    "category": "欧洲款式",
    "summary": "GC-S1835 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1835",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1835 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1836": {
    "name": "GC-S1836",
    "code": "GC-S1836",
    "sku": "GC-S1836",
    "category": "欧洲款式",
    "summary": "GC-S1836 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1836",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1836 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1838": {
    "name": "GC-S1838",
    "code": "GC-S1838",
    "sku": "GC-S1838",
    "category": "欧洲款式",
    "summary": "GC-S1838 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1838",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1838 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1839": {
    "name": "GC-S1839",
    "code": "GC-S1839",
    "sku": "GC-S1839",
    "category": "欧洲款式",
    "summary": "GC-S1839 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1839",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1839 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1840": {
    "name": "GC-S1840",
    "code": "GC-S1840",
    "sku": "GC-S1840",
    "category": "欧洲款式",
    "summary": "GC-S1840 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1840",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1840 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1842": {
    "name": "GC-S1842",
    "code": "GC-S1842",
    "sku": "GC-S1842",
    "category": "欧洲款式",
    "summary": "GC-S1842 是一款现代简约组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1842",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1842 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1845": {
    "name": "GC-S1845",
    "code": "GC-S1845",
    "sku": "GC-S1845",
    "category": "欧洲款式",
    "summary": "GC-S1845 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1845",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1845 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1846": {
    "name": "GC-S1846",
    "code": "GC-S1846",
    "sku": "GC-S1846",
    "category": "欧洲款式",
    "summary": "GC-S1846 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1846",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1846 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1847": {
    "name": "GC-S1847",
    "code": "GC-S1847",
    "sku": "GC-S1847",
    "category": "欧洲款式",
    "summary": "GC-S1847 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1847",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1847 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1849": {
    "name": "GC-S1849",
    "code": "GC-S1849",
    "sku": "GC-S1849",
    "category": "欧洲款式",
    "summary": "GC-S1849 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1849",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1849 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1850": {
    "name": "GC-S1850",
    "code": "GC-S1850",
    "sku": "GC-S1850",
    "category": "欧洲款式",
    "summary": "GC-S1850 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1850",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1850 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1851": {
    "name": "GC-S1851",
    "code": "GC-S1851",
    "sku": "GC-S1851",
    "category": "欧洲款式",
    "summary": "GC-S1851 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1851",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1851 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1852": {
    "name": "GC-S1852",
    "code": "GC-S1852",
    "sku": "GC-S1852",
    "category": "欧洲款式",
    "summary": "GC-S1852 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1852",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1852 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1853": {
    "name": "GC-S1853",
    "code": "GC-S1853",
    "sku": "GC-S1853",
    "category": "欧洲款式",
    "summary": "GC-S1853 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1853",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1853 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1854": {
    "name": "GC-S1854",
    "code": "GC-S1854",
    "sku": "GC-S1854",
    "category": "欧洲款式",
    "summary": "GC-S1854 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1854",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1854 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1855": {
    "name": "GC-S1855",
    "code": "GC-S1855",
    "sku": "GC-S1855",
    "category": "欧洲款式",
    "summary": "GC-S1855 是一款现代简约小户型沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "小户型沙发",
      "现代简约",
      "亲肤布艺",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1855",
      "类型": "小户型沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1855 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1856": {
    "name": "GC-S1856",
    "code": "GC-S1856",
    "sku": "GC-S1856",
    "category": "欧洲款式",
    "summary": "GC-S1856 是一款轻松休闲休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "轻松休闲",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1856",
      "类型": "休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1856 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1857": {
    "name": "GC-S1857",
    "code": "GC-S1857",
    "sku": "GC-S1857",
    "category": "欧洲款式",
    "summary": "GC-S1857 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1857",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1857 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1860": {
    "name": "GC-S1860",
    "code": "GC-S1860",
    "sku": "GC-S1860",
    "category": "欧洲款式",
    "summary": "GC-S1860 是一款现代简约组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1860",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1860 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1861": {
    "name": "GC-S1861",
    "code": "GC-S1861",
    "sku": "GC-S1861",
    "category": "欧洲款式",
    "summary": "GC-S1861 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理15张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1861",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理15张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1861 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1862": {
    "name": "GC-S1862",
    "code": "GC-S1862",
    "sku": "GC-S1862",
    "category": "欧洲款式",
    "summary": "GC-S1862 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1862",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1862 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1863": {
    "name": "GC-S1863",
    "code": "GC-S1863",
    "sku": "GC-S1863",
    "category": "欧洲款式",
    "summary": "GC-S1863 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1863",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1863 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1865": {
    "name": "GC-S1865",
    "code": "GC-S1865",
    "sku": "GC-S1865",
    "category": "欧洲款式",
    "summary": "GC-S1865 是一款轻松休闲模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1865",
      "类型": "模块组合沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1865 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1866": {
    "name": "GC-S1866",
    "code": "GC-S1866",
    "sku": "GC-S1866",
    "category": "欧洲款式",
    "summary": "GC-S1866 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1866",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1866 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1868": {
    "name": "GC-S1868",
    "code": "GC-S1868",
    "sku": "GC-S1868",
    "category": "欧洲款式",
    "summary": "GC-S1868 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1868",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1868 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1869": {
    "name": "GC-S1869",
    "code": "GC-S1869",
    "sku": "GC-S1869",
    "category": "欧洲款式",
    "summary": "GC-S1869 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1869",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1869 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1870": {
    "name": "GC-S1870",
    "code": "GC-S1870",
    "sku": "GC-S1870",
    "category": "欧洲款式",
    "summary": "GC-S1870 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1870",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1870 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1871": {
    "name": "GC-S1871",
    "code": "GC-S1871",
    "sku": "GC-S1871",
    "category": "欧洲款式",
    "summary": "GC-S1871 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1871",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1871 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1872": {
    "name": "GC-S1872",
    "code": "GC-S1872",
    "sku": "GC-S1872",
    "category": "欧洲款式",
    "summary": "GC-S1872 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1872",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1872 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1873": {
    "name": "GC-S1873",
    "code": "GC-S1873",
    "sku": "GC-S1873",
    "category": "欧洲款式",
    "summary": "GC-S1873 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1873",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1873 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1875": {
    "name": "GC-S1875",
    "code": "GC-S1875",
    "sku": "GC-S1875",
    "category": "欧洲款式",
    "summary": "GC-S1875 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1875",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1875 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1876": {
    "name": "GC-S1876",
    "code": "GC-S1876",
    "sku": "GC-S1876",
    "category": "欧洲款式",
    "summary": "GC-S1876 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1876",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1876 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1877": {
    "name": "GC-S1877",
    "code": "GC-S1877",
    "sku": "GC-S1877",
    "category": "欧洲款式",
    "summary": "GC-S1877 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1877",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1877 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1878": {
    "name": "GC-S1878",
    "code": "GC-S1878",
    "sku": "GC-S1878",
    "category": "欧洲款式",
    "summary": "GC-S1878 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1878",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1878 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1879": {
    "name": "GC-S1879",
    "code": "GC-S1879",
    "sku": "GC-S1879",
    "category": "欧洲款式",
    "summary": "GC-S1879 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1879",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1879 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1881": {
    "name": "GC-S1881",
    "code": "GC-S1881",
    "sku": "GC-S1881",
    "category": "欧洲款式",
    "summary": "GC-S1881 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1881",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1881 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1883": {
    "name": "GC-S1883",
    "code": "GC-S1883",
    "sku": "GC-S1883",
    "category": "欧洲款式",
    "summary": "GC-S1883 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1883",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1883 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1885": {
    "name": "GC-S1885",
    "code": "GC-S1885",
    "sku": "GC-S1885",
    "category": "欧洲款式",
    "summary": "GC-S1885 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1885",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1885 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1886": {
    "name": "GC-S1886",
    "code": "GC-S1886",
    "sku": "GC-S1886",
    "category": "欧洲款式",
    "summary": "GC-S1886 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1886",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1886 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1887": {
    "name": "GC-S1887",
    "code": "GC-S1887",
    "sku": "GC-S1887",
    "category": "欧洲款式",
    "summary": "GC-S1887 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1887",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1887 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1888": {
    "name": "GC-S1888",
    "code": "GC-S1888",
    "sku": "GC-S1888",
    "category": "欧洲款式",
    "summary": "GC-S1888 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1888",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1888 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1890": {
    "name": "GC-S1890",
    "code": "GC-S1890",
    "sku": "GC-S1890",
    "category": "欧洲款式",
    "summary": "GC-S1890 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1890",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1890 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1891": {
    "name": "GC-S1891",
    "code": "GC-S1891",
    "sku": "GC-S1891",
    "category": "欧洲款式",
    "summary": "GC-S1891 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1891",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1891 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1892": {
    "name": "GC-S1892",
    "code": "GC-S1892",
    "sku": "GC-S1892",
    "category": "欧洲款式",
    "summary": "GC-S1892 是一款轻松休闲模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1892",
      "类型": "模块组合沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1892 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1893": {
    "name": "GC-S1893",
    "code": "GC-S1893",
    "sku": "GC-S1893",
    "category": "欧洲款式",
    "summary": "GC-S1893 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1893",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1893 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1895": {
    "name": "GC-S1895",
    "code": "GC-S1895",
    "sku": "GC-S1895",
    "category": "欧洲款式",
    "summary": "GC-S1895 是一款现代简约现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1895",
      "类型": "现代休闲沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1895 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1896": {
    "name": "GC-S1896",
    "code": "GC-S1896",
    "sku": "GC-S1896",
    "category": "欧洲款式",
    "summary": "GC-S1896 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1896",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1896 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1897": {
    "name": "GC-S1897",
    "code": "GC-S1897",
    "sku": "GC-S1897",
    "category": "欧洲款式",
    "summary": "GC-S1897 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理10张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1897",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1897 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1898": {
    "name": "GC-S1898",
    "code": "GC-S1898",
    "sku": "GC-S1898",
    "category": "欧洲款式",
    "summary": "GC-S1898 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1898",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1898 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "1899": {
    "name": "GC-S1899",
    "code": "GC-S1899",
    "sku": "GC-S1899",
    "category": "欧洲款式",
    "summary": "GC-S1899 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1899",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1899 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1901": {
    "name": "GC-S1901",
    "code": "GC-S1901",
    "sku": "GC-S1901",
    "category": "欧洲款式",
    "summary": "GC-S1901 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1901",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1901 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1903": {
    "name": "GC-S1903",
    "code": "GC-S1903",
    "sku": "GC-S1903",
    "category": "欧洲款式",
    "summary": "GC-S1903 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1903",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1903 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1904": {
    "name": "GC-S1904",
    "code": "GC-S1904",
    "sku": "GC-S1904",
    "category": "欧洲款式",
    "summary": "GC-S1904 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1904",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1904 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1905": {
    "name": "GC-S1905",
    "code": "GC-S1905",
    "sku": "GC-S1905",
    "category": "欧洲款式",
    "summary": "GC-S1905 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1905",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1905 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1906": {
    "name": "GC-S1906",
    "code": "GC-S1906",
    "sku": "GC-S1906",
    "category": "欧洲款式",
    "summary": "GC-S1906 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1906",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1906 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1907": {
    "name": "GC-S1907",
    "code": "GC-S1907",
    "sku": "GC-S1907",
    "category": "欧洲款式",
    "summary": "GC-S1907 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1907",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1907 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1908": {
    "name": "GC-S1908",
    "code": "GC-S1908",
    "sku": "GC-S1908",
    "category": "欧洲款式",
    "summary": "GC-S1908 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1908",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1908 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1911": {
    "name": "GC-S1911",
    "code": "GC-S1911",
    "sku": "GC-S1911",
    "category": "欧洲款式",
    "summary": "GC-S1911 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1911",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1911 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1912": {
    "name": "GC-S1912",
    "code": "GC-S1912",
    "sku": "GC-S1912",
    "category": "欧洲款式",
    "summary": "GC-S1912 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1912",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1912 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1913": {
    "name": "GC-S1913",
    "code": "GC-S1913",
    "sku": "GC-S1913",
    "category": "欧洲款式",
    "summary": "GC-S1913 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1913",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1913 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1917": {
    "name": "GC-S1917",
    "code": "GC-S1917",
    "sku": "GC-S1917",
    "category": "欧洲款式",
    "summary": "GC-S1917 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1917",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1917 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1918": {
    "name": "GC-S1918",
    "code": "GC-S1918",
    "sku": "GC-S1918",
    "category": "欧洲款式",
    "summary": "GC-S1918 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1918",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1918 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1930": {
    "name": "GC-S1930",
    "code": "GC-S1930",
    "sku": "GC-S1930",
    "category": "欧洲款式",
    "summary": "GC-S1930 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1930",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1930 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1931": {
    "name": "GC-S1931",
    "code": "GC-S1931",
    "sku": "GC-S1931",
    "category": "欧洲款式",
    "summary": "GC-S1931 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1931",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1931 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1932": {
    "name": "GC-S1932",
    "code": "GC-S1932",
    "sku": "GC-S1932",
    "category": "欧洲款式",
    "summary": "GC-S1932 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1932",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1932 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1933": {
    "name": "GC-S1933",
    "code": "GC-S1933",
    "sku": "GC-S1933",
    "category": "欧洲款式",
    "summary": "GC-S1933 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1933",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1933 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1936": {
    "name": "GC-S1936",
    "code": "GC-S1936",
    "sku": "GC-S1936",
    "category": "欧洲款式",
    "summary": "GC-S1936 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1936",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1936 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1938": {
    "name": "GC-S1938",
    "code": "GC-S1938",
    "sku": "GC-S1938",
    "category": "欧洲款式",
    "summary": "GC-S1938 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1938",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1938 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1939": {
    "name": "GC-S1939",
    "code": "GC-S1939",
    "sku": "GC-S1939",
    "category": "欧洲款式",
    "summary": "GC-S1939 是一款温馨家居客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理20张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1939",
      "类型": "客厅套系",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理20张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1939 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1940": {
    "name": "GC-S1940",
    "code": "GC-S1940",
    "sku": "GC-S1940",
    "category": "欧洲款式",
    "summary": "GC-S1940 是一款温馨家居模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1940",
      "类型": "模块组合沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1940 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1941": {
    "name": "GC-S1941",
    "code": "GC-S1941",
    "sku": "GC-S1941",
    "category": "欧洲款式",
    "summary": "GC-S1941 是一款现代简约直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1941",
      "类型": "直排沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1941 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1942": {
    "name": "GC-S1942",
    "code": "GC-S1942",
    "sku": "GC-S1942",
    "category": "欧洲款式",
    "summary": "GC-S1942 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1942",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1942 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1943": {
    "name": "GC-S1943",
    "code": "GC-S1943",
    "sku": "GC-S1943",
    "category": "欧洲款式",
    "summary": "GC-S1943 是一款耐看百搭现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1943",
      "类型": "现代休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1943 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1945": {
    "name": "GC-S1945",
    "code": "GC-S1945",
    "sku": "GC-S1945",
    "category": "欧洲款式",
    "summary": "GC-S1945 是一款现代简约小户型沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "小户型沙发",
      "现代简约",
      "亲肤布艺",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1945",
      "类型": "小户型沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1945 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1946": {
    "name": "GC-S1946",
    "code": "GC-S1946",
    "sku": "GC-S1946",
    "category": "欧洲款式",
    "summary": "GC-S1946 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1946",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1946 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1947": {
    "name": "GC-S1947",
    "code": "GC-S1947",
    "sku": "GC-S1947",
    "category": "欧洲款式",
    "summary": "GC-S1947 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1947",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1947 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1949": {
    "name": "GC-S1949",
    "code": "GC-S1949",
    "sku": "GC-S1949",
    "category": "欧洲款式",
    "summary": "GC-S1949 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1949",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1949 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1950": {
    "name": "GC-S1950",
    "code": "GC-S1950",
    "sku": "GC-S1950",
    "category": "欧洲款式",
    "summary": "GC-S1950 是一款现代简约组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "现代简约",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1950",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1950 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1951": {
    "name": "GC-S1951",
    "code": "GC-S1951",
    "sku": "GC-S1951",
    "category": "欧洲款式",
    "summary": "GC-S1951 是一款轻松休闲客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "轻松休闲",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1951",
      "类型": "客厅套系",
      "风格": "轻松休闲",
      "面料": "亲肤布艺",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1951 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1952": {
    "name": "GC-S1952",
    "code": "GC-S1952",
    "sku": "GC-S1952",
    "category": "欧洲款式",
    "summary": "GC-S1952 是一款耐看百搭模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "耐看百搭",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1952",
      "类型": "模块组合沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1952 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1953": {
    "name": "GC-S1953",
    "code": "GC-S1953",
    "sku": "GC-S1953",
    "category": "欧洲款式",
    "summary": "GC-S1953 是一款温馨家居直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1953",
      "类型": "直排沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1953 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1956": {
    "name": "GC-S1956",
    "code": "GC-S1956",
    "sku": "GC-S1956",
    "category": "欧洲款式",
    "summary": "GC-S1956 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1956",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1956 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1957": {
    "name": "GC-S1957",
    "code": "GC-S1957",
    "sku": "GC-S1957",
    "category": "欧洲款式",
    "summary": "GC-S1957 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1957",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1957 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1958": {
    "name": "GC-S1958",
    "code": "GC-S1958",
    "sku": "GC-S1958",
    "category": "欧洲款式",
    "summary": "GC-S1958 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1958",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1958 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1959": {
    "name": "GC-S1959",
    "code": "GC-S1959",
    "sku": "GC-S1959",
    "category": "欧洲款式",
    "summary": "GC-S1959 是一款轻松休闲直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "轻松休闲",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1959",
      "类型": "直排沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1959 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1970": {
    "name": "GC-S1970",
    "code": "GC-S1970",
    "sku": "GC-S1970",
    "category": "欧洲款式",
    "summary": "GC-S1970 是一款耐看百搭休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "耐看百搭",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1970",
      "类型": "休闲沙发",
      "风格": "耐看百搭",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1970 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1971": {
    "name": "GC-S1971",
    "code": "GC-S1971",
    "sku": "GC-S1971",
    "category": "欧洲款式",
    "summary": "GC-S1971 是一款温馨家居客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "温馨家居",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1971",
      "类型": "客厅沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1971 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1977": {
    "name": "GC-S1977",
    "code": "GC-S1977",
    "sku": "GC-S1977",
    "category": "欧洲款式",
    "summary": "GC-S1977 是一款轻松休闲客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "轻松休闲",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1977",
      "类型": "客厅沙发",
      "风格": "轻松休闲",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1977 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1978": {
    "name": "GC-S1978",
    "code": "GC-S1978",
    "sku": "GC-S1978",
    "category": "欧洲款式",
    "summary": "GC-S1978 是一款耐看百搭客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1978",
      "类型": "客厅套系",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1978 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1979": {
    "name": "GC-S1979",
    "code": "GC-S1979",
    "sku": "GC-S1979",
    "category": "欧洲款式",
    "summary": "GC-S1979 是一款温馨家居模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1979",
      "类型": "模块组合沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1979 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1980": {
    "name": "GC-S1980",
    "code": "GC-S1980",
    "sku": "GC-S1980",
    "category": "欧洲款式",
    "summary": "GC-S1980 是一款温馨家居组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "温馨家居",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1980",
      "类型": "组合沙发",
      "风格": "温馨家居",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1980 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1981": {
    "name": "GC-S1981",
    "code": "GC-S1981",
    "sku": "GC-S1981",
    "category": "欧洲款式",
    "summary": "GC-S1981 是一款现代简约客厅套系，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理9张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅套系",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1981",
      "类型": "客厅套系",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1981 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1982": {
    "name": "GC-S1982",
    "code": "GC-S1982",
    "sku": "GC-S1982",
    "category": "欧洲款式",
    "summary": "GC-S1982 是一款轻松休闲现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "轻松休闲",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1982",
      "类型": "现代休闲沙发",
      "风格": "轻松休闲",
      "面料": "耐看面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1982 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1983": {
    "name": "GC-S1983",
    "code": "GC-S1983",
    "sku": "GC-S1983",
    "category": "欧洲款式",
    "summary": "GC-S1983 是一款耐看百搭组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "组合沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1983",
      "类型": "组合沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1983 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1985": {
    "name": "GC-S1985",
    "code": "GC-S1985",
    "sku": "GC-S1985",
    "category": "欧洲款式",
    "summary": "GC-S1985 是一款现代简约模块组合沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理8张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "模块组合沙发",
      "现代简约",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1985",
      "类型": "模块组合沙发",
      "风格": "现代简约",
      "面料": "耐看面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1985 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1988": {
    "name": "GC-S1988",
    "code": "GC-S1988",
    "sku": "GC-S1988",
    "category": "欧洲款式",
    "summary": "GC-S1988 是一款温馨家居休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "休闲沙发",
      "温馨家居",
      "耐看面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1988",
      "类型": "休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1988 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1989": {
    "name": "GC-S1989",
    "code": "GC-S1989",
    "sku": "GC-S1989",
    "category": "欧洲款式",
    "summary": "GC-S1989 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理5张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "柔和触感面料",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1989",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "柔和触感面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1989 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1990": {
    "name": "GC-S1990",
    "code": "GC-S1990",
    "sku": "GC-S1990",
    "category": "欧洲款式",
    "summary": "GC-S1990 是一款现代简约客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1990",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1990 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1992": {
    "name": "GC-S1992",
    "code": "GC-S1992",
    "sku": "GC-S1992",
    "category": "欧洲款式",
    "summary": "GC-S1992 是一款耐看百搭直排沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "直排沙发",
      "耐看百搭",
      "柔和触感面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1992",
      "类型": "直排沙发",
      "风格": "耐看百搭",
      "面料": "柔和触感面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1992 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "柔和触感面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1993": {
    "name": "GC-S1993",
    "code": "GC-S1993",
    "sku": "GC-S1993",
    "category": "欧洲款式",
    "summary": "GC-S1993 是一款温馨家居小户型沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理4张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "小户型沙发",
      "温馨家居",
      "亲肤布艺",
      "目录款"
    ],
    "specs": {
      "型号": "GC-S1993",
      "类型": "小户型沙发",
      "风格": "温馨家居",
      "面料": "亲肤布艺",
      "图片": "已整理4张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1993 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1996": {
    "name": "GC-S1996",
    "code": "GC-S1996",
    "sku": "GC-S1996",
    "category": "欧洲款式",
    "summary": "GC-S1996 是一款耐看百搭客厅沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理7张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "客厅沙发",
      "耐看百搭",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1996",
      "类型": "客厅沙发",
      "风格": "耐看百搭",
      "面料": "亲肤布艺",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1996 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "亲肤布艺能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "1997": {
    "name": "GC-S1997",
    "code": "GC-S1997",
    "sku": "GC-S1997",
    "category": "欧洲款式",
    "summary": "GC-S1997 是一款温馨家居现代休闲沙发，适合放入门店样板、产品目录和客户方案中重点推荐。整体造型清爽耐看，搭配门槛低，能够覆盖日常客厅、休闲会客和成套陈列需求。已整理6张产品图，方便客户快速查看正面比例、多角度细节和场景效果。",
    "tags": [
      "现代休闲沙发",
      "温馨家居",
      "耐看面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S1997",
      "类型": "现代休闲沙发",
      "风格": "温馨家居",
      "面料": "耐看面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S1997 造型清晰，适合用于门店陈列、线上目录和客户选款沟通。",
      "耐看面料能突出舒适坐感和日常使用价值，终端客户更容易理解产品卖点。",
      "整体风格不挑空间，适合围绕不同客厅氛围、预算层级和销售场景做推荐。",
      "图片资料已按网站展示整理，便于查看四视图、细节图和场景图。"
    ],
    "homes": [
      "公寓客厅",
      "家庭客厅",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "区域经销客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2002": {
    "name": "GC-S2002",
    "code": "GC-S2002",
    "sku": "GC-S2002",
    "category": "欧洲款式",
    "summary": "GC-S2002 主打多图组合、组合沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "多图组合",
      "组合沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2002",
      "风格": "多图组合",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2002 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "样板间"
    ],
    "audience": [
      "家庭客厅",
      "样板间展示",
      "门店选品"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2003": {
    "name": "GC-S2003",
    "code": "GC-S2003",
    "sku": "GC-S2003",
    "category": "欧洲款式",
    "summary": "GC-S2003 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2003",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2003 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2006": {
    "name": "GC-S2006",
    "code": "GC-S2006",
    "sku": "GC-S2006",
    "category": "欧洲款式",
    "summary": "GC-S2006 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2006",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2006 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2008": {
    "name": "GC-S2008",
    "code": "GC-S2008",
    "sku": "GC-S2008",
    "category": "欧洲款式",
    "summary": "GC-S2008 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
    "tags": [
      "多图组合",
      "组合沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2008",
      "风格": "多图组合",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2008 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "样板间"
    ],
    "audience": [
      "家庭客厅",
      "样板间展示",
      "门店选品"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2009": {
    "name": "GC-S2009",
    "code": "GC-S2009",
    "sku": "GC-S2009",
    "category": "欧洲款式",
    "summary": "GC-S2009 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2009",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2009 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2010": {
    "name": "GC-S2010",
    "code": "GC-S2010",
    "sku": "GC-S2010",
    "category": "欧洲款式",
    "summary": "GC-S2010 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2010",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2010 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2015": {
    "name": "GC-S2015",
    "code": "GC-S2015",
    "sku": "GC-S2015",
    "category": "欧洲款式",
    "summary": "GC-S2015 主打多图组合、组合沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "多图组合",
      "组合沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2015",
      "风格": "多图组合",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理11张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2015 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "样板间"
    ],
    "audience": [
      "家庭客厅",
      "样板间展示",
      "门店选品"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2020": {
    "name": "GC-S2020",
    "code": "GC-S2020",
    "sku": "GC-S2020",
    "category": "欧洲款式",
    "summary": "GC-S2020 主打简洁款式，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "简洁款式",
      "客厅沙发",
      "布艺面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2020",
      "风格": "简洁款式",
      "面料": "布艺面料",
      "颜色": "以图片为准",
      "图片": "已整理3张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2020 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "小客厅",
      "公寓",
      "休闲区"
    ],
    "audience": [
      "小户型家庭",
      "出租公寓",
      "门店补充款"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2021": {
    "name": "GC-S2021",
    "code": "GC-S2021",
    "sku": "GC-S2021",
    "category": "欧洲款式",
    "summary": "GC-S2021 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2021",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2021 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2022": {
    "name": "GC-S2022",
    "code": "GC-S2022",
    "sku": "GC-S2022",
    "category": "欧洲款式",
    "summary": "GC-S2022 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2022",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2022 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2023": {
    "name": "GC-S2023",
    "code": "GC-S2023",
    "sku": "GC-S2023",
    "category": "欧洲款式",
    "summary": "GC-S2023 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "多图组合",
      "组合沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2023",
      "风格": "多图组合",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2023 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "样板间"
    ],
    "audience": [
      "家庭客厅",
      "样板间展示",
      "门店选品"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2025": {
    "name": "GC-S2025",
    "code": "GC-S2025",
    "sku": "GC-S2025",
    "category": "欧洲款式",
    "summary": "GC-S2025 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2025",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2025 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2026": {
    "name": "GC-S2026",
    "code": "GC-S2026",
    "sku": "GC-S2026",
    "category": "欧洲款式",
    "summary": "GC-S2026 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
    "tags": [
      "多图组合",
      "组合沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2026",
      "风格": "多图组合",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2026 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "样板间"
    ],
    "audience": [
      "家庭客厅",
      "样板间展示",
      "门店选品"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2027": {
    "name": "GC-S2027",
    "code": "GC-S2027",
    "sku": "GC-S2027",
    "category": "欧洲款式",
    "summary": "GC-S2027 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2027",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2027 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2028": {
    "name": "GC-S2028",
    "code": "GC-S2028",
    "sku": "GC-S2028",
    "category": "欧洲款式",
    "summary": "GC-S2028 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2028",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2028 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2029": {
    "name": "GC-S2029",
    "code": "GC-S2029",
    "sku": "GC-S2029",
    "category": "欧洲款式",
    "summary": "GC-S2029 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2029",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2029 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2030": {
    "name": "GC-S2030",
    "code": "GC-S2030",
    "sku": "GC-S2030",
    "category": "欧洲款式",
    "summary": "GC-S2030 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2030",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2030 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2031": {
    "name": "GC-S2031",
    "code": "GC-S2031",
    "sku": "GC-S2031",
    "category": "欧洲款式",
    "summary": "GC-S2031 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2031",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2031 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2032": {
    "name": "GC-S2032",
    "code": "GC-S2032",
    "sku": "GC-S2032",
    "category": "欧洲款式",
    "summary": "GC-S2032 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2032",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2032 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2033": {
    "name": "GC-S2033",
    "code": "GC-S2033",
    "sku": "GC-S2033",
    "category": "欧洲款式",
    "summary": "GC-S2033 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2033",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2033 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2035": {
    "name": "GC-S2035",
    "code": "GC-S2035",
    "sku": "GC-S2035",
    "category": "欧洲款式",
    "summary": "GC-S2035 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2035",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2035 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2036": {
    "name": "GC-S2036",
    "code": "GC-S2036",
    "sku": "GC-S2036",
    "category": "欧洲款式",
    "summary": "GC-S2036 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2036",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2036 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2037": {
    "name": "GC-S2037",
    "code": "GC-S2037",
    "sku": "GC-S2037",
    "category": "欧洲款式",
    "summary": "GC-S2037 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2037",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2037 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2038": {
    "name": "GC-S2038",
    "code": "GC-S2038",
    "sku": "GC-S2038",
    "category": "欧洲款式",
    "summary": "GC-S2038 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "简洁款式",
      "客厅沙发",
      "布艺面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2038",
      "风格": "简洁款式",
      "面料": "布艺面料",
      "颜色": "以图片为准",
      "图片": "已整理4张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2038 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "小客厅",
      "公寓",
      "休闲区"
    ],
    "audience": [
      "小户型家庭",
      "出租公寓",
      "门店补充款"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2039": {
    "name": "GC-S2039",
    "code": "GC-S2039",
    "sku": "GC-S2039",
    "category": "欧洲款式",
    "summary": "GC-S2039 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "简洁款式",
      "客厅沙发",
      "布艺面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2039",
      "风格": "简洁款式",
      "面料": "布艺面料",
      "颜色": "以图片为准",
      "图片": "已整理1张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2039 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "小客厅",
      "公寓",
      "休闲区"
    ],
    "audience": [
      "小户型家庭",
      "出租公寓",
      "门店补充款"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2041": {
    "name": "GC-S2041",
    "code": "GC-S2041",
    "sku": "GC-S2041",
    "category": "欧洲款式",
    "summary": "GC-S2041 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2041",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2041 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2042": {
    "name": "GC-S2042",
    "code": "GC-S2042",
    "sku": "GC-S2042",
    "category": "欧洲款式",
    "summary": "GC-S2042 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2042",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2042 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2045": {
    "name": "GC-S2045",
    "code": "GC-S2045",
    "sku": "GC-S2045",
    "category": "欧洲款式",
    "summary": "GC-S2045 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2045",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2045 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2047": {
    "name": "GC-S2047",
    "code": "GC-S2047",
    "sku": "GC-S2047",
    "category": "欧洲款式",
    "summary": "GC-S2047 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "简洁款式",
      "客厅沙发",
      "布艺面料",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2047",
      "风格": "简洁款式",
      "面料": "布艺面料",
      "颜色": "以图片为准",
      "图片": "已整理4张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2047 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "小客厅",
      "公寓",
      "休闲区"
    ],
    "audience": [
      "小户型家庭",
      "出租公寓",
      "门店补充款"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2048": {
    "name": "GC-S2048",
    "code": "GC-S2048",
    "sku": "GC-S2048",
    "category": "欧洲款式",
    "summary": "GC-S2048 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2048",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2048 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2049": {
    "name": "GC-S2049",
    "code": "GC-S2049",
    "sku": "GC-S2049",
    "category": "欧洲款式",
    "summary": "GC-S2049 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2049",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2049 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2058": {
    "name": "GC-S2058",
    "code": "GC-S2058",
    "sku": "GC-S2058",
    "category": "欧洲款式",
    "summary": "GC-S2058 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2058",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2058 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2059": {
    "name": "GC-S2059",
    "code": "GC-S2059",
    "sku": "GC-S2059",
    "category": "欧洲款式",
    "summary": "GC-S2059 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2059",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2059 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2060": {
    "name": "GC-S2060",
    "code": "GC-S2060",
    "sku": "GC-S2060",
    "category": "欧洲款式",
    "summary": "GC-S2060 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2060",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2060 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2061": {
    "name": "GC-S2061",
    "code": "GC-S2061",
    "sku": "GC-S2061",
    "category": "欧洲款式",
    "summary": "GC-S2061 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2061",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2061 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2066": {
    "name": "GC-S2066",
    "code": "GC-S2066",
    "sku": "GC-S2066",
    "category": "欧洲款式",
    "summary": "GC-S2066 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2066",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2066 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2067": {
    "name": "GC-S2067",
    "code": "GC-S2067",
    "sku": "GC-S2067",
    "category": "欧洲款式",
    "summary": "GC-S2067 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2067",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2067 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2068": {
    "name": "GC-S2068",
    "code": "GC-S2068",
    "sku": "GC-S2068",
    "category": "欧洲款式",
    "summary": "GC-S2068 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2068",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2068 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2069": {
    "name": "GC-S2069",
    "code": "GC-S2069",
    "sku": "GC-S2069",
    "category": "欧洲款式",
    "summary": "GC-S2069 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2069",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2069 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2070": {
    "name": "GC-S2070",
    "code": "GC-S2070",
    "sku": "GC-S2070",
    "category": "欧洲款式",
    "summary": "GC-S2070 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2070",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2070 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2071": {
    "name": "GC-S2071",
    "code": "GC-S2071",
    "sku": "GC-S2071",
    "category": "欧洲款式",
    "summary": "GC-S2071 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2071",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2071 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2072": {
    "name": "GC-S2072",
    "code": "GC-S2072",
    "sku": "GC-S2072",
    "category": "欧洲款式",
    "summary": "GC-S2072 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2072",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2072 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2073": {
    "name": "GC-S2073",
    "code": "GC-S2073",
    "sku": "GC-S2073",
    "category": "欧洲款式",
    "summary": "GC-S2073 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2073",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2073 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2075": {
    "name": "GC-S2075",
    "code": "GC-S2075",
    "sku": "GC-S2075",
    "category": "欧洲款式",
    "summary": "GC-S2075 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2075",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2075 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2077": {
    "name": "GC-S2077",
    "code": "GC-S2077",
    "sku": "GC-S2077",
    "category": "欧洲款式",
    "summary": "GC-S2077 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2077",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2077 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2078": {
    "name": "GC-S2078",
    "code": "GC-S2078",
    "sku": "GC-S2078",
    "category": "欧洲款式",
    "summary": "GC-S2078 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2078",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2078 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2080": {
    "name": "GC-S2080",
    "code": "GC-S2080",
    "sku": "GC-S2080",
    "category": "欧洲款式",
    "summary": "GC-S2080 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2080",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2080 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2081": {
    "name": "GC-S2081",
    "code": "GC-S2081",
    "sku": "GC-S2081",
    "category": "欧洲款式",
    "summary": "GC-S2081 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2081",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2081 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2086": {
    "name": "GC-S2086",
    "code": "GC-S2086",
    "sku": "GC-S2086",
    "category": "欧洲款式",
    "summary": "GC-S2086 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2086",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2086 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2090": {
    "name": "GC-S2090",
    "code": "GC-S2090",
    "sku": "GC-S2090",
    "category": "欧洲款式",
    "summary": "GC-S2090 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2090",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2090 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2091": {
    "name": "GC-S2091",
    "code": "GC-S2091",
    "sku": "GC-S2091",
    "category": "欧洲款式",
    "summary": "GC-S2091 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2091",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2091 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2092": {
    "name": "GC-S2092",
    "code": "GC-S2092",
    "sku": "GC-S2092",
    "category": "欧洲款式",
    "summary": "GC-S2092 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2092",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2092 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2093": {
    "name": "GC-S2093",
    "code": "GC-S2093",
    "sku": "GC-S2093",
    "category": "欧洲款式",
    "summary": "GC-S2093 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2093",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2093 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2095": {
    "name": "GC-S2095",
    "code": "GC-S2095",
    "sku": "GC-S2095",
    "category": "欧洲款式",
    "summary": "GC-S2095 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2095",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2095 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2096": {
    "name": "GC-S2096",
    "code": "GC-S2096",
    "sku": "GC-S2096",
    "category": "欧洲款式",
    "summary": "GC-S2096 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2096",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2096 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2097": {
    "name": "GC-S2097",
    "code": "GC-S2097",
    "sku": "GC-S2097",
    "category": "欧洲款式",
    "summary": "GC-S2097 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2097",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2097 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2098": {
    "name": "GC-S2098",
    "code": "GC-S2098",
    "sku": "GC-S2098",
    "category": "欧洲款式",
    "summary": "GC-S2098 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2098",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2098 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2100": {
    "name": "GC-S2100",
    "code": "GC-S2100",
    "sku": "GC-S2100",
    "category": "欧洲款式",
    "summary": "GC-S2100 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2100",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2100 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2102": {
    "name": "GC-S2102",
    "code": "GC-S2102",
    "sku": "GC-S2102",
    "category": "欧洲款式",
    "summary": "GC-S2102 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2102",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2102 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2103": {
    "name": "GC-S2103",
    "code": "GC-S2103",
    "sku": "GC-S2103",
    "category": "欧洲款式",
    "summary": "GC-S2103 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2103",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2103 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2105": {
    "name": "GC-S2105",
    "code": "GC-S2105",
    "sku": "GC-S2105",
    "category": "欧洲款式",
    "summary": "GC-S2105 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2105",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2105 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2106": {
    "name": "GC-S2106",
    "code": "GC-S2106",
    "sku": "GC-S2106",
    "category": "欧洲款式",
    "summary": "GC-S2106 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2106",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2106 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2107": {
    "name": "GC-S2107",
    "code": "GC-S2107",
    "sku": "GC-S2107",
    "category": "欧洲款式",
    "summary": "GC-S2107 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2107",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2107 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2109": {
    "name": "GC-S2109",
    "code": "GC-S2109",
    "sku": "GC-S2109",
    "category": "欧洲款式",
    "summary": "GC-S2109 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2109",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2109 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2110": {
    "name": "GC-S2110",
    "code": "GC-S2110",
    "sku": "GC-S2110",
    "category": "欧洲款式",
    "summary": "GC-S2110 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2110",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2110 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2111": {
    "name": "GC-S2111",
    "code": "GC-S2111",
    "sku": "GC-S2111",
    "category": "欧洲款式",
    "summary": "GC-S2111 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2111",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2111 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2112": {
    "name": "GC-S2112",
    "code": "GC-S2112",
    "sku": "GC-S2112",
    "category": "欧洲款式",
    "summary": "GC-S2112 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2112",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2112 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2113": {
    "name": "GC-S2113",
    "code": "GC-S2113",
    "sku": "GC-S2113",
    "category": "欧洲款式",
    "summary": "GC-S2113 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2113",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2113 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2116": {
    "name": "GC-S2116",
    "code": "GC-S2116",
    "sku": "GC-S2116",
    "category": "欧洲款式",
    "summary": "GC-S2116 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2116",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2116 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2117": {
    "name": "GC-S2117",
    "code": "GC-S2117",
    "sku": "GC-S2117",
    "category": "欧洲款式",
    "summary": "GC-S2117 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2117",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2117 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2118": {
    "name": "GC-S2118",
    "code": "GC-S2118",
    "sku": "GC-S2118",
    "category": "欧洲款式",
    "summary": "GC-S2118 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2118",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2118 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2119": {
    "name": "GC-S2119",
    "code": "GC-S2119",
    "sku": "GC-S2119",
    "category": "欧洲款式",
    "summary": "GC-S2119 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2119",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2119 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2120": {
    "name": "GC-S2120",
    "code": "GC-S2120",
    "sku": "GC-S2120",
    "category": "欧洲款式",
    "summary": "GC-S2120 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2120",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2120 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2121": {
    "name": "GC-S2121",
    "code": "GC-S2121",
    "sku": "GC-S2121",
    "category": "欧洲款式",
    "summary": "GC-S2121 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2121",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2121 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2122": {
    "name": "GC-S2122",
    "code": "GC-S2122",
    "sku": "GC-S2122",
    "category": "欧洲款式",
    "summary": "GC-S2122 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2122",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2122 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2123": {
    "name": "GC-S2123",
    "code": "GC-S2123",
    "sku": "GC-S2123",
    "category": "欧洲款式",
    "summary": "GC-S2123 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2123",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2123 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2125": {
    "name": "GC-S2125",
    "code": "GC-S2125",
    "sku": "GC-S2125",
    "category": "欧洲款式",
    "summary": "GC-S2125 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2125",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2125 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2126": {
    "name": "GC-S2126",
    "code": "GC-S2126",
    "sku": "GC-S2126",
    "category": "欧洲款式",
    "summary": "GC-S2126 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2126",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2126 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2129": {
    "name": "GC-S2129",
    "code": "GC-S2129",
    "sku": "GC-S2129",
    "category": "欧洲款式",
    "summary": "GC-S2129 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2129",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2129 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2132": {
    "name": "GC-S2132",
    "code": "GC-S2132",
    "sku": "GC-S2132",
    "category": "欧洲款式",
    "summary": "GC-S2132 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2132",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2132 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2135": {
    "name": "GC-S2135",
    "code": "GC-S2135",
    "sku": "GC-S2135",
    "category": "欧洲款式",
    "summary": "GC-S2135 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2135",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2135 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2138": {
    "name": "GC-S2138",
    "code": "GC-S2138",
    "sku": "GC-S2138",
    "category": "欧洲款式",
    "summary": "GC-S2138 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2138",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2138 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2146": {
    "name": "GC-S2146",
    "code": "GC-S2146",
    "sku": "GC-S2146",
    "category": "欧洲款式",
    "summary": "GC-S2146 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2146",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2146 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2147": {
    "name": "GC-S2147",
    "code": "GC-S2147",
    "sku": "GC-S2147",
    "category": "欧洲款式",
    "summary": "GC-S2147 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2147",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2147 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2148": {
    "name": "GC-S2148",
    "code": "GC-S2148",
    "sku": "GC-S2148",
    "category": "欧洲款式",
    "summary": "GC-S2148 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2148",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2148 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2150": {
    "name": "GC-S2150",
    "code": "GC-S2150",
    "sku": "GC-S2150",
    "category": "欧洲款式",
    "summary": "GC-S2150 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2150",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2150 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2151": {
    "name": "GC-S2151",
    "code": "GC-S2151",
    "sku": "GC-S2151",
    "category": "欧洲款式",
    "summary": "GC-S2151 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2151",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2151 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2152": {
    "name": "GC-S2152",
    "code": "GC-S2152",
    "sku": "GC-S2152",
    "category": "欧洲款式",
    "summary": "GC-S2152 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2152",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2152 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2155": {
    "name": "GC-S2155",
    "code": "GC-S2155",
    "sku": "GC-S2155",
    "category": "欧洲款式",
    "summary": "GC-S2155 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2155",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2155 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2157": {
    "name": "GC-S2157",
    "code": "GC-S2157",
    "sku": "GC-S2157",
    "category": "欧洲款式",
    "summary": "GC-S2157 以奶油系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2157",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2157 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2159": {
    "name": "GC-S2159",
    "code": "GC-S2159",
    "sku": "GC-S2159",
    "category": "欧洲款式",
    "summary": "GC-S2159 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2159",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2159 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2161": {
    "name": "GC-S2161",
    "code": "GC-S2161",
    "sku": "GC-S2161",
    "category": "欧洲款式",
    "summary": "GC-S2161 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。绒感面料触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2161",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2161 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2162": {
    "name": "GC-S2162",
    "code": "GC-S2162",
    "sku": "GC-S2162",
    "category": "欧洲款式",
    "summary": "GC-S2162 以轻奢质感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2162",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2162 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2163": {
    "name": "GC-S2163",
    "code": "GC-S2163",
    "sku": "GC-S2163",
    "category": "欧洲款式",
    "summary": "GC-S2163 主打现代简约、可选色、休闲款，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2163",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2163 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2165": {
    "name": "GC-S2165",
    "code": "GC-S2165",
    "sku": "GC-S2165",
    "category": "欧洲款式",
    "summary": "GC-S2165 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。绒感面料触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2165",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2165 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2166": {
    "name": "GC-S2166",
    "code": "GC-S2166",
    "sku": "GC-S2166",
    "category": "欧洲款式",
    "summary": "GC-S2166 以轻奢质感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2166",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2166 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2168": {
    "name": "GC-S2168",
    "code": "GC-S2168",
    "sku": "GC-S2168",
    "category": "欧洲款式",
    "summary": "GC-S2168 是米白系模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2168",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2168 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2169": {
    "name": "GC-S2169",
    "code": "GC-S2169",
    "sku": "GC-S2169",
    "category": "欧洲款式",
    "summary": "GC-S2169 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。绒感面料触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2169",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2169 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2170": {
    "name": "GC-S2170",
    "code": "GC-S2170",
    "sku": "GC-S2170",
    "category": "欧洲款式",
    "summary": "GC-S2170 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2170",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2170 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2172": {
    "name": "GC-S2172",
    "code": "GC-S2172",
    "sku": "GC-S2172",
    "category": "欧洲款式",
    "summary": "GC-S2172 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2172",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2172 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2175": {
    "name": "GC-S2175",
    "code": "GC-S2175",
    "sku": "GC-S2175",
    "category": "欧洲款式",
    "summary": "GC-S2175 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2175",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2175 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2179": {
    "name": "GC-S2179",
    "code": "GC-S2179",
    "sku": "GC-S2179",
    "category": "欧洲款式",
    "summary": "GC-S2179 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2179",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2179 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2180": {
    "name": "GC-S2180",
    "code": "GC-S2180",
    "sku": "GC-S2180",
    "category": "欧洲款式",
    "summary": "GC-S2180 以米白系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2180",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2180 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2182": {
    "name": "GC-S2182",
    "code": "GC-S2182",
    "sku": "GC-S2182",
    "category": "欧洲款式",
    "summary": "GC-S2182 是模块组合沙发，整体呈现轻奢质感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2182",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2182 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2183": {
    "name": "GC-S2183",
    "code": "GC-S2183",
    "sku": "GC-S2183",
    "category": "欧洲款式",
    "summary": "GC-S2183 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2183",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2183 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2192": {
    "name": "GC-S2192",
    "code": "GC-S2192",
    "sku": "GC-S2192",
    "category": "欧洲款式",
    "summary": "GC-S2192 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2192",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2192 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2196": {
    "name": "GC-S2196",
    "code": "GC-S2196",
    "sku": "GC-S2196",
    "category": "欧洲款式",
    "summary": "GC-S2196 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2196",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2196 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2197": {
    "name": "GC-S2197",
    "code": "GC-S2197",
    "sku": "GC-S2197",
    "category": "欧洲款式",
    "summary": "GC-S2197 以奶油系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2197",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2197 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2198": {
    "name": "GC-S2198",
    "code": "GC-S2198",
    "sku": "GC-S2198",
    "category": "欧洲款式",
    "summary": "GC-S2198 主打轻奢款、客厅主款、高密织纹，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2198",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2198 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2201": {
    "name": "GC-S2201",
    "code": "GC-S2201",
    "sku": "GC-S2201",
    "category": "欧洲款式",
    "summary": "GC-S2201 是奶油系模块组合沙发，整体呈现云朵感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2201",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2201 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2202": {
    "name": "GC-S2202",
    "code": "GC-S2202",
    "sku": "GC-S2202",
    "category": "欧洲款式",
    "summary": "GC-S2202 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2202",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2202 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2203": {
    "name": "GC-S2203",
    "code": "GC-S2203",
    "sku": "GC-S2203",
    "category": "欧洲款式",
    "summary": "GC-S2203 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2203",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2203 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2205": {
    "name": "GC-S2205",
    "code": "GC-S2205",
    "sku": "GC-S2205",
    "category": "欧洲款式",
    "summary": "GC-S2205 是奶油系模块组合沙发，整体呈现云朵感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2205",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理9张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2205 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2206": {
    "name": "GC-S2206",
    "code": "GC-S2206",
    "sku": "GC-S2206",
    "category": "欧洲款式",
    "summary": "GC-S2206 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2206",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2206 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2207": {
    "name": "GC-S2207",
    "code": "GC-S2207",
    "sku": "GC-S2207",
    "category": "欧洲款式",
    "summary": "GC-S2207 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2207",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2207 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2208": {
    "name": "GC-S2208",
    "code": "GC-S2208",
    "sku": "GC-S2208",
    "category": "欧洲款式",
    "summary": "GC-S2208 主打家庭客厅、样板间，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2208",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2208 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2209": {
    "name": "GC-S2209",
    "code": "GC-S2209",
    "sku": "GC-S2209",
    "category": "欧洲款式",
    "summary": "GC-S2209 是奶油系模块组合沙发，整体呈现云朵感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2209",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2209 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2210": {
    "name": "GC-S2210",
    "code": "GC-S2210",
    "sku": "GC-S2210",
    "category": "欧洲款式",
    "summary": "GC-S2210 是模块组合沙发，整体呈现轻奢质感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2210",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2210 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2211": {
    "name": "GC-S2211",
    "code": "GC-S2211",
    "sku": "GC-S2211",
    "category": "欧洲款式",
    "summary": "GC-S2211 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2211",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2211 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2212": {
    "name": "GC-S2212",
    "code": "GC-S2212",
    "sku": "GC-S2212",
    "category": "欧洲款式",
    "summary": "GC-S2212 以米白系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2212",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理3张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2212 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2213": {
    "name": "GC-S2213",
    "code": "GC-S2213",
    "sku": "GC-S2213",
    "category": "欧洲款式",
    "summary": "GC-S2213 主打奶油风、三人位、绒感面料，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2213",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2213 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2215": {
    "name": "GC-S2215",
    "code": "GC-S2215",
    "sku": "GC-S2215",
    "category": "欧洲款式",
    "summary": "GC-S2215 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2215",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2215 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2216": {
    "name": "GC-S2216",
    "code": "GC-S2216",
    "sku": "GC-S2216",
    "category": "欧洲款式",
    "summary": "GC-S2216 以米白系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2216",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2216 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2217": {
    "name": "GC-S2217",
    "code": "GC-S2217",
    "sku": "GC-S2217",
    "category": "欧洲款式",
    "summary": "GC-S2217 主打奶油风、三人位、绒感面料，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2217",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理10张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2217 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2218": {
    "name": "GC-S2218",
    "code": "GC-S2218",
    "sku": "GC-S2218",
    "category": "欧洲款式",
    "summary": "GC-S2218 是模块组合沙发，整体呈现轻奢质感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2218",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2218 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2219": {
    "name": "GC-S2219",
    "code": "GC-S2219",
    "sku": "GC-S2219",
    "category": "欧洲款式",
    "summary": "GC-S2219 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2219",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2219 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2220": {
    "name": "GC-S2220",
    "code": "GC-S2220",
    "sku": "GC-S2220",
    "category": "欧洲款式",
    "summary": "GC-S2220 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2220",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2220 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2221": {
    "name": "GC-S2221",
    "code": "GC-S2221",
    "sku": "GC-S2221",
    "category": "欧洲款式",
    "summary": "GC-S2221 以奶油系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2221",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2221 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2222": {
    "name": "GC-S2222",
    "code": "GC-S2222",
    "sku": "GC-S2222",
    "category": "欧洲款式",
    "summary": "GC-S2222 主打轻奢款、客厅主款、高密织纹，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2222",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2222 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2223": {
    "name": "GC-S2223",
    "code": "GC-S2223",
    "sku": "GC-S2223",
    "category": "欧洲款式",
    "summary": "GC-S2223 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2223",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2223 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2225": {
    "name": "GC-S2225",
    "code": "GC-S2225",
    "sku": "GC-S2225",
    "category": "欧洲款式",
    "summary": "GC-S2225 以奶油系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2225",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2225 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2226": {
    "name": "GC-S2226",
    "code": "GC-S2226",
    "sku": "GC-S2226",
    "category": "欧洲款式",
    "summary": "GC-S2226 主打轻奢款、客厅主款、高密织纹，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2226",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2226 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2227": {
    "name": "GC-S2227",
    "code": "GC-S2227",
    "sku": "GC-S2227",
    "category": "欧洲款式",
    "summary": "GC-S2227 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2227",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2227 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2229": {
    "name": "GC-S2229",
    "code": "GC-S2229",
    "sku": "GC-S2229",
    "category": "欧洲款式",
    "summary": "GC-S2229 以奶油系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2229",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2229 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2232": {
    "name": "GC-S2232",
    "code": "GC-S2232",
    "sku": "GC-S2232",
    "category": "欧洲款式",
    "summary": "GC-S2232 是米白系模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2232",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "浅灰 / 米白",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2232 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2233": {
    "name": "GC-S2233",
    "code": "GC-S2233",
    "sku": "GC-S2233",
    "category": "欧洲款式",
    "summary": "GC-S2233 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。绒感面料触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2233",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2233 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2235": {
    "name": "GC-S2235",
    "code": "GC-S2235",
    "sku": "GC-S2235",
    "category": "欧洲款式",
    "summary": "GC-S2235 主打现代简约、可选色、休闲款，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2235",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2235 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2237": {
    "name": "GC-S2237",
    "code": "GC-S2237",
    "sku": "GC-S2237",
    "category": "欧洲款式",
    "summary": "GC-S2237 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。绒感面料触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "奶油风",
      "三人位",
      "绒感面料",
      "温馨客厅"
    ],
    "specs": {
      "型号": "GC-S2237",
      "风格": "奶油简约",
      "面料": "绒感布艺",
      "颜色": "奶油白 / 米咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2237 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2239": {
    "name": "GC-S2239",
    "code": "GC-S2239",
    "sku": "GC-S2239",
    "category": "欧洲款式",
    "summary": "GC-S2239 主打现代简约客厅沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "现代休闲",
      "客厅沙发",
      "亲肤布艺",
      "多角度展示"
    ],
    "specs": {
      "型号": "GC-S2239",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2239 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "客厅",
      "公寓",
      "休闲会客区"
    ],
    "audience": [
      "年轻家庭",
      "日常会客",
      "门店热销陈列"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2242": {
    "name": "GC-S2242",
    "code": "GC-S2242",
    "sku": "GC-S2242",
    "category": "欧洲款式",
    "summary": "GC-S2242 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2242",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2242 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2243": {
    "name": "GC-S2243",
    "code": "GC-S2243",
    "sku": "GC-S2243",
    "category": "欧洲款式",
    "summary": "GC-S2243 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2243",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2243 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2245": {
    "name": "GC-S2245",
    "code": "GC-S2245",
    "sku": "GC-S2245",
    "category": "欧洲款式",
    "summary": "GC-S2245 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2245",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2245 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2246": {
    "name": "GC-S2246",
    "code": "GC-S2246",
    "sku": "GC-S2246",
    "category": "欧洲款式",
    "summary": "GC-S2246 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2246",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2246 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2247": {
    "name": "GC-S2247",
    "code": "GC-S2247",
    "sku": "GC-S2247",
    "category": "欧洲款式",
    "summary": "GC-S2247 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2247",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2247 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2248": {
    "name": "GC-S2248",
    "code": "GC-S2248",
    "sku": "GC-S2248",
    "category": "欧洲款式",
    "summary": "GC-S2248 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2248",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2248 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2249": {
    "name": "GC-S2249",
    "code": "GC-S2249",
    "sku": "GC-S2249",
    "category": "欧洲款式",
    "summary": "GC-S2249 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2249",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2249 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2250": {
    "name": "GC-S2250",
    "code": "GC-S2250",
    "sku": "GC-S2250",
    "category": "欧洲款式",
    "summary": "GC-S2250 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2250",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2250 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2251": {
    "name": "GC-S2251",
    "code": "GC-S2251",
    "sku": "GC-S2251",
    "category": "欧洲款式",
    "summary": "GC-S2251 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2251",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理5张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2251 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2255": {
    "name": "GC-S2255",
    "code": "GC-S2255",
    "sku": "GC-S2255",
    "category": "欧洲款式",
    "summary": "GC-S2255 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2255",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2255 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2258": {
    "name": "GC-S2258",
    "code": "GC-S2258",
    "sku": "GC-S2258",
    "category": "欧洲款式",
    "summary": "GC-S2258 是模块组合沙发，整体呈现轻奢质感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "轻奢款",
      "客厅主款",
      "高密织纹",
      "中大户型"
    ],
    "specs": {
      "型号": "GC-S2258",
      "风格": "轻奢舒适",
      "面料": "高密织纹布",
      "颜色": "暖灰 / 灰咖",
      "图片": "已整理8张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2258 采用轻奢质感轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2259": {
    "name": "GC-S2259",
    "code": "GC-S2259",
    "sku": "GC-S2259",
    "category": "欧洲款式",
    "summary": "GC-S2259 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代简约",
      "可选色",
      "休闲款",
      "公寓空间"
    ],
    "specs": {
      "型号": "GC-S2259",
      "风格": "现代百搭",
      "面料": "耐磨布艺",
      "颜色": "中性灰 / 浅咖",
      "图片": "已整理7张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2259 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
    ]
  },
  "2260": {
    "name": "GC-S2260",
    "code": "GC-S2260",
    "sku": "GC-S2260",
    "category": "欧洲款式",
    "summary": "GC-S2260 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2260 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2261": {
    "name": "GC-S2261",
    "code": "GC-S2261",
    "sku": "GC-S2261",
    "category": "欧洲款式",
    "summary": "GC-S2261 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "多人位沙发",
      "客厅主沙发",
      "现代简约",
      "舒适靠包"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2261 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "家庭客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2262": {
    "name": "GC-S2262",
    "code": "GC-S2262",
    "sku": "GC-S2262",
    "category": "欧洲款式",
    "summary": "GC-S2262 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2262 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2263": {
    "name": "GC-S2263",
    "code": "GC-S2263",
    "sku": "GC-S2263",
    "category": "欧洲款式",
    "summary": "GC-S2263 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2263 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2264": {
    "name": "GC-S2264",
    "code": "GC-S2264",
    "sku": "GC-S2264",
    "category": "欧洲款式",
    "summary": "GC-S2264 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
    "tags": [
      "现代休闲",
      "家庭客厅",
      "亲肤布艺",
      "样板间"
    ],
    "specs": {
      "型号": "GC-S2264",
      "风格": "现代休闲",
      "面料": "亲肤布艺",
      "颜色": "以图片为准",
      "图片": "已整理6张多角度产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4",
      "场景图"
    ],
    "highlights": [
      "GC-S2264 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
      "从本地已处理图片批量上传，后续可继续补充精确尺寸和工艺备注。"
    ]
  },
  "2265": {
    "name": "GC-S2265",
    "code": "GC-S2265",
    "sku": "GC-S2265",
    "category": "欧洲款式",
    "summary": "GC-S2265 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2265 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2266": {
    "name": "GC-S2266",
    "code": "GC-S2266",
    "sku": "GC-S2266",
    "category": "欧洲款式",
    "summary": "GC-S2266 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2266 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2267": {
    "name": "GC-S2267",
    "code": "GC-S2267",
    "sku": "GC-S2267",
    "category": "欧洲款式",
    "summary": "GC-S2267 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2267 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2268": {
    "name": "GC-S2268",
    "code": "GC-S2268",
    "sku": "GC-S2268",
    "category": "欧洲款式",
    "summary": "GC-S2268 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2268 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2269": {
    "name": "GC-S2269",
    "code": "GC-S2269",
    "sku": "GC-S2269",
    "category": "欧洲款式",
    "summary": "GC-S2269 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2269 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2270": {
    "name": "GC-S2270",
    "code": "GC-S2270",
    "sku": "GC-S2270",
    "category": "欧洲款式",
    "summary": "GC-S2270 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2270 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2271": {
    "name": "GC-S2271",
    "code": "GC-S2271",
    "sku": "GC-S2271",
    "category": "欧洲款式",
    "summary": "GC-S2271 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2271 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2272": {
    "name": "GC-S2272",
    "code": "GC-S2272",
    "sku": "GC-S2272",
    "category": "欧洲款式",
    "summary": "GC-S2272 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2272 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2273": {
    "name": "GC-S2273",
    "code": "GC-S2273",
    "sku": "GC-S2273",
    "category": "欧洲款式",
    "summary": "GC-S2273 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2273 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2275": {
    "name": "GC-S2275",
    "code": "GC-S2275",
    "sku": "GC-S2275",
    "category": "欧洲款式",
    "summary": "GC-S2275 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2275 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2276": {
    "name": "GC-S2276",
    "code": "GC-S2276",
    "sku": "GC-S2276",
    "category": "欧洲款式",
    "summary": "GC-S2276 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2276 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2277": {
    "name": "GC-S2277",
    "code": "GC-S2277",
    "sku": "GC-S2277",
    "category": "欧洲款式",
    "summary": "GC-S2277 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2277 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2278": {
    "name": "GC-S2278",
    "code": "GC-S2278",
    "sku": "GC-S2278",
    "category": "欧洲款式",
    "summary": "GC-S2278 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2278",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理4张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2278 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2279": {
    "name": "GC-S2279",
    "code": "GC-S2279",
    "sku": "GC-S2279",
    "category": "欧洲款式",
    "summary": "GC-S2279 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2279 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2281": {
    "name": "GC-S2281",
    "code": "GC-S2281",
    "sku": "GC-S2281",
    "category": "欧洲款式",
    "summary": "GC-S2281 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2281 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2283": {
    "name": "GC-S2283",
    "code": "GC-S2283",
    "sku": "GC-S2283",
    "category": "欧洲款式",
    "summary": "GC-S2283 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2283 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2285": {
    "name": "GC-S2285",
    "code": "GC-S2285",
    "sku": "GC-S2285",
    "category": "欧洲款式",
    "summary": "GC-S2285 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2285 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2286": {
    "name": "GC-S2286",
    "code": "GC-S2286",
    "sku": "GC-S2286",
    "category": "欧洲款式",
    "summary": "GC-S2286 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2286 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2288": {
    "name": "GC-S2288",
    "code": "GC-S2288",
    "sku": "GC-S2288",
    "category": "欧洲款式",
    "summary": "GC-S2288 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2288",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2288 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2289": {
    "name": "GC-S2289",
    "code": "GC-S2289",
    "sku": "GC-S2289",
    "category": "欧洲款式",
    "summary": "GC-S2289 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2289",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2289 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2290": {
    "name": "GC-S2290",
    "code": "GC-S2290",
    "sku": "GC-S2290",
    "category": "欧洲款式",
    "summary": "GC-S2290 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2290",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2290 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2291": {
    "name": "GC-S2291",
    "code": "GC-S2291",
    "sku": "GC-S2291",
    "category": "欧洲款式",
    "summary": "GC-S2291 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2291",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2291 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2292": {
    "name": "GC-S2292",
    "code": "GC-S2292",
    "sku": "GC-S2292",
    "category": "欧洲款式",
    "summary": "GC-S2292 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2292 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2293": {
    "name": "GC-S2293",
    "code": "GC-S2293",
    "sku": "GC-S2293",
    "category": "欧洲款式",
    "summary": "GC-S2293 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2293",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2293 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2295": {
    "name": "GC-S2295",
    "code": "GC-S2295",
    "sku": "GC-S2295",
    "category": "欧洲款式",
    "summary": "GC-S2295 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "门店上样",
      "舒适坐感"
    ],
    "specs": {
      "型号": "GC-S2295",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2295 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "家庭客厅",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "年轻家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2296": {
    "name": "GC-S2296",
    "code": "GC-S2296",
    "sku": "GC-S2296",
    "category": "欧洲款式",
    "summary": "GC-S2296 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2296",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2296 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2297": {
    "name": "GC-S2297",
    "code": "GC-S2297",
    "sku": "GC-S2297",
    "category": "欧洲款式",
    "summary": "GC-S2297 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2297",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2297 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2298": {
    "name": "GC-S2298",
    "code": "GC-S2298",
    "sku": "GC-S2298",
    "category": "欧洲款式",
    "summary": "GC-S2298 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2298",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2298 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2299": {
    "name": "GC-S2299",
    "code": "GC-S2299",
    "sku": "GC-S2299",
    "category": "欧洲款式",
    "summary": "GC-S2299 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2299",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2299 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2300": {
    "name": "GC-S2300",
    "code": "GC-S2300",
    "sku": "GC-S2300",
    "category": "欧洲款式",
    "summary": "GC-S2300 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2300",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2300 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2301": {
    "name": "GC-S2301",
    "code": "GC-S2301",
    "sku": "GC-S2301",
    "category": "欧洲款式",
    "summary": "GC-S2301 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "门店上样",
      "舒适坐感"
    ],
    "specs": {
      "型号": "GC-S2301",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2301 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "家庭客厅",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "年轻家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2302": {
    "name": "GC-S2302",
    "code": "GC-S2302",
    "sku": "GC-S2302",
    "category": "欧洲款式",
    "summary": "GC-S2302 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2302",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2302 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2305": {
    "name": "GC-S2305",
    "code": "GC-S2305",
    "sku": "GC-S2305",
    "category": "欧洲款式",
    "summary": "GC-S2305 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2305",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2305 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2306": {
    "name": "GC-S2306",
    "code": "GC-S2306",
    "sku": "GC-S2306",
    "category": "欧洲款式",
    "summary": "GC-S2306 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2306",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2306 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2308": {
    "name": "GC-S2308",
    "code": "GC-S2308",
    "sku": "GC-S2308",
    "category": "欧洲款式",
    "summary": "GC-S2308 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2308",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2308 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2309": {
    "name": "GC-S2309",
    "code": "GC-S2309",
    "sku": "GC-S2309",
    "category": "欧洲款式",
    "summary": "GC-S2309 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2309",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2309 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2310": {
    "name": "GC-S2310",
    "code": "GC-S2310",
    "sku": "GC-S2310",
    "category": "欧洲款式",
    "summary": "GC-S2310 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "门店上样",
      "舒适坐感"
    ],
    "specs": {
      "型号": "GC-S2310",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2310 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "家庭客厅",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "年轻家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2311": {
    "name": "GC-S2311",
    "code": "GC-S2311",
    "sku": "GC-S2311",
    "category": "欧洲款式",
    "summary": "GC-S2311 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2311",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2311 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2312": {
    "name": "GC-S2312",
    "code": "GC-S2312",
    "sku": "GC-S2312",
    "category": "欧洲款式",
    "summary": "GC-S2312 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2312",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2312 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2313": {
    "name": "GC-S2313",
    "code": "GC-S2313",
    "sku": "GC-S2313",
    "category": "欧洲款式",
    "summary": "GC-S2313 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2313 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2315": {
    "name": "GC-S2315",
    "code": "GC-S2315",
    "sku": "GC-S2315",
    "category": "欧洲款式",
    "summary": "GC-S2315 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2315",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理5张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2315 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2316": {
    "name": "GC-S2316",
    "code": "GC-S2316",
    "sku": "GC-S2316",
    "category": "欧洲款式",
    "summary": "GC-S2316 以客厅沙发、现代简约、门店上样为主要卖点，适合用于家庭客厅、门店样板间和线上目录展示。造型耐看，搭配门槛低，能覆盖日常会客、休闲放松和成套陈列需求，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "客厅沙发",
      "现代简约",
      "门店上样",
      "舒适坐感"
    ],
    "specs": {
      "型号": "GC-S2316",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2316 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "客厅沙发定位明确，适合用于家庭客厅、门店样板间和线上目录展示，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "家庭客厅",
      "样板间",
      "休闲会客区"
    ],
    "audience": [
      "门店客户",
      "线上零售渠道",
      "年轻家庭"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2317": {
    "name": "GC-S2317",
    "code": "GC-S2317",
    "sku": "GC-S2317",
    "category": "欧洲款式",
    "summary": "GC-S2317 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2317",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2317 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2318": {
    "name": "GC-S2318",
    "code": "GC-S2318",
    "sku": "GC-S2318",
    "category": "欧洲款式",
    "summary": "GC-S2318 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2318",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2318 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2319": {
    "name": "GC-S2319",
    "code": "GC-S2319",
    "sku": "GC-S2319",
    "category": "欧洲款式",
    "summary": "GC-S2319 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2319 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ]
  },
  "2320": {
    "name": "GC-S2320",
    "code": "GC-S2320",
    "sku": "GC-S2320",
    "category": "欧洲款式",
    "summary": "GC-S2320 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2320",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2320 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2321": {
    "name": "GC-S2321",
    "code": "GC-S2321",
    "sku": "GC-S2321",
    "category": "欧洲款式",
    "summary": "GC-S2321 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2321",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2321 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2322": {
    "name": "GC-S2322",
    "code": "GC-S2322",
    "sku": "GC-S2322",
    "category": "欧洲款式",
    "summary": "GC-S2322 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2322",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2322 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2323": {
    "name": "GC-S2323",
    "code": "GC-S2323",
    "sku": "GC-S2323",
    "category": "欧洲款式",
    "summary": "GC-S2323 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2323",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2323 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2325": {
    "name": "GC-S2325",
    "code": "GC-S2325",
    "sku": "GC-S2325",
    "category": "欧洲款式",
    "summary": "GC-S2325 以多角度展示、客厅沙发、现代家居为主要卖点，适合用于家庭客厅、门店样板间和线上目录展示。造型耐看，搭配门槛低，能覆盖日常会客、休闲放松和成套陈列需求，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "多角度展示",
      "客厅沙发",
      "现代家居",
      "稳定目录款"
    ],
    "specs": {
      "型号": "GC-S2325",
      "类型": "客厅沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2325 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "客厅沙发定位明确，适合用于家庭客厅、门店样板间和线上目录展示，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "家庭客厅",
      "门店样板间",
      "线上目录展示"
    ],
    "audience": [
      "批发客户",
      "门店客户",
      "线上线下零售渠道"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2326": {
    "name": "GC-S2326",
    "code": "GC-S2326",
    "sku": "GC-S2326",
    "category": "欧洲款式",
    "summary": "GC-S2326 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2326",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2326 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2327": {
    "name": "GC-S2327",
    "code": "GC-S2327",
    "sku": "GC-S2327",
    "category": "欧洲款式",
    "summary": "GC-S2327 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2327",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2327 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2328": {
    "name": "GC-S2328",
    "code": "GC-S2328",
    "sku": "GC-S2328",
    "category": "欧洲款式",
    "summary": "GC-S2328 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2328",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2328 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2329": {
    "name": "GC-S2329",
    "code": "GC-S2329",
    "sku": "GC-S2329",
    "category": "欧洲款式",
    "summary": "GC-S2329 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2329",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理7张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2329 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2330": {
    "name": "GC-S2330",
    "code": "GC-S2330",
    "sku": "GC-S2330",
    "category": "欧洲款式",
    "summary": "GC-S2330 以组合沙发、客厅套系、灵活搭配为主要卖点，适合用于中大户型客厅、样板间和整屋配套空间。模块关系清楚，单款陈列有体量感，成套搭配也容易形成完整客厅方案，终端客户看到后能快速理解它适合放在哪里、解决什么需求。整体风格干净耐看，配合场景图和多角度展示，更容易呈现舒适、实用、好搭配的产品印象。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2330",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2330 的外观表达清爽，适合放进主流家居空间，不会因为风格过强而限制客户选择。",
      "组合沙发定位明确，适合用于中大户型客厅、样板间和整屋配套空间，陈列时可以直接呈现完整的生活场景。",
      "面料观感柔和，坐感卖点清楚，能让客户把舒适度、实用性和家居氛围联系起来。",
      "图片角度较完整，适合用于产品目录、客户方案和门店展示，方便客户快速判断是否符合自己的空间审美。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2331": {
    "name": "GC-S2331",
    "code": "GC-S2331",
    "sku": "GC-S2331",
    "category": "欧洲款式",
    "summary": "GC-S2331 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2331",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理6张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2331 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2332": {
    "name": "GC-S2332",
    "code": "GC-S2332",
    "sku": "GC-S2332",
    "category": "欧洲款式",
    "summary": "GC-S2332 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2332",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2332 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2333": {
    "name": "GC-S2333",
    "code": "GC-S2333",
    "sku": "GC-S2333",
    "category": "欧洲款式",
    "summary": "GC-S2333 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2333",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2333 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2336": {
    "name": "GC-S2336",
    "code": "GC-S2336",
    "sku": "GC-S2336",
    "category": "欧洲款式",
    "summary": "GC-S2336 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2336",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2336 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2337": {
    "name": "GC-S2337",
    "code": "GC-S2337",
    "sku": "GC-S2337",
    "category": "欧洲款式",
    "summary": "GC-S2337 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2337",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理9张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2337 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2338": {
    "name": "GC-S2338",
    "code": "GC-S2338",
    "sku": "GC-S2338",
    "category": "欧洲款式",
    "summary": "GC-S2338 主打转角组合、贵妃位、客厅主沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2338 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ],
    "costSheet": {
      "name": "S2338 3P+2P AGL 客人 2022-11-27.xlsx",
      "uploadedAt": "2026-06-25 00:00",
      "dataUrl": "/server-data/cost-sheets/gc-s2338/GC-S2338-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2338/GC-S2338-cost-sheet.xlsx",
      "size": 1892724,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2338\\S2338 3P+2P AGL 客人 2022-11-27.xlsx"
    }
  },
  "2339": {
    "name": "GC-S2339",
    "code": "GC-S2339",
    "sku": "GC-S2339",
    "category": "欧洲款式",
    "summary": "GC-S2339 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "转角组合",
      "贵妃位",
      "客厅主沙发",
      "现代简约"
    ],
    "specs": {
      "尺寸": "以实际报价单/客户需求为准",
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
      "GC-S2339 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "开放式客餐厅",
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
      "从本地已处理图片批量上线，后续可继续补充精确尺寸和内部备注。"
    ],
    "costSheet": {
      "name": "S2339 带储物脚踏 带底框 普通不防火 2024-10-11.xlsx",
      "uploadedAt": "2026-06-25 00:00",
      "dataUrl": "/server-data/cost-sheets/gc-s2339/GC-S2339-cost-sheet.xlsx",
      "path": "/server-data/cost-sheets/gc-s2339/GC-S2339-cost-sheet.xlsx",
      "size": 238582,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "source": "D:\\GCSOFA\\UP\\UP\\2339\\S2339 带储物脚踏 带底框 普通不防火 2024-10-11.xlsx"
    }
  },
  "2341": {
    "name": "GC-S2341",
    "code": "GC-S2341",
    "sku": "GC-S2341",
    "category": "欧洲款式",
    "summary": "GC-S2341 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2341",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2341 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2342": {
    "name": "GC-S2342",
    "code": "GC-S2342",
    "sku": "GC-S2342",
    "category": "欧洲款式",
    "summary": "GC-S2342 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2342",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2342 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2345": {
    "name": "GC-S2345",
    "code": "GC-S2345",
    "sku": "GC-S2345",
    "category": "欧洲款式",
    "summary": "GC-S2345 适合做家庭客厅、门店样板间和线上目录的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。亲肤面料触感和饱满坐感能突出舒适卖点，适合家庭客厅、门店样板间和线上目录。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2345",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2345 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2346": {
    "name": "GC-S2346",
    "code": "GC-S2346",
    "sku": "GC-S2346",
    "category": "欧洲款式",
    "summary": "GC-S2346 以现代生活方式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2346",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理8张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2346 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2348": {
    "name": "GC-S2348",
    "code": "GC-S2348",
    "sku": "GC-S2348",
    "category": "欧洲款式",
    "summary": "GC-S2348 是客厅沙发，整体呈现现代生活方式气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
    "tags": [
      "组合沙发",
      "客厅套系",
      "灵活搭配",
      "门店主推"
    ],
    "specs": {
      "型号": "GC-S2348",
      "类型": "组合沙发",
      "风格": "现代简约",
      "面料": "亲肤面料",
      "图片": "已整理10张产品图"
    },
    "views": [
      "视角1",
      "视角2",
      "视角3",
      "视角4"
    ],
    "highlights": [
      "GC-S2348 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
    ],
    "homes": [
      "中大户型客厅",
      "门店样板间",
      "整屋配套空间"
    ],
    "audience": [
      "批发客户",
      "连锁门店",
      "整屋配套客户"
    ],
    "suggestedPrice": "按配置报价",
    "internalNotes": [
      "由本地已处理图片上传，图片已压缩为网站静态资源。"
    ]
  },
  "2370": {
    "name": "GC-S2370",
    "code": "GC-S2370",
    "sku": "GC-S2370",
    "category": "欧洲款式",
    "summary": "GC-S2370 主打贵妃位、转角组合、单人位，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2370 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2373 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2373 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2381 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2381 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2393 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2393 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2395 以现代简约多款式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2395 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2398 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2398 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2401 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2401 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2402 主打2P+贵妃、防火版、中大户型客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2402 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2404 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。防火布触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2404 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2406 主打三人位、家庭客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2406 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2408 适合做单间公寓、出租房、客卧两用空间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合单间公寓、出租房、客卧两用空间。",
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
      "GC-S2408 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2411 主打双人位、小户型适配，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2411 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "双人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2413 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2413 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2414 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2414 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2417 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2417 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2421 是多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2421 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2425 是多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2425 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2426 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2426 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2427 以现代简约多款式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2427 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2428 主打2/3人位可选、家庭客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2428 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "双人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2429 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2429 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2430 是可坐可躺沙发床，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2430 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2431 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2431 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2432 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2432 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2433 主打三人位、扶手可KD、家庭客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2433 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2436 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2436 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2437 主打三人位、家庭客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2437 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2438 是可坐可躺沙发床，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2438 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2439 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2439 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2440 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2440 采用现代生活方式轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2441 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2441 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2442 主打标准沙发，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2442 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2443 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2443 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2445 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2445 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2446 主打双人位、不KD结构、小户型适配，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2446 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "双人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2447 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2447 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2448 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2448 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2449 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2449 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2451 主打带脚踏、双二人位组合、中大户型客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2451 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2452 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2452 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2453 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2453 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2456 是可坐可躺沙发床，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2456 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2457 适合做卧室角落、阳台休闲区和门店补充陈列的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合卧室角落、阳台休闲区和门店补充陈列。",
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
      "GC-S2457 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "单人休闲沙发定位明确，适合软装渠道、样板间项目和补充型零售客户用于卧室角落、阳台休闲区和门店补充陈列，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2458 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2458 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2461 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2461 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2462 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2462 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2463 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2463 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2464 主打带脚踏、模块组合、全KD结构，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2464 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2465 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2465 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2466 适合做卧室角落、阳台休闲区和门店补充陈列的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合卧室角落、阳台休闲区和门店补充陈列。",
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
      "GC-S2466 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "单人休闲沙发定位明确，适合软装渠道、样板间项目和补充型零售客户用于卧室角落、阳台休闲区和门店补充陈列，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2467 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2467 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2468 主打三人位、可KD结构、家庭客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2468 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2469 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2469 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2470 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2470 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2471 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2471 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2472 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2472 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2473 主打双人位+贵妃、转角贵妃、躺坐休闲，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2473 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2474 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2474 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2475 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2475 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2478 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2478 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2480 适合做单间公寓、出租房、客卧两用空间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合单间公寓、出租房、客卧两用空间。",
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
      "GC-S2480 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2481 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2481 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2482 主打大型组合、转角组合、脚踏组合，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2482 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2483 是可坐可躺沙发床，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2483 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2484 适合做单间公寓、出租房、客卧两用空间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合单间公寓、出租房、客卧两用空间。",
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
      "GC-S2484 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2486 主打模块组合、压缩包装、35D海绵，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2486 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2488 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2488 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2489 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2489 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2490 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2490 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2491 主打KD拆装结构、整装结构，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2491 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2492 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2492 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2493 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2493 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2495 主打全KD结构，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2495 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2496 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2496 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2498 以现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2498 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "防火布能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2500 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2500 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2501 主打三人位、家庭客厅、KD拆装结构，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2501 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2502 是功能休闲沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2502 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "功能休闲沙发定位明确，适合注重体验感的零售门店、平台招商和区域经销商用于休闲客厅、家庭影音区、功能体验区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2503 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2503 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2504 以现代简约功能休闲沙发为核心卖点，外观耐看、接受度高，适合注重体验感的零售门店、平台招商和区域经销商作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2504 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "功能休闲沙发定位明确，适合注重体验感的零售门店、平台招商和区域经销商用于休闲客厅、家庭影音区、功能体验区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2505 主打三人位+脚踏、脚踏组合、客厅休闲，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2505 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2508 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2508 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2509 主打压缩包装、全海绵结构、30D海绵，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2509 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2510 主打3+2+1组合、客厅套装、大户型适配，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2510 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2512 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2512 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2514 主打模块组合，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2514 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2515 是模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2515 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2518 主打3+2组合、客厅套装、中大户型，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2518 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2602 适合做休闲客厅、家庭影音区、功能体验区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合休闲客厅、家庭影音区、功能体验区。",
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
      "GC-S2602 采用绿色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "功能休闲沙发定位明确，适合注重体验感的零售门店、平台招商和区域经销商用于休闲客厅、家庭影音区、功能体验区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2605 是绿色系模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2605 采用绿色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2608 主打三人位、全KD结构、绿色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2608 采用绿色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2609 是灰色系转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2609 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2610 是粉色系多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2610 采用粉色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2611 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2611 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "双人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2612 以棕色系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2612 采用棕色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2613 主打带脚踏、棕色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2613 采用棕色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "功能休闲沙发定位明确，适合注重体验感的零售门店、平台招商和区域经销商用于休闲客厅、家庭影音区、功能体验区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2618 是蓝色系模块组合沙发，整体呈现低矮休闲气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2618 采用蓝色系外观搭配低矮休闲轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2619 适合做单间公寓、出租房、客卧两用空间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合单间公寓、出租房、客卧两用空间。",
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
      "GC-S2619 采用米白系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "可坐可躺沙发床定位明确，适合公寓渠道、跨境平台和租赁配套客户用于单间公寓、出租房、客卧两用空间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2621 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2621 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2622 主打转角组合、带脚踏、模块组合，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2622 采用灰色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2625 以米白系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2625 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2626 主打三人位、全KD结构、高脚设计，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2626 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2627 是绿色系模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2627 采用绿色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2630 以米白系现代简约多款式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2630 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2632 是多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2632 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2633 适合做卧室角落、阳台休闲区和门店补充陈列的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合卧室角落、阳台休闲区和门店补充陈列。",
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
      "GC-S2633 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "单人休闲沙发定位明确，适合软装渠道、样板间项目和补充型零售客户用于卧室角落、阳台休闲区和门店补充陈列，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2634 以蓝色系现代简约多款式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2634 采用蓝色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2635 主打三人位、全KD结构、灰色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2635 采用灰色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于家庭客厅、门店样板间和线上目录，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2636 是米白系模块组合沙发，整体呈现云朵感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2636 采用米白系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2637 适合做门店组合陈列、套系销售和多户型搭配的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合门店组合陈列、套系销售和多户型搭配。",
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
      "GC-S2637 采用米白系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2640 主打转角组合、模块组合、扶手可KD，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2640 采用粉色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2641 是灰色系模块组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2641 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2642 适合做卧室角落、阳台休闲区和门店补充陈列的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合卧室角落、阳台休闲区和门店补充陈列。",
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
      "GC-S2642 采用灰色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "单人休闲沙发定位明确，适合软装渠道、样板间项目和补充型零售客户用于卧室角落、阳台休闲区和门店补充陈列，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2643 以红色系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2643 采用红色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2645 是灰色系多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2645 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2647 以米白系现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2647 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2649 是灰色系功能休闲沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2649 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "功能休闲沙发定位明确，适合注重体验感的零售门店、平台招商和区域经销商用于休闲客厅、家庭影音区、功能体验区，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2650 是灰色系转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2650 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2653 主打模块组合、全KD结构、米色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2653 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2655 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2655 采用灰色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2656 以米白系现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2656 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2658 是奶油系模块组合沙发，整体呈现云朵感气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2658 采用奶油系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2660 适合做中大户型客厅、整屋配套和样板间的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合中大户型客厅、整屋配套和样板间。",
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
      "GC-S2660 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2661 以米白系低矮休闲模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2661 采用米白系外观搭配低矮休闲轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2662 主打2P+1P+脚踏、米白色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2662 采用米白系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2664 适合做公寓、小户型客厅和线上爆款专区的主推款，整体风格不挑空间，适合常规备货、新品上样和套餐搭配。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。布艺触感和饱满坐感能突出舒适卖点，适合公寓、小户型客厅和线上爆款专区。",
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
      "GC-S2664 采用低矮休闲轮廓，外观接受度高，适合做稳定型目录款。",
      "三人位沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2669 以灰色系现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2669 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2670 以绿色系轻奢质感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2670 采用绿色系外观搭配轻奢质感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2672 是转角组合沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2672 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2693 主打双人位+贵妃、L型组合、米白色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2693 采用米白系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2704 是灰色系多款式客厅沙发，整体呈现现代简约气质，组合关系清楚，适合围绕不同户型和预算做系列推荐。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。适合用于新品目录、门店样板和客户方案推荐，提升整套客厅方案的吸引力。",
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
      "GC-S2704 采用灰色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2715 以蓝色系现代简约多款式客厅沙发为核心卖点，外观耐看、接受度高，适合批发客户、门店客户和线上线下零售渠道作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2715 采用蓝色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "多款式客厅沙发定位明确，适合批发客户、门店客户和线上线下零售渠道用于公寓、小户型客厅和线上爆款专区，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2719 以米白系云朵感模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2719 采用米白系外观搭配云朵感轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      "uploadedAt": "2026-06-25 00:00",
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
    "summary": "GC-S2720 以现代简约模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2720 采用现代简约轮廓，外观接受度高，适合做稳定型目录款。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "陈列表达清楚，既能单款销售，也适合搭配茶几、地毯、边柜做整套客厅方案，提升套系销售空间。"
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
    "summary": "GC-S2721 主打模块组合、绒感面料、浅灰色，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2721 采用米白系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2728 以绿色系现代简约转角组合沙发为核心卖点，外观耐看、接受度高，适合整装渠道、家具卖场和中高客单客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2728 采用绿色系外观搭配现代简约轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "绒感面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
    "summary": "GC-S2733 以灰色系柔和曲线模块组合沙发为核心卖点，外观耐看、接受度高，适合批发客户、连锁门店和整屋配套客户作为稳定销售款引入。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。搭配门槛不高，后续可围绕颜色、面料和组合方式延展成系列。",
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
      "GC-S2733 采用灰色系外观搭配柔和曲线轮廓，视觉更容易融入主流家居场景。",
      "模块组合沙发定位明确，适合批发客户、连锁门店和整屋配套客户用于门店组合陈列、套系销售和多户型搭配，上样后能快速形成清晰的销售场景。",
      "布艺能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "多角度图片能完整呈现正面比例、侧面厚度、背部效果和场景氛围，适合放入产品目录和客户方案。"
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
    "summary": "GC-S2734 主打转角组合、浅灰色、中大户型客厅，场景图表现完整，放在门店、画册或线上页面都能快速传达居家氛围。多角度图片完整，能清楚展示正面比例、侧面厚度、背部细节和空间效果。卖点集中在外观、坐感和搭配效果，终端客户更容易理解产品价值。",
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
      "GC-S2734 采用灰色系外观搭配现代生活方式轮廓，视觉更容易融入主流家居场景。",
      "转角组合沙发定位明确，适合整装渠道、家具卖场和中高客单客户用于中大户型客厅、整屋配套和样板间，上样后能快速形成清晰的销售场景。",
      "亲肤面料能够突出柔软触感、耐看外观和日常使用价值，让终端客户更容易产生购买兴趣。",
      "适合进入新品目录、样板间方案和门店主推区，后续可根据客群反馈延展颜色、面料和组合方式。"
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
      summary: source.summary || (placeholderSummary ? source.summary : product.summary),
      tags: product.tags?.length && !product.tags.includes('GCSOFA') ? product.tags : source.tags,
      specs: Object.keys(product.specs || {}).length > 2 ? product.specs : source.specs,
      views: normalizeProductViewLabels(product.views?.length ? product.views : source.views),
      highlights: source.highlights?.length ? source.highlights : product.highlights,
      homes: source.homes?.length ? source.homes : product.homes,
      audience: source.audience?.length ? source.audience : product.audience,
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
