// Keep the entry page readable when a module fails to download or start.
(() => {
  const status = document.getElementById("site-status");
  const message = document.getElementById("status-message");
  const entry = document.getElementById("app-entry");
  let timer;

  const observer = new MutationObserver(checkReady);
  observer.observe(document.body, { childList: true });
  entry.addEventListener("error", showFailure);
  window.addEventListener("error", showFailure);
  window.addEventListener("unhandledrejection", showFailure);

  function checkReady() {
    if (!document.getElementById("product-home")) return false;
    clearTimeout(timer);
    observer.disconnect();
    entry.removeEventListener("error", showFailure);
    window.removeEventListener("error", showFailure);
    window.removeEventListener("unhandledrejection", showFailure);
    status.remove();
    return true;
  }

  function showFailure() {
    if (checkReady()) return;
    clearTimeout(timer);
    message.textContent = "页面资源暂时未能加载。请检查网络连接，再重新加载页面；也可以先查看项目介绍。";
  }

  if (!checkReady()) {
    timer = setTimeout(() => {
      if (!checkReady()) {
        message.textContent = "页面加载较慢，可以继续等待，或检查网络后重新加载。";
      }
    }, 15000);
  }
})();
