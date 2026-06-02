const factoryPage = document.querySelector("#factoryPage");

function escapeFactoryCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFactoryPage() {
  if (!factoryPage) return;
  const profile = getFactoryProfile();
  factoryPage.innerHTML = `
    <section class="factory-hero">
      <div class="factory-hero-copy">
        <p class="eyebrow">${escapeFactoryCell(profile.heroEyebrow)}</p>
        <h1>${escapeFactoryCell(profile.heroTitle)}</h1>
        <p>${escapeFactoryCell(profile.heroDescription)}</p>
      </div>
      <img src="${escapeFactoryCell(profile.heroImage)}" alt="${escapeFactoryCell(profile.heroTitle)}" />
    </section>

    <section class="section factory-history">
      <div class="section-heading">
        <p class="eyebrow">${escapeFactoryCell(profile.historyEyebrow)}</p>
        <h2>${escapeFactoryCell(profile.historyTitle)}</h2>
        <p>${escapeFactoryCell(profile.historyDescription)}</p>
      </div>
      <div class="timeline">
        ${(profile.historyItems || [])
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
        ${(profile.galleryItems || [])
          .map(
            (item) => `
              <article>
                <img src="${escapeFactoryCell(item.image)}" alt="${escapeFactoryCell(item.title)}" />
                <h3>${escapeFactoryCell(item.title)}</h3>
                <p>${escapeFactoryCell(item.description)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

renderFactoryPage();
