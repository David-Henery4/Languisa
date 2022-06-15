// HEADER ANIMATION #4

const greetingSlider = document.querySelector(".header__title-box");
let greetingSlides = document.querySelectorAll(".header__title-wrap");
const headerTitles = document.querySelectorAll(".header__title");
const firstClone = greetingSlides[0].cloneNode(true);
const secondClone = greetingSlides[greetingSlides.length - 1].cloneNode(true);
//
greetingSlider.append(firstClone);
greetingSlider.prepend(secondClone);
firstClone.id = "first-clone";
secondClone.id = "second-clone";
//
const interval = 5000;
let counter = 1;

const setClones = () => {
  greetingSlides = document.querySelectorAll(".header__title-wrap");
  greetingSlides.forEach((greeting, i) => {
    greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
  });
};
setClones();

const startAni = () => {
  setInterval(() => {
    headerTitles.forEach((e) => {
      e.classList.add("title-animation");
      e.addEventListener("animationend", () =>
        e.classList.remove("title-animation")
      );
    });
    counter++;
    greetingSlides.forEach((greeting, i) => {
      greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
      greeting.style.transition = ".7s";
    });
  }, interval);
};

greetingSlider.addEventListener("transitionend", () => {
  greetingSlides = document.querySelectorAll(".header__title-wrap");
  if (greetingSlides[counter].id === firstClone.id) {
    counter = 1;
    greetingSlides.forEach((greeting, i) => {
      headerTitles.forEach((e) => e.classList.remove("title-animation"));
      greeting.style.transition = "none";
      greeting.style.transform = `translateX(${125 * (i - counter)}%)`;
    });
  }
});

startAni();
