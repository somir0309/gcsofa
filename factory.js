const factoryPage = document.querySelector("#factoryPage");

const FACTORY_PAGE_DEFAULTS = {
  heroEyebrow: "Factory Profile",
  heroTitle: "惠州市欣冠城智能科技有限公司",
  heroDescription:
    "欣冠城始于2008年，专注OEM/ODM沙发套装、沙发床、L型沙发、躺椅等软体家具的设计、研发与生产。公司面向全球客户提供稳定品质、灵活定制和持续交付能力，产品在Wayfair、亚马逊等线上平台及线下实体渠道拥有良好口碑。",
  heroImage: "assets/factory-hero-2026.webp",
  stats: [
    { value: "2008", label: "开始深耕软体家具制造" },
    { value: "18+年", label: "OEM/ODM设计与生产经验" },
    { value: "4万㎡", label: "厂房面积" },
    { value: "120-160柜", label: "月生产能力" },
  ],
  profileTitle: "专业出口沙发制造工厂",
  profileDescription:
    "公司拥有200+工作人员，其中办公室人员约45人，围绕产品设计、打样、生产、品质检验和售后服务建立完整协作流程。凭借具有竞争力的价格、更具吸引力的外观和全面的品质把控，欣冠城与全球客户保持长期合作。",
  advantagesEyebrow: "Advantages",
  advantagesTitle: "我们的优势",
  advantages: [
    {
      title: "专业OEM/ODM代工",
      description: "专注沙发类产品研发与生产，支持客户款式开发、结构优化和批量订单交付。",
    },
    {
      title: "稳定产能交付",
      description: "4万平方米厂房，月产能约120-160柜，适合海外批量订单和持续补货需求。",
    },
    {
      title: "品质与服务并重",
      description: "全面品质检验贯穿生产流程，并提供贴心售后服务，保障产品品质稳定。",
    },
    {
      title: "全球客户合作",
      description: "产品面向海外线上线下平台销售，长期服务多地区家具品牌与渠道客户。",
    },
  ],
  historyEyebrow: "Production",
  historyTitle: "生产与配套能力",
  historyDescription: "从五金配套、材料准备到软包组装与成品质检，工厂以分区化流程支持多款式沙发生产。",
  historyItems: [
    {
      label: "生产车间",
      title: "分区化生产流程",
      description: "木架、五金、裁剪、缝纫、软包、组装和包装按流程推进，提升订单执行效率。",
    },
    {
      label: "品质管控",
      title: "全面品质检验",
      description: "围绕外观、结构、尺寸、包装和出货环节进行检查，确保产品品质稳定。",
    },
    {
      label: "海外交付",
      title: "适配线上线下渠道",
      description: "支持海外平台、品牌客户、批发商和实体门店的多规格产品需求。",
    },
  ],
  galleryEyebrow: "Workshop",
  galleryTitle: "工厂场地与车间",
  galleryDescription: "保留网站现有图片，展示厂区、生产车间与裁剪缝纫区域。",
  galleryItems: [
    {
      image: "assets/factory-hero-2026.webp",
      title: "工厂场地",
      description: "规范化厂区与装卸区域，便于样品展示、订单出货和批量交付。",
    },
    {
      image: "assets/factory-production-line.webp",
      title: "生产车间",
      description: "沙发框架、软包、坐垫和成品组装按流程推进，强调稳定品质。",
    },
    {
      image: "assets/factory-fabric-workshop.webp",
      title: "裁剪缝纫车间",
      description: "面料裁剪、缝纫和版型管理集中处理，为不同款式提供基础保障。",
    },
  ],
  clientsEyebrow: "Partners",
  clientsTitle: "长期合作客户",
  clientsDescription: "全球客户资源，10余年持续合作经验，服务多地区家具品牌、零售渠道与电商平台。",
  clientsImage: "assets/customer-logos-2026.webp",
  contactEyebrow: "Contact",
  contactTitle: "联系我们",
  contactItems: [
    { label: "地址", value: "广东省惠州市惠阳三和街道小布仔坝心二路1号" },
    { label: "电话", value: "0752-3557012" },
    { label: "邮箱", value: "GCSOFA@GCSOFA.COM" },
  ],
};

const FACTORY_IMAGE_FALLBACKS = [
  { pattern: /鸟瞰|鳥瞰|厂区|廠區|园区|園區|工厂场地|工廠場地|campus|aerial|bird/i, image: "assets/factory-hero-2026.webp" },
  { pattern: /品质|品質|质检|質檢|检验|檢驗|inspection|quality|qc/i, image: "assets/factory-production-line.webp" },
  { pattern: /生产|生產|车间|車間|产线|產線|组装|組裝|production|line/i, image: "assets/factory-production-line.webp" },
  { pattern: /裁剪|缝纫|縫紉|面料|fabric|workshop/i, image: "assets/factory-fabric-workshop.webp" },
];

function escapeFactoryCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFactoryImageFallback(label = "", fallback = "assets/factory-hero-2026.webp") {
  const text = String(label || "");
  return FACTORY_IMAGE_FALLBACKS.find((item) => item.pattern.test(text))?.image || fallback;
}

function normalizeFactoryImageSource(source = "", label = "", fallback = "assets/factory-hero-2026.webp") {
  const value = String(source || "").trim();
  const inferred = getFactoryImageFallback(`${label} ${value}`, fallback);
  if (!value) return inferred;

  const normalizedKnownPaths = {
    "assets/factory-campus.png": "assets/factory-hero-2026.webp",
    "assets/factory-campus.webp": "assets/factory-hero-2026.webp",
    "assets/factory-production-line.png": "assets/factory-production-line.webp",
    "assets/factory-fabric-workshop.png": "assets/factory-fabric-workshop.webp",
    "factory-campus.png": "assets/factory-hero-2026.webp",
    "factory-campus.webp": "assets/factory-hero-2026.webp",
    "factory-production-line.png": "assets/factory-production-line.webp",
    "factory-fabric-workshop.png": "assets/factory-fabric-workshop.webp",
  };
  if (normalizedKnownPaths[value]) return normalizedKnownPaths[value];
  if (/factory-quality|quality-inspection|inspection|品质|質檢|质检|检验|檢驗/i.test(value)) {
    return "assets/factory-production-line.webp";
  }
  if (/^blob:|^file:|^[a-z]:[\\/]|^\\\\|192\.168\./i.test(value)) return inferred;
  return value;
}

function renderFactoryImage(source, label, className = "", fallback = "assets/factory-hero-2026.webp") {
  const safeSource = normalizeFactoryImageSource(source, label, fallback);
  const safeFallback = getFactoryImageFallback(`${label} ${source}`, fallback);
  const classAttribute = className ? ` class="${escapeFactoryCell(className)}"` : "";
  return `<img${classAttribute} src="${escapeFactoryCell(safeSource)}" alt="${escapeFactoryCell(label)}" onerror="this.onerror=null;this.src='${escapeFactoryCell(safeFallback)}';" />`;
}

function mergeFactoryProfile(profile = {}) {
  const merged = { ...FACTORY_PAGE_DEFAULTS, ...profile };
  ["stats", "advantages", "historyItems", "galleryItems", "contactItems"].forEach((key) => {
    if (!Array.isArray(profile[key]) || !profile[key].length) merged[key] = FACTORY_PAGE_DEFAULTS[key];
  });
  return merged;
}

function renderFactoryPage() {
  if (!factoryPage) return;
  const profile = mergeFactoryProfile(getFactoryProfile());
  factoryPage.innerHTML = `
    <section class="factory-hero">
      <div class="factory-hero-copy">
        <p class="eyebrow">${escapeFactoryCell(profile.heroEyebrow)}</p>
        <h1>${escapeFactoryCell(profile.heroTitle)}</h1>
        <p>${escapeFactoryCell(profile.heroDescription)}</p>
        <div class="factory-stats">
          ${profile.stats
            .map(
              (item) => `
                <div>
                  <strong>${escapeFactoryCell(item.value)}</strong>
                  <span>${escapeFactoryCell(item.label)}</span>
                </div>
              `
          )
            .join("")}
        </div>
      </div>
      ${renderFactoryImage(profile.heroImage, `${profile.heroTitle} 鸟瞰图`, "", "assets/factory-hero-2026.webp")}
    </section>

    <section class="section factory-profile-block">
      <div class="section-heading">
        <p class="eyebrow">About GCSOFA</p>
        <h2>${escapeFactoryCell(profile.profileTitle)}</h2>
        <p>${escapeFactoryCell(profile.profileDescription)}</p>
      </div>
    </section>

    <section class="section factory-advantages">
      <div class="section-heading">
        <p class="eyebrow">${escapeFactoryCell(profile.advantagesEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.advantagesTitle)}</h2>
      </div>
      <div class="factory-advantage-grid">
        ${profile.advantages
          .map(
            (item, index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeFactoryCell(item.title)}</h3>
                <p>${escapeFactoryCell(item.description)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section factory-history">
      <div class="section-heading">
        <p class="eyebrow">${escapeFactoryCell(profile.historyEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.historyTitle)}</h2>
        <p>${escapeFactoryCell(profile.historyDescription)}</p>
      </div>
      <div class="timeline">
        ${profile.historyItems
          .map(
            (item) => `
              <article>
                <span>${escapeFactoryCell(item.label)}</span>
                <h3>${escapeFactoryCell(item.title)}</h3>
                <p>${escapeFactoryCell(item.description)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section factory-gallery-section">
      <div class="section-heading">
        <p class="eyebrow">${escapeFactoryCell(profile.galleryEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.galleryTitle)}</h2>
        <p>${escapeFactoryCell(profile.galleryDescription)}</p>
      </div>
      <div class="factory-gallery">
        ${profile.galleryItems
          .map(
            (item) => `
              <article>
                ${renderFactoryImage(item.image, item.title, "", "assets/factory-production-line.webp")}
                <h3>${escapeFactoryCell(item.title)}</h3>
                <p>${escapeFactoryCell(item.description)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section factory-clients">
      <div class="section-heading">
        <p class="eyebrow">${escapeFactoryCell(profile.clientsEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.clientsTitle)}</h2>
        <p>${escapeFactoryCell(profile.clientsDescription)}</p>
      </div>
      ${renderFactoryImage(profile.clientsImage, profile.clientsTitle, "", "assets/customer-logos-2026.webp")}
    </section>

    <section class="section factory-contact">
      <div>
        <p class="eyebrow">${escapeFactoryCell(profile.contactEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.contactTitle)}</h2>
      </div>
      <div class="factory-contact-grid">
        ${profile.contactItems
          .map(
            (item) => `
              <article>
                <span>${escapeFactoryCell(item.label)}</span>
                <strong>${escapeFactoryCell(item.value)}</strong>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

whenSiteDataReady(renderFactoryPage);
