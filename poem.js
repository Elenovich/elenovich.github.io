let scrollTimeout;

window.addEventListener('scroll', () => {
  const scrollZone = document.getElementById('left-scroll-zone');
  if (!scrollZone) return;

  scrollZone.classList.add('highlight');

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollZone.classList.remove('highlight');
  }, 300); // Подсветка исчезает через 300 мс после прекращения прокрутки
});
