document.addEventListener('DOMContentLoaded', function() {
    // === 1. НАХОДИМ ВСЕ ЭЛЕМЕНТЫ ===
    const menuToggle = document.getElementById('menuToggle');   // Кнопка-гамбургер
    const sideDrawer = document.getElementById('sideDrawer');   // Сама шторка
    const closeDrawer = document.getElementById('closeDrawer'); // Крестик
    const overlay = document.getElementById('overlay');         // Затемнение
    
    // === 2. ФУНКЦИИ ОТКРЫТИЯ / ЗАКРЫТИЯ ШТОРКИ ===
    function openMenu() {
        if (sideDrawer) sideDrawer.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }

    function closeMenu() {
        if (sideDrawer) sideDrawer.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === 3. ОБРАБОТЧИКИ ДЛЯ ШТОРКИ ===
    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideDrawer && sideDrawer.classList.contains('open')) {
            closeMenu();
        }
    });

    // === 4. АККОРДЕОН (выпадающие списки внутри шторки) ===
    // Универсальная логика для ВСЕХ кнопок с классом .menu-category
    const allCategories = document.querySelectorAll('.menu-category');
    
    allCategories.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const submenu = this.nextElementSibling; // Берём следующий элемент (ul.submenu)
            
            if (submenu && submenu.classList.contains('submenu')) {
                this.classList.toggle('active'); // Поворачиваем стрелочку

                if (submenu.style.maxHeight) {
                    // Если уже открыто — закрываем
                    submenu.style.maxHeight = null;
                } else {
                    // Если закрыто — открываем
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                }
            }
        });
    });
});
