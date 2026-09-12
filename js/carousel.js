// =========================================================
//   КАРУСЕЛЬ БОГОВ — по одной карточке за раз
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('godsCarousel');
  if (!carousel) return;

  let isAnimating = false;
  const cards = carousel.querySelectorAll('.god-card');
  const total = cards.length;

  function goToNext(direction) {
    if (isAnimating || !total) return;
    const currentIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= total) nextIndex = total - 1;
    if (nextIndex === currentIndex) return;

    isAnimating = true;
    carousel.scrollTo({
      left: nextIndex * carousel.clientWidth,
      behavior: 'smooth'
    });
    setTimeout(() => { isAnimating = false; }, 600);
  }

  // Колесо мыши
  carousel.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    if (Math.abs(e.deltaY) < 20) return;
    goToNext(e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  // Клавиатура
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToNext(1);
    if (e.key === 'ArrowLeft')  goToNext(-1);
  });

  // Кнопка
  const btn = document.getElementById('carouselNextBtn');
  if (btn) btn.addEventListener('click', () => goToNext(1));

  // Свайпы
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToNext(diff > 0 ? 1 : -1);
  }, { passive: true });
});