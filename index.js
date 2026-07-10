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
  { name: "组合", items: ["单人位", "双人位", "三人位", "1/2/3人位可选", "2P+1P组合", "3+2+1组合", "2P+贵妃", "模块+贵妃", "脚踏组合"] },
  { name: "款式", items: ["现代简约", "现代休闲", "奶油风", "轻奢款", "绒感款", "亲肤布艺", "高密织纹", "柔和触感"] },
  { name: "类型", items: ["直排沙发", "转角沙发", "贵妃沙发", "模块沙发", "沙发床", "功能沙发", "休闲单椅"] },
  { name: "结构", items: ["全KD结构", "可KD结构", "不KD结构", "压缩包装", "高脚款", "低背款", "宽坐深坐"] },
  { name: "场景", items: ["小户型", "中大户型", "公寓空间", "家庭客厅", "门店主推", "客厅套系"] },
];

const PRODUCT_DIRECTORY_KEYWORDS = new Set(KEYWORD_GROUPS.flatMap((group) => group.items));
const PRODUCT_CARD_TAG_PRIORITY = [
  "直排沙发",
  "转角沙发",
  "贵妃沙发",
  "模块沙发",
  "沙发床",
  "功能沙发",
  "休闲单椅",
  "单人位",
  "双人位",
  "三人位",
  "1/2/3人位可选",
  "2P+1P组合",
  "3+2+1组合",
  "2P+贵妃",
  "模块+贵妃",
  "脚踏组合",
  "全KD结构",
  "可KD结构",
  "不KD结构",
  "压缩包装",
  "高脚款",
  "低背款",
  "宽坐深坐",
  "小户型",
  "中大户型",
  "家庭客厅",
  "公寓空间",
  "门店主推",
  "客厅套系",
  "现代简约",
  "现代休闲",
  "奶油风",
  "轻奢款",
  "绒感款",
  "亲肤布艺",
  "高密织纹",
  "柔和触感",
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
      <p>按组合、款式、类型、结构和场景建立关键词，点击即可精准筛选。</p>
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
  const keywords = new Set(getProductKeywords(product));
  return PRODUCT_CARD_TAG_PRIORITY.filter((tag) => keywords.has(tag));
}

function getProductKeywords(product) {
  const explicit = [...(product.keywords || []), ...(product.tags || [])];
  const tagText = normalizeSearchText([
    product.category,
    ...(product.tags || []),
  ].join(" "));
  const text = normalizeSearchText([
    product.id,
    product.name,
    product.code,
    product.sku,
    product.category,
    ...(product.tags || []),
    ...Object.keys(product.specs || {}),
    ...Object.values(product.specs || {}),
    ...(product.views || []),
  ].join(" "));
  const inferred = [];

  addIf(inferred, /单人|1p|1人/.test(text), "单人位");
  addIf(inferred, /双人|2p|2人/.test(text), "双人位");
  addIf(inferred, /三人|3p|3人/.test(text), "三人位");
  addIf(inferred, /1\/2\/3|1p.*2p.*3p|1人.*2人.*3人/.test(text), "1/2/3人位可选");
  addIf(inferred, /2p\+1p|2p.*1p|2人.*1人/.test(text), "2P+1P组合");
  addIf(inferred, /3\+2\+1|3p.*2p.*1p|3人.*2人.*1人/.test(text), "3+2+1组合");
  addIf(inferred, /2p\+贵妃|双人.*贵妃|2人.*贵妃/.test(text), "2P+贵妃");
  addIf(inferred, /模块.*贵妃|贵妃.*模块|侧位.*中位.*贵妃|贵妃.*侧位/.test(text), "模块+贵妃");
  addIf(inferred, /脚踏|ottoman/.test(text), "脚踏组合");

  addIf(inferred, /转角|l型|l形|贵妃|chaise/.test(text), "转角沙发");
  addIf(inferred, /贵妃|chaise/.test(text), "贵妃沙发");
  addIf(inferred, /模块|module|侧位|中位|组合沙发/.test(text), "模块沙发");
  addIf(inferred, /沙发床|sofabed|sofabed|sofa bed/.test(text), "沙发床");
  addIf(inferred, /功能|电动|手动|头等舱|recliner|躺椅|可调头枕/.test(text), "功能沙发");
  addIf(inferred, /单椅|休闲椅|loungechair|chair/.test(text), "休闲单椅");
  if (!inferred.some((item) => ["转角沙发", "贵妃沙发", "模块沙发", "沙发床", "功能沙发", "休闲单椅"].includes(item))) {
    inferred.push("直排沙发");
  }

  addIf(inferred, /全kd|fullykd|全拆/.test(text), "全KD结构");
  addIf(inferred, /可kd|kd拆装|kd结构|并位可kd|座可kd|扶手可kd|拆装|可拆/.test(text) && !/全kd/.test(text), "可KD结构");
  addIf(inferred, /不kd|非kd|整装|整体包装/.test(text), "不KD结构");
  addIf(inferred, /压缩|卷包|真空|compressed/.test(text), "压缩包装");
  addIf(inferred, /高脚|金属脚|木脚|脚高/.test(text), "高脚款");
  addIf(inferred, /低背|低矮|低靠|lowback/.test(text), "低背款");
  addIf(inferred, /宽坐|深坐|深躺|躺坐|大坐深|宽大坐深/.test(text), "宽坐深坐");

  addIf(inferred, /小户型|中小户型|小户型适配|线上爆款/.test(tagText), "小户型");
  addIf(inferred, /中大户型|大户型|大平层|横厅|开放式|中高客单/.test(tagText), "中大户型");
  addIf(inferred, /公寓空间|公寓|租房/.test(tagText), "公寓空间");
  addIf(inferred, /家庭客厅|客厅沙发|客厅主款|客厅主沙发/.test(tagText), "家庭客厅");
  addIf(inferred, /门店主推|门店上样|目录款|样板间|展厅推荐/.test(tagText), "门店主推");
  addIf(inferred, /客厅套系|客厅套装|套系|3\+2\+1/.test(tagText), "客厅套系");

  addIf(inferred, /现代简约|极简/.test(tagText), "现代简约");
  addIf(inferred, /现代休闲|休闲款|现代休闲沙发/.test(tagText), "现代休闲");
  addIf(inferred, /奶油风|奶油|云朵/.test(tagText), "奶油风");
  addIf(inferred, /轻奢|轻奢款|金属|高级/.test(tagText), "轻奢款");
  addIf(inferred, /绒感面料|绒感沙发|羊羔绒|boucle/.test(tagText), "绒感款");
  addIf(inferred, /亲肤布艺|亲肤|柔和触感面料|耐看面料/.test(tagText), "亲肤布艺");
  addIf(inferred, /高密织纹/.test(tagText), "高密织纹");
  addIf(inferred, /柔和触感|柔和触感面料/.test(tagText), "柔和触感");

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
