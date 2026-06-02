const params = new URLSearchParams(location.search);
const productId = params.get("id") || "luna-sectional";
const detailRoot = document.querySelector("#detailRoot");
const auth = setupAuth({ onChange: renderDetail });
whenSiteDataReady(() => auth.updateAccountView());

function renderDetail() {
  const product = findProduct(productId);
  const user = getCurrentUser();
  const permissions = getPermissionsForUser(user);

  if (!product) {
    detailRoot.innerHTML = `
      <section class="section">
        <h1>没有找到该产品</h1>
        <p class="detail-summary">这个产品可能已被删除，请返回产品列表重新选择。</p>
        <a class="button button-primary" href="index.html#products">返回产品列表</a>
      </section>
    `;
    return;
  }

  document.title = `${product.name} - GCSOFA 产品详情`;
  const canEdit = canEditInternalData(user);
  const canEditPrice = userCan("priceEdit", user);
  const introContent = renderIntroImages(product, permissions);

  detailRoot.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero-copy">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p>${product.summary}</p>
        <div class="tag-row">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <img src="${product.image}" alt="${product.name}" />
    </section>

    ${renderInternal(product, permissions, canEdit, canEditPrice, user)}

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Specs</p>
        <h2>规格与卖点</h2>
      </div>
      <div class="detail-info-grid">
        ${permissions.specs ? `<div class="spec-grid">${renderSpecs(product.specs)}</div>` : renderLocked("产品规格")}
        ${
          permissions.sellingPoints
            ? `
              <div class="info-panel">
                <h3>产品卖点</h3>
                <ul>${product.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
              <div class="info-panel">
                <h3>适合户型</h3>
                <ul>${product.homes.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
              <div class="info-panel">
                <h3>适合人群</h3>
                <ul>${product.audience.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            `
            : renderLocked("卖点")
        }
      </div>
    </section>

    ${
      introContent
        ? `
          <section class="section product-story">
            <div class="section-heading">
              <p class="eyebrow">Gallery</p>
              <h2>产品介绍图</h2>
            </div>
            <div class="intro-grid">
              ${introContent}
            </div>
          </section>
        `
        : ""
    }
  `;

  bindInternalActions(product, permissions, canEdit, canEditPrice);
  bindExchangeRates(permissions);
}

function renderIntroImages(product, permissions) {
  const introImages = getIntroImages(product);
  const viewImages = [
    ["正视图", "front", introImages.front],
    ["45 度角视图", "angle", introImages.angle],
    ["侧视图", "side", introImages.side],
    ["背视图", "back", introImages.back],
  ].filter(([, , image]) => Boolean(image));
  const extraImages = getExtraIntroImages(product);
  const hasAnyIntroImage = viewImages.length || extraImages.length || introImages.dimensions;
  if (!hasAnyIntroImage) return "";

  const imageCards = permissions.images
    ? [
        ...viewImages.map(
          ([label, modifier, image]) => `
            <article class="intro-card intro-photo intro-${modifier}">
              <div class="intro-image-frame" style="${getIntroImageFrameStyle(product, modifier)}">
                <img src="${image}" alt="${product.name} ${label}" />
              </div>
              <div class="intro-card-copy">
                <p class="eyebrow">${label}</p>
                <h3>${product.name}</h3>
              </div>
            </article>
          `
        ),
        ...extraImages.map(
          (item) => {
            const title = item.title || product.name;
            const description = item.description || item.label || "产品介绍图";
            return `
            <article class="intro-card intro-photo">
              <div class="intro-image-frame" style="${getIntroImageFrameStyle(item, "extra")}">
                <img src="${escapeCell(item.image)}" alt="${escapeCell(product.name)} ${escapeCell(description)}" />
              </div>
              <div class="intro-card-copy">
                <p class="eyebrow">${escapeCell(description)}</p>
                <h3>${escapeCell(title)}</h3>
              </div>
            </article>
          `;
          }
        ),
      ].join("")
    : renderLocked("图片");

  const dimensionCard = permissions.dimensions && introImages.dimensions
    ? `
      <article class="intro-card dimension-card">
      <div class="intro-image-frame dimension-layout" style="${getIntroImageFrameStyle(product, "dimensions")}">
        <img src="${introImages.dimensions}" alt="${product.name} 产品尺寸图" />
      </div>
      <div class="intro-card-copy">
        <p class="eyebrow">尺寸图</p>
        <h3>${product.name}</h3>
      </div>
    </article>
  `
    : "";

  return `${imageCards}${dimensionCard}`;
}

function getIntroImages(product) {
  return {
    front: product.introImages?.front || "",
    angle: product.introImages?.angle || "",
    side: product.introImages?.side || "",
    back: product.introImages?.back || "",
    dimensions: product.introImages?.dimensions || "",
  };
}

function getExtraIntroImages(product) {
  return (product.extraIntroImages || []).filter((item) => item.image);
}

function getIntroImageFrameStyle(product, key) {
  const setting = {
    fit: "contain",
    position: "center center",
    zoom: 100,
    ...(product.introImageSettings?.[key] || {}),
    ...(key === "extra" ? { position: product.position } : {}),
  };
  const position = getSafeImagePosition(setting.position);
  return `--intro-position: ${position};`;
}

function getSafeImagePosition(position) {
  const allowed = new Set([
    "center center",
    "left center",
    "right center",
    "center top",
    "center bottom",
    "left top",
    "right top",
    "left bottom",
    "right bottom",
  ]);
  return allowed.has(position) ? position : "center center";
}

function renderSpecs(specs) {
  return Object.entries(specs)
    .map(
      ([label, value]) => `
        <div class="spec-item">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderInternal(product, permissions, canEdit, canEditPrice, user) {
  if (!user) return "";
  if (!permissions.internal) return "";

  const canUseCostPanel = permissions.costUpload || permissions.costDownload;
  const visibleModules = [permissions.price ? "price" : "", canUseCostPanel ? "costAnalysis" : ""].filter(Boolean);

  return `
    <section class="section internal-section">
      <div class="section-heading">
        <p class="eyebrow">Internal</p>
        <h2>内部功能</h2>
      </div>
      <div class="internal-layout ${visibleModules.length === 1 ? "internal-layout-single" : ""}">
        ${permissions.price ? renderPricePanel(product, canEditPrice) : ""}
        ${canUseCostPanel ? renderCostPanel(product, permissions.costUpload, permissions.costDownload) : ""}
        ${permissions.price ? "" : renderLocked("售价")}
        ${canUseCostPanel ? "" : renderLocked("成本分析表")}
      </div>
    </section>
  `;
}

function renderPricePanel(product, canEditPrice) {
  return `
    <div class="info-panel price-panel">
      <div class="panel-head">
        <h3>建议售价</h3>
        ${canEditPrice ? '<button class="button button-light" type="button" data-add-price>新增售价</button>' : ""}
      </div>
      <div class="price-list">
        ${getSuggestedPriceRows(product).map((row) => renderPriceRow(row, canEditPrice)).join("")}
      </div>
      ${renderExchangeRatePanel()}
    </div>
  `;
}

function renderPriceRow(row, canEditPrice) {
  return `
    <div class="price-edit-row" data-price-id="${escapeCell(row.id)}">
      <input data-price-note placeholder="备注，例如：出厂价 / 批发价" value="${escapeCell(row.note)}" ${canEditPrice ? "" : "disabled"} />
      <input data-price-value placeholder="价格" value="${escapeCell(row.price)}" ${canEditPrice ? "" : "disabled"} />
      ${renderPriceRowHistory(row)}
      ${
        canEditPrice
          ? `
            <div class="price-row-actions">
              <button class="button button-primary" type="button" data-save-price>保存</button>
              <button class="button button-ghost" type="button" data-delete-price>删除</button>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function renderExchangeRatePanel() {
  return `
    <div class="exchange-rate-panel" id="exchangeRatePanel">
      <div class="panel-head">
        <h4>实时汇率</h4>
        <span id="exchangeRateTime">正在获取...</span>
      </div>
      <div class="exchange-rate-grid">
        <div><span>美元兑人民币</span><strong id="rateUSD">--</strong></div>
        <div><span>日元兑人民币</span><strong id="rateJPY">--</strong></div>
        <div><span>欧元兑人民币</span><strong id="rateEUR">--</strong></div>
      </div>
    </div>
  `;
}

function renderPriceRowHistory(row) {
  const history = Array.isArray(row.history) ? row.history.slice(0, 6) : [];
  if (!history.length) return "";

  return `
    <div class="price-update-meta">
      <strong>售价修改记录</strong>
      <ul>
        ${history.map((item) => `<li>${escapeCell(item.time)} · ${escapeCell(item.note || row.note)} · ${escapeCell(item.price)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function getSuggestedPriceRows(product) {
  if (Array.isArray(product.suggestedPrices) && product.suggestedPrices.length) {
    return product.suggestedPrices.map((row, index) => ({
      id: row.id || `price-${index}`,
      note: row.note || "建议售价",
      price: row.price || "",
      history: Array.isArray(row.history) ? row.history : [],
    }));
  }

  return [
    {
      id: "price-main",
      note: "建议售价",
      price: product.suggestedPrice || "",
      history: Array.isArray(product.priceHistory)
        ? product.priceHistory
        : product.priceUpdatedAt
          ? [{ time: product.priceUpdatedAt, note: "建议售价", price: product.suggestedPrice || "" }]
          : [],
    },
  ];
}

function renderCostPanel(product, canUploadCost, canDownloadCost) {
  const sheet = getCostSheet(product);
  return `
    <div class="info-panel cost-panel">
      <div class="panel-head">
        <h3>成本分析表</h3>
        ${canUploadCost ? '<button id="uploadCostSheetBtn" class="button button-light" type="button">上传 Excel</button>' : ""}
      </div>
      ${
        canUploadCost
          ? `
            <input id="costSheetInput" class="hidden" type="file" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv" />
            <div id="costSheetDropZone" class="excel-upload-zone">
              <strong>上传成本 Excel 表格</strong>
              <span>点击“上传 Excel”选择文件，或把 .xlsx / .xls / .csv 拖拽到这里。上传后可下载原文件。</span>
            </div>
            <p id="costSheetMessage" class="sheet-message" role="status"></p>
          `
          : ""
      }
      ${renderCostFileDownload(sheet, canDownloadCost, canUploadCost)}
    </div>
  `;
}

function getCostSheet(product) {
  if (product.costSheet?.dataUrl || product.costSheet?.path) {
    return product.costSheet;
  }

  return {
    name: "",
    uploadedAt: "",
    dataUrl: "",
  };
}

function renderCostFileDownload(sheet, canDownloadCost, canUploadCost) {
  if (!sheet.dataUrl) {
    return `<div class="locked-box permission-locked"><h3>暂无成本表文件</h3><p>${canUploadCost ? "请上传 Excel 表格后下载查看。" : "当前还没有可下载的成本分析表。"}</p></div>`;
  }

  return `
    <div class="cost-file-card">
      <div>
        <strong>${escapeCell(sheet.name)}</strong>
        <span>${sheet.uploadedAt || ""}${sheet.size ? ` · ${formatFileSize(sheet.size)}` : ""}</span>
      </div>
      ${canDownloadCost ? '<button id="downloadCostSheetBtn" class="button button-light" type="button">下载 Excel</button>' : '<span class="permission-muted">暂无下载权限</span>'}
    </div>
  `;
}

function escapeCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLocked(label) {
  return `
    <div class="locked-box permission-locked">
      <h3>${label}</h3>
      <p>当前帐号暂无权限查看此模块。</p>
    </div>
  `;
}

function getModuleLabel(moduleId) {
  return PERMISSION_MODULES.find((module) => module.id === moduleId)?.label || moduleId;
}

function bindInternalActions(product, permissions, canEdit, canEditPrice) {
  if (permissions.costDownload) {
    document.querySelector("#downloadCostSheetBtn")?.addEventListener("click", () => downloadCostSheet(product.costSheet));
  }

  if (permissions.price && canEditPrice) {
    document.querySelector("[data-add-price]")?.addEventListener("click", () => {
      const rows = getSuggestedPriceRows(product);
      rows.push({
        id: `price-${Date.now()}`,
        note: "",
        price: "",
        history: [],
      });
      saveSuggestedPriceRows(product, rows);
    });

    document.querySelectorAll("[data-save-price]").forEach((button) => {
      button.addEventListener("click", () => {
        const rowEl = button.closest("[data-price-id]");
        const rows = readSuggestedPriceRows(product, rowEl?.dataset.priceId);
        saveSuggestedPriceRows(product, rows);
      });
    });

    document.querySelectorAll("[data-delete-price]").forEach((button) => {
      button.addEventListener("click", () => {
        const rowEl = button.closest("[data-price-id]");
        const rows = getSuggestedPriceRows(product).filter((row) => row.id !== rowEl?.dataset.priceId);
        saveSuggestedPriceRows(product, rows);
      });
    });
  }

  if (permissions.costUpload) {
    bindCostSheetUpload(product);
  }
}

function readSuggestedPriceRows(product, changedId = "") {
  return [...document.querySelectorAll("[data-price-id]")].map((rowEl) => {
    const id = rowEl.dataset.priceId;
    const previous = getSuggestedPriceRows(product).find((row) => row.id === id) || {};
    const note = rowEl.querySelector("[data-price-note]")?.value.trim() || "";
    const price = rowEl.querySelector("[data-price-value]")?.value.trim() || "";
    const history = Array.isArray(previous.history) ? [...previous.history] : [];
    if (id === changedId) {
      history.unshift({
        time: formatDateTime(new Date()),
        note,
        price,
      });
    }
    return {
      id,
      note,
      price,
      history: history.slice(0, 10),
    };
  });
}

function saveSuggestedPriceRows(product, rows) {
  product.suggestedPrices = rows;
  product.suggestedPrice = rows.find((row) => row.price)?.price || "";
  product.priceHistory = rows[0]?.history || [];
  upsertProduct(product);
  renderDetail();
}

function bindExchangeRates(permissions) {
  if (!permissions.price || !document.querySelector("#exchangeRatePanel")) return;

  fetch("https://open.er-api.com/v6/latest/CNY")
    .then((response) => response.json())
    .then((data) => {
      const rates = data.rates || {};
      updateRate("USD", rates.USD, 4);
      updateRate("JPY", rates.JPY, 4);
      updateRate("EUR", rates.EUR, 4);
      document.querySelector("#exchangeRateTime").textContent = `更新时间：${formatExchangeTime(data.time_last_update_unix)}`;
    })
    .catch(() => {
      document.querySelector("#exchangeRateTime").textContent = "汇率获取失败";
    });
}

function updateRate(currency, value, digits) {
  const target = document.querySelector(`#rate${currency}`);
  if (!target || typeof value !== "number") return;
  target.textContent = `1 ${currency} = ${(1 / value).toFixed(digits)} CNY`;
}

function formatExchangeTime(unixSeconds) {
  if (!unixSeconds) return formatDateTime(new Date());
  return formatDateTime(new Date(unixSeconds * 1000));
}

function bindCostSheetUpload(product) {
  const input = document.querySelector("#costSheetInput");
  const button = document.querySelector("#uploadCostSheetBtn");
  const dropZone = document.querySelector("#costSheetDropZone");
  const message = document.querySelector("#costSheetMessage");
  if (!input || !button || !dropZone) return;

  button.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) readCostSheetFile(file, product, message);
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
    if (file) readCostSheetFile(file, product, message);
  });
}

function readCostSheetFile(file, product, message) {
  if (!isExcelFile(file)) {
    setCostSheetMessage(message, "请上传 .xlsx、.xls 或 .csv 文件。", true);
    return;
  }

  setCostSheetMessage(message, `正在保存：${file.name} ...`);
  uploadCostSheetToServer(file, product.id)
    .then((uploadedSheet) => {
      product.costSheet = uploadedSheet;
      upsertProduct(product);
      renderDetail();
    })
    .catch(() => {
      setCostSheetMessage(message, "成本分析表保存失败：请确认上传服务可用，并重新上传。", true);
    });
}

function setCostSheetMessage(message, text, isError = false) {
  if (!message) return;
  message.textContent = text;
  message.classList.toggle("is-error", isError);
}

function downloadCostSheet(sheet) {
  const href = sheet?.dataUrl || sheet?.path;
  if (!href) return;
  const link = document.createElement("a");
  link.href = href;
  link.download = sheet.name || "cost-sheet.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function uploadCostSheetToServer(file, productId = "product") {
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
    uploadedAt: formatDateTime(new Date()),
    dataUrl: normalizeUploadedPath(data.path),
    path: normalizeUploadedPath(data.path),
    size: data.size || file.size,
    type: file.type || getExcelMimeType(file.name),
  };
}

function getLocalServerOrigin() {
  return location.protocol === "file:" ? "http://localhost:8080" : location.origin;
}

function normalizeUploadedPath(path) {
  return location.protocol === "file:" ? String(path || "").replace(/^\/+/, "") : path;
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

function formatDateTime(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

renderDetail();
