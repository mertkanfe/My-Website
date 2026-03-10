// Menu
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Dark mode add
const darkModeIcon = document.querySelector('#dark-mode-icon');
const darkModeIconInner = document.querySelector('#dark-mode-icon i');

darkModeIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeIconInner.classList.replace('fa-moon', 'fa-sun');
        darkModeIconInner.style.color = "#f1c40f";
    } else {
        darkModeIconInner.classList.replace('fa-sun', 'fa-moon');
        darkModeIconInner.style.color = "white";
    }
}