/*/ Функция для создания и добавления навигационной панели
function createNavbar() {
    // HTML структура навигационной панели
    const navbarHTML = `
    <header>
    <div class="navbar-toggle" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul class="navbar-menu">
        <li><a href="index.html" class="nav-link">Главная</a></li>
        <li><a href="char_history.html" class="nav-link">Предыстории</a></li>
        <li><a href="pclass.html" class="nav-link">Подклассы</a></li>
        <li><a href="magic.html" class="nav-link">Информация не попавшая в лор</a></li>
        <li><a href="lore.html" class="nav-link">Лор</a></li>
        <li><a href="Spells.html" class="nav-link">ХБ заклинания</a></li>
        <li><a href="gods.html" class="nav-link">Боги</a></li>
        
    </ul>
    </header>
    `;

    // Добавляем навигационную панель в начало body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Выделяем активный пункт меню
    setActiveLink();
}

// Функция для переключения мобильного меню
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// Функция для выделения активного пункта меню
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}*
*/
// Выполняем создание навигационной панели при загрузке страницы
document.addEventListener('DOMContentLoaded', createNavbar);

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
