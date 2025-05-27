const scrollZone = document.getElementById("left-scroll-zone");
let scrollTimeout;
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Если быстро скроллят вниз (разница больше 15px)
  if (currentScrollY - lastScrollY > 15) {
    scrollZone.style.transition = "opacity 0.3s";
    scrollZone.style.opacity = "0.5"; // полупрозрачная подсветка
    scrollZone.style.pointerEvents = "auto";

    // Сброс таймера подсветки
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      scrollZone.style.opacity = "0";
      scrollZone.style.pointerEvents = "none";
    }, 400); // через 0.4 секунды после остановки — скрыть подсветку
  }

  lastScrollY = currentScrollY;
});
