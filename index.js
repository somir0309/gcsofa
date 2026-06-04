const auth = setupAuth();
const productGrid = document.querySelector("#productGrid");
const sectionHeading = document.querySelector("#products .section-heading");
const pageSize = 2;
let renderedCount = 0;
let allProductsLoaded = false;
const selectedCategoryId = new URLSearchParams(location.search).get("category");
let selectedCategory = null;
let productSearchTerm = "";
let carouselIndex = 0;
let carouselTimer = null;

function createProductCard(product, index) {
  return `
    <article class="product-card">
      <a class="product-image-button" href="detail.html?id=${encodeURIComponent(product.id)}" aria-label="查看 ${product.name} 详情">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </a>
      <div class="product-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <div class="tag-row">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <a class="button button-light" href="detail.html?id=${encodeURIComponent(product.id)}">查看详情</a>
      </div>
    </article>
  `;
}

function appendProducts() {
  const products = getVisibleProducts();
  if (!products.length || allProductsLoaded) return;

  const fragment = document.createDocumentFragment();
  const nextProducts = products.slice(renderedCount, renderedCount + pageSize);

  nextProducts.forEach((product, index) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = createProductCard(product, renderedCount + index);
    fragment.appendChild(wrapper.firstElementChild);
  });

  productGrid.appendChild(fragment);
  renderedCount += nextProducts.length;

  if (renderedCount >= products.length) {
    allProductsLoaded = true;
    window.removeEventListener("scroll", maybeLoadMore);
    renderEndMarker();
  }
}

function getVisibleProducts() {
  let products = getProducts();
  if (selectedCategory) {
    products = products.filter((product) => product.category === selectedCategory.name);
  }
  if (!productSearchTerm) return products;
  return products.filter((product) => productMatchesSearch(product, productSearchTerm));
}

function maybeLoadMore() {
  const nearBottom = window.innerHeight + window.scrollY > document.body.offsetHeight - 700;
  if (nearBottom) {
    appendProducts();
  }
}

function renderProductGrid() {
  selectedCategory = selectedCategoryId ? findCategory(selectedCategoryId) : null;
  renderProductHeading();
  renderProductResults();
}

function renderProductResults() {
  renderedCount = 0;
  allProductsLoaded = false;
  productGrid.innerHTML = "";
  document.querySelector("#productEndMarker")?.remove();

  const products = getVisibleProducts();
  if (!products.length) {
    productGrid.innerHTML = `<p class="product-end-marker">${getEmptyProductMessage()}</p>`;
    allProductsLoaded = true;
    window.removeEventListener("scroll", maybeLoadMore);
    return;
  }

  appendProducts();
  window.removeEventListener("scroll", maybeLoadMore);
  window.addEventListener("scroll", maybeLoadMore, { passive: true });
}

initAdCarousel();

whenSiteDataReady(() => {
  auth.updateAccountView();
  renderProductGrid();
});

function initAdCarousel() {
  const slides = [...document.querySelectorAll("[data-slide]")];
  const dots = [...document.querySelectorAll("[data-carousel-dot]")];
  const carousel = document.querySelector("[data-carousel]");
  if (!slides.length || !dots.length || !carousel) return;

  const syncSlideVideo = (slide, isActive) => {
    const video = slide.querySelector("[data-video-src]");
    if (!video) return;
    if (isActive) {
      if (video.getAttribute("src") !== video.dataset.videoSrc) {
        video.setAttribute("src", video.dataset.videoSrc);
      }
      return;
    }
    video.removeAttribute("src");
  };

  const showSlide = (nextIndex) => {
    carouselIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const isActive = index === carouselIndex;
      slide.classList.toggle("is-active", isActive);
      syncSlideVideo(slide, isActive);
    });
    dots.forEach((dot, index) => dot.classList.toggle("is-active", index === carouselIndex));
  };

  const startCarousel = () => {
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => showSlide(carouselIndex + 1), 6500);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startCarousel();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(carouselTimer));
  carousel.addEventListener("mouseleave", startCarousel);
  showSlide(0);
  startCarousel();
}

function renderEndMarker() {
  if (document.querySelector("#productEndMarker")) return;
  productGrid.insertAdjacentHTML(
    "afterend",
    `<p id="productEndMarker" class="product-end-marker">${productSearchTerm ? "已显示全部匹配产品" : "已显示全部产品"}</p>`
  );
}

function renderProductHeading() {
  if (!sectionHeading) return;
  const title = selectedCategory ? selectedCategory.name : "沙发系列";
  const description = selectedCategory
    ? `当前展示 ${selectedCategory.name} 产品。可输入产品编号或关键词进一步搜索。`
    : "点击产品图片打开独立详情页。公开内容无需登录即可查看。";
  sectionHeading.innerHTML = `
    <div>
      <p class="eyebrow">Products</p>
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
    <label class="product-search">
      <span>搜索产品</span>
      <input id="productSearchInput" type="search" placeholder="输入编号，例如 2672 / GC-S2672" autocomplete="off" value="${escapeAttribute(productSearchTerm)}" />
    </label>
  `;

  bindProductSearch();
}

function bindProductSearch() {
  const input = document.querySelector("#productSearchInput");
  if (!input) return;
  input.addEventListener("input", () => {
    productSearchTerm = input.value.trim();
    renderProductResults();
  });
}

function productMatchesSearch(product, searchTerm) {
  const terms = normalizeSearchText(searchTerm).split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const searchText = normalizeSearchText([
    product.id,
    product.name,
    product.category,
    product.summary,
    ...(product.tags || []),
    ...Object.values(product.specs || {}),
    ...(product.views || []),
  ].join(" "));
  return terms.every((term) => searchText.includes(term));
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().replace(/[\s_-]+/g, "");
}

function getEmptyProductMessage() {
  if (productSearchTerm && selectedCategory) {
    return `没有找到“${escapeHtml(productSearchTerm)}”相关的 ${selectedCategory.name} 产品`;
  }
  if (productSearchTerm) {
    return `没有找到“${escapeHtml(productSearchTerm)}”相关的产品`;
  }
  return selectedCategory ? "该分类下暂无产品" : "暂无产品";
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
