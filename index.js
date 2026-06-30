const auth = setupAuth();
const productGrid = document.querySelector("#productGrid");
const sectionHeading = document.querySelector("#products .section-heading");
const categoryTabs = document.querySelector("#productCategoryTabs");
const keywordGroupsNode = document.querySelector("#productKeywordGroups");
const activeKeywordsNode = document.querySelector("#activeProductKeywords");
const sortSelect = document.querySelector("#productSortSelect");
const viewToggle = document.querySelector(".directory-view-toggle");
const selectedCategoryId = new URLSearchParams(location.search).get("category");
let selectedCategory = null;
let productSearchTerm = "";
let activeCategory = "全部";
let activeKeywords = [];
let activeView = "list";
let lastProductRenderSignature = "";
let renderedProductCount = 0;
let visibleProductCache = [];
let carouselIndex = 0;

const LIST_BATCH_SIZE = 4;

const KEYWORD_GROUPS = [
  { name: "组合", items: ["单人位", "双人位", "三人位", "贵妃组合", "L型组合", "模块组合", "脚踏组合"] },
  { name: "颜色", items: ["米白", "米灰", "奶油色", "深蓝", "深灰", "墨绿", "橙棕", "多色可选"] },
  { name: "款式", items: ["欧洲款", "日本款", "现代简约", "休闲款", "复古款", "奶油风", "轻奢款"] },
  { name: "类型", items: ["直排沙发", "贵妃沙发", "模块沙发", "脚踏沙发", "低矮沙发", "高脚沙发"] },
  { name: "特点", items: ["宽坐深躺", "坐感柔软", "高脚设计", "木脚", "金属脚", "小户型", "客厅主款", "可选色"] },
];

initAdCarousel();
auth.updateAccountView();
renderProductGrid();

whenSiteDataReady(() => {
  auth.updateAccountView();
  selectedCategory = selectedCategoryId ? findCategory(selectedCategoryId) : null;
  activeCategory = selectedCategory?.name || "全部";
  renderProductHeading();
  renderProductControls();
  renderProductResults({ force: true });
});

function initAdCarousel() {
  const slides = [...document.querySelectorAll("[data-slide]")];
  const dots = [...document.querySelectorAll("[data-carousel-dot]")];
  const carousel = document.querySelector("[data-carousel]");
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  if (!slides.length || !dots.length || !carousel) return;

  const showSlide = (nextIndex) => {
    carouselIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === carouselIndex);
    });
    dots.forEach((dot, index) => dot.classList.toggle("is-active", index === carouselIndex));
  };

  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
  prevButton?.addEventListener("click", () => showSlide(carouselIndex - 1));
  nextButton?.addEventListener("click", () => showSlide(carouselIndex + 1));
  showSlide(0);
}

function renderProductGrid() {
  selectedCategory = selectedCategoryId ? findCategory(selectedCategoryId) : null;
  activeCategory = selectedCategory?.name || "全部";
  renderProductHeading();
  renderProductControls();
  renderProductResults({ force: true });
}

function renderProductHeading() {
  if (!sectionHeading) return;
  sectionHeading.innerHTML = `
    <div>
      <p class="eyebrow">Products</p>
      <h2>产品目录</h2>
      <p>按组合、颜色、款式、类型、特点建立关键词，支持快速搜索和组合筛选。</p>
    </div>
  `;
}

function renderProductControls() {
  renderCategoryTabs();
  renderKeywordGroups();
  renderActiveKeywords();
  bindProductSearch();
}

function getProductCategories() {
  const names = [...new Set(getCatalogProducts().map((product) => product.category).filter(Boolean))];
  return ["全部", ...names];
}

function renderCategoryTabs() {
  if (!categoryTabs) return;
  categoryTabs.innerHTML = getProductCategories().map((category) => `
    <button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${escapeAttribute(category)}">
      <span>${escapeHtml(category)}</span>
      <strong>${countByCategory(category)}</strong>
    </button>
  `).join("");
}

function countByCategory(category) {
  const products = getCatalogProducts();
  if (category === "全部") return products.length;
  return products.filter((product) => product.category === category).length;
}

function renderKeywordGroups() {
  if (!keywordGroupsNode) return;
  keywordGroupsNode.innerHTML = KEYWORD_GROUPS.map((group) => `
    <section>
      <h3>${group.name}</h3>
      <div>
        ${group.items.map((keyword) => `
          <button class="${activeKeywords.includes(keyword) ? "active" : ""}" type="button" data-keyword="${keyword}">
            ${keyword}
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderActiveKeywords() {
  if (!activeKeywordsNode) return;
  activeKeywordsNode.innerHTML = activeKeywords.length
    ? activeKeywords.map((keyword) => `<button type="button" data-keyword="${keyword}">${keyword} ×</button>`).join("")
    : "";
}

function bindProductSearch() {
  const input = document.querySelector("#productSearchInput");
  if (!input) return;
  input.value = productSearchTerm;
  input.addEventListener("input", () => {
    productSearchTerm = input.value.trim();
    renderProductResults();
  });
}

function getVisibleProducts() {
  const products = [...getCatalogProducts()].filter((product) => {
    const categoryMatch = activeCategory === "全部" || product.category === activeCategory;
    const productKeywords = getProductKeywords(product);
    const keywordMatch = activeKeywords.every((keyword) => productKeywords.includes(keyword));
    const queryMatch = productMatchesSearch(product, productSearchTerm);
    return categoryMatch && keywordMatch && queryMatch;
  });

  products.sort((a, b) => getProductModelNumber(b) - getProductModelNumber(a));
  return products;
}

function getCatalogProducts() {
  return getProducts().filter(hasDisplayableProductImage);
}

function hasDisplayableProductImage(product = {}) {
  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key];
  if (entry?.thumbFallback || entry?.thumbScene || entry?.thumb || entry?.scene || entry?.fallback || entry?.front) {
    return true;
  }

  const image = String(product.image || "").trim();
  if (!image || isLocalOnlyImageSource(image) || isMappedProductImageSource(image)) return false;
  return true;
}

function getProductModelNumber(product) {
  const value = [product.name, product.id, product.code, product.sku].filter(Boolean).join(" ");
  const match = value.match(/\d+/g);
  return match ? Number(match.at(-1)) : 0;
}

function renderProductResults({ force = false } = {}) {
  const products = getVisibleProducts();
  const signature = getProductRenderSignature(products);
  if (!force && signature === lastProductRenderSignature) return;
  lastProductRenderSignature = signature;
  visibleProductCache = products;
  renderedProductCount = activeView === "list" ? Math.min(LIST_BATCH_SIZE, products.length) : products.length;

  document.querySelector("#productEndMarker")?.remove();
  productGrid.classList.toggle("is-list", activeView === "list");
  window.removeEventListener("scroll", maybeLoadMoreProducts);

  if (!products.length) {
    productGrid.innerHTML = `<p class="product-end-marker">${getEmptyProductMessage()}</p>`;
    return;
  }

  renderProductCards();
  renderProductEndMarker();
  bindListLazyLoading();
}

function renderProductCards() {
  productGrid.innerHTML = visibleProductCache.slice(0, renderedProductCount).map(createProductCard).join("");
}

function renderProductEndMarker() {
  document.querySelector("#productEndMarker")?.remove();
  const hasMore = activeView === "list" && renderedProductCount < visibleProductCache.length;
  const doneText = productSearchTerm || activeKeywords.length || activeCategory !== "全部" ? "已显示全部匹配产品" : "已显示全部产品";
  const markerText = hasMore ? `已显示 ${renderedProductCount} / ${visibleProductCache.length} 款，继续向下浏览会自动加载` : doneText;
  productGrid.insertAdjacentHTML(
    "afterend",
    `<p id="productEndMarker" class="product-end-marker">${markerText}</p>`
  );
}

function bindListLazyLoading() {
  if (activeView === "list" && renderedProductCount < visibleProductCache.length) {
    window.addEventListener("scroll", maybeLoadMoreProducts, { passive: true });
  }
}

function maybeLoadMoreProducts() {
  if (activeView !== "list" || renderedProductCount >= visibleProductCache.length) return;
  const scrollRoot = document.documentElement;
  const nearBottom = window.innerHeight + window.scrollY > scrollRoot.scrollHeight - 1100;
  if (!nearBottom) return;
  renderedProductCount = Math.min(renderedProductCount + LIST_BATCH_SIZE, visibleProductCache.length);
  renderProductCards();
  renderProductEndMarker();
  if (renderedProductCount >= visibleProductCache.length) {
    window.removeEventListener("scroll", maybeLoadMoreProducts);
  }
}

function createProductCard(product, index) {
  const prioritizeImage = index < 4 || location.hash === "#products" || Boolean(activeCategory !== "\u5168\u90e8" || activeKeywords.length || productSearchTerm);
  const imageLoading = prioritizeImage ? "eager" : "lazy";
  const fetchPriority = prioritizeImage && index === 0 ? "high" : "auto";
  const imageRole = activeView === "list" ? "scene" : "thumb";
  const imageSource = imageRole === "scene" ? "" : product.image;
  const image = resolveProductImage(product, imageSource, imageRole);
  const imageFallback = getProductImageErrorFallback(product, imageRole);
  const imageError = imageFallback ? ` onerror="this.onerror=null;this.src='${escapeAttribute(imageFallback)}'"` : "";
  const productName = product.name || product.id;
  const productHref = `detail.html?id=${encodeURIComponent(product.id)}`;
  const visibleTags = getVisibleProductTags(product).slice(0, 4);
  const summary = product.summary || "适合客厅、样板间和休闲会客空间。";

  return `
    <article class="product-card directory-product-card">
      <a class="directory-product-link" href="${productHref}" aria-label="查看 ${escapeAttribute(productName)}">
        <span class="product-image-button">
          <img src="${escapeAttribute(image)}" alt="${escapeAttribute(productName)}" loading="${imageLoading}" decoding="async" fetchpriority="${fetchPriority}" width="720" height="540"${imageError} />
        </span>
        <div class="product-body">
          <span class="directory-card-category">${escapeHtml(product.category || "产品款式")}</span>
          <div class="directory-card-head">
            <h3>${escapeHtml(productName)}</h3>
          </div>
          <span class="directory-card-summary">${escapeHtml(summary)}</span>
          <span class="directory-card-tags">
            ${visibleTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </span>
        </div>
      </a>
    </article>
  `;
}

categoryTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderProductControls();
  renderProductResults({ force: true });
});

keywordGroupsNode?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-keyword]");
  if (!button) return;
  const keyword = button.dataset.keyword;
  activeKeywords = activeKeywords.includes(keyword)
    ? activeKeywords.filter((item) => item !== keyword)
    : [...activeKeywords, keyword];
  renderProductControls();
  renderProductResults({ force: true });
});

activeKeywordsNode?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-keyword]");
  if (!button) return;
  activeKeywords = activeKeywords.filter((item) => item !== button.dataset.keyword);
  renderProductControls();
  renderProductResults({ force: true });
});

document.querySelector("#clearProductFilters")?.addEventListener("click", () => {
  activeCategory = "全部";
  activeKeywords = [];
  productSearchTerm = "";
  if (sortSelect) sortSelect.value = "new";
  renderProductControls();
  renderProductResults({ force: true });
});

sortSelect?.addEventListener("change", () => renderProductResults({ force: true }));

viewToggle?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-view]");
  if (!button) return;
  activeView = button.dataset.productView;
  viewToggle.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  renderProductResults({ force: true });
});

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function getVisibleProductTags(product) {
  const hiddenWords = ["面料", "尺寸", "规格", "价格", "售价", "询价", "US$", "$"];
  return getProductKeywords(product).filter((tag) => !hiddenWords.some((word) => String(tag).includes(word)));
}

function getProductKeywords(product) {
  const explicit = [...(product.keywords || []), ...(product.tags || [])];
  const text = normalizeSearchText([
    product.name,
    product.category,
    product.summary,
    ...Object.values(product.specs || {}),
    ...(product.highlights || []),
    ...(product.homes || []),
  ].join(" "));
  const inferred = [];

  addIf(inferred, /单人|1p|1人/.test(text), "单人位");
  addIf(inferred, /双人|2p|2人/.test(text), "双人位");
  addIf(inferred, /三人|3p|3人/.test(text), "三人位");
  addIf(inferred, /贵妃|chaise/.test(text), "贵妃组合");
  addIf(inferred, /l型|l形|转角/.test(text), "L型组合");
  addIf(inferred, /模块|组合/.test(text), "模块组合");
  addIf(inferred, /脚踏|ottoman/.test(text), "脚踏组合");

  addIf(inferred, /米白|奶油白|白色/.test(text), "米白");
  addIf(inferred, /米灰|浅灰|灰色/.test(text), "米灰");
  addIf(inferred, /奶油|奶油色|奶油风/.test(text), "奶油色");
  addIf(inferred, /深蓝|蓝色/.test(text), "深蓝");
  addIf(inferred, /深灰|灰黑/.test(text), "深灰");
  addIf(inferred, /墨绿|绿色/.test(text), "墨绿");
  addIf(inferred, /橙棕|棕色|焦糖/.test(text), "橙棕");
  addIf(inferred, /可选|多色/.test(text), "多色可选");

  addIf(inferred, /欧洲/.test(text), "欧洲款");
  addIf(inferred, /日本/.test(text), "日本款");
  addIf(inferred, /现代|简约/.test(text), "现代简约");
  addIf(inferred, /休闲/.test(text), "休闲款");
  addIf(inferred, /复古|中古/.test(text), "复古款");
  addIf(inferred, /奶油/.test(text), "奶油风");
  addIf(inferred, /轻奢|金属|高级/.test(text), "轻奢款");

  addIf(inferred, /贵妃|chaise/.test(text), "贵妃沙发");
  addIf(inferred, /模块/.test(text), "模块沙发");
  addIf(inferred, /脚踏|ottoman/.test(text), "脚踏沙发");
  addIf(inferred, /低矮|低靠/.test(text), "低矮沙发");
  addIf(inferred, /高脚|金属脚|木脚/.test(text), "高脚沙发");
  if (!inferred.some((item) => /沙发$/.test(item))) inferred.push("直排沙发");

  addIf(inferred, /宽坐|深躺|宽适/.test(text), "宽坐深躺");
  addIf(inferred, /柔软|云朵|蓬松|舒适/.test(text), "坐感柔软");
  addIf(inferred, /高脚/.test(text), "高脚设计");
  addIf(inferred, /木脚|木质/.test(text), "木脚");
  addIf(inferred, /金属脚|金属/.test(text), "金属脚");
  addIf(inferred, /小户型|公寓/.test(text), "小户型");
  addIf(inferred, /客厅|主款/.test(text), "客厅主款");
  addIf(inferred, /可选/.test(text), "可选色");
  return [...new Set([...explicit, ...inferred].filter(Boolean))];
}

function addIf(list, condition, value) {
  if (condition && !list.includes(value)) list.push(value);
}

function getSuggestedPrice(product) {
  return product.suggestedPrice || product.price || "";
}

function productMatchesSearch(product, searchTerm) {
  const terms = normalizeSearchText(searchTerm).split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const searchText = normalizeSearchText([
    product.id,
    product.name,
    product.category,
    product.summary,
    getSuggestedPrice(product),
    ...(product.tags || []),
    ...Object.values(product.specs || {}),
    ...(product.views || []),
    ...(product.highlights || []),
    ...getProductKeywords(product),
  ].join(" "));
  return terms.every((term) => searchText.includes(term));
}

function getProductRenderSignature(products) {
  return [
    activeCategory,
    activeKeywords.join("|"),
    productSearchTerm,
    activeView,
    products.map((product) => `${product.id}:${product.name}:${product.image}:${product.sortOrder ?? ""}`).join("|"),
  ].join("::");
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().replace(/[\s_-]+/g, "");
}

function getEmptyProductMessage() {
  if (productSearchTerm || activeKeywords.length || activeCategory !== "全部") {
    return `没有找到匹配的产品`;
  }
  return "暂无产品";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
