const buttonEL = document.querySelectorAll(".button");

window.addEventListener("scroll", scrolling);

function scrolling() {
  const innerHeight = window.innerHeight;
  //   console.log(innerHeight);
  buttonEL.forEach((button) => {
    const boxes = button.getBoundingClientRect().bottom;

    if (boxes < innerHeight) {
      button.classList.add("show");
    }
  });
}
