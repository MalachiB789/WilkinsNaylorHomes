async function loadInclude(targetId, filePath) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const res = await fetch(filePath);
  el.innerHTML = await res.text();
}

function setActiveNav() {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-link").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(file)) a.classList.add("is-active");
  });
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

(async function init() {
  await loadInclude("site-header", "../includes/header.html");
  await loadInclude("site-footer", "../includes/footer.html");
  setActiveNav();
  setYear();
})();