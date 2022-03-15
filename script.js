const openDetailsButtons = document.querySelectorAll("[data-target]");
const closeButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("backdrop_blur_overlay");

openDetailsButtons.forEach(button => {
    button.addEventListener("click", () => {
       const popup = document.querySelector(button.dataset.target);
       // console.log(popup);
       openPopup(popup);
    });
});

overlay.addEventListener("click", () => {
    const popups = document.querySelectorAll(".window.active");
    popups.forEach(popup => {
       closePopup(popup);
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = button.closest(".window");
        console.log(popup);
        closePopup(popup);
    });
});

let openPopup = popup => {
    if (popup !== null) {
        popup.classList.add("active");
        overlay.classList.add("active");
    }
};

let closePopup = popup => {
    if (popup !== null) {
        popup.classList.remove("active");
        overlay.classList.remove("active");
    }
};

const menuButton = document.querySelector(".mobile-menu-btn");
const menuBlurLayout = document.querySelector(".burger-blur-layout");
const hamburgerMenu = document.querySelector(".hamburger");
let menuOpen = false;
menuButton.addEventListener("click", () => {
    if (!menuOpen) {
        menuButton.classList.add("open");
        menuBlurLayout.classList.add("active-menu");
        hamburgerMenu.classList.add("active-menu");
        menuOpen = true;
    } else {
        menuButton.classList.remove("open");
        menuBlurLayout.classList.remove("active-menu");
        hamburgerMenu.classList.remove("active-menu");
        menuOpen = false;
    }
});

const burgerMenuElements = document.querySelectorAll(".hamburger a");
burgerMenuElements.forEach(menuElement => {
    menuElement.addEventListener("click", () => {
        menuButton.classList.remove("open");
        menuBlurLayout.classList.remove("active-menu");
        hamburgerMenu.classList.remove("active-menu");
        menuOpen = false;
    });
});