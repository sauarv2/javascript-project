const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".closeWindow");
const btn = document.querySelectorAll(".btn");

for (let i = 0; i <= btn.length; i++)
  btn[i].addEventListener("click", function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");

    function closeModel() {
      model.classList.add("hidden");
      overlay.classList.add("hidden");
    }

    close.addEventListener("click", closeModel);

    overlay.addEventListener("click", closeModel);
  });
