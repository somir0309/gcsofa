const staffGrid = document.querySelector("#staffGrid");
const staffList = getStaffList();

staffGrid.innerHTML = staffList.map(
  (person) => `
    <a class="staff-card" href="staff.html?id=${encodeURIComponent(person.id)}" aria-label="查看 ${person.name} 的联系方式">
      <img src="${person.avatar}" alt="${person.name}" loading="lazy" />
      <strong>${person.name}</strong>
      <span>${person.title}</span>
    </a>
  `
).join("");
