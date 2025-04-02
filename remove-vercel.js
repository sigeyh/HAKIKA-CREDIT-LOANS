(function removeVercelToolbar() {
  const observer = new MutationObserver(() => {
    const vercelToolbar = document.querySelector("#__next-build-watcher, #__vercel");
    if (vercelToolbar) {
      vercelToolbar.remove();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
