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
  boss: ["images", "specs", "sellingPoints", "dimensions", "internal", "price", "priceEdit", "costUpload", "costDownload", "production", "productionEdit", "productionDeptCutting", "productionDeptFoam", "productionDeptSewing", "productionDeptWood", "productionDeptBase", "productionDeptPadding", "productionDeptUpholstery", "productionDeptPacking"],
  admin: ["images", "specs", "sellingPoints", "dimensions", "internal", "price", "priceEdit", "costUpload", "costDownload", "production", "productionEdit", "productionDeptCutting", "productionDeptFoam", "productionDeptSewing", "productionDeptWood", "productionDeptBase", "productionDeptPadding", "productionDeptUpholstery", "productionDeptPacking"],
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
  },
};

const GCSOFA_DEFAULT_PRODUCTS = [
  {
    id: "luna-sectional",
    name: "Luna 云舒转角沙发",
    category: "欧洲款式",
    image: "assets/gcsofa-sectional.png",
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
    image: "assets/gcsofa-recliner.png",
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
    image: "assets/gcsofa-curve.png",
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
  heroEyebrow: "Factory",
  heroTitle: "冠城沙发制造工厂",
  heroDescription: "从面料裁剪、木架成型、海绵填充到成品质检，冠城以稳定工艺和规范生产，为客户提供可持续交付的沙发产品。",
  heroImage: "assets/factory-campus.png",
  historyEyebrow: "History",
  historyTitle: "工厂历史",
  historyDescription: "以沙发制造为核心，逐步完善从研发、打样、生产到交付的完整体系。",
  historyItems: [
    {
      label: "创立初期",
      title: "专注客厅沙发生产",
      description: "从布艺沙发和功能沙发起步，建立基础木架、裁剪、缝纫和包装流程。",
    },
    {
      label: "产能升级",
      title: "完善车间分区",
      description: "逐步形成面料仓储、裁剪缝纫、框架装配、软包成型和成品质检等分区。",
    },
    {
      label: "持续发展",
      title: "承接多类型订单",
      description: "支持经销门店、工程项目、设计师渠道和外贸订单的多规格交付。",
    },
  ],
  galleryEyebrow: "Workshop",
  galleryTitle: "场地与车间",
  galleryDescription: "展示工厂外景、沙发装配车间和面料裁剪缝纫区域。",
  galleryItems: [
    {
      image: "assets/factory-campus.png",
      title: "工厂场地",
      description: "规范化厂区与装卸区域，便于样品展示、订单出货和批量交付。",
    },
    {
      image: "assets/factory-production-line.png",
      title: "生产车间",
      description: "沙发框架、软包、坐垫和成品组装按流程推进，强调稳定品质。",
    },
    {
      image: "assets/factory-fabric-workshop.png",
      title: "裁剪缝纫车间",
      description: "面料裁剪、缝纫和版型管理集中处理，为不同款式提供基础保障。",
    },
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

async function loadCloudSiteData() {
  if (location.protocol === "file:") {
    cloudDataLoaded = true;
    return {};
  }

  try {
    const response = await fetch(`${CLOUD_DATA_ENDPOINT}?v=${Date.now()}`);
    if (!response.ok) throw new Error(`Cloud data request failed: ${response.status}`);
    const payload = await response.json();
    Object.entries(payload.data || {}).forEach(([cloudKey, value]) => {
      const storeKey = CLOUD_STORE_KEYS[cloudKey];
      if (storeKey && value !== undefined) {
        localStorage.setItem(storeKey, JSON.stringify(value));
      }
    });
    seedMissingCloudData(payload.data || {});
    cloudDataLoaded = true;
    return payload.data || {};
  } catch (error) {
    cloudDataLoadError = error;
    cloudDataLoaded = true;
    return {};
  }
}

function seedMissingCloudData(cloudData) {
  Object.entries(CLOUD_STORE_KEYS).forEach(([cloudKey, storeKey]) => {
    if (Object.prototype.hasOwnProperty.call(cloudData, cloudKey)) return;
    const saved = localStorage.getItem(storeKey);
    if (!saved) return;
    try {
      saveCloudStore(storeKey, JSON.parse(saved));
    } catch {
      // Ignore invalid local cache during cloud migration.
    }
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

function hasCloudDataLoaded() {
  return cloudDataLoaded;
}

function getCloudDataLoadError() {
  return cloudDataLoadError;
}

function getProducts() {
  const saved = localStorage.getItem(PRODUCT_STORE_KEY);
  if (!saved) {
    return sortProducts(cloneProducts(GCSOFA_DEFAULT_PRODUCTS));
  }

  try {
    return sortProducts(JSON.parse(saved));
  } catch {
    return sortProducts(cloneProducts(GCSOFA_DEFAULT_PRODUCTS));
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
    };
  } else {
    products.unshift({
      ...product,
      createdAt: Date.now(),
    });
  }
  saveProducts(sortProducts(products));
}

function deleteProduct(id) {
  saveProducts(getProducts().filter((product) => product.id !== id));
}

function sortProducts(products) {
  return [...products].sort((a, b) => (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0));
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
  return `index.html?category=${encodeURIComponent(category.id)}#products`;
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
