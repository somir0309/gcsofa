const progressRoot = document.querySelector("#progressRoot");
const PRODUCTION_STORE_KEY = "gcsofa-production-board";
const PRODUCTION_TABLE_STORE_KEY = "gcsofa-production-weekly-tables";
const PRODUCTION_CALENDAR_STORE_KEY = "gcsofa-production-calendar";
const PRODUCTION_STEPS = ["开料", "钉架", "打底", "贴棉", "扪工", "包装", "质检"];
const PRODUCTION_TABLE_STEPS = ["裁剪", "开棉", "车工", "木工", "打底", "贴棉", "扪工", "包装"];
const PRODUCTION_WEEKS = [1, 2, 3, 4];
const PRODUCTION_DEPARTMENTS = [
  { id: "cutting", label: "裁剪", permission: "productionDeptCutting" },
  { id: "foam", label: "开棉", permission: "productionDeptFoam" },
  { id: "sewing", label: "车工", permission: "productionDeptSewing" },
  { id: "wood", label: "木工", permission: "productionDeptWood" },
  { id: "base", label: "打底", permission: "productionDeptBase" },
  { id: "padding", label: "贴棉", permission: "productionDeptPadding" },
  { id: "upholstery", label: "扪工", permission: "productionDeptUpholstery" },
  { id: "packing", label: "包装", permission: "productionDeptPacking" },
];
let activeMonth = "all";
let canEditProduction = false;
let currentProductionUser = null;

function getProductionOrders() {
  const saved = localStorage.getItem(PRODUCTION_STORE_KEY);
  if (!saved) {
    const defaults = createDefaultProductionOrders();
    saveProductionOrders(defaults);
    return defaults;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return createDefaultProductionOrders();
  }
}

function saveProductionOrders(orders) {
  saveCloudStore(PRODUCTION_STORE_KEY, orders);
}

function getProductionTables() {
  const saved = localStorage.getItem(PRODUCTION_TABLE_STORE_KEY);
  if (!saved) {
    const defaults = createDefaultProductionTables(getProductionOrders());
    saveProductionTables(defaults);
    return defaults;
  }

  try {
    const tables = JSON.parse(saved);
    const ensured = ensureProductionTables(tables, getProductionOrders());
    saveProductionTables(ensured);
    return ensured;
  } catch {
    const defaults = createDefaultProductionTables(getProductionOrders());
    saveProductionTables(defaults);
    return defaults;
  }
}

function saveProductionTables(tables) {
  saveCloudStore(PRODUCTION_TABLE_STORE_KEY, tables);
}

function getProductionCalendar() {
  const saved = localStorage.getItem(PRODUCTION_CALENDAR_STORE_KEY);
  if (!saved) return {};

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

function saveProductionCalendar(calendar) {
  saveCloudStore(PRODUCTION_CALENDAR_STORE_KEY, calendar);
}

function ensureProductionTables(tables, orders) {
  const nextTables = normalizeProductionTables(tables);
  getMonths(orders).forEach((month) => {
    if (!nextTables[month]) {
      nextTables[month] = createMonthProductionTables(month, orders.filter((order) => order.month === month));
    }
  });
  return nextTables;
}

function normalizeProductionTables(tables) {
  return Object.entries(tables || {}).reduce((nextTables, [month, weeks]) => {
    nextTables[month] = PRODUCTION_WEEKS.reduce((nextWeeks, week) => {
      nextWeeks[week] = (weeks?.[week] || []).map((row) => ({
        ...row,
        orderNo: normalizeOrderNo(row.orderNo),
        productCode: String(row.productCode || ""),
        dates: { ...row.dates },
      }));
      return nextWeeks;
    }, {});
    return nextTables;
  }, {});
}

function normalizeOrderNo(value) {
  const text = String(value || "");
  const gcOrder = text.match(/GC-\d{4}-[A-Z]+/);
  if (gcOrder && text.length > gcOrder[0].length) return gcOrder[0];
  return text;
}

function createDefaultProductionTables(orders) {
  return getMonths(orders).reduce((tables, month) => {
    tables[month] = createMonthProductionTables(month, orders.filter((order) => order.month === month));
    return tables;
  }, {});
}

function createMonthProductionTables(month, orders) {
  return PRODUCTION_WEEKS.reduce((weeks, week) => {
    weeks[week] = orders
      .filter((order, index) => getWeekForOrder(order, index) === week)
      .map((order, index) => createTableRowFromOrder(order, index));
    return weeks;
  }, {});
}

function createTableRowFromOrder(order, index) {
  const dates = getProductionStepDates(order);
  return {
    id: `table-row-${order.id || Date.now()}-${index}`,
    orderNo: order.orderNo || "",
    productCode: getProductionProductCode(order),
    dates,
  };
}

function getWeekForOrder(order, index) {
  const day = parseDateText(order.deadline)?.getDate();
  return Math.min(4, Math.max(1, Math.ceil((day || index + 1) / 7)));
}

function createDefaultProductionOrders() {
  return [
    {
      id: "order-2026-05-luna",
      month: "2026-05",
      orderNo: "GC-2605-LUNA",
      product: "Luna 云舒转角沙发",
      quantity: 36,
      customer: "欧洲样板间订单",
      deadline: "2026-05-30",
      status: "running",
      currentStep: "扪工",
      note: "面料已到厂，重点确认转角位扪工平整度。",
      detailRemark: "面料已到厂，重点确认转角位扪工平整度。",
      image: "assets/gcsofa-sectional.png",
      updatedAt: "2026-05-28 09:30",
    },
    {
      id: "order-2026-05-nova",
      month: "2026-05",
      orderNo: "GC-2605-NOVA",
      product: "Nova 头等舱功能沙发",
      quantity: 18,
      customer: "日本渠道补单",
      deadline: "2026-06-03",
      status: "scheduled",
      currentStep: "开料",
      note: "功能架等待入库，先安排皮料裁剪和木架开料。",
      detailRemark: "功能架等待入库，先安排皮料裁剪和木架开料。",
      image: "assets/gcsofa-recliner.png",
      updatedAt: "2026-05-27 16:20",
    },
    {
      id: "order-2026-04-mira",
      month: "2026-04",
      orderNo: "GC-2604-MIRA",
      product: "Mira 弧境设计沙发",
      quantity: 24,
      customer: "中东项目样品",
      deadline: "2026-05-12",
      status: "done",
      currentStep: "质检",
      note: "已完成质检包装，可安排出货资料和装柜计划。",
      detailRemark: "已完成质检包装，可安排出货资料和装柜计划。",
      image: "assets/gcsofa-curve.png",
      updatedAt: "2026-05-12 14:10",
    },
  ];
}

function renderProgress(user = getCurrentUser()) {
  if (!user) {
    renderEmptyState("生产进度", "请先登录可查看生产进度的帐号。");
    return;
  }

  if (!userCan("production", user)) {
    renderEmptyState("生产进度", "当前帐号暂无生产进度查看权限。");
    return;
  }

  canEditProduction = userCan("productionEdit", user);
  currentProductionUser = user;
  renderBoard();
}

function renderEmptyState(title, message) {
  progressRoot.innerHTML = `
    <section class="section empty-state">
      <p class="eyebrow">Production</p>
      <h1>${title}</h1>
      <p>${message}</p>
    </section>
  `;
}

function renderBoard() {
  const orders = getProductionOrders();
  const months = getMonths(orders);
  const visibleOrders = filterOrders(orders);
  const calendarMonth = getActiveCalendarMonth();

  progressRoot.innerHTML = `
    <section class="section production-board">
      <div class="production-hero">
        <div>
          <p class="eyebrow">Production Board</p>
          <h1>沙发生产进度看板</h1>
          <p>${canEditProduction ? "按月份查看生产进度表、生产计划日历和生产单详情，跟踪裁剪、开棉、车工、木工、打底、贴棉、扪工、包装完成情况，并可上传生产单图片。" : "按月份查看生产进度表、生产计划日历和生产单详情，跟踪裁剪、开棉、车工、木工、打底、贴棉、扪工、包装完成情况。"}</p>
        </div>
      </div>

      <div class="production-toolbar">
        <label>
          <span>月份</span>
          <select id="productionMonthFilter">
            <option value="all">全部月份</option>
            ${months.map((month) => `<option value="${month}" ${month === activeMonth ? "selected" : ""}>${month}</option>`).join("")}
          </select>
        </label>
      </div>

      ${createProductionCalendarBoard(calendarMonth)}

      ${createProductionTableBoard(visibleOrders)}

      <section class="production-detail-board">
        <div class="panel-head">
          <div>
            <h2>生产单详情</h2>
            <span>${visibleOrders.length} 单</span>
          </div>
          ${canEditProduction ? `<button id="addProductionOrderBtn" class="button button-primary" type="button">新增生产单</button>` : ""}
        </div>
        <div class="production-detail-list">
          ${visibleOrders.length ? visibleOrders.map(createProductionDetailCard).join("") : createEmptyBoardMessage()}
        </div>
      </section>

      ${createProductionImagePreviewDialog()}
      <div id="productionCalendarDialog" class="production-calendar-dialog hidden" role="dialog" aria-modal="true" aria-label="生产计划完成情况"></div>
    </section>
  `;

  bindBoardEvents();
}

function createProductionDetailCard(order) {
  return `
    <article class="production-detail-card" data-id="${order.id}">
      <button class="order-image-zone production-detail-image" type="button" data-preview-image="${escapeHtml(order.image)}" data-preview-title="${escapeHtml(order.product)}">
        <img src="${escapeHtml(order.image)}" alt="${escapeHtml(order.product)}生产单图片" />
      </button>
      <div class="production-detail-note">
        ${
          canEditProduction
            ? `
              <label>
                <span>图片备注</span>
                <textarea data-detail-remark>${escapeHtml(order.detailRemark || order.note || "")}</textarea>
              </label>
              <div class="production-upload-control" data-upload-zone>
                <input type="file" accept="image/*" data-image-input />
                <strong>上传 / 修改生产单图片</strong>
                <span>点击选择图片，或把图片拖拽到这里</span>
              </div>
              <button class="button button-ghost production-detail-delete" type="button" data-delete-detail-order>删除此生产单</button>
            `
            : `
              <h3>图片备注</h3>
              <p>${escapeHtml(order.detailRemark || order.note || "暂无备注")}</p>
            `
        }
      </div>
    </article>
  `;
}

function createProductionImagePreviewDialog() {
  return `
    <div id="productionImagePreview" class="production-image-preview hidden" role="dialog" aria-modal="true" aria-label="生产单图片预览">
      <button class="production-preview-backdrop" type="button" data-close-preview aria-label="关闭图片预览"></button>
      <div class="production-preview-card">
        <div class="production-preview-head">
          <strong id="productionPreviewTitle">生产单图片</strong>
          <button class="icon-button" type="button" data-close-preview aria-label="关闭图片预览">×</button>
        </div>
        <img id="productionPreviewImage" alt="生产单图片预览" />
      </div>
    </div>
  `;
}

function createOrderCard(order) {
  return `
    <article class="production-order-card" data-id="${order.id}">
      <div class="order-image-zone" data-upload-zone>
        <input type="file" accept="image/*" data-image-input />
        <img src="${escapeHtml(order.image)}" alt="${escapeHtml(order.product)}生产单" />
        <div>
          <strong>上传生产单图片</strong>
          <span>点击或拖拽图片到这里</span>
        </div>
      </div>
      <div class="order-content">
        <div class="order-head">
          <div>
            <span class="order-month">${escapeHtml(order.month)}</span>
            <h3>${escapeHtml(order.product)}</h3>
            <p>${escapeHtml(order.orderNo)} · ${escapeHtml(order.customer)}</p>
          </div>
        </div>
        <div class="order-meta">
          <span>数量：${Number(order.quantity) || 0} 套</span>
          <span>交期：${escapeHtml(order.deadline)}</span>
          <span>更新：${escapeHtml(order.updatedAt)}</span>
        </div>
        <div class="production-steps">
          ${PRODUCTION_STEPS.map((step) => createStepItem(step, order)).join("")}
        </div>
        <p class="order-note">${escapeHtml(order.note)}</p>
        <div class="order-actions">
          <label>
            <span>当前流程</span>
            <select data-step-select>
              ${PRODUCTION_STEPS.map((step) => `<option value="${step}" ${step === order.currentStep ? "selected" : ""}>${step}</option>`).join("")}
            </select>
          </label>
          <button class="button button-ghost" type="button" data-delete-order>删除</button>
        </div>
      </div>
    </article>
  `;
}

function createStepItem(step, order) {
  const currentIndex = PRODUCTION_STEPS.indexOf(order.currentStep);
  const stepIndex = PRODUCTION_STEPS.indexOf(step);
  const state = order.status === "done" || stepIndex < currentIndex ? "done" : stepIndex === currentIndex ? "active" : "pending";
  return `<span class="production-step step-${state}">${step}</span>`;
}

function createEmptyBoardMessage() {
  return `
    <div class="empty-board-message">
      <strong>当前筛选条件下暂无生产单详情</strong>
      <span>${canEditProduction ? "可以切换月份或点击新增生产单。" : "可以切换月份查看其他生产单。"}</span>
    </div>
  `;
}

function createProductionCalendarBoard(month) {
  const days = getCalendarDays(month);
  return `
    <section class="production-calendar-board" aria-label="生产计划完成情况日历">
      <div class="panel-head">
        <div>
          <h2>${formatCalendarMonthTitle(month)}生产计划完成情况</h2>
          <span>黄色未点击，绿色已完成，红色未完成</span>
        </div>
      </div>
      <div class="production-calendar-weekdays">
        ${["一", "二", "三", "四", "五", "六", "日"].map((day) => `<span>周${day}</span>`).join("")}
      </div>
      <div class="production-calendar-grid">
        ${days.map((day) => (day ? createProductionCalendarDay(month, day) : `<div class="production-calendar-empty"></div>`)).join("")}
      </div>
    </section>
  `;
}

function createProductionCalendarDay(month, day) {
  const dateKey = `${month}-${String(day).padStart(2, "0")}`;
  const dayData = getProductionCalendar()[dateKey] || {};
  return `
    <button class="production-calendar-day" type="button" data-calendar-date="${dateKey}" aria-label="${dateKey} 生产计划完成情况">
      <strong>${day}</strong>
      <span class="production-calendar-mini-grid">
        ${PRODUCTION_DEPARTMENTS.map((department) => createCalendarDepartmentCell(department, dayData[department.id])).join("")}
      </span>
    </button>
  `;
}

function createCalendarDepartmentCell(department, record = {}) {
  const status = record.status || "pending";
  return `<span class="calendar-dept-cell calendar-dept-${status}" title="${department.label}">${department.label}</span>`;
}

function getCalendarDays(month) {
  const [year, monthNumber] = month.split("-").map(Number);
  const firstDay = new Date(year, monthNumber - 1, 1);
  const daysInMonth = new Date(year, monthNumber, 0).getDate();
  const leading = (firstDay.getDay() + 6) % 7;
  return [...Array(leading).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
}

function getActiveCalendarMonth() {
  return activeMonth === "all" ? getCurrentMonth() : activeMonth;
}

function formatCalendarMonthTitle(month) {
  const [year, monthNumber] = String(month).split("-");
  return `${year}年${Number(monthNumber)}月`;
}

function createProductionTableBoard(orders) {
  const titleMonth = activeMonth === "all" ? getCurrentMonth() : activeMonth;
  const tables = getProductionTables();
  const monthTables = tables[titleMonth] || createMonthProductionTables(titleMonth, orders.filter((order) => order.month === titleMonth));

  return `
    <section class="production-table-board" aria-label="生产进度表格看板">
      ${PRODUCTION_WEEKS.map((week) => createProductionWeekTable(titleMonth, week, monthTables[week] || [])).join("")}
    </section>
  `;
}

function createProductionWeekTable(month, week, rows) {
  return `
    <div class="production-week-sheet" data-month="${escapeHtml(month)}" data-week="${week}">
      <div class="production-sheet-scroll">
        <table class="production-sheet">
          <caption>${formatProductionSheetTitle(month, week)}</caption>
          <thead>
            <tr>
              <th rowspan="2" class="sheet-seq">序号</th>
              <th rowspan="2" class="sheet-order">订单编号</th>
              <th rowspan="2" class="sheet-product">产品编号</th>
              ${PRODUCTION_TABLE_STEPS.map((step) => `<th>${step}</th>`).join("")}
              ${canEditProduction ? `<th rowspan="2" class="sheet-action">操作</th>` : ""}
            </tr>
            <tr>
              ${PRODUCTION_TABLE_STEPS.map(() => "<th>生产日期</th>").join("")}
            </tr>
          </thead>
          <tbody>
            ${
              rows.length
                ? rows.map((row, index) => createProductionTableRow(row, index)).join("")
                : `<tr><td colspan="${PRODUCTION_TABLE_STEPS.length + (canEditProduction ? 4 : 3)}" class="sheet-empty">本周暂无生产单</td></tr>`
            }
          </tbody>
        </table>
      </div>
      ${canEditProduction ? `<button class="button button-light production-table-add" type="button" data-add-table-row>新增表格行</button>` : ""}
    </div>
  `;
}

function createProductionTableRow(row, index) {
  return `
    <tr data-row-id="${escapeHtml(row.id)}">
      <td>${index + 1}</td>
      <td>${createSheetCellInput("orderNo", row.orderNo)}</td>
      <td>${createSheetCellInput("productCode", row.productCode, "sheet-product-input")}</td>
      ${PRODUCTION_TABLE_STEPS.map((step) => `<td>${createSheetDateInput(step, row.dates?.[step] || "")}</td>`).join("")}
      ${canEditProduction ? `<td><button class="button button-ghost sheet-delete-button" type="button" data-delete-table-row>删除</button></td>` : ""}
    </tr>
  `;
}

function createSheetCellInput(field, value, extraClass = "") {
  return `<input class="sheet-input ${extraClass}" data-table-field="${field}" value="${escapeHtml(value)}" ${canEditProduction ? "" : "disabled"} />`;
}

function createSheetDateInput(step, value) {
  return `<input class="sheet-input" data-table-step="${step}" value="${escapeHtml(value)}" ${canEditProduction ? "" : "disabled"} />`;
}

function getProductionProductCode(order) {
  const quantity = Number(order.quantity) || 0;
  return `${order.product || order.orderNo}（${quantity}套）`;
}

function getProductionStepDates(order) {
  const deadline = parseDateText(order.deadline) || parseDateText(order.updatedAt) || new Date();
  const offsets = [-7, -6, -6, -6, -5, -4, -3, -2];
  return PRODUCTION_TABLE_STEPS.reduce((dates, step, index) => {
    const date = new Date(deadline);
    date.setDate(date.getDate() + offsets[index]);
    dates[step] = String(date.getDate());
    return dates;
  }, {});
}

function getStepDateClass(step, order) {
  const currentIndex = getProductionTableStepIndex(order.currentStep);
  const stepIndex = PRODUCTION_TABLE_STEPS.indexOf(step);
  if (order.status === "done" || stepIndex < currentIndex) return "sheet-date-done";
  if (stepIndex === currentIndex) return "sheet-date-active";
  return "";
}

function getProductionTableStepIndex(currentStep) {
  const stepMap = {
    开料: "裁剪",
    钉架: "木工",
    打底: "打底",
    贴棉: "贴棉",
    扪工: "扪工",
    包装: "包装",
    质检: "包装",
  };
  const tableStep = stepMap[currentStep] || currentStep;
  return PRODUCTION_TABLE_STEPS.indexOf(tableStep);
}

function formatProductionSheetTitle(month, week) {
  const [year, monthNumber] = String(month || getCurrentMonth()).split("-");
  return `${year}年${Number(monthNumber) || ""}月份生产进度表第${week}周`;
}

function parseDateText(value) {
  const match = String(value || "").match(/\d{4}-\d{2}-\d{2}/);
  if (!match) return null;
  const date = new Date(`${match[0]}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function bindBoardEvents() {
  document.removeEventListener("keydown", closeProductionImagePreviewOnEscape);
  document.querySelector("#addProductionOrderBtn")?.addEventListener("click", addProductionOrder);
  document.querySelector("#productionMonthFilter").addEventListener("change", (event) => {
    activeMonth = event.target.value;
    renderBoard();
  });

  document.querySelectorAll("[data-calendar-date]").forEach((button) => {
    button.addEventListener("click", () => openProductionCalendarDialog(button.dataset.calendarDate));
  });

  document.querySelectorAll(".production-week-sheet").forEach((sheet) => {
    sheet.querySelector("[data-add-table-row]")?.addEventListener("click", () => addProductionTableRow(sheet.dataset.month, sheet.dataset.week));
    sheet.querySelectorAll("[data-delete-table-row]").forEach((button) => {
      button.addEventListener("click", () => deleteProductionTableRow(sheet.dataset.month, sheet.dataset.week, button.closest("[data-row-id]").dataset.rowId));
    });
    sheet.querySelectorAll("[data-table-field], [data-table-step]").forEach((input) => {
      input.addEventListener("change", () => updateProductionTableCell(sheet.dataset.month, sheet.dataset.week, input));
      input.addEventListener("blur", () => updateProductionTableCell(sheet.dataset.month, sheet.dataset.week, input));
    });
  });

  document.querySelectorAll(".production-detail-card").forEach((card) => {
    const id = card.dataset.id;
    const uploadZone = card.querySelector("[data-upload-zone]");
    const imageInput = card.querySelector("[data-image-input]");
    const remarkInput = card.querySelector("[data-detail-remark]");
    const previewButton = card.querySelector("[data-preview-image]");
    const deleteButton = card.querySelector("[data-delete-detail-order]");

    previewButton.addEventListener("click", () => {
      openProductionImagePreview(previewButton.dataset.previewImage, previewButton.dataset.previewTitle);
    });

    if (!canEditProduction) return;

    uploadZone.addEventListener("click", () => imageInput.click());
    uploadZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      uploadZone.classList.add("drag-over");
    });
    uploadZone.addEventListener("dragleave", () => uploadZone.classList.remove("drag-over"));
    uploadZone.addEventListener("drop", (event) => {
      event.preventDefault();
      uploadZone.classList.remove("drag-over");
      handleOrderImage(id, event.dataTransfer.files?.[0]);
    });
    imageInput.addEventListener("change", (event) => handleOrderImage(id, event.target.files?.[0]));
    remarkInput.addEventListener("blur", (event) => {
      updateOrder(id, { detailRemark: event.target.value.trim(), updatedAt: getNowText() });
    });
    deleteButton?.addEventListener("click", () => deleteProductionOrder(id));
  });

  document.querySelectorAll("[data-close-preview]").forEach((button) => {
    button.addEventListener("click", closeProductionImagePreview);
  });

  document.addEventListener("keydown", closeProductionImagePreviewOnEscape);
}

function openProductionCalendarDialog(dateKey) {
  const dialog = document.querySelector("#productionCalendarDialog");
  if (!dialog) return;
  const dayData = getProductionCalendar()[dateKey] || {};
  const pendingDepartments = PRODUCTION_DEPARTMENTS.filter((department) => !dayData[department.id]?.status).map((department) => department.label);
  const failedDepartments = PRODUCTION_DEPARTMENTS.filter((department) => dayData[department.id]?.status === "failed");

  dialog.innerHTML = `
    <button class="production-calendar-backdrop" type="button" data-close-calendar aria-label="关闭日历详情"></button>
    <div class="production-calendar-card">
      <div class="production-preview-head">
        <strong>${escapeHtml(dateKey)} 生产计划完成情况</strong>
        <button class="icon-button" type="button" data-close-calendar aria-label="关闭日历详情">×</button>
      </div>
      <div class="production-calendar-summary">
        <div>
          <span>未点击部门</span>
          <strong>${pendingDepartments.length ? pendingDepartments.join("、") : "无"}</strong>
        </div>
        <div>
          <span>未完成原因</span>
          <strong>${failedDepartments.length ? failedDepartments.map((department) => `${department.label}：${dayData[department.id].note || "未填写原因"}`).join("；") : "无"}</strong>
        </div>
      </div>
      <div class="production-calendar-dept-list">
        ${PRODUCTION_DEPARTMENTS.map((department) => createCalendarDepartmentDetail(dateKey, department, dayData[department.id] || {})).join("")}
      </div>
    </div>
  `;
  dialog.classList.remove("hidden");
  dialog.querySelectorAll("[data-close-calendar]").forEach((button) => button.addEventListener("click", closeProductionCalendarDialog));
  dialog.querySelectorAll("[data-calendar-done]").forEach((button) => {
    button.addEventListener("click", () => setCalendarDepartmentStatus(dateKey, button.dataset.department, "done"));
  });
  dialog.querySelectorAll("[data-calendar-failed]").forEach((button) => {
    button.addEventListener("click", () => setCalendarDepartmentStatus(dateKey, button.dataset.department, "failed"));
  });
}

function createCalendarDepartmentDetail(dateKey, department, record) {
  const status = record.status || "pending";
  const editable = userCan(department.permission, currentProductionUser);
  return `
    <article class="production-calendar-dept-card calendar-dept-card-${status}">
      <div class="production-calendar-thumb">${department.label.slice(0, 1)}</div>
      <div>
        <h3>${department.label}</h3>
        <p>${getCalendarStatusText(status)}${record.note ? `：${escapeHtml(record.note)}` : ""}</p>
      </div>
      ${
        editable
          ? `
            <div class="production-calendar-actions">
              <button class="button button-light" type="button" data-calendar-done data-department="${department.id}">已完成</button>
              <button class="button button-ghost" type="button" data-calendar-failed data-department="${department.id}">未完成</button>
            </div>
          `
          : `<span class="production-calendar-readonly">仅可查看</span>`
      }
    </article>
  `;
}

function getCalendarStatusText(status) {
  if (status === "done") return "已完成";
  if (status === "failed") return "未完成";
  return "未点击";
}

function setCalendarDepartmentStatus(dateKey, departmentId, status) {
  const department = PRODUCTION_DEPARTMENTS.find((item) => item.id === departmentId);
  if (!department || !userCan(department.permission, currentProductionUser)) return;
  const calendar = getProductionCalendar();
  calendar[dateKey] ||= {};
  if (calendar[dateKey][departmentId]?.status === status) {
    delete calendar[dateKey][departmentId];
    if (!Object.keys(calendar[dateKey]).length) {
      delete calendar[dateKey];
    }
    saveProductionCalendar(calendar);
    renderBoard();
    openProductionCalendarDialog(dateKey);
    return;
  }

  let note = "";
  if (status === "failed") {
    note = prompt(`请输入${department.label}未完成原因`, "")?.trim() || "";
    if (!note) {
      alert("未完成必须填写原因。");
      return;
    }
  }
  calendar[dateKey][departmentId] = {
    status,
    note,
    updatedAt: getNowText(),
  };
  saveProductionCalendar(calendar);
  renderBoard();
  openProductionCalendarDialog(dateKey);
}

function closeProductionCalendarDialog() {
  document.querySelector("#productionCalendarDialog")?.classList.add("hidden");
}

function openProductionImagePreview(image, title) {
  const preview = document.querySelector("#productionImagePreview");
  const previewImage = document.querySelector("#productionPreviewImage");
  const previewTitle = document.querySelector("#productionPreviewTitle");
  if (!preview || !previewImage) return;

  previewImage.src = image || "";
  previewImage.alt = `${title || "生产单"} 图片预览`;
  if (previewTitle) previewTitle.textContent = title || "生产单图片";
  preview.classList.remove("hidden");
}

function closeProductionImagePreview() {
  const preview = document.querySelector("#productionImagePreview");
  if (!preview) return;
  preview.classList.add("hidden");
}

function closeProductionImagePreviewOnEscape(event) {
  if (event.key === "Escape") {
    closeProductionImagePreview();
  }
}

function addProductionTableRow(month, week) {
  if (!canEditProduction) return;
  const tables = getProductionTables();
  tables[month] ||= createMonthProductionTables(month, []);
  tables[month][week] ||= [];
  tables[month][week].push({
    id: `table-row-${Date.now()}`,
    orderNo: "",
    productCode: "",
    dates: PRODUCTION_TABLE_STEPS.reduce((dates, step) => {
      dates[step] = "";
      return dates;
    }, {}),
  });
  saveProductionTables(tables);
  renderBoard();
}

function deleteProductionTableRow(month, week, rowId) {
  if (!canEditProduction) return;
  const tables = getProductionTables();
  tables[month][week] = (tables[month]?.[week] || []).filter((row) => row.id !== rowId);
  saveProductionTables(tables);
  renderBoard();
}

function updateProductionTableCell(month, week, input) {
  if (!canEditProduction) return;
  const rowId = input.closest("[data-row-id]")?.dataset.rowId;
  if (!rowId) return;
  const tables = getProductionTables();
  const row = (tables[month]?.[week] || []).find((item) => item.id === rowId);
  if (!row) return;

  const value = input.value.trim();
  if (input.dataset.tableField) {
    row[input.dataset.tableField] = value;
  }
  if (input.dataset.tableStep) {
    row.dates ||= {};
    row.dates[input.dataset.tableStep] = value;
  }
  saveProductionTables(tables);
}

function addProductionOrder() {
  if (!canEditProduction) return;
  const orderNo = prompt("请输入生产单号", `GC-${Date.now().toString().slice(-6)}`);
  if (!orderNo) return;

  const month = prompt("请输入生产月份，例如 2026-05", getCurrentMonth());
  if (!month) return;

  const orders = getProductionOrders();
  orders.unshift({
    id: `order-${Date.now()}`,
    month,
    orderNo,
    product: `生产单 ${orderNo}`,
    quantity: 1,
    customer: "待补充客户/项目",
    deadline: month ? `${month}-28` : "",
    status: "scheduled",
    currentStep: "开料",
    note: "新建生产单，可上传生产单图片并更新流程。",
    image: "assets/gcsofa-sectional.png",
    updatedAt: getNowText(),
  });
  saveProductionOrders(orders);
  activeMonth = "all";
  renderBoard();
}

function updateOrder(id, changes) {
  if (!canEditProduction) return;
  const orders = getProductionOrders().map((order) => (order.id === id ? { ...order, ...changes } : order));
  saveProductionOrders(orders);
  renderBoard();
}

function deleteProductionOrder(id) {
  if (!canEditProduction) return;
  if (!confirm("确定删除这条生产单吗？")) return;
  saveProductionOrders(getProductionOrders().filter((order) => order.id !== id));
  renderBoard();
}

function handleOrderImage(id, file) {
  if (!canEditProduction) return;
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    updateOrder(id, { image: reader.result, updatedAt: getNowText() });
  });
  reader.readAsDataURL(file);
}

function filterOrders(orders) {
  return orders
    .filter((order) => activeMonth === "all" || order.month === activeMonth)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function getMonths(orders) {
  return [...new Set(orders.map((order) => order.month).filter(Boolean))].sort().reverse();
}

function getCurrentMonth() {
  return new Date().toISOString().slice(0, 7);
}

function getNowText() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);
  return `${date} ${time}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const auth = setupAuth({ onChange: renderProgress });
whenSiteDataReady(() => renderProgress());
