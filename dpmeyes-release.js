(() => {
  const config = window.DPMEYES_RELEASE || {};

  const bindAll = (selector, url, label) => {
    if (!url) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.disabled = false;
      element.textContent = label;
      element.addEventListener("click", () => {
        window.location.href = url;
      });
    });
  };

  bindAll("[data-dpmeyes-download-windows]", config.windowsDownloadUrl, "Descargar DPMEyes para Windows");
  bindAll("[data-dpmeyes-download-mac]", config.macDownloadUrl, "Descargar DPMEyes para macOS");
  bindAll("[data-dpmeyes-buy]", config.checkoutUrl, "Comprar licencia · 10 €");
})();
