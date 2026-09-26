// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// FAVORITE BUTTONS
// ==============================

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }

    });

});


// ==============================
// PET BUTTONS
// ==============================

const meetButtons = document.querySelectorAll(".meet-button");

meetButtons.forEach(button => {

    button.addEventListener("click", () => {

        const petName =
            button.closest(".pet-card")
            .querySelector("h3")
            .textContent;

        alert(
            `Thanks for your interest in ${petName}! 🐾\n\n` +
            `The adoption application page will be available soon.`
        );

    });

});


// ==============================
// VIEW ALL PETS
// ==============================

const viewAllButton = document.querySelector(".view-all");

viewAllButton.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
        "More pets will be available here soon! 🐶🐱"
    );

});


// ==============================
// ADOPTION BUTTONS
// ==============================

const adoptionButtons = document.querySelectorAll(
    ".primary-button, .cta-button"
);

adoptionButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("PAWSOME adoption section opened.");

    });

});


// ==============================
// ACTIVE NAVIGATION
// ==============================

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section[id]");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});