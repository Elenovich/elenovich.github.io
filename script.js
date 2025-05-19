document.getElementById("left-scroll-zone").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  const scrollZone = document.getElementById("left-scroll-zone");
  if (window.scrollY > 300) {
    scrollZone.style.opacity = "1";
    scrollZone.style.pointerEvents = "auto";
  } else {
    scrollZone.style.opacity = "0";
    scrollZone.style.pointerEvents = "none";
  }
});
window.addEventListener("scroll", () => {
  const nav = document.getElementById("poem-nav");
  if (!nav) return;

  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 50) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});
