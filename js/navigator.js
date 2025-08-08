// Функция для создания и добавления навигационной панели
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
        <li><a href="magic.html" class="nav-link">Магия и божества</a></li>
        <li><a href="lore.html" class="nav-link">Лор</a></li>
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
}

// Выполняем создание навигационной панели при загрузке страницы
document.addEventListener('DOMContentLoaded', createNavbar);