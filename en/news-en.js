const insightFilterButtons = [...document.querySelectorAll("[data-insight-filter]")];
const insightCards = [...document.querySelectorAll("[data-insight-category]")];
const insightResultCount = document.getElementById("insightResultCount");

function applyInsightFilter(filter) {
  let visibleCount = 0;

  insightCards.forEach((card) => {
    const isVisible = filter === "all" || card.dataset.insightCategory === filter;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  insightFilterButtons.forEach((button) => {
    const isActive = button.dataset.insightFilter === filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (insightResultCount) {
    insightResultCount.textContent =
      filter === "all"
        ? `Showing all ${visibleCount} briefings`
        : `Showing ${visibleCount} ${filter} briefing${visibleCount === 1 ? "" : "s"}`;
  }
}

insightFilterButtons.forEach((button) => {
  button.addEventListener("click", () => applyInsightFilter(button.dataset.insightFilter));
});

applyInsightFilter("all");
