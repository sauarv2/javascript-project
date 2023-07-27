const notsEL = document.querySelector(".nots");
const editbtnEL = document.querySelector(".editbtn");
const deletbtnEL = document.querySelector(".deletbtn");
const mainEL = document.querySelector(".main");
const textareaEL = document.querySelector("textarea");

editbtnEL.addEventListener("click", () => {
  mainEL.classList.toggle("hidden");
  textareaEL.classList.toggle("hidden");
});

textareaEL.addEventListener("input", (e) => {
  const { value } = e.target;
  mainEL.innerHTML = marked(value);
});
