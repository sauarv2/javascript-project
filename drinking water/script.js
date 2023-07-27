// ******select the classes and id from html by querySector************

const cupsEL = document.querySelectorAll(".cups");
const literEL = document.getElementById("liter");
const percentageEL = document.querySelector(".percentage");
const smallEL = document.querySelector("small");
const remainedEL = document.getElementById("remained");
updateBigcup();
//  select the all cups  by forEach loop*************

cupsEL.forEach((cups, idx) => {
  cups.addEventListener("click", () => heilightCups(idx));
});

function heilightCups(idx) {
  if (
    cupsEL[idx].classList.contains("full") &&
    !cupsEL[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  cupsEL.forEach((cups, idx2) => {
    if (idx2 <= idx) {
      cups.classList.add("full");
      cups.classList.add("full");
    } else {
      cups.classList.remove("full");
    }
  });
  updateBigcup();
}

function updateBigcup() {
  const fulGlasssEL = document.querySelectorAll(".cups.full").length;
  const fulcupsEL = cupsEL.length;
  console.log(fulGlasssEL);

  if (fulGlasssEL === 0) {
    percentageEL.style.visibility = "hidden";
    percentageEL.style.height = 0;
  } else {
    percentageEL.style.height = `${(fulGlasssEL / fulcupsEL) * 15}rem`;
    percentageEL.innerText = `${Math.ceil((fulGlasssEL / fulcupsEL) * 100)}%`;
    percentageEL.style.visibility = "visible";
    // literEL.innerText = `${2 - (250 * fulGlasssEL) / 1000}L`;
  }

  if (fulGlasssEL === fulcupsEL) {
    remainedEL.style.display = "none";
    remainedEL.style.visibility = "hidden";
  } else {
    remainedEL.style.visibility = "visible";
    remainedEL.style.display = "block";

    literEL.innerText = `${2 - (250 * fulGlasssEL) / 1000}L`;
  }
}
