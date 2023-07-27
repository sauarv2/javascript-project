const boxEL = document.getElementById("Box");
const generateBtnEL = document.getElementById("refresh_btn");
const hexvalueEL = document.getElementById("hexval");

generateBtnEL.addEventListener("click", () => {
  const BGcolor = generateRandomcolor();
  boxEL.style.background = BGcolor;
  hexvalueEL.innerHTML = BGcolor;
});

function generateRandomcolor() {
  //******  take a value of hex

  const hexValue = "0123456789abcdef";

  //  **** # value is needed of hex so take it by verible

  let color = "#";

  //***********  */ generate randpom color using for LOOP

  for (let c = 0; c < 6; c++) {
    color += hexValue[Math.floor(Math.random() * hexValue.length)];
  }
  return color;
}
