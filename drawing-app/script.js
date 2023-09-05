const canvas = document.getElementById("canvas"); //for drwawing must need element in html
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d"); //used to obtain the rendering context and its drawing functions.

let size = 10;
let isPressed = false; //univesel veriable
colorEl.value = "black";
let color = colorEl.value;
let x; //take empty value
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true; //when i press the mouse give thhe value

  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false; // leave the mouse from pressing all false and undifined

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  //move the mouse while pressed
  if (isPressed) {
    //when is pressd is true
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2); // whare i move to the mouse
    drawLine(x, y, x2, y2); //move to mouse to -> from x,y -> x2,y2

    x = x2; //need to be equel if not form a different kind of things
    y = y2;
  }
});
//technical tersm************************************
function drawCircle(x, y) {
  //
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
