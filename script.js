window.addEventListener('scroll', function () {
  const nextPoemBtn = document.querySelector('.next-poem');
  if (!nextPoemBtn) return;

  const scrollPosition = window.scrollY + window.innerHeight;
  const triggerPoint = document.body.offsetHeight - 100; // Появится за 100px до низа

  if (scrollPosition >= triggerPoint) {
    nextPoemBtn.classList.remove('hidden');
  } else {
    nextPoemBtn.classList.add('hidden');
  }
});
