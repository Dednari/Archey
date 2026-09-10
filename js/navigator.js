document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideDrawer = document.getElementById('sideDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const overlay = document.getElementById('overlay');

    // Функция открытия меню
    function openMenu() {
        sideDrawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }

    // Функция закрытия меню
    function closeMenu() {
        sideDrawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }

    // Слушатели событий
    if(menuToggle) menuToggle.addEventListener('click', openMenu);
    if(closeDrawer) closeDrawer.addEventListener('click', closeMenu);
    if(overlay) overlay.addEventListener('click', closeMenu); // Закрытие по клику на фон

    // Закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideDrawer.classList.contains('open')) {
            closeMenu();
        }
    });
});
