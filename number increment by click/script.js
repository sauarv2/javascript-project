const plusEl = document.querySelector(".plus");
const numEL = document.querySelector(".num");
const minusEl = document.querySelector(".minus");

// console.log(plusEl, nuMEL, minusEl);

let number = 1;

plusEl.addEventListener("click", () => {
  number++;
  number = number < 10 ? "0" + number : number;
  //   console.log(number);
  numEL.innerHTML = number;
});

minusEl.addEventListener("click", () => {
  if (number > 1) {
    number--;
    number = number < 10 ? "0" + number : number;
    //   console.log(number);
    numEL.innerHTML = number;
  }
});
