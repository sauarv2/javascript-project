const GridEL = document.getElementById("grid");

const arrayCard = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
let chooseCard = [];
arrayCard.sort(() => 0.5 - Math.random());
// console.log(arrayCard);

function selectCard() {
  for (let i = 0; i < 12; i++) {
    const bgImg = document.createElement("img");
    bgImg.setAttribute("src", "images/blank.png");
    bgImg.setAttribute("Data-id", i);
    console.log(bgImg);
    bgImg.addEventListener("click", flipCard);
    GridEL.appendChild(bgImg);
  }
}
selectCard();
function flipCard() {
  console.log(arrayCard);
  const cardId = this.getAttribute("Data-id");
  //   console.log(arrayCard[cardId]);
  chooseCard.push(arrayCard[cardId].name);
  console.log(chooseCard);
}
