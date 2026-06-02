const auth = setupAuth();
const productGrid = document.querySelector("#productGrid");
const sectionHeading = document.querySelector("#products .section-heading");
const pageSize = 2;
let renderedCount = 0;
let allProductsLoaded = false;
const selectedCategoryId = new URLSearchParams(location.search).get("category");
let selectedCategory = null;

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
  const products = getProducts();
  if (!selectedCategory) return products;
  return products.filter((product) => product.category === selectedCategory.name);
}

function maybeLoadMore() {
  const nearBottom = window.innerHeight + window.scrollY > document.body.offsetHeight - 700;
  if (nearBottom) {
    appendProducts();
  }
}

function renderProductGrid() {
  selectedCategory = selectedCategoryId ? findCategory(selectedCategoryId) : null;
  renderedCount = 0;
  allProductsLoaded = false;
  productGrid.innerHTML = "";
  document.querySelector("#productEndMarker")?.remove();
  appendProducts();
  window.removeEventListener("scroll", maybeLoadMore);
  window.addEventListener("scroll", maybeLoadMore, { passive: true });
  renderProductHeading();
}

whenSiteDataReady(() => {
  auth.updateAccountView();
  renderProductGrid();
});

function renderEndMarker() {
  if (document.querySelector("#productEndMarker")) return;
  productGrid.insertAdjacentHTML(
    "afterend",
    '<p id="productEndMarker" class="product-end-marker">已显示全部产品</p>'
  );
}

function renderProductHeading() {
  if (!selectedCategory || !sectionHeading) return;
  sectionHeading.innerHTML = `
    <p class="eyebrow">Products</p>
    <h2>${selectedCategory.name}</h2>
    <p>当前展示 ${selectedCategory.name} 产品。点击导航里的其他分类可切换产品列表。</p>
  `;

  if (!getVisibleProducts().length) {
    productGrid.innerHTML = '<p class="product-end-marker">该分类下暂无产品</p>';
    allProductsLoaded = true;
    window.removeEventListener("scroll", maybeLoadMore);
  }
}
