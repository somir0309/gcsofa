const grid = document.querySelector("#englishProductGrid");
const searchInput = document.querySelector("#englishProductSearch");
const sortSelect = document.querySelector("#englishProductSort");
const keywordGroups = document.querySelector("#englishKeywordGroups");
const activeKeywordsNode = document.querySelector("#englishActiveKeywords");
const viewToggle = document.querySelector(".directory-view-toggle");

let activeKeywords = [];
let searchTerm = "";
let activeView = "list";
let visibleProducts = [];
let renderedCount = 0;
let loadMoreObserver = null;

const LIST_BATCH_SIZE = 8;

const FILTER_GROUPS = [
  {
    name: "Layout",
    items: [
      { label: "Single seat", value: "single" },
      { label: "Two seater", value: "two" },
      { label: "Three seater", value: "three" },
      { label: "Chaise", value: "chaise" },
      { label: "Modular", value: "modular" },
      { label: "Sofa bed", value: "sofa bed" },
    ],
  },
  {
    name: "Color",
    items: [
      { label: "Cream", value: "cream" },
      { label: "White", value: "white" },
      { label: "Grey", value: "grey" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" },
      { label: "Brown", value: "brown" },
    ],
  },
  {
    name: "Use Case",
    items: [
      { label: "Living room", value: "living room" },
      { label: "Apartment", value: "apartment" },
      { label: "Showroom", value: "showroom" },
      { label: "Wholesale", value: "wholesale" },
      { label: "Retail display", value: "retail" },
    ],
  },
];

whenSiteDataReady(() => {
  renderFilters();
  renderProducts();
});

searchInput?.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderProducts();
});

sortSelect?.addEventListener("change", renderProducts);

viewToggle?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  activeView = button.dataset.view;
  viewToggle.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  renderProducts();
});

keywordGroups?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-keyword]");
  if (!button) return;
  const value = button.dataset.keyword;
  activeKeywords = activeKeywords.includes(value)
    ? activeKeywords.filter((item) => item !== value)
    : [...activeKeywords, value];
  renderFilters();
  renderProducts();
});

activeKeywordsNode?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-keyword]");
  if (!button) return;
  activeKeywords = activeKeywords.filter((item) => item !== button.dataset.keyword);
  renderFilters();
  renderProducts();
});

function renderFilters() {
  keywordGroups.innerHTML = FILTER_GROUPS.map((group) => `
    <section>
      <h3>${escapeHtml(group.name)}</h3>
      <div>
        ${group.items.map((item) => `
          <button class="${activeKeywords.includes(item.value) ? "active" : ""}" type="button" data-keyword="${escapeAttr(item.value)}">
            ${escapeHtml(item.label)}
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");

  activeKeywordsNode.innerHTML = activeKeywords.map((keyword) => {
    const label = FILTER_GROUPS.flatMap((group) => group.items).find((item) => item.value === keyword)?.label || keyword;
    return `<button type="button" data-keyword="${escapeAttr(keyword)}">${escapeHtml(label)} x</button>`;
  }).join("");
}

function renderProducts() {
  visibleProducts = getProducts()
    .filter(hasDisplayableImage)
    .filter(matchesEnglishSearch)
    .filter(matchesActiveKeywords)
    .sort((a, b) => {
      const direction = sortSelect?.value === "code-asc" ? 1 : -1;
      return direction * (getModelNumber(a) - getModelNumber(b));
    });

  grid.classList.toggle("is-list", activeView === "list");
  renderedCount = activeView === "list" ? Math.min(LIST_BATCH_SIZE, visibleProducts.length) : visibleProducts.length;
  document.querySelector("#englishProductEndMarker")?.remove();
  loadMoreObserver?.disconnect();
  window.removeEventListener("scroll", maybeLoadMoreProducts);
  renderProductCards();
  renderProductEndMarker();
}

function renderProductCards() {
  const products = visibleProducts.slice(0, renderedCount);
  grid.innerHTML = products.length
    ? products.map(renderProductCard).join("")
    : `<p class="product-end-marker">No matching products. Try another model number, style, or color.</p>`;
}

function renderProductEndMarker() {
  document.querySelector("#englishProductEndMarker")?.remove();
  if (!visibleProducts.length) return;
  const hasMore = activeView === "list" && renderedCount < visibleProducts.length;
  const text = hasMore
    ? `Showing ${renderedCount} / ${visibleProducts.length} models. Scroll down to load more.`
    : `Showing all ${visibleProducts.length} models.`;
  grid.insertAdjacentHTML("afterend", `<p id="englishProductEndMarker" class="product-end-marker">${escapeHtml(text)}</p>`);
  if (hasMore) {
    window.addEventListener("scroll", maybeLoadMoreProducts, { passive: true });
    const marker = document.querySelector("#englishProductEndMarker");
    if ("IntersectionObserver" in window && marker) {
      loadMoreObserver?.disconnect();
      loadMoreObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) loadMoreProducts();
      }, { rootMargin: "900px 0px" });
      loadMoreObserver.observe(marker);
    }
  }
}

function maybeLoadMoreProducts() {
  if (activeView !== "list" || renderedCount >= visibleProducts.length) return;
  const nearBottom = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 1100;
  if (!nearBottom) return;
  loadMoreProducts();
}

function loadMoreProducts() {
  if (activeView !== "list" || renderedCount >= visibleProducts.length) return;
  renderedCount = Math.min(renderedCount + LIST_BATCH_SIZE, visibleProducts.length);
  renderProductCards();
  renderProductEndMarker();
}

function renderProductCard(product, index) {
  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key] || {};
  const image = prefixAsset(activeView === "list"
    ? entry.scene || entry.fallback || entry.front || product.image
    : entry.thumb || entry.thumbScene || entry.thumbFallback || entry.scene || product.image);
  const fallback = prefixAsset(entry.thumbFallback || entry.thumbScene || entry.scene || entry.front || "");
  const error = fallback ? ` onerror="this.onerror=null;this.src='${escapeAttr(fallback)}'"` : "";
  const model = product.name || product.code || `GC-S${key}`;
  const tags = (product.tags?.length ? product.tags : inferEnglishTags(product)).slice(0, 4);
  const summary = product.summary || buildEnglishSummary(product);
  const loading = activeView === "list" && index < 2 ? "eager" : "lazy";

  return `
    <article class="product-card directory-product-card">
      <a class="directory-product-link" href="detail.html?id=${encodeURIComponent(product.id)}" aria-label="View ${escapeAttr(model)}">
        <span class="product-image-button">
          <img src="${escapeAttr(image)}" alt="${escapeAttr(model)}" loading="${loading}" decoding="async" width="720" height="540"${error} />
        </span>
        <div class="product-body">
          <span class="directory-card-category">${escapeHtml(getEnglishCategory(product))}</span>
          <div class="directory-card-head"><h3>${escapeHtml(model)}</h3></div>
          <span class="directory-card-summary">${escapeHtml(summary)}</span>
          <span class="directory-card-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span>
        </div>
      </a>
    </article>
  `;
}

function hasDisplayableImage(product) {
  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key];
  return Boolean(entry?.thumb || entry?.scene || entry?.front || product.image);
}

function matchesEnglishSearch(product) {
  if (!searchTerm) return true;
  const text = [
    product.id,
    product.name,
    product.code,
    getEnglishCategory(product),
    buildEnglishSummary(product),
    ...inferEnglishTags(product),
    ...(product.tags || []),
    product.summary,
  ].join(" ").toLowerCase();
  return searchTerm.split(/\s+/).filter(Boolean).every((term) => text.includes(term));
}

function matchesActiveKeywords(product) {
  if (!activeKeywords.length) return true;
  const text = [
    getEnglishCategory(product),
    buildEnglishSummary(product),
    ...inferEnglishTags(product),
    product.name,
    product.summary,
    ...(product.tags || []),
    ...(product.homes || []),
  ].join(" ").toLowerCase();
  return activeKeywords.every((keyword) => text.includes(keyword));
}

function buildEnglishSummary(product) {
  if (product.summary && !/[\u4e00-\u9fff]/.test(product.summary)) return product.summary;
  const tags = inferEnglishTags(product);
  const category = getEnglishCategory(product).toLowerCase();
  const lead = tags.length ? tags.slice(0, 2).join(" and ").toLowerCase() : category;
  return `A ${lead} sofa model for living room presentation, showroom display, and wholesale catalog review. Designed for buyers who need clear visuals, easy styling, and practical product positioning.`;
}

function inferEnglishTags(product) {
  const text = [product.name, product.category, product.summary, ...(product.tags || []), ...(product.homes || [])].join(" ").toLowerCase();
  const tags = [];
  addIf(tags, /单人|1p|single/.test(text), "Single seat");
  addIf(tags, /双人|2p|two/.test(text), "Two seater");
  addIf(tags, /三人|3p|three/.test(text), "Three seater");
  addIf(tags, /贵妃|chaise/.test(text), "Chaise");
  addIf(tags, /模块|组合|modular|sectional/.test(text), "Modular");
  addIf(tags, /沙发床|sofa bed|sleep/.test(text), "Sofa bed");
  addIf(tags, /奶油|米白|白色|cream|white/.test(text), "Cream tone");
  addIf(tags, /灰|grey|gray/.test(text), "Grey");
  addIf(tags, /蓝|blue/.test(text), "Blue");
  addIf(tags, /棕|咖|brown/.test(text), "Brown");
  addIf(tags, /客厅|living/.test(text), "Living room");
  addIf(tags, /公寓|小户型|apartment/.test(text), "Apartment friendly");
  if (!tags.length) tags.push("Living room", "Display ready", "Wholesale catalog");
  return [...new Set(tags)];
}

function getEnglishCategory(product) {
  if (product.category && !/[\u4e00-\u9fff]/.test(product.category)) return product.category;
  const text = [product.category, product.summary, ...(product.tags || [])].join(" ");
  if (/沙发床|sofa bed/i.test(text)) return "Sofa Bed";
  if (/功能|电动|摇椅|躺椅/i.test(text)) return "Functional Sofa";
  if (/单人|单椅|lounge/i.test(text)) return "Lounge Chair";
  if (/模块|组合|转角|贵妃|sectional|chaise/i.test(text)) return "Sectional Sofa";
  return "Living Room Sofa";
}

function getModelNumber(product) {
  const match = [product.name, product.id, product.code].join(" ").match(/\d+/g);
  return match ? Number(match.at(-1)) : 0;
}

function prefixAsset(source = "") {
  const value = String(source || "").trim();
  if (!value || /^(https?:|data:|blob:|\/)/i.test(value)) return value;
  return value.startsWith("../") ? value : `../${value}`;
}

function addIf(list, condition, value) {
  if (condition && !list.includes(value)) list.push(value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
