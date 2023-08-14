// create a object*************
const questionData = [
  {
    question: "what is my bunu age ?",
    a: "24",
    b: "28",
    c: "26",
    d: "21",
    correct: "a",
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
let answar = undefined;

let score = 0;

// DOM SELECTION
const questionEL = document.getElementById("question");

const Atext = document.getElementById("Atext");
const Btext = document.getElementById("Btext");
const Ctext = document.getElementById("Ctext");
const Dtext = document.getElementById("Dtext");
const button = document.getElementById("button");
const lastPageEL = document.getElementById("lastPage");
const selectEL = document.querySelectorAll(".chk");

let questiondataNum = 0; //   TAKE 0 AS VARIABLE

lodequestion();

function lodequestion() {
  deSelecttheAns();
  const Allquestiondata = questionData[questiondataNum]; //  questionData[0]

  questionEL.innerText = Allquestiondata.question; //  questionData[0].question -> "what is my bunu age ?"

  Atext.innerHTML = Allquestiondata.a; //  questionData[0].a -> 24
  Btext.innerText = Allquestiondata.b; //  questionData[0].b -> 28
  Ctext.innerText = Allquestiondata.c; //  questionData[0].c ->26
  Dtext.innerText = Allquestiondata.d; //  questionData[0].d ->21
}

// ************ SELECT THE ANSWER *****

function SelecttheAns() {
  // let ans = undefined;
  let ans; // take a empty variable so return the selected value

  selectEL.forEach((selecAns) => {
    if (selecAns.checked) {
      ans = selecAns.id; // get the Id of the value
    }
  });
  return ans; // return the value
}
// uncheck the default  selected option
function deSelecttheAns() {
  selectEL.forEach((selecAns) => {
    selecAns.checked = false;
  });
}

// LODING QUIZ****************

button.addEventListener("click", () => {
  // if i press the submit button lode the next question

  const ans = SelecttheAns(); // now ans = selected value that was return
  console.log(ans);

  //if not get the value it will not go to the next question*****
  if (ans) {
    if (ans === questionData[questiondataNum].correct) {
      //if the selected value that is return value is equal to question correct value  so score will be increment
      score++;
    }

    questiondataNum++; //increment the number 0-> 1 -> 2 -> 3 -> 4 like this

    questiondataNum < questionData.length
      ? lodequestion()
      : // write the score at the end******
        (lastPageEL.innerHTML = `<h2>Your answar correctly ${score}/${questionData.length} question</h2>`);
  } else {
    alert("Please select the answer"); // if not select the answer
  }
});
