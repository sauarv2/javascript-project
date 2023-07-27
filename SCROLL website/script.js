/*
function apper() {

  const textApper = textEL.getBoundingClientRect().top;

  console.log(textApper);
  const poition = 900;
  //   console.log(poition);
  if (poition > textApper) {
    textEL.classList.add("adv");
  }
}
*/
const textEL = document.querySelector(".text");
function apper() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    textEL.classList.add("adv");
  }
}
window.addEventListener("scroll", apper);
