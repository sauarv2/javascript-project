const img = document.querySelectorAll(".hj");
const images = document.querySelector(".images");
const close = document.querySelector(".closeI");
const photo = document.querySelector(".photo");
const imageBlock = document.querySelector(".imageBlock");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    // console.log("click");
    changepic(this);
    // imageBlock.classList.add("block");
    imageBlockHidden();
  });
}

function imageBlockHidden() {
  imageBlock.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function changepic(pic) {
  photo.src = pic.src;
}

close.addEventListener("click", closeHidden);
overlay.addEventListener("click", closeHidden);

function closeHidden() {
  imageBlock.classList.add("hidden");
  overlay.classList.add("hidden");
}

// document.addEventListener("click", function (r) {
//   console.log(r.key);

//   if (r.key === "Escape" && !imageBlock.classList.contains("hidden")) {
//     closeHidden();
//   }
// });
