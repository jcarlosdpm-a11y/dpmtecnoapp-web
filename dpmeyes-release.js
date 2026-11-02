(() => {
  const config = window.DPMEYES_RELEASE || {};

  const bind = (id, url, label) => {
    const element = document.getElementById(id);
    if (!element || !url) return;
    element.disabled = false;
    element.textContent = label;
    element.addEventListener("click", () => {
      window.location.href = url;
    });
  };

  bind("dpmeyes-download-windows", config.windowsDownloadUrl, "Descargar DPMEyes para Windows");
  bind("dpmeyes-download-mac", config.macDownloadUrl, "Descargar DPMEyes para macOS");
  bind("dpmeyes-buy", config.checkoutUrl, "Comprar licencia · 10 €");
})();
