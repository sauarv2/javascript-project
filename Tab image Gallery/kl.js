const imgEl = document.querySelectorAll(".hj");
const imagesEl = document.querySelectorAll(".images");
const closeIEl = document.querySelectorAll(".closeI");
const imageBlockEl = document.querySelectorAll(".imageBlock");
const photoEl = document.querySelectorAll(".photo");
const overlayEl = document.querySelectorAll(".overlay");

// **************** creat a for loop for imgEL ***************************

for (let i = 0; i < imgEl.length; i++) {
  imgEl[i].addEventListener("click", () => {
    changeImg(this);
  });
}

function changeImg(pic) {
  photoEl.src = pic.src;
}
