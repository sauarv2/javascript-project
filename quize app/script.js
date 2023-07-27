const questionData = [
  {
    question: "what is my Age ?",
    a: "25",
    b: "28",
    c: "26",
    d: "21",
    correct: "c",
  },
  {
    question: "who is our Prime minister ?",
    a: "Rahul Gandhi",
    b: "Ariit Singh",
    c: "Sonia Gandhi",
    d: "Narendra Modi",
    correct: "d",
  },
  {
    question: "what is my Profession ?",
    a: "Software Engineers",
    b: "Sound Engineers",
    c: "Chef",
    d: "Painter",
    correct: "a",
  },
  {
    question: "what is our country name ?",
    a: "USA",
    b: "Bengladesh",
    c: "India",
    d: "Kolkata",
    correct: "c",
  },
];
const questionEL = document.getElementById("question");

const Atext = document.getElementById("Atext");
const Btext = document.getElementById("Btext");
const Ctext = document.getElementById("Ctext");
const Dtext = document.getElementById("Dtext");
const button = document.getElementById("button");
const lastPageEL = document.getElementById("lastPage");
const selectEL = document.querySelectorAll(".chk");

let questiondataNum = 0;

let score = 0;
lodeText();
// questiondataNum++;

function checkedProperty() {
  let se = undefined;
  selectEL.forEach((selectE) => {
    if (selectE.checked) {
      se = selectE.id;
    }
  });
  return se;
}
function desclect() {
  selectEL.forEach((selectE) => {
    selectE.checked = false;
  });
}
function lodeText() {
  const currentQuiz = questionData[questiondataNum];

  questionEL.innerHTML = currentQuiz.question;
  // lastPageEL.innerHTML = currentQuiz;

  Atext.innerHTML = currentQuiz.a;
  Btext.innerHTML = currentQuiz.b;
  Ctext.innerHTML = currentQuiz.c;
  Dtext.innerHTML = currentQuiz.d;
  // console.log(questionData.length);
  desclect();
}

button.addEventListener("click", () => {
  const anwasr = checkedProperty();

  // questiondataNum++;
  console.log(anwasr);
  if (anwasr) {
    if (anwasr === questionData[questiondataNum].correct) {
      score++;
    }
    questiondataNum++;
    if (questiondataNum < questionData.length) {
      // lodeText();

      lodeText();
    } else {
      lastPageEL.innerHTML = `<h2>Your answar correctly ${score}/${questionData.length}question</h2>`;
    }
  }
});
