document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideDrawer = document.getElementById('sideDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        if (sideDrawer) sideDrawer.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (sideDrawer) sideDrawer.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideDrawer && sideDrawer.classList.contains('open')) {
            closeMenu();
        }
    });
});

// ================== МОДАЛЬНОЕ ОКНО БОГОВ ==================
document.addEventListener('DOMContentLoaded', function() {
    const godModal      = document.getElementById('godModal');
    const godModalClose = document.getElementById('godModalClose');
    const godModalImg   = document.getElementById('godModalImg');
    const godModalTitle = document.getElementById('godModalTitle');
    const godModalText  = document.getElementById('godModalText');

    if (!godModal || typeof godsData === 'undefined') return;

    document.querySelectorAll('.god-card').forEach(card => {
        card.addEventListener('click', function() {
            const godKey = this.dataset.god;
            const data = godsData[godKey];
            if (!data) return;

            godModalImg.src = data.img;
            godModalTitle.textContent = data.title;
            godModalText.innerHTML = data.text;

            godModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeGodModal() {
        godModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (godModalClose) godModalClose.addEventListener('click', closeGodModal);
    godModal.addEventListener('click', function(e) {
        if (e.target === godModal) closeGodModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && godModal.classList.contains('active')) {
            closeGodModal();
        }
    });
});
