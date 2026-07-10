const staffGrid = document.querySelector("#englishStaffGrid");

const STAFF_EN = {
  "song-haoyu": {
    name: "Song Haoyu",
    title: "Key Account Maintenance",
    summary: "Responsible for daily key account maintenance and relationship development.",
  },
  "song-jun": {
    name: "Song Jun",
    title: "Business Team Lead",
    summary: "Leads the business team and coordinates internal and external resources.",
  },
  "he-yishan": {
    name: "He Yishan",
    title: "Product Data and Order Follow-up",
    summary: "Responsible for product information and order follow-up. WeChat: Heyishan-3-",
  },
  "gao-jun": {
    name: "Gao Jun",
    title: "Product Data and Order Follow-up",
    summary: "Responsible for product information and order follow-up. WeChat: To-xiaomin",
  },
  "yu-lu": {
    name: "Yu Lu",
    title: "Product Data and Order Follow-up",
    summary: "Responsible for product information and order follow-up. WeChat: Buddha_zuo",
  },
  "zhang-xiang": {
    name: "Zhang Xiang",
    title: "Customer Communication and Product Promotion",
    summary: "Responsible for customer communication and product promotion. WeChat: Waxsn1998",
  },
};

whenSiteDataReady(renderEnglishStaff);

function renderEnglishStaff() {
  const staff = getStaffList();
  staffGrid.innerHTML = staff.map((person) => {
    const english = STAFF_EN[person.id] || {
      name: person.name || "GCSOFA Team",
      title: "Business Contact",
      summary: "Contact this team member for product and order communication.",
    };
    return `
      <article class="staff-card">
        <img src="${escapeAttr(prefixAsset(person.avatar))}" alt="${escapeAttr(english.name)}" loading="lazy" />
        <strong>${escapeHtml(english.name)}</strong>
        <span>${escapeHtml(english.title)}</span>
        <p>${escapeHtml(english.summary)}</p>
      </article>
    `;
  }).join("");
}

function prefixAsset(source = "") {
  const value = String(source || "").trim();
  if (!value || /^(https?:|data:|blob:|\/)/i.test(value)) return value;
  return value.startsWith("../") ? value : `../${value}`;
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
