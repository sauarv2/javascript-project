const color = ["red", "yellow", "blue", "green", "rgb(135, 206, 235)"];

const btnEL = document.querySelector(".btn");
const colorEL = document.querySelector(".color");
const span = document.getElementsByTagName("span")[0];

btnEL.addEventListener("click", function () {
  const pracolor = genRandom();
  console.log(pracolor);
  document.body.style.background = color[pracolor];
  //   document.body.colorEL = color[pracolor];
  colorEL.textContent = color[pracolor];
  colorEL.style.color = color[pracolor];
});

function genRandom() {
  return Math.trunc(Math.random() * color.length);
}
