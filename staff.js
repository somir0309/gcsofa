const staffParams = new URLSearchParams(location.search);
const staffRoot = document.querySelector("#staffRoot");

function renderStaffProfile() {
  const staffList = getStaffList();
  const staffId = staffParams.get("id") || staffList[0]?.id;
  const person = staffList.find((item) => item.id === staffId);

  if (!person) {
    staffRoot.innerHTML = `
      <div class="info-panel">
        <h1>没有找到业务人员</h1>
        <p>该业务人员信息可能已经调整，请返回联系页面重新选择。</p>
        <a class="button button-primary" href="contact.html">返回联系页面</a>
      </div>
    `;
    return;
  }

  document.title = `${person.name} - 冠城 GCSOFA 业务详情`;
  staffRoot.innerHTML = `
    <section class="staff-profile">
      <img src="${escapeStaffText(person.avatar)}" alt="${escapeStaffText(person.name)}" />
      <div class="staff-profile-copy">
        <p class="eyebrow">${escapeStaffText(person.title)}</p>
        <h1>${escapeStaffText(person.name)}</h1>
        <p>${escapeStaffText(person.summary)}</p>
        <div class="contact-list">
          ${renderContactRows(person)}
        </div>
        <a class="button button-light" href="contact.html">返回业务列表</a>
      </div>
    </section>
  `;
}

function renderContactRows(person) {
  const rows = [
    person.email ? `<div><span>邮箱地址</span><a href="mailto:${escapeStaffText(person.email)}">${escapeStaffText(person.email)}</a></div>` : "",
    person.whatsapp ? `<div><span>WhatsApp</span><a href="https://wa.me/${person.whatsapp.replace(/\D/g, "")}">${escapeStaffText(person.whatsapp)}</a></div>` : "",
    person.phone ? `<div><span>电话</span><a href="tel:${person.phone.replace(/\s/g, "")}">${escapeStaffText(person.phone)}</a></div>` : "",
    person.wechat ? `<div><span>微信</span><strong>${escapeStaffText(person.wechat)}</strong></div>` : "",
  ].filter(Boolean);

  return rows.length ? rows.join("") : '<p class="empty-contact">暂无联系方式</p>';
}

function escapeStaffText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

whenSiteDataReady(renderStaffProfile);
