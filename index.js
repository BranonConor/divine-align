// GLOBALS
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const mobileLinks = document.querySelectorAll('.mobileLink');
const cards = document.querySelectorAll('.card');

// HELPER FUNCS
const expandMenu = () => {
    // take the mobile nav menu and reveal it on a hamburger click
    navMobile.classList.toggle('revealNavMobile');
}
const showMobileMenu = () => {
    // loop through each mobile menu link, remove the "display none" and 
    for (let i = 0; i< mobileLinks.length; i++) {
        mobileLinks[i].classList.toggle('display-none');
    }
}

// Burger animation
const hamburgerClick = (x) => {
    x.classList.toggle('change');
}


// Expand Mobile Menu
hamburger.addEventListener('click', function() {
    expandMenu();
    setTimeout(showMobileMenu, 250);
});

// Expand cards
cards.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('move');
    });
});