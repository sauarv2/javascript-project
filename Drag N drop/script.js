// DOM SELECTION
const emptyEl = document.querySelectorAll(".empty");
const fillEl = document.querySelector(".fill");

// when drag start and drag end...... on fillel
fillEl.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  console.log("dragstart");
  setTimeout(() => {
    e.target.className = "white"; // WHEN DRAG START BOX WILL BE EMPTY
  }, 0);
});
fillEl.addEventListener("dragend", (e) => {
  console.log("dragend");
  e.target.className = "fill"; // IF DRAEG THE END IMAGE CLASS WILL BE ACTIVE BUT NOT ENOUGH IT NEDD DROP DRAG FUNCTION
});
// empty el use dragleave dragenter dragover drop
console.log(emptyEl);
for (let empty of emptyEl) {
  // USING FOR OF LOOP TO CHOSE PERTICULAR EMPTY BOX
  empty.addEventListener("dragover", (e) => {
    e.preventDefault(); // THIS FUNCTION DROP THE IMAGE ON THE BOX BUT IT NEED DRAGEND FUNCTION
    console.log("dragover");
  });

  empty.addEventListener("dragenter", (e) => {
    console.log("dragenter");
    e.target.className += " gry"; // IF IMAGE DRAG ENTER BOX BG WILL BE GREY += NEED
  });

  empty.addEventListener("dragleave", (e) => {
    console.log("dragleave");

    e.target.className = "empty"; // IMAGE LEAVE GREY BOX COLOR WILL BE EMPTY LIKE WHITE
  });

  empty.addEventListener("drop", (e) => {
    console.log("drop");
    e.target.append(fillEl); // DRAG END DROP CALL APPEND FUNCTION IMAGE WILL BE SET IN THE BOX
  });
}
