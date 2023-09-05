// simple color generator*******************

let Hexcolor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnEL = document.querySelector(".btn");
const colorEL = document.querySelector(".color");

btnEL.addEventListener("click", () => {
  let Hex = "#";
  for (let i = 0; i < 6; i++) {
    Hex += Hexcolor[genRandom()];
  }

  document.body.style.background = Hex;
  colorEL.textContent = Hex;
  colorEL.style.color = Hex;
});

function genRandom() {
  return Math.trunc(Math.random() * Hexcolor.length); //generate a random number length*** color length
}
