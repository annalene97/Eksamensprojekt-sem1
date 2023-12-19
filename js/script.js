// Åbning og lukning af burgermenuen 
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".menu");
const dropdowns = document.querySelectorAll(".nav-item.dropdown");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Lukning af dropdown-menu, når toggle er 'active' - menuen er lukket
    if (!navToggle.classList.contains("active")) {
        closeAllDropdowns();
    }
});

//Åbning af dropdown-menuer
dropdowns.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        closeAllDropdowns(toggle);
        toggle.classList.toggle("active");
    });
});

//Kun én dropdown-menu kan være aktiveret ad gangen 
function closeAllDropdowns(currentToggle) {
    dropdowns.forEach((toggle) => {
        if (toggle !== currentToggle) {
            toggle.classList.remove("active");
        }
    });
}

// Ændring af headerens farve, når brugeren scroller ned på siden
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
