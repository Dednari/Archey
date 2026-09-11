document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('godsCarousel');
    const nextBtn = document.getElementById('carouselNextBtn');
    const godCards = document.querySelectorAll('.god-card');
    
    let currentIndex = 0;
    
    // Функция для переключения на следующий слайд
    function nextSlide() {
        currentIndex = (currentIndex + 1) % godCards.length;
        carousel.scrollLeft = currentIndex * window.innerWidth;
    }
    
    // Клик на кнопку переключения
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Клавиша вправо для переключения
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Свайп влево на мобилке для переключения
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        
        // Если свайп влево (touchStartX > touchEndX)
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        }
    }, false);
    
    // Отслеживание текущего слайда при прокрутке
    carousel.addEventListener('scroll', function() {
        currentIndex = Math.round(carousel.scrollLeft / window.innerWidth);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('godsCarousel');
  if (!carousel) return;

  carousel.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();

    const card = carousel.querySelector('.god-card');
    if (!card) return;

    const style = getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 20;
    const step = card.offsetWidth + gap;

    carousel.scrollBy({
      left: e.deltaY > 0 ? step : -step,
      behavior: 'smooth'
    });
  }, { passive: false });
});
