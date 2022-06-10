console.log("working");

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
};
const toggleSideNav = () => {
  sideNavBackground.classList.toggle("side-nav--active");
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
//*********************************//

const sidenavItems = document.querySelector(".side-nav__list");

sidenavItems.addEventListener("click", (e) => {
  const clicked = e.target.closest(".side-nav__link");
  if (!clicked) return;
  burgerAnimation();
  toggleSideNav();
});

//*****************************************************//

const slides = document.querySelectorAll(".testimonial__slide");
const leftArrow = document.querySelector(".testimonial__slide-left-arrow");
const rightArrow = document.querySelector(".testimonial__slide-right-arrow");
const dotsContainer = document.querySelector(".testimonial__slider-dots");
let curSlide = 0;
const maxSlide = slides.length;
// console.log(maxSlide)

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${125 * (i - slide)}%)`)
  );
  // console.log(slide)
  // activeDot(slide)
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const creatingDots = () => {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="dot" data-slide=${i}></div>`
    );
  });
};

const activeDot = (activeSlide) => {
  const dots = document.querySelectorAll(".dot");
  const currentDot = document.querySelector(
    `.dot[data-slide="${activeSlide}"]`
  );
  dots.forEach((e) => e.classList.remove("dot-active"));
  currentDot.classList.add("dot-active");
};

dotsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(+slide);
    activeDot(+slide);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});

leftArrow.addEventListener("click", () => {
  prevSlide();
});

const init = () => {
  goToSlide(0);
  creatingDots();
  activeDot(0);
};

init();

//*********************************************//

//****************************************************//
// HEADER ANIMATION #4


const greetingSlider = document.querySelector(".header__title-box");
let greetingSlides = document.querySelectorAll(".header__title-wrap");
const headerTitles = document.querySelectorAll(".header__title");
const firstClone = greetingSlides[0].cloneNode(true)
const secondClone = greetingSlides[greetingSlides.length - 1].cloneNode(true)
//
greetingSlider.append(firstClone)
greetingSlider.prepend(secondClone)
firstClone.id = "first-clone"
secondClone.id = "second-clone"
//
const interval = 5000
let counter = 1



const setClones = () => {
  greetingSlides = document.querySelectorAll(".header__title-wrap");
    greetingSlides.forEach((greeting, i) => {
    greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
  });
}
setClones()

const startAni = () => {
  setInterval(() => {
    headerTitles.forEach(e => {
      e.classList.add("title-animation")
      e.addEventListener("animationend", () => e.classList.remove("title-animation"))
    })
    counter++
    greetingSlides.forEach((greeting, i) => {
      greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
      greeting.style.transition = ".7s";
    });
  }, interval)
}

greetingSlider.addEventListener("transitionend", () => {
  greetingSlides = document.querySelectorAll(".header__title-wrap");
  // headerTitles.forEach((e) => e.classList.remove("title-animation"));
  // setInterval(() => {
  // },2000)
  if (greetingSlides[counter].id === firstClone.id){
    counter = 1;
      greetingSlides.forEach((greeting, i) => {
        headerTitles.forEach((e) => e.classList.remove("title-animation"));
        greeting.style.transition = "none";
        greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
      });
  }
})

startAni()

//*******************************************************//


