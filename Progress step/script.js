/*
const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("prev");
const next = document.getElementById("nxt");
const progresss = document.getElementById("progress");
const button = document.querySelector(".btn");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //   console.log(currentActive);
  Activecircle();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  //   console.log(currentActive);
  Activecircle();
});

function Activecircle() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("Active");
      // console.log(circle);
    } else {
      circle.classList.remove("Active");
    }
  });
  let actives = document.querySelectorAll(".Active");

  console.log(actives.length, circles.length);
  progresss.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(actives);

  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive === 1) {
    previous.disabled = true;
  } else {
    next.disabled = false;
    previous.disabled = false;
  }
}
*/

const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("prev");
const next = document.getElementById("nxt");
const progresss = document.getElementById("progress");
const button = document.querySelector(".btn");

let incre = 1;
/*---------------------------------------------------------------------
incriment the number upto 4 to prevent the incre number  *** use greater then method (>)

 ------------------------------------*/
next.addEventListener("click", () => {
  incre++;

  if (incre > circles.length) {
    incre = circles.length;
  }
  // console.log(incre);
  activeCircle();
});
/*---------------------------------------------------------------------
decrement the number upto 1 not 0 to prevent the decrement number 
 *** use less then method (<)

 ------------------------------------*/
previous.addEventListener("click", () => {
  incre--;

  if (incre < 1) {
    incre = 1;
  }
  activeCircle();
});

function activeCircle() {
  circles.forEach((circle, idx) => {
    if (idx < incre) {
      /*----------------------------------
create a circle animation use *** idx start from 0 and incre = 1  incre reach limit upto 4
--------------------------*/
      circle.classList.add("Active");
    } else {
      circle.classList.remove("Active");
    }
    let actives = document.querySelectorAll(".Active");
    /*----------------------------------
    need grey line fill with blue   *** so i take active class lenth that divided withe circles.length and into 100 and covert to percentage + (%)
--------------------------*/
    progresss.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  });
  if (incre === circles.length) {
    next.disabled = true;
  } else if (incre === 1) {
    previous.disabled = true;
  } else {
    next.disabled = false;
    previous.disabled = false;
  }
}
