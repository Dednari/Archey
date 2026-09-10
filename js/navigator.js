document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку и подсписок
    const arheyToggle = document.getElementById('arheyToggle');
    const arheySubmenu = document.getElementById('arheySubmenu');

    if (arheyToggle && arheySubmenu) {
        arheyToggle.addEventListener('click', () => {
            // Переключаем класс active для стрелочки
            arheyToggle.classList.toggle('active');
            
            // Если подсписок открыт - закрываем, если закрыт - открываем
            if (arheySubmenu.style.maxHeight) {
                arheySubmenu.style.maxHeight = null;
            } else {
                // Устанавливаем высоту равной высоте содержимого
                arheySubmenu.style.maxHeight = arheySubmenu.scrollHeight + "px";
            }
        });
    }

    // Если у вас будут другие категории, логику можно сделать универсальной:
    const allCategories = document.querySelectorAll('.menu-category');
    allCategories.forEach(btn => {
        btn.addEventListener('click', function() {
            // Находим следующий элемент после кнопки (это и есть наш ul)
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                this.classList.toggle('active');
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                }
            }
        });
    });
});
