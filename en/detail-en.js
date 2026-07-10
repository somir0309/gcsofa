const detailRoot = document.querySelector("#englishDetailRoot");
const params = new URLSearchParams(location.search);
const productId = params.get("id") || "";

whenSiteDataReady(renderEnglishDetail);

function renderEnglishDetail() {
  const product = findEnglishProduct(productId);
  if (!product) {
    detailRoot.innerHTML = `
      <section class="section">
        <h1>Product not found</h1>
        <p class="detail-summary">This model may have been removed from the catalog.</p>
        <a class="button button-primary" href="products.html">Back to product catalog</a>
      </section>
    `;
    return;
  }

  const key = getProductImageKey(product);
  const entry = window.GCSOFA_PRODUCT_IMAGE_MAP?.[key] || {};
  const model = product.name || product.code || `GC-S${key}`;
  document.title = `${model} - GCSOFA Product Detail`;
  document.querySelector("#cnDetailLink").href = `../detail.html?id=${encodeURIComponent(product.id)}`;

  const hero = prefixAsset(entry.scene || entry.fallback || entry.front || product.image);
  const tags = product.tags?.length ? product.tags : inferEnglishTags(product);
  const gallery = getGalleryImages(product, entry);

  detailRoot.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero-copy">
        <p class="eyebrow">${escapeHtml(getEnglishCategory(product))}</p>
        <h1>${escapeHtml(model)}</h1>
        <p>${escapeHtml(product.summary || buildEnglishSummary(product))}</p>
        <div class="tag-row">${tags.slice(0, 5).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      </div>
      <img src="${escapeAttr(hero)}" alt="${escapeAttr(model)}" />
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Product Positioning</p>
        <h2>Built for B2B selection and showroom presentation</h2>
      </div>
      <div class="detail-info-grid">
        <div class="info-panel">
          <h3>Buyer Value</h3>
          <ul>${(product.highlights?.length ? product.highlights : [
            "Clear product visuals for catalog review and sales presentation.",
            "Suitable for wholesale buyers, retail showrooms, and project-based sourcing.",
            "Easy to position as a living room model with practical styling potential.",
          ]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div class="info-panel">
          <h3>Recommended Use</h3>
          <ul>${(product.homes?.length ? product.homes : [
            "Living room display",
            "Retail showroom presentation",
            "Online product catalog and customer proposal",
          ]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div class="info-panel">
          <h3>Target Buyers</h3>
          <ul>${(product.audience?.length ? product.audience : [
            "Furniture retailers",
            "Wholesale customers",
            "Showroom operators",
          ]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section class="section product-story">
      <div class="section-heading">
        <p class="eyebrow">Gallery</p>
        <h2>Product Images</h2>
      </div>
      <div class="intro-grid">
        ${gallery.map((image, index) => `
          <article class="intro-card intro-photo">
            <div class="intro-image-frame">
              <img src="${escapeAttr(prefixAsset(image))}" alt="${escapeAttr(`${model} image ${index + 1}`)}" />
            </div>
            <div class="intro-card-copy">
              <p class="eyebrow">${index < 4 ? `View ${index + 1}` : `Scene ${index - 3}`}</p>
              <h3>${escapeHtml(model)}</h3>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function findEnglishProduct(id) {
  const exact = findProduct(id);
  if (exact) return exact;
  const key = String(id || "").match(/(?:GC[-_\s]*S)?(\d{4})/i)?.[1];
  return key ? getProducts().find((product) => getProductImageKey(product) === key) : null;
}

function getGalleryImages(product, entry) {
  const images = entry.images?.length ? entry.images : [entry.front, entry.angle, entry.side, entry.back, entry.scene].filter(Boolean);
  return [...new Set(images.filter(Boolean))];
}

function buildEnglishSummary(product) {
  if (product.summary && !/[\u4e00-\u9fff]/.test(product.summary)) return product.summary;
  const tags = inferEnglishTags(product);
  const lead = tags.length ? tags.slice(0, 2).join(" and ").toLowerCase() : "living room";
  return `A ${lead} sofa model prepared for living room display, showroom presentation, and wholesale catalog review. The image set helps buyers evaluate the overall shape, viewing angles, and scene styling before deeper quotation discussion.`;
}

function inferEnglishTags(product) {
  const text = [product.name, product.category, product.summary, ...(product.tags || []), ...(product.homes || [])].join(" ").toLowerCase();
  const tags = [];
  addIf(tags, /单人|1p|single/.test(text), "Single seat");
  addIf(tags, /双人|2p|two/.test(text), "Two seater");
  addIf(tags, /三人|3p|three/.test(text), "Three seater");
  addIf(tags, /贵妃|chaise/.test(text), "Chaise");
  addIf(tags, /模块|组合|sectional|modular/.test(text), "Modular");
  addIf(tags, /沙发床|sofa bed/.test(text), "Sofa bed");
  addIf(tags, /奶油|米白|白色|cream|white/.test(text), "Light tone");
  addIf(tags, /客厅|living/.test(text), "Living room");
  if (!tags.length) tags.push("Display ready", "Wholesale catalog", "Living room");
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
