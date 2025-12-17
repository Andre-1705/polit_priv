const STORAGE_KEY = "cookie_consent";

function showCookieBannerIfNeeded() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (!v) document.getElementById("cookie-banner").hidden = false;
  } catch {}
}

function setConsent(consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      necessary: true,
      performance: consent === "all",
      functionality: consent === "all",
      marketing: consent === "all",
      at: Date.now()
    }));
  } catch {}
  document.getElementById("cookie-banner").hidden = true;
}

function wireCookieButtons() {
  const only = document.getElementById("only-necessary");
  const all = document.getElementById("accept-all");
  if (only) only.addEventListener("click", () => setConsent("necessary"));
  if (all) all.addEventListener("click", () => setConsent("all"));
}

function loadMarkdown(path) {
  const target = document.getElementById("content");
  if (!target) return;
  fetch(path)
    .then(r => {
      if (!r.ok) throw new Error("No se pudo cargar: " + path);
      return r.text();
    })
    .then(md => {
      target.innerHTML = marked.parse(md);
    })
    .catch(err => {
      target.innerHTML = `<p style="color:#c53030">Error: ${err.message}</p>`;
    });
}

window.loadMarkdown = loadMarkdown;

window.addEventListener("DOMContentLoaded", () => {
  wireCookieButtons();
  showCookieBannerIfNeeded();
});
