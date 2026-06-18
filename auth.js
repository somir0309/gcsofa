function getCurrentUser() {
  const username = localStorage.getItem(USER_STORE_KEY);
  const account = username ? getAccounts()[username] : null;
  return account ? { username, ...account, roleLabel: getRoleLabel(account.role) } : null;
}

function isAdminUser(user = getCurrentUser()) {
  return Boolean(user && user.role === "admin");
}

function isBossUser(user = getCurrentUser()) {
  return Boolean(user && user.role === "boss");
}

function canEditInternalData(user = getCurrentUser()) {
  return isAdminUser(user) || isBossUser(user);
}

function setupAuth({ onChange } = {}) {
  const els = {
    accountStatus: document.querySelector("#accountStatus"),
    loginOpenBtn: document.querySelector("#loginOpenBtn"),
    logoutBtn: document.querySelector("#logoutBtn"),
    loginDialog: document.querySelector("#loginDialog"),
    loginForm: document.querySelector("#loginForm"),
    loginMessage: document.querySelector("#loginMessage"),
    usernameInput: document.querySelector("#usernameInput"),
    passwordInput: document.querySelector("#passwordInput"),
    adminNavLink: document.querySelector("#adminNavLink"),
    progressNavLink: document.querySelector("#progressNavLink"),
    topSofasNavLink: document.querySelector("#topSofasNavLink"),
  };

  function updateAccountView() {
    const user = getCurrentUser();
    renderCategoryMenus();
    if (user) {
      if (els.accountStatus) els.accountStatus.textContent = `${user.name} · ${user.roleLabel}`;
      els.loginOpenBtn?.classList.add("hidden");
      els.logoutBtn?.classList.remove("hidden");
    } else {
      if (els.accountStatus) els.accountStatus.textContent = "未登录";
      els.loginOpenBtn?.classList.remove("hidden");
      els.logoutBtn?.classList.add("hidden");
    }

    if (els.adminNavLink) {
      els.adminNavLink.classList.toggle("hidden", !isAdminUser(user));
    }

    if (els.progressNavLink) {
      els.progressNavLink.classList.toggle("hidden", !userCan("production", user));
    }

    if (els.topSofasNavLink) {
      els.topSofasNavLink.classList.toggle("hidden", !userCan("topSofas", user));
    }

    if (typeof onChange === "function") {
      onChange(user);
    }
  }

  function openLogin(prefillUser = "") {
    if (!els.loginDialog || !els.usernameInput || !els.passwordInput) return;
    if (prefillUser) {
      els.usernameInput.value = prefillUser;
    }
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
      els.loginMessage.textContent = "帐号或密码不正确。";
      return;
    }

    localStorage.setItem(USER_STORE_KEY, username);
    els.loginDialog.close();
    updateAccountView();
  });

  updateAccountView();
  return { openLogin, updateAccountView };
}
