// Simple JavaScript to close the mega-menu when clicking outside
document.addEventListener('click', function(e) {
    const megaMenus = document.querySelectorAll('.mega-menu');
    megaMenus.forEach(menu => {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    });
});
