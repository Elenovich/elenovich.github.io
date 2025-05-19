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
