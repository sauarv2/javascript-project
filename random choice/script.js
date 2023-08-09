const tagsEL = document.getElementById("tags");
const textareaEL = document.getElementById("textarea");

textareaEL.focus();

/*

textareaEL.addEventListener("keyup", (e) => {
  creatElement(e.target.value);
});

function creatElement(input) {
  const inputEl = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEL.innerHTML = " ";

  inputEl.forEach((tag) => {
    const tagEL = document.createElement("span");
    tagEL.classList.add("tag");
    tagEL.innerHTML = tag;
    tagsEL.appendChild(tagEL);
     // console.log(tagEL);
  });
}
*/

textareaEL.addEventListener("keyup", (e) => {
  keyInput(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = " ";
    }, 10);

    randomChoice();
  }
});

function keyInput(input) {
  const textEL = input
    .split(",")
    .filter((tag) => tag.trim() != "")
    .map((tag) => tag.trim());

  tagsEL.innerHTML = "";

  textEL.forEach((tags) => {
    const tagEL = document.createElement("span");
    tagEL.classList.add("tag");
    tagEL.innerText = tags;
    tagsEL.appendChild(tagEL);
  });
}

function randomChoice() {
  const interver = setInterval(() => {
    const pickrandomtag = pickrandomChoice();

    highLightTag(pickrandomtag);

    setTimeout(() => {
      unhighLightTag(pickrandomtag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interver);
    const pickrandomtag = pickrandomChoice();
    highLightTag(pickrandomtag);
  }, 5000);
}

function pickrandomChoice() {
  const tagEL = document.querySelectorAll(".tag");
  return tagEL[Math.floor(Math.random() * tagEL.length)];
}

function highLightTag(tags) {
  tags.classList.add("active");
}
function unhighLightTag(tags) {
  tags.classList.remove("active");
}
