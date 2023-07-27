// const startEl = document.getElementById("start");
// const stopEl = document.getElementById("stop");
// const myBoxEl = document.getElementById("my_box");

// //  need toa add function  name/..........
// startEl.addEventListener("click", changeColor);
// stopEl.addEventListener("click", stopchageColor);

// let AnimeId;

// function changeColor() {
//   // check if an interval has already been set up
//   if (!AnimeId) {
//     AnimeId = setInterval(chageBox, 1000);
//   }
// }

// function chageBox() {
//   myBoxEl.className = myBoxEl.className === "go" ? "stop" : "go";
// }

// function stopchageColor() {
//   clearInterval(AnimeId);
//   AnimeId = null;
// }
var color = "red";
var outputString = "<table border=1 width=50%>";
outputString = outputString + "<tr><td>a</td><td>a^2</td><td>a^3</td></tr>";

for (var i = 1; i <= 5; i++) {
  if (i % 2 == 0) {
  } else {
  }

  outputString +=
    "<tr class=" +
    color +
    ">" +
    "<td>" +
    i +
    "</td>" +
    "<td>" +
    i * i +
    "</td>" +
    "<td>" +
    i * i * i +
    "</td>" +
    "</tr>";
}

outputString += "</table>";
document.write(outputString);
