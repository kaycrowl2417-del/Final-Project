// MENU TOGGLE
// =========================
document.addEventListener("DOMContentLoaded", () => {


const body = document.body;
const menuBtn = document.querySelector(".btn__menu");
const backdrop = document.querySelector(".menu__backdrop");
const menuLinks = document.querySelectorAll(".menu__link");

// OPEN MENU
function openMenu() {
  body.classList.add("menu--open");
}

// CLOSE MENU
function closeMenu() {
  body.classList.remove("menu--open");
}

// TOGGLE MENU
function toggleMenu() {
  body.classList.toggle("menu--open");
}

// Click hamburger
if (menuBtn) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents weird bubbling
    toggleMenu();
  });
}

// Click backdrop (outside menu)
if (backdrop) {
  backdrop.addEventListener("click", closeMenu);
}

// Click any link → close menu
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// OPTIONAL: close with ESC key (pro feel)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
// =========================
// PARALLAX (SAFE VERSION)
// =========================
const headerImg = document.querySelector(".header__img");

if (headerImg) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      headerImg.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
};
});
