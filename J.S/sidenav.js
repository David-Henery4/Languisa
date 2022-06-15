

// Burger Element
const burger = document.querySelector(".burger");

// Burger animation
const burgerLine1 = document.querySelector(".burger__line-1");
const burgerLine2 = document.querySelector(".burger__line-2");
const burgerLine3 = document.querySelector(".burger__line-3");

// Side-Nav
const sideNavBackground = document.querySelector(".side-nav-background");
const sideNav = document.querySelector(".side-nav");
const sideNavCloseIcon = document.querySelector(".side-nav-close");


// Burger & Sidenav Functionality
const burgerAnimation = () => {
  burgerLine1.classList.toggle("burger-line-1");
  burgerLine2.classList.toggle("burger-line-2");
  burgerLine3.classList.toggle("burger-line-3");
};
const toggleSideNav = () => {
  sideNavBackground.classList.toggle("side-nav-background--active");
  sideNav.classList.toggle("side-nav-wrap--active");
};

// Burger & Sidenav Events
burger.addEventListener("click", () => {
  toggleSideNav();
  burgerAnimation();
});
sideNavCloseIcon.addEventListener("click", () => {
  toggleSideNav();
  burgerAnimation();
});
sideNavBackground.addEventListener("click", (e) => {
  toggleSideNav();
  burgerAnimation();
})

const sidenavItems = document.querySelector(".side-nav__list");

sidenavItems.addEventListener("click", (e) => {
  const clicked = e.target.closest(".side-nav__link");
  if (!clicked) return;
  burgerAnimation();
  toggleSideNav();
});