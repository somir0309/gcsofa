const ENGLISH_ROLE_LABELS = {
  guest: "Guest",
  registered: "Registered user",
  customer: "Customer",
  employee: "Employee",
  sales: "Sales",
  boss: "Owner",
  admin: "Administrator",
};

function getCurrentEnglishUser() {
  const username = localStorage.getItem(USER_STORE_KEY);
  const account = username ? getAccounts()[username] : null;
  return account ? { username, ...account, roleLabel: ENGLISH_ROLE_LABELS[account.role] || account.role || "User" } : null;
}

function setupEnglishAuth({ onChange } = {}) {
  const els = {
    accountStatus: document.querySelector("#accountStatus"),
    loginOpenBtn: document.querySelector("#loginOpenBtn"),
    logoutBtn: document.querySelector("#logoutBtn"),
    loginDialog: document.querySelector("#loginDialog"),
    loginForm: document.querySelector("#loginForm"),
    loginMessage: document.querySelector("#loginMessage"),
    usernameInput: document.querySelector("#usernameInput"),
    passwordInput: document.querySelector("#passwordInput"),
  };

  function updateAccountView() {
    const user = getCurrentEnglishUser();
    if (user) {
      const displayName = /[\u4e00-\u9fff]/.test(user.name || "") ? user.username : user.name || user.username;
      if (els.accountStatus) els.accountStatus.textContent = `${displayName} / ${user.roleLabel}`;
      els.loginOpenBtn?.classList.add("hidden");
      els.logoutBtn?.classList.remove("hidden");
    } else {
      if (els.accountStatus) els.accountStatus.textContent = "Not signed in";
      els.loginOpenBtn?.classList.remove("hidden");
      els.logoutBtn?.classList.add("hidden");
    }

    if (typeof onChange === "function") {
      onChange(user);
    }
  }

  function openLogin(prefillUser = "") {
    if (!els.loginDialog || !els.usernameInput || !els.passwordInput) return;
    if (prefillUser) els.usernameInput.value = prefillUser;
    els.passwordInput.value = "";
    if (els.loginMessage) els.loginMessage.textContent = "";
    els.loginDialog.showModal();
    els.usernameInput.focus();
  }

  els.loginOpenBtn?.addEventListener("click", () => openLogin());
  els.logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem(USER_STORE_KEY);
    updateAccountView();
  });

  document.querySelectorAll("[data-close-login]").forEach((button) => {
    button.addEventListener("click", () => els.loginDialog?.close());
  });

  els.loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = els.usernameInput.value.trim();
    const password = els.passwordInput.value;
    const account = getAccounts()[username];

    if (!account || account.password !== password) {
      if (els.loginMessage) els.loginMessage.textContent = "Incorrect username or password.";
      return;
    }

    localStorage.setItem(USER_STORE_KEY, username);
    els.loginDialog.close();
    updateAccountView();
  });

  updateAccountView();
  return { openLogin, updateAccountView };
}

whenSiteDataReady(() => setupEnglishAuth());
