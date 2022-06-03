console.log("working")

// Burger Element
const burger = document.querySelector(".burger");

// Side-Nave
const sideNavBackground = document.querySelector(".side-nav");
const sideNav = document.querySelector(".side-nav-wrap");
const sideNavCloseIcon = document.querySelector(".side-nav-close");

// Burger animation
const burgerLine1 = document.querySelector(".burger__line-1");
const burgerLine2 = document.querySelector(".burger__line-2");
const burgerLine3 = document.querySelector(".burger__line-3");

// Burger & Sidenav Functionality
const burgerAnimation = () => {
    burgerLine1.classList.toggle("burger-line-1");
    burgerLine2.classList.toggle("burger-line-2");
    burgerLine3.classList.toggle("burger-line-3");
}
const toggleSideNav = () => {
    sideNavBackground.classList.toggle("side-nav--active");
    sideNav.classList.toggle("side-nav-wrap--active");
}

// Burger & Sidenav Events
burger.addEventListener("click", () => {
    toggleSideNav()
    burgerAnimation()
})
sideNavCloseIcon.addEventListener("click", () => {
    toggleSideNav();
    burgerAnimation()
})
//*********************************//

const sidenavItems = document.querySelector(".side-nav__list");

sidenavItems.addEventListener("click", (e) => {
    const clicked = e.target.closest(".side-nav__link");
    if (!clicked) return
    burgerAnimation()
    toggleSideNav()
})

//*****************************************************//

const slides = document.querySelectorAll(".testimonial__slide");
const leftArrow = document.querySelector(".testimonial__slide-left-arrow");
const rightArrow = document.querySelector(".testimonial__slide-right-arrow");
const dotsContainer = document.querySelector(".testimonial__slider-dots");
let curSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide)

const goToSlide = (slide) => {
    slides.forEach((s,i) => s.style.transform = `translateX(${125*(i - slide)}%)`)
}

const nextSlide = () => {
    if (curSlide === maxSlide -1) {
        curSlide = 0;
    } else{
        curSlide++
    }
    goToSlide(curSlide)
    // activeDot(curSlide)
}

const prevSlide = () => {
    if (curSlide === 0){
        curSlide = maxSlide -1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
    // activeDots(curSlide)
}

rightArrow.addEventListener("click", () => {
    nextSlide()
})

leftArrow.addEventListener("click", () => {
    prevSlide()
})

const init = () => {
    goToSlide(0)
}

init()