console.log("hello its the sidenav");

// TESTIMONIAL SLIDER
const slides = document.querySelectorAll(".testimonial__slide");
const leftArrow = document.querySelector(".testimonial__slide-left-arrow");
const rightArrow = document.querySelector(".testimonial__slide-right-arrow");
const dotsContainer = document.querySelector(".testimonial__slider-dots");
let curSlide = 0;
const maxSlide = slides.length;


const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${125 * (i - slide)}%)`)
  );
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
