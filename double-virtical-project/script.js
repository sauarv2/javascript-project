const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length; //4

let activeSIndex = 0; //0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; //-300

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight; //page height size in px

  if (direction === "up") {
    activeSIndex++;
    if (activeSIndex > slidesLength - 1) {
      activeSIndex = 0;
    }
  } else if (direction === "down") {
    activeSIndex--;
    if (activeSIndex < 0) {
      activeSIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSIndex * sliderHeight}px)`;
};
