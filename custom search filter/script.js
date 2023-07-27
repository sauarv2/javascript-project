const inputEL = document.querySelector("input");

inputEL.addEventListener("keyup", search);

function search() {
  const valueEL = document.getElementById("value").value.toUpperCase();
  const profileEL = document.querySelectorAll(".profile");
  for (let i = 0; i < profileEL.length; i++) {
    const nameEl = profileEL[i].querySelectorAll(".name");
    console.log(valueEL);
    console.log(nameEl[0].innerHTML.toUpperCase().indexOf(valueEL));

    if (nameEl[0].innerHTML.toUpperCase().indexOf(valueEL) > -1) {
      profileEL[i].style.display = "flex";
    } else {
      profileEL[i].style.display = "none";
    }
  }
}
