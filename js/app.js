// variable
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNavBar = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');
const bodyAfter = document.getElementById('body-after');


// event listeners
function eventListeners() {
    // event listener on hamburger menu icon to slide in the mobile nav bar
    hamburgerMenu.addEventListener('click', mobileNavMenu);

    // event listener on the close icon to slide out the mobile nav bar
    closeMenu.addEventListener('click', closeMobileNav)
}
eventListeners();


// functions

// function to slide in mobile nav
function mobileNavMenu() {
    mobileNavBar.style.right = '0';

    bodyAfter.classList.add('body-after');
}

// function to close the mobile nav
function closeMobileNav() {
    mobileNavBar.style.right = '-260px';

    bodyAfter.classList.remove('body-after');

}