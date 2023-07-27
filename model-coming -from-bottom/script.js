//****************** */ now time for javascript ***************

const btnEL = document.querySelector(".click-btn");
const bannerEL = document.querySelector(".banner");
const closeEL = document.querySelector("ion-icon");
console.log(closeEL);

// **************  for btn click ***********

btnEL.addEventListener("click", function () {
  bannerEL.classList.toggle("open");
});

// **************  for close btn click on banner ***********

closeEL.addEventListener("click", function () {
  bannerEL.classList.add("open");
});
