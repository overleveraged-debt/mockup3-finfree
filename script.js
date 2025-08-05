const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuPanel = document.getElementById('mobile-menu-panel');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenuPanel.classList.remove('translate-x-full');
    }, 10);
    mobileMenuButton.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
    mobileMenuPanel.classList.add('translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
    mobileMenuButton.setAttribute('aria-expanded', 'false');
};

mobileMenuButton.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});