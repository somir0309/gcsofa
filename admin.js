const gate = document.querySelector("#adminGate");
const workspace = document.querySelector("#adminWorkspace");
const adminSectionTabs = document.querySelectorAll("[data-admin-tab]");
const list = document.querySelector("#adminProductList");
const form = document.querySelector("#productForm");
const categoryList = document.querySelector("#adminCategoryList");
const accountList = document.querySelector("#adminAccountList");
const accountForm = document.querySelector("#accountForm");
const accountSearchInput = document.querySelector("#accountSearchInput");
const accountRoleInput = document.querySelector("#accountRoleInput");
const permissionChecklist = document.querySelector("#permissionChecklist");
const rolePermissionList = document.querySelector("#rolePermissionList");
const productFormMessage = document.querySelector("#productFormMessage");
const staffList = document.querySelector("#adminStaffList");
const staffForm = document.querySelector("#staffForm");
const staffFormMessage = document.querySelector("#staffFormMessage");
const factoryForm = document.querySelector("#factoryForm");
const factoryFormMessage = document.querySelector("#factoryFormMessage");
const factoryHistoryList = document.querySelector("#factoryHistoryList");
const factoryGalleryList = document.querySelector("#factoryGalleryList");
const addFactoryHistoryBtn = document.querySelector("#addFactoryHistoryBtn");
const addFactoryGalleryBtn = document.querySelector("#addFactoryGalleryBtn");
const introImageInputs = {
  front: document.querySelector("#introFrontInput"),
  angle: document.querySelector("#introAngleInput"),
  side: document.querySelector("#introSideInput"),
  back: document.querySelector("#introBackInput"),
  dimensions: document.querySelector("#introDimensionsInput"),
};
const extraIntroImageList = document.querySelector("#extraIntroImageList");
const addIntroImageBtn = document.querySelector("#addIntroImageBtn");
const INTRO_IMAGE_LABELS = {
  front: "正视图",
  angle: "45度角视图",
  side: "侧视图",
  back: "背视图",
  dimensions: "尺寸图",
};
const DEFAULT_INTRO_IMAGE_SETTINGS = {
  fit: "contain",
  position: "center center",
  zoom: 100,
};
let selectedStaff = "";
let selectedAccount = "ming";
let currentProductCostSheet = null;
let activeAdminSection = "products";
form.noValidate = true;
let auth = setupAuth({ onChange: renderAdmin });
whenSiteDataReady(() => auth.updateAccountView());

function renderAdmin() {
  if (!isAdminUser()) {
    workspace.classList.add("hidden");
    gate.innerHTML = `
      <div class="info-panel">
        <h2>需要网站管理员权限</h2>
        <p>请使用网站管理员帐号登录后进入后台。</p>
        <button class="button button-primary" type="button" id="adminLoginBtn">登录后台</button>
      </div>
    `;
    document.querySelector("#adminLoginBtn").addEventListener("click", () => auth.openLogin());
    return;
  }

  gate.innerHTML = "";
  workspace.classList.remove("hidden");
  setAdminSection(activeAdminSection);
  renderCategoryList();
  renderCategoryOptions();
  renderProductList();
  loadProduct(getProducts()[0]);
  renderRoleOptions();
  renderRolePermissionList();
  renderAccountList();
  loadAccount(selectedAccount);
  renderStaffList();
  loadStaff(findStaff(selectedStaff) || getStaffList()[0]);
  loadFactoryProfile();
}

function renderProductList() {
  const products = getProducts();
  list.innerHTML = products
    .map(
      (product, index) => `
        <article class="admin-product-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <strong>${product.name}</strong>
            <span>${product.category}</span>
          </div>
          <div class="sort-actions" aria-label="产品排序">
            <button class="icon-button" type="button" data-action="up" ${index === 0 ? "disabled" : ""} aria-label="上移 ${product.name}">↑</button>
            <button class="icon-button" type="button" data-action="down" ${index === products.length - 1 ? "disabled" : ""} aria-label="下移 ${product.name}">↓</button>
          </div>
          <button class="button button-light" type="button" data-action="edit">编辑</button>
          <button class="button button-ghost" type="button" data-action="delete">删除</button>
        </article>
      `
    )
    .join("");
}

function loadProduct(product) {
  const target = product || createBlankProduct();
  const introImages = getProductIntroImages(target);
  renderExtraIntroImages(target.extraIntroImages || [], target.name);
  document.querySelector("#productIdInput").value = target.id;
  document.querySelector("#productNameInput").value = target.name;
  renderCategoryOptions(target.category);
  document.querySelector("#productImageInput").value = target.image;
  updateImagePreview("productImageInput");
  Object.entries(introImageInputs).forEach(([key, input]) => {
    input.value = introImages[key] || "";
    updateImagePreview(input.id);
  });
  document.querySelector("#productSummaryInput").value = target.summary;
  document.querySelector("#productSpecSizeInput").value = getProductSpecValue(target, "尺寸", "灏哄");
  document.querySelector("#productSpecFabricInput").value = getProductSpecValue(target, "面料", "闈㈡枡", "材质", "鏉愯川");
  document.querySelector("#productSpecFillingInput").value = getProductSpecValue(target, "填充", "濉厖", "结构", "缁撴瀯");
  document.querySelector("#productSpecColorInput").value = getProductSpecValue(target, "颜色", "棰滆壊", "风格", "椋庢牸");
  document.querySelector("#productTagsInput").value = target.tags.join("，");
  document.querySelector("#productPriceInput").value = target.suggestedPrice || "";
  currentProductCostSheet = cloneCostSheet(target.costSheet);
  renderAdminCostSheetPreview();
  document.querySelector("#productHomesInput").value = target.homes.join("，");
  document.querySelector("#productAudienceInput").value = target.audience.join("，");
  document.querySelector("#productHighlightsInput").value = target.highlights.join("\n");
}

function createBlankProduct() {
  const firstCategory = getCategories()[0]?.name || "";
  return {
    id: "",
    name: "",
    category: firstCategory,
    image: "assets/gcsofa-sectional.png",
    summary: "",
    tags: [],
    specs: {
      尺寸: "可定制",
      面料: "可选",
      填充: "可选",
      颜色: "可选",
    },
    views: ["正面视图", "侧面视图", "场景搭配"],
    highlights: [],
    homes: [],
    audience: [],
    suggestedPrice: "",
    introImages: {
      front: "",
      angle: "",
      side: "",
      back: "",
      dimensions: "",
    },
    extraIntroImages: [],
    internalNotes: ["后台新增产品，可继续补充内部备注。"],
    costRows: [["材料", 0, 1, 0, ""]],
    productionRows: [["生产计划", "待开始", "请补充生产节点"]],
  };
}

function getProductSpecValue(product, ...keys) {
  const specs = product?.specs || {};
  const matchedKey = keys.find((key) => specs[key] !== undefined);
  return matchedKey ? specs[matchedKey] : "";
}

function renderCategoryList() {
  categoryList.innerHTML = getCategories()
    .map(
      (category) => `
        <article class="admin-category-item" data-id="${category.id}">
          <div>
            <strong>${category.name}</strong>
            <span>${getCategoryLink(category)}</span>
          </div>
          <button class="button button-light" type="button" data-action="edit">编辑</button>
          <button class="button button-ghost" type="button" data-action="delete">删除</button>
        </article>
      `
    )
    .join("");
}

function renderCategoryOptions(selectedName = "") {
  const categories = getCategories();
  const current = selectedName || document.querySelector("#productCategoryInput").value || categories[0]?.name || "";
  document.querySelector("#productCategoryInput").innerHTML = categories
    .map((category) => `<option value="${category.name}" ${category.name === current ? "selected" : ""}>${category.name}</option>`)
    .join("");
}

function renderStaffList() {
  const staff = getStaffList();
  staffList.innerHTML = staff
    .map(
      (person, index) => `
        <article class="admin-staff-item ${person.id === selectedStaff ? "active" : ""}" data-id="${person.id}">
          <div class="admin-staff-main">
            <img src="${person.avatar}" alt="${person.name}" />
            <div>
              <strong>${person.name}</strong>
              <span>${person.title}</span>
              <small>${person.phone || person.email || person.whatsapp || person.wechat || ""}</small>
            </div>
          </div>
          <div class="admin-staff-actions">
            <div class="sort-actions" aria-label="业务人员排序">
              <button class="icon-button" type="button" data-action="up" ${index === 0 ? "disabled" : ""} aria-label="上移 ${person.name}">↑</button>
              <button class="icon-button" type="button" data-action="down" ${index === staff.length - 1 ? "disabled" : ""} aria-label="下移 ${person.name}">↓</button>
            </div>
            <button class="button button-light" type="button" data-action="edit">编辑</button>
            <button class="button button-ghost" type="button" data-action="delete">删除</button>
          </div>
        </article>
      `
    )
    .join("");
}

function loadStaff(person) {
  const target = person || createBlankStaff();
  selectedStaff = target.id;
  staffFormMessage.textContent = "";
  document.querySelector("#staffIdInput").value = target.id;
  document.querySelector("#staffNameInput").value = target.name;
  document.querySelector("#staffTitleInput").value = target.title;
  document.querySelector("#staffAvatarInput").value = target.avatar;
  updateImagePreview("staffAvatarInput");
  document.querySelector("#staffSummaryInput").value = target.summary;
  document.querySelector("#staffEmailInput").value = target.email;
  document.querySelector("#staffWhatsappInput").value = target.whatsapp;
  document.querySelector("#staffPhoneInput").value = target.phone;
  document.querySelector("#staffWechatInput").value = target.wechat;
}

function createBlankStaff() {
  return {
    id: "",
    name: "",
    title: "",
    avatar: "assets/staff-chen-yu.png",
    summary: "",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  };
}

function createNewStaff() {
  const index = getStaffList().filter((person) => person.name.startsWith("新业务人员")).length + 1;
  const id = `staff-${Date.now()}`;
  return {
    id,
    name: `新业务人员${index}`,
    title: "业务顾问",
    avatar: "assets/staff-chen-yu.png",
    summary: "请在后台补充业务人员简介。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  };
}

function renderRoleOptions() {
  accountRoleInput.innerHTML = ROLE_LEVELS.filter((role) => role.id !== "guest")
    .map((role) => `<option value="${role.id}">${role.label}</option>`)
    .join("");
}

function renderRolePermissionList() {
  rolePermissionList.innerHTML = ROLE_LEVELS.map((role) => {
    const permissions = getDefaultPermissionsForRole(role.id);
    const labels = PERMISSION_MODULES.filter((module) => permissions[module.id]).map((module) => module.label);
    return `
      <div class="role-permission-row">
        <strong>${role.label}</strong>
        <span>${labels.join("、") || "无"}</span>
      </div>
    `;
  }).join("");
}

function renderAccountList() {
  const keyword = accountSearchInput.value.trim().toLowerCase();
  const accounts = Object.entries(getAccounts()).filter(([username, account]) => {
    const text = `${username} ${account.name} ${getRoleLabel(account.role)}`.toLowerCase();
    return !keyword || text.includes(keyword);
  });

  accountList.innerHTML = accounts
    .map(
      ([username, account]) => `
        <button class="account-row ${username === selectedAccount ? "active" : ""}" type="button" data-username="${username}">
          <span>
            <strong>${account.name}</strong>
            <small>${username}</small>
          </span>
          <em>${getRoleLabel(account.role)}</em>
        </button>
      `
    )
    .join("");
}

function loadAccount(username) {
  const accounts = getAccounts();
  const account = accounts[username] || createBlankAccount();
  selectedAccount = username || "";
  document.querySelector("#accountUsernameInput").value = selectedAccount;
  document.querySelector("#accountUsernameInput").disabled = Boolean(accounts[selectedAccount]);
  document.querySelector("#accountNameInput").value = account.name;
  document.querySelector("#accountPasswordInput").value = account.password;
  accountRoleInput.value = account.role;
  renderPermissionChecklist({ username: selectedAccount, ...account });
  renderAccountList();
}

function createBlankAccount() {
  return {
    password: "",
    name: "",
    role: "registered",
  };
}

function renderPermissionChecklist(account) {
  const permissions = account.username ? getPermissionsForUser(account) : getDefaultPermissionsForRole(account.role);
  permissionChecklist.innerHTML = PERMISSION_MODULES.map(
    (module) => `
      <label class="permission-item">
        <input type="checkbox" value="${module.id}" ${permissions[module.id] ? "checked" : ""} />
        <span>${module.label}</span>
      </label>
    `
  ).join("");
}

function readPermissionChecklist() {
  const permissions = PERMISSION_MODULES.reduce((nextPermissions, module) => {
    const input = permissionChecklist.querySelector(`input[value="${module.id}"]`);
    nextPermissions[module.id] = Boolean(input?.checked);
    return nextPermissions;
  }, {});
  if (permissions.productionEdit) {
    permissions.production = true;
  }
  if (permissions.priceEdit) {
    permissions.internal = true;
    permissions.price = true;
  }
  if (permissions.costUpload || permissions.costDownload) {
    permissions.internal = true;
  }
  delete permissions.cost;
  return permissions;
}

function setAdminSection(section) {
  activeAdminSection = section;
  workspace.dataset.activeSection = section;
  adminSectionTabs.forEach((button) => {
    const isActive = button.dataset.adminTab === section;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

adminSectionTabs.forEach((button) => {
  button.addEventListener("click", () => setAdminSection(button.dataset.adminTab));
});

document.querySelector("#newProductBtn").addEventListener("click", () => {
  loadProduct(createBlankProduct());
  setProductFormMessage("已新增空白产品，请填写资料后保存。");
});
document.querySelector("#newCategoryBtn").addEventListener("click", createCategoryFromPrompt);
document.querySelector("#newStaffBtn").addEventListener("click", () => {
  const person = createNewStaff();
  insertStaffAtTop(person);
  selectedStaff = person.id;
  renderStaffList();
  loadStaff(person);
  staffFormMessage.textContent = "已新增业务人员，请编辑资料后保存。";
});
addFactoryHistoryBtn?.addEventListener("click", () => {
  factoryHistoryList.insertAdjacentHTML("beforeend", createFactoryHistoryRow());
  factoryHistoryList.querySelector("[data-factory-history-row]:last-child input")?.focus();
});
addFactoryGalleryBtn?.addEventListener("click", () => {
  factoryGalleryList.insertAdjacentHTML("beforeend", createFactoryGalleryRow());
  factoryGalleryList.querySelector("[data-factory-gallery-row]:last-child input")?.focus();
});

categoryList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-id]");
  if (!item) return;
  const category = findCategory(item.dataset.id);
  const action = event.target.dataset.action;

  if (action === "edit") {
    editCategoryFromPrompt(category);
  }

  if (action === "delete") {
    removeCategory(category);
  }
});

list.addEventListener("click", (event) => {
  const item = event.target.closest("[data-id]");
  if (!item) return;
  const product = findProduct(item.dataset.id);
  const action = event.target.dataset.action;

  if (action === "edit") {
    loadProduct(product);
  }

  if (action === "up" || action === "down") {
    moveProduct(product.id, action === "up" ? -1 : 1);
  }

  if (action === "delete" && confirm(`确定删除 ${product.name} 吗？`)) {
    deleteProduct(product.id);
    renderProductList();
    loadProduct(getProducts()[0] || createBlankProduct());
  }
});

function moveProduct(productId, direction) {
  const products = getProducts();
  const index = products.findIndex((item) => item.id === productId);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= products.length) return;

  [products[index], products[targetIndex]] = [products[targetIndex], products[index]];
  saveOrderedProducts(products);
  renderProductList();
  loadProduct(products[targetIndex]);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setProductFormMessage("");
  if (!form.reportValidity()) {
    const firstInvalid = form.querySelector(":invalid");
    const label = firstInvalid?.closest("label")?.querySelector("span")?.textContent?.trim() || "必填内容";
    const message = `保存失败：请先补全“${label}”。`;
    setProductFormMessage(message, true);
    showProductSaveDialog("保存失败", message);
    firstInvalid?.focus();
    return;
  }

  try {
    const product = readProductForm();
    if (!product.name) {
      throw new Error("请填写产品名称。");
    }
    await migrateLargeProductFiles();
    await migrateProductInlineFiles(product);
    upsertProduct(product);
    renderProductList();
    loadProduct(product);
    const message = `保存成功：${product.name} 已更新。`;
    setProductFormMessage(message);
    showProductSaveDialog("保存成功", message);
  } catch (error) {
    if (error?.name === "QuotaExceededError") {
      const product = readProductForm();
      const migrated = await migrateLargeProductFiles(true);
      if (migrated) {
        try {
          await migrateProductInlineFiles(product);
          upsertProduct(product);
          renderProductList();
          loadProduct(product);
          const message = `保存成功：${product.name} 已更新。已自动把旧的大文件迁移到服务器，释放浏览器存储空间。`;
          setProductFormMessage(message);
          showProductSaveDialog("保存成功", message);
          return;
        } catch (retryError) {
          error = retryError;
        }
      }
    }
    const message = `保存失败：${getProductSaveErrorMessage(error)}`;
    setProductFormMessage(message, true);
    showProductSaveDialog("保存失败", message);
  }
});

factoryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveFactoryProfile(readFactoryForm());
  factoryFormMessage.textContent = "工厂介绍已保存。";
});

function readProductForm() {
  const name = document.querySelector("#productNameInput").value.trim();
  const id = document.querySelector("#productIdInput").value || slugify(name);
  const existing = findProduct(id) || createBlankProduct();
  return {
    ...existing,
    id,
    name,
    category: document.querySelector("#productCategoryInput").value.trim(),
    image: document.querySelector("#productImageInput").value.trim(),
    introImages: readIntroImageInputs(),
    introImageSettings: existing.introImageSettings || getDefaultIntroImageSettings(),
    extraIntroImages: readExtraIntroImages(),
    summary: document.querySelector("#productSummaryInput").value.trim(),
    specs: readProductSpecs(),
    tags: splitList(document.querySelector("#productTagsInput").value),
    suggestedPrice: document.querySelector("#productPriceInput").value.trim(),
    costSheet: currentProductCostSheet || existing.costSheet,
    homes: splitList(document.querySelector("#productHomesInput").value),
    audience: splitList(document.querySelector("#productAudienceInput").value),
    highlights: document.querySelector("#productHighlightsInput").value.split("\n").map((item) => item.trim()).filter(Boolean),
  };
}

function readProductSpecs() {
  return {
    尺寸: document.querySelector("#productSpecSizeInput").value.trim(),
    面料: document.querySelector("#productSpecFabricInput").value.trim(),
    填充: document.querySelector("#productSpecFillingInput").value.trim(),
    颜色: document.querySelector("#productSpecColorInput").value.trim(),
  };
}

function saveCurrentProductDraft() {
  const name = document.querySelector("#productNameInput").value.trim();
  if (!name) {
    setAdminCostSheetMessage("请先填写产品名称，再上传成本 Excel。", true);
    return false;
  }

  const product = readProductForm();
  try {
    upsertProduct(product);
  } catch (storageError) {
    setAdminCostSheetMessage("Excel 文件过大，浏览器本地存储失败。请压缩或精简文件后重新上传。", true);
    return false;
  }
  document.querySelector("#productIdInput").value = product.id;
  renderProductList();
  return true;
}

function setProductFormMessage(text, isError = false) {
  if (!productFormMessage) return;
  productFormMessage.textContent = text;
  productFormMessage.classList.toggle("is-error", isError);
}

function getProductSaveErrorMessage(error) {
  if (error?.name === "QuotaExceededError") {
    return "浏览器本地存储空间不足，请压缩图片或成本分析表后再保存。";
  }
  return error?.message || "浏览器保存数据时发生异常，请检查填写内容后重试。";
}

function showProductSaveDialog(title, message) {
  let dialog = document.querySelector("#productSaveDialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "productSaveDialog";
    dialog.className = "login-dialog";
    dialog.innerHTML = `
      <button class="dialog-close" type="button" data-close-product-save aria-label="关闭提示窗口">×</button>
      <h2 id="productSaveDialogTitle"></h2>
      <p id="productSaveDialogMessage"></p>
      <button class="button button-primary button-full" type="button" data-close-product-save>知道了</button>
    `;
    document.body.appendChild(dialog);
    dialog.querySelectorAll("[data-close-product-save]").forEach((button) => {
      button.addEventListener("click", () => dialog.close());
    });
  }
  dialog.querySelector("#productSaveDialogTitle").textContent = title;
  dialog.querySelector("#productSaveDialogMessage").textContent = message;
  dialog.showModal();
}

staffList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-id]");
  if (!item) return;
  const person = findStaff(item.dataset.id);
  const action = event.target.dataset.action;

  if (action === "edit") {
    loadStaff(person);
  }

  if (action === "up" || action === "down") {
    moveStaff(person.id, action === "up" ? -1 : 1);
  }

  if (action === "delete" && confirm(`确定删除 ${person.name} 吗？`)) {
    deleteStaff(person.id);
    renderStaffList();
    loadStaff(getStaffList()[0] || createBlankStaff());
  }
});

staffForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveStaffFromForm();
});

function saveStaffFromForm() {
  staffFormMessage.textContent = "";
  if (!staffForm.reportValidity()) {
    staffFormMessage.textContent = "请先补全姓名、职位、头像和简介；联系方式可留空。";
    return;
  }

  const person = readStaffForm();
  upsertStaff(person);
  selectedStaff = person.id;
  loadStaff(person);
  renderStaffList();
  staffFormMessage.textContent = "业务人员信息已保存。";
}

function insertStaffAtTop(person) {
  saveStaffList([person, ...getStaffList().filter((item) => item.id !== person.id)]);
}

function readStaffForm() {
  const name = document.querySelector("#staffNameInput").value.trim();
  return {
    id: document.querySelector("#staffIdInput").value || createStaffId(name),
    name,
    title: document.querySelector("#staffTitleInput").value.trim(),
    avatar: document.querySelector("#staffAvatarInput").value.trim(),
    summary: document.querySelector("#staffSummaryInput").value.trim(),
    email: document.querySelector("#staffEmailInput").value.trim(),
    whatsapp: document.querySelector("#staffWhatsappInput").value.trim(),
    phone: document.querySelector("#staffPhoneInput").value.trim(),
    wechat: document.querySelector("#staffWechatInput").value.trim(),
  };
}

document.querySelector("#deleteStaffBtn").addEventListener("click", () => {
  const id = document.querySelector("#staffIdInput").value;
  const person = id ? findStaff(id) : null;
  if (!person) return;

  if (confirm(`确定删除 ${person.name} 吗？`)) {
    deleteStaff(person.id);
    renderStaffList();
    loadStaff(getStaffList()[0] || createBlankStaff());
  }
});

document.querySelector("#newAccountBtn").addEventListener("click", () => {
  selectedAccount = "";
  loadAccount("");
});

accountSearchInput.addEventListener("input", renderAccountList);

accountList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-username]");
  if (!row) return;
  loadAccount(row.dataset.username);
});

accountForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#accountUsernameInput").value.trim();
  if (!username) return;

  const account = {
    name: document.querySelector("#accountNameInput").value.trim() || username,
    password: document.querySelector("#accountPasswordInput").value,
    role: username === "ming" ? "admin" : accountRoleInput.value,
  };

  upsertAccount(username, account);
  saveUserPermissions(
    username,
    username === "ming" ? getDefaultPermissionsForRole("admin") : readPermissionChecklist()
  );
  selectedAccount = username;
  renderAccountList();
  loadAccount(username);
});

accountRoleInput.addEventListener("change", () => {
  const username = document.querySelector("#accountUsernameInput").value.trim();
  renderPermissionChecklist({
    username,
    name: document.querySelector("#accountNameInput").value.trim(),
    password: document.querySelector("#accountPasswordInput").value,
    role: accountRoleInput.value,
  });
});

document.querySelector("#deleteAccountBtn").addEventListener("click", () => {
  const username = document.querySelector("#accountUsernameInput").value.trim();
  if (!username || username === "ming") {
    alert("网站管理员帐号不能删除。");
    return;
  }

  if (confirm(`确定删除帐号 ${username} 吗？`)) {
    deleteAccount(username);
    selectedAccount = "ming";
    renderAccountList();
    loadAccount(selectedAccount);
  }
});

function splitList(value) {
  return value.split(/[,，]/).map((item) => item.trim()).filter(Boolean);
}

function removeCategory(category) {
  if (!category) return;
  if (getCategories().length <= 1) {
    alert("至少需要保留一个产品分类。");
    return;
  }

  const products = getProducts();
  const linkedCount = products.filter((product) => product.category === category.name).length;
  const message = linkedCount
    ? `该分类下有 ${linkedCount} 个产品。删除后这些产品会改到第一个可用分类，确定删除吗？`
    : `确定删除分类 ${category.name} 吗？`;
  if (!confirm(message)) return;

  deleteCategory(category.id);
  const fallback = getCategories()[0]?.name || "";
  saveProducts(products.map((product) => (product.category === category.name ? { ...product, category: fallback } : product)));
  renderCategoryList();
  renderCategoryOptions();
  renderCategoryMenus();
  renderProductList();
  loadProduct(getProducts()[0] || createBlankProduct());
}

function createCategoryFromPrompt() {
  const name = prompt("请输入新的产品分类名称：")?.trim();
  if (!name) return;

  const category = { id: createCategoryId(name), name };
  upsertCategory(category, "");
  renderCategoryList();
  renderCategoryOptions(name);
  renderCategoryMenus();
}

function editCategoryFromPrompt(category) {
  if (!category) return;
  const name = prompt("请输入产品分类名称：", category.name)?.trim();
  if (!name || name === category.name) return;

  const updated = { ...category, name };
  upsertCategory(updated, category.name);
  renderCategoryList();
  renderCategoryOptions(name);
  renderCategoryMenus();
  renderProductList();
}

function createCategoryId(name) {
  const base = slugify(name);
  return base.startsWith("product-") ? `category-${Date.now()}` : base;
}

function moveStaff(id, direction) {
  const staff = getStaffList();
  const index = staff.findIndex((person) => person.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= staff.length) return;

  [staff[index], staff[nextIndex]] = [staff[nextIndex], staff[index]];
  saveStaffList(staff);
  selectedStaff = id;
  renderStaffList();
}

function createStaffId(name) {
  const base = slugify(name);
  if (base.startsWith("product-")) {
    return `staff-${Date.now()}`;
  }
  return base.startsWith("staff-") ? base : `staff-${base}`;
}

function getProductIntroImages(product) {
  return {
    front: product.introImages?.front || "",
    angle: product.introImages?.angle || "",
    side: product.introImages?.side || "",
    back: product.introImages?.back || "",
    dimensions: product.introImages?.dimensions || "",
  };
}

function getDefaultIntroImageSettings() {
  return Object.keys(introImageInputs).reduce((settings, key) => {
    settings[key] = { ...DEFAULT_INTRO_IMAGE_SETTINGS };
    return settings;
  }, {});
}

function createPositionOptions(selected) {
  const options = [
    ["center center", "居中"],
    ["left center", "靠左"],
    ["right center", "靠右"],
    ["center top", "靠上"],
    ["center bottom", "靠下"],
    ["left top", "左上"],
    ["right top", "右上"],
    ["left bottom", "左下"],
    ["right bottom", "右下"],
  ];
  return options
    .map(([value, label]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`)
    .join("");
}

function readIntroImageInputs() {
  return Object.entries(introImageInputs).reduce((images, [key, input]) => {
    images[key] = input.value.trim();
    return images;
  }, {});
}

function renderExtraIntroImages(images = [], productName = "") {
  if (!extraIntroImageList) return;
  extraIntroImageList.innerHTML = images.map((item) => createExtraIntroImageRow(item, productName)).join("");
}

function createExtraIntroImageRow(item = {}, productName = "") {
  const id = item.id || `extra-intro-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const title = item.title || productName || "产品介绍图";
  const description = item.description || item.label || "产品介绍图";
  const image = item.image || "";
  const position = item.position || DEFAULT_INTRO_IMAGE_SETTINGS.position;
  return `
    <div class="extra-intro-row" data-extra-intro-id="${id}">
      <div class="extra-intro-fields">
        <label>
          <span>图片标题</span>
          <input data-extra-field="title" value="${escapeAdminCell(title)}" />
        </label>
        <label>
          <span>文字描述</span>
          <input data-extra-field="description" value="${escapeAdminCell(description)}" />
        </label>
        <label>
          <span>图片路径</span>
          <input data-extra-field="image" value="${escapeAdminCell(image)}" placeholder="assets/gallery-extra.png" />
        </label>
        <label>
          <span>主体位置</span>
          <select data-extra-field="position">${createPositionOptions(position)}</select>
        </label>
      </div>
      <div class="image-upload-zone image-upload-zone-small extra-intro-upload" data-extra-upload>
        <input type="file" accept="image/*" />
        <strong>上传这张介绍图</strong>
        <span>点击选择或拖拽图片</span>
        <img class="${image ? "visible" : ""}" src="${escapeAdminCell(image)}" alt="产品介绍图预览" />
      </div>
      <button class="button button-ghost" type="button" data-remove-extra-intro>删除这张介绍图</button>
    </div>
  `;
}

function readExtraIntroImages() {
  if (!extraIntroImageList) return [];
  return [...extraIntroImageList.querySelectorAll("[data-extra-intro-id]")]
    .map((row) => ({
      id: row.dataset.extraIntroId,
      label: row.querySelector('[data-extra-field="description"]')?.value.trim() || "产品介绍图",
      title: row.querySelector('[data-extra-field="title"]')?.value.trim() || document.querySelector("#productNameInput").value.trim() || "产品介绍图",
      description: row.querySelector('[data-extra-field="description"]')?.value.trim() || "产品介绍图",
      image: row.querySelector('[data-extra-field="image"]')?.value.trim() || "",
      position: row.querySelector('[data-extra-field="position"]')?.value || DEFAULT_INTRO_IMAGE_SETTINGS.position,
    }))
    .filter((item) => item.image);
}

function updateExtraIntroPreview(row) {
  const image = row.querySelector('[data-extra-field="image"]')?.value.trim() || "";
  const preview = row.querySelector("[data-extra-upload] img");
  if (!preview) return;
  preview.src = image;
  preview.classList.toggle("visible", Boolean(image));
}

function loadFactoryProfile() {
  if (!factoryForm) return;
  const profile = getFactoryProfile();
  document.querySelector("#factoryHeroEyebrowInput").value = profile.heroEyebrow || "";
  document.querySelector("#factoryHeroTitleInput").value = profile.heroTitle || "";
  document.querySelector("#factoryHeroDescriptionInput").value = profile.heroDescription || "";
  document.querySelector("#factoryHeroImageInput").value = profile.heroImage || "";
  updateImagePreview("factoryHeroImageInput");
  document.querySelector("#factoryHistoryEyebrowInput").value = profile.historyEyebrow || "";
  document.querySelector("#factoryHistoryTitleInput").value = profile.historyTitle || "";
  document.querySelector("#factoryHistoryDescriptionInput").value = profile.historyDescription || "";
  document.querySelector("#factoryGalleryEyebrowInput").value = profile.galleryEyebrow || "";
  document.querySelector("#factoryGalleryTitleInput").value = profile.galleryTitle || "";
  document.querySelector("#factoryGalleryDescriptionInput").value = profile.galleryDescription || "";
  renderFactoryHistoryRows(profile.historyItems || []);
  renderFactoryGalleryRows(profile.galleryItems || []);
  factoryFormMessage.textContent = "";
}

function renderFactoryHistoryRows(items = []) {
  if (!factoryHistoryList) return;
  factoryHistoryList.innerHTML = items.map((item) => createFactoryHistoryRow(item)).join("");
}

function createFactoryHistoryRow(item = {}) {
  return `
    <div class="factory-admin-row" data-factory-history-row>
      <label>
        <span>阶段</span>
        <input data-factory-history-field="label" value="${escapeAdminCell(item.label || "")}" />
      </label>
      <label>
        <span>标题</span>
        <input data-factory-history-field="title" value="${escapeAdminCell(item.title || "")}" />
      </label>
      <label class="factory-admin-row-wide">
        <span>描述</span>
        <textarea data-factory-history-field="description">${escapeAdminCell(item.description || "")}</textarea>
      </label>
      <button class="button button-ghost" type="button" data-remove-factory-row>删除</button>
    </div>
  `;
}

function renderFactoryGalleryRows(items = []) {
  if (!factoryGalleryList) return;
  factoryGalleryList.innerHTML = items.map((item) => createFactoryGalleryRow(item)).join("");
}

function createFactoryGalleryRow(item = {}) {
  const image = item.image || "";
  return `
    <div class="factory-admin-row factory-gallery-admin-row" data-factory-gallery-row>
      <label>
        <span>标题</span>
        <input data-factory-gallery-field="title" value="${escapeAdminCell(item.title || "")}" />
      </label>
      <label>
        <span>图片路径</span>
        <input data-factory-gallery-field="image" value="${escapeAdminCell(image)}" placeholder="assets/factory-workshop.png" />
      </label>
      <label class="factory-admin-row-wide">
        <span>描述</span>
        <textarea data-factory-gallery-field="description">${escapeAdminCell(item.description || "")}</textarea>
      </label>
      <div class="image-upload-zone image-upload-zone-small factory-gallery-upload" data-factory-gallery-upload>
        <input type="file" accept="image/*" />
        <strong>上传图片</strong>
        <span>点击选择或拖拽图片</span>
        <img class="${image ? "visible" : ""}" src="${escapeAdminCell(image)}" alt="工厂图片预览" />
      </div>
      <button class="button button-ghost" type="button" data-remove-factory-row>删除</button>
    </div>
  `;
}

function readFactoryForm() {
  return {
    heroEyebrow: document.querySelector("#factoryHeroEyebrowInput").value.trim(),
    heroTitle: document.querySelector("#factoryHeroTitleInput").value.trim(),
    heroDescription: document.querySelector("#factoryHeroDescriptionInput").value.trim(),
    heroImage: document.querySelector("#factoryHeroImageInput").value.trim(),
    historyEyebrow: document.querySelector("#factoryHistoryEyebrowInput").value.trim(),
    historyTitle: document.querySelector("#factoryHistoryTitleInput").value.trim(),
    historyDescription: document.querySelector("#factoryHistoryDescriptionInput").value.trim(),
    historyItems: readFactoryHistoryRows(),
    galleryEyebrow: document.querySelector("#factoryGalleryEyebrowInput").value.trim(),
    galleryTitle: document.querySelector("#factoryGalleryTitleInput").value.trim(),
    galleryDescription: document.querySelector("#factoryGalleryDescriptionInput").value.trim(),
    galleryItems: readFactoryGalleryRows(),
  };
}

function readFactoryHistoryRows() {
  return [...factoryHistoryList.querySelectorAll("[data-factory-history-row]")]
    .map((row) => ({
      label: row.querySelector('[data-factory-history-field="label"]')?.value.trim() || "",
      title: row.querySelector('[data-factory-history-field="title"]')?.value.trim() || "",
      description: row.querySelector('[data-factory-history-field="description"]')?.value.trim() || "",
    }))
    .filter((item) => item.label || item.title || item.description);
}

function readFactoryGalleryRows() {
  return [...factoryGalleryList.querySelectorAll("[data-factory-gallery-row]")]
    .map((row) => ({
      title: row.querySelector('[data-factory-gallery-field="title"]')?.value.trim() || "",
      image: row.querySelector('[data-factory-gallery-field="image"]')?.value.trim() || "",
      description: row.querySelector('[data-factory-gallery-field="description"]')?.value.trim() || "",
    }))
    .filter((item) => item.title || item.image || item.description);
}

function updateFactoryGalleryPreview(row) {
  const image = row.querySelector('[data-factory-gallery-field="image"]')?.value.trim() || "";
  const preview = row.querySelector("[data-factory-gallery-upload] img");
  if (!preview) return;
  preview.src = image;
  preview.classList.toggle("visible", Boolean(image));
}

addIntroImageBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!extraIntroImageList) return;
  const productName = document.querySelector("#productNameInput")?.value.trim() || "";
  extraIntroImageList.insertAdjacentHTML(
    "beforeend",
    createExtraIntroImageRow(
      {
        title: productName || "产品介绍图",
        description: "产品介绍图",
      },
      productName
    )
  );
  extraIntroImageList.querySelector("[data-extra-intro-id]:last-child [data-extra-field='title']")?.focus();
});

extraIntroImageList?.addEventListener("input", (event) => {
  if (event.target.dataset.extraField === "image") {
    updateExtraIntroPreview(event.target.closest("[data-extra-intro-id]"));
  }
});

extraIntroImageList?.addEventListener("click", async (event) => {
  const row = event.target.closest("[data-extra-intro-id]");
  if (!row) return;

  if (event.target.closest("[data-remove-extra-intro]")) {
    row.remove();
    return;
  }

  const uploadZone = event.target.closest("[data-extra-upload]");
  if (uploadZone && !event.target.matches('input[type="file"]')) {
    uploadZone.querySelector('input[type="file"]')?.click();
  }
});

extraIntroImageList?.addEventListener("change", async (event) => {
  const fileInput = event.target.closest('[data-extra-upload] input[type="file"]');
  if (!fileInput) return;
  const row = fileInput.closest("[data-extra-intro-id]");
  const imageInput = row?.querySelector('[data-extra-field="image"]');
  const file = fileInput.files?.[0];
  if (file && imageInput) {
    await readImageFile(file, imageInput);
    updateExtraIntroPreview(row);
  }
});

extraIntroImageList?.addEventListener("dragover", (event) => {
  const uploadZone = event.target.closest("[data-extra-upload]");
  if (!uploadZone) return;
  event.preventDefault();
  uploadZone.classList.add("drag-over");
});

extraIntroImageList?.addEventListener("dragleave", (event) => {
  event.target.closest("[data-extra-upload]")?.classList.remove("drag-over");
});

extraIntroImageList?.addEventListener("drop", async (event) => {
  const uploadZone = event.target.closest("[data-extra-upload]");
  if (!uploadZone) return;
  event.preventDefault();
  uploadZone.classList.remove("drag-over");
  const row = uploadZone.closest("[data-extra-intro-id]");
  const imageInput = row?.querySelector('[data-extra-field="image"]');
  const file = event.dataTransfer.files?.[0];
  if (file && imageInput) {
    await readImageFile(file, imageInput);
    updateExtraIntroPreview(row);
  }
});

factoryHistoryList?.addEventListener("click", (event) => {
  if (event.target.closest("[data-remove-factory-row]")) {
    event.target.closest("[data-factory-history-row]")?.remove();
  }
});

factoryGalleryList?.addEventListener("input", (event) => {
  if (event.target.dataset.factoryGalleryField === "image") {
    updateFactoryGalleryPreview(event.target.closest("[data-factory-gallery-row]"));
  }
});

factoryGalleryList?.addEventListener("click", (event) => {
  const row = event.target.closest("[data-factory-gallery-row]");
  if (!row) return;

  if (event.target.closest("[data-remove-factory-row]")) {
    row.remove();
    return;
  }

  const uploadZone = event.target.closest("[data-factory-gallery-upload]");
  if (uploadZone && !event.target.matches('input[type="file"]')) {
    uploadZone.querySelector('input[type="file"]')?.click();
  }
});

factoryGalleryList?.addEventListener("change", async (event) => {
  const fileInput = event.target.closest('[data-factory-gallery-upload] input[type="file"]');
  if (!fileInput) return;
  const row = fileInput.closest("[data-factory-gallery-row]");
  const imageInput = row?.querySelector('[data-factory-gallery-field="image"]');
  const file = fileInput.files?.[0];
  if (file && imageInput) {
    await readImageFile(file, imageInput);
    updateFactoryGalleryPreview(row);
  }
});

factoryGalleryList?.addEventListener("dragover", (event) => {
  const uploadZone = event.target.closest("[data-factory-gallery-upload]");
  if (!uploadZone) return;
  event.preventDefault();
  uploadZone.classList.add("drag-over");
});

factoryGalleryList?.addEventListener("dragleave", (event) => {
  event.target.closest("[data-factory-gallery-upload]")?.classList.remove("drag-over");
});

factoryGalleryList?.addEventListener("drop", async (event) => {
  const uploadZone = event.target.closest("[data-factory-gallery-upload]");
  if (!uploadZone) return;
  event.preventDefault();
  uploadZone.classList.remove("drag-over");
  const row = uploadZone.closest("[data-factory-gallery-row]");
  const imageInput = row?.querySelector('[data-factory-gallery-field="image"]');
  const file = event.dataTransfer.files?.[0];
  if (file && imageInput) {
    await readImageFile(file, imageInput);
    updateFactoryGalleryPreview(row);
  }
});

function setupImageUploadZones() {
  document.querySelectorAll(".image-upload-zone").forEach((zone) => {
    const input = document.querySelector(`#${zone.dataset.imageTarget}`);
    const fileInput = zone.querySelector('input[type="file"]');
    if (!input || !fileInput) return;

    zone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("click", (event) => event.stopPropagation());
    fileInput.addEventListener("change", async () => {
      const file = fileInput.files?.[0];
      if (file) await readImageFile(file, input);
    });

    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", async (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const file = event.dataTransfer.files?.[0];
      if (file) await readImageFile(file, input);
    });
  });

  document.querySelectorAll(".image-upload-zone").forEach((zone) => {
    const input = document.querySelector(`#${zone.dataset.imageTarget}`);
    input?.addEventListener("input", () => updateImagePreview(input.id));
  });
}

function setupCostSheetUpload() {
  const input = document.querySelector("#adminCostSheetInput");
  const dropZone = document.querySelector("#adminCostSheetDropZone");
  const preview = document.querySelector("#adminCostSheetPreview");
  if (!input || !dropZone) return;

  dropZone.addEventListener("click", () => input.click());
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) readAdminCostSheetFile(file);
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
  });

  dropZone.addEventListener("dragleave", () => dropZone.classList.remove("drag-over"));
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");
    const file = event.dataTransfer.files?.[0];
    if (file) readAdminCostSheetFile(file);
  });

  preview?.addEventListener("click", (event) => {
    if (event.target.closest("[data-action='download-cost-sheet']")) {
      downloadCostSheet(currentProductCostSheet);
    }
  });
}

function readAdminCostSheetFile(file) {
  if (!isExcelFile(file)) {
    setAdminCostSheetMessage("请上传 .xlsx、.xls 或 .csv 文件。", true);
    return;
  }

  setAdminCostSheetMessage(`正在保存：${file.name} ...`);
  uploadCostSheetToServer(file)
    .then((uploadedSheet) => {
      currentProductCostSheet = uploadedSheet;
      if (!saveCurrentProductDraft()) return;
      renderAdminCostSheetPreview();
      setAdminCostSheetMessage(`已保存到服务器：${file.name}。详情页可下载原文件。`);
    })
    .catch(() => {
      setAdminCostSheetMessage("成本分析表保存失败：请确认上传服务可用，并重新上传。", true);
    });
}

function renderAdminCostSheetPreview() {
  const preview = document.querySelector("#adminCostSheetPreview");
  const message = document.querySelector("#adminCostSheetMessage");
  if (!preview) return;

  if (!currentProductCostSheet?.dataUrl) {
    preview.innerHTML = '<div class="locked-box permission-locked"><h3>暂无成本表文件</h3><p>上传 Excel 后可在这里下载。</p></div>';
    if (message) message.textContent = "";
    return;
  }

  preview.innerHTML = `
    <div class="cost-file-card">
      <div>
        <strong>${escapeAdminCell(currentProductCostSheet.name)}</strong>
        <span>${currentProductCostSheet.uploadedAt || ""}${currentProductCostSheet.size ? ` · ${formatFileSize(currentProductCostSheet.size)}` : ""}</span>
      </div>
      <button class="button button-light" type="button" data-action="download-cost-sheet">下载 Excel</button>
    </div>
  `;
}

function setAdminCostSheetMessage(text, isError = false) {
  const message = document.querySelector("#adminCostSheetMessage");
  if (!message) return;
  message.textContent = text;
  message.classList.toggle("is-error", isError);
}

function cloneCostSheet(sheet) {
  return sheet?.dataUrl ? cloneData(sheet) : null;
}

function downloadCostSheet(sheet) {
  if (!sheet?.dataUrl) return;
  const link = document.createElement("a");
  link.href = sheet.dataUrl;
  link.download = sheet.name || "cost-sheet.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function isExcelFile(file) {
  return /\.(xlsx|xls|csv)$/i.test(file.name || "");
}

function getExcelMimeType(fileName) {
  if (/\.csv$/i.test(fileName)) return "text/csv";
  if (/\.xls$/i.test(fileName)) return "application/vnd.ms-excel";
  return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
}

function formatFileSize(size) {
  if (!Number.isFinite(size)) return "";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function escapeAdminCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatAdminDateTime(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

async function readImageFile(file, targetInput) {
  if (!file.type.startsWith("image/")) {
    alert("请上传图片文件。");
    return;
  }

  setProductFormMessage("正在压缩并上传图片...");
  const uploadResult = await uploadImageToAssets(file);
  if (uploadResult.path) {
    targetInput.value = uploadResult.path;
    if (targetInput.id) updateImagePreview(targetInput.id);
    setProductFormMessage("图片已压缩并保存到服务器。");
    return;
  }

  const message = uploadResult.error || "图片上传失败：请确认上传服务可用。";
  setProductFormMessage(message, true);
  showProductSaveDialog("图片上传失败", message);
}

async function uploadImageToAssets(file) {
  let prepared;
  try {
    prepared = await prepareImageForUpload(file);
  } catch (error) {
    if (!isSupportedImageUpload(file.name, file.type)) {
      return { path: "", error: "图片格式暂不支持。请转换为 JPG、PNG、WebP 或 GIF 后再上传。" };
    }
    prepared = getOriginalImageUpload(file);
  }

  try {
    const response = await fetch(`${getLocalServerOrigin()}/api/assets?fileName=${encodeURIComponent(prepared.name)}`, {
      method: "POST",
      headers: {
        "Content-Type": prepared.blob.type || "application/octet-stream",
      },
      body: prepared.blob,
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return { path: "", error: data.message || "服务器保存图片失败，请检查图片格式或重新上传。" };
    }
    const data = await response.json();
    return data.ok ? { path: data.path, error: "" } : { path: "", error: data.message || "服务器保存图片失败。" };
  } catch {
    return { path: "", error: "无法连接上传服务。请确认网站服务正常，或稍后重新上传。" };
  }
}

async function uploadCostSheetToServer(file, productId = "") {
  productId ||= document.querySelector("#productIdInput").value || slugify(document.querySelector("#productNameInput").value.trim()) || "product";
  const response = await fetch(`${getLocalServerOrigin()}/api/cost-sheets?productId=${encodeURIComponent(productId)}&fileName=${encodeURIComponent(file.name)}`, {
    method: "POST",
    headers: {
      "Content-Type": file.type || getExcelMimeType(file.name),
      "X-Product-Id": productId,
    },
    body: file,
  });
  if (!response.ok) throw new Error("upload failed");
  const data = await response.json();
  if (!data.ok || !data.path) throw new Error("upload failed");
  return {
    name: data.name || file.name,
    uploadedAt: formatAdminDateTime(new Date()),
    dataUrl: normalizeUploadedPath(data.path),
    path: normalizeUploadedPath(data.path),
    size: data.size || file.size,
    type: file.type || getExcelMimeType(file.name),
  };
}

async function prepareImageForUpload(file) {
  if (/image\/gif/i.test(file.type)) {
    return getOriginalImageUpload(file);
  }
  const bitmap = await createImageBitmap(file);
  const maxSide = 2200;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(bitmap, 0, 0, width, height);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.86));
  const originalUpload = getOriginalImageUpload(file);
  if (!blob) {
    return originalUpload;
  }
  if (blob.size >= file.size && isSupportedImageUpload(file.name, file.type)) {
    return originalUpload;
  }
  return {
    blob,
    name: `${file.name.replace(/\.[^.]+$/, "") || "image"}.jpg`,
  };
}

function getOriginalImageUpload(file) {
  return {
    blob: file,
    name: normalizeImageUploadName(file.name, file.type),
  };
}

function normalizeImageUploadName(name, type) {
  const baseName = String(name || "image").replace(/\.[^.]+$/, "") || "image";
  const extension = getImageUploadExtension(name, type);
  return `${baseName}${extension}`;
}

function getImageUploadExtension(name, type) {
  const extension = (String(name || "").match(/\.[^.]+$/)?.[0] || "").toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(extension)) {
    return extension === ".jpeg" ? ".jpg" : extension;
  }
  if (/jpeg/i.test(type)) return ".jpg";
  if (/png/i.test(type)) return ".png";
  if (/webp/i.test(type)) return ".webp";
  if (/gif/i.test(type)) return ".gif";
  return extension || ".jpg";
}

function isSupportedImageUpload(name, type) {
  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(getImageUploadExtension(name, type));
}

function getLocalServerOrigin() {
  return location.protocol === "file:" ? "http://localhost:8080" : location.origin;
}

function normalizeUploadedPath(path) {
  return location.protocol === "file:" ? String(path || "").replace(/^\/+/, "") : path;
}

async function migrateLargeProductFiles(force = false) {
  const products = getProducts();
  let changed = false;
  for (const product of products) {
    changed = (await migrateProductInlineFiles(product)) || changed;
  }
  if (changed) {
    saveProducts(products);
    setProductFormMessage("已自动把旧的大图片/成本表迁移到服务器，释放浏览器存储空间。");
  } else if (force) {
    setProductFormMessage("没有发现可自动迁移的大文件；请删除旧的超大 base64 图片或成本表后再保存。", true);
  }
  return changed;
}

async function migrateProductInlineFiles(product) {
  let changed = false;
  if (isInlineDataUrl(product.image)) {
    const nextPath = await uploadInlineImageDataUrl(product.image, `${product.id || "product"}-main-image`);
    if (nextPath) {
      product.image = nextPath;
      changed = true;
    }
  }
  Object.entries(product.introImages || {}).forEach(([key, value]) => {
    product.introImages[key] = value;
  });
  for (const [key, value] of Object.entries(product.introImages || {})) {
    if (isInlineDataUrl(value)) {
      const nextPath = await uploadInlineImageDataUrl(value, `${product.id || "product"}-${key}`);
      if (nextPath) {
        product.introImages[key] = nextPath;
        changed = true;
      }
    }
  }
  for (const item of product.extraIntroImages || []) {
    if (isInlineDataUrl(item.image)) {
      const nextPath = await uploadInlineImageDataUrl(item.image, `${product.id || "product"}-intro`);
      if (nextPath) {
        item.image = nextPath;
        changed = true;
      }
    }
  }
  if (isInlineDataUrl(product.costSheet?.dataUrl)) {
    const file = dataUrlToFile(product.costSheet.dataUrl, product.costSheet.name || `${product.id || "product"}-cost-sheet.xlsx`);
    try {
      product.costSheet = await uploadCostSheetToServer(file, product.id || "product");
      changed = true;
    } catch {
      // Keep the original file if the server is unavailable.
    }
  }
  return changed;
}

async function uploadInlineImageDataUrl(dataUrl, fileName) {
  try {
    const file = dataUrlToFile(dataUrl, `${fileName}.png`);
    const result = await uploadImageToAssets(file);
    return result.path || "";
  } catch {
    return "";
  }
}

function dataUrlToFile(dataUrl, fileName) {
  const [meta, base64] = String(dataUrl).split(",");
  const mime = meta.match(/data:([^;]+)/)?.[1] || "application/octet-stream";
  const binary = atob(base64 || "");
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new File([bytes], fileName, { type: mime });
}

function isInlineDataUrl(value) {
  return /^data:/i.test(String(value || ""));
}

function updateImagePreview(inputId) {
  const input = document.querySelector(`#${inputId}`);
  const zone = document.querySelector(`.image-upload-zone[data-image-target="${inputId}"]`);
  const preview = zone?.querySelector("img");
  if (!input || !preview) return;

  const src = input.value.trim();
  preview.src = src;
  preview.classList.toggle("visible", Boolean(src));
}

setupImageUploadZones();
setupCostSheetUpload();
