const computerEL = document.querySelector(".computerPlay");
const userEL = document.querySelector(".userPlay");
const resultEL = document.querySelector(".result");
const buttonEL = document.querySelectorAll("button");
let get;
let com;
let res;
buttonEL.forEach((buttonol) =>
  buttonol.addEventListener("click", (e) => {
    get = e.target.id;
    userEL.innerHTML = get;
    computeer();
    getResult();
  })
);

function computeer() {
  const randomCom = Math.trunc(Math.random() * buttonEL.length) + 1;

  //   console.log(randomCom);

  if (randomCom === 1) {
    com = "rock";
  }
  if (randomCom === 2) {
    com = "paper";
  }
  if (randomCom === 1) {
    com = "seissor";
  }
  computerEL.innerHTML = com;
}

function getResult() {
  if (com === get) {
    res = "Match is draw";
  }
  if (com === "seissor" && get === "rock") {
    res = "User wins";
  }
  if (com === "rock" && get === "seissor") {
    res = "You Lost";
  }
  if (com === "rock" && get === "paper") {
    res = "user wins";
  }
  if (com === "paper" && get === "rock") {
    res = " You Lost";
  }
  if (com === "seissor" && get === "paper") {
    res = " You Lost";
  }
  if (com === "paper" && get === "seissor") {
    res = " User wins";
  }
  resultEL.innerHTML = res;
}
