const lovemeL = document.querySelector(".loveMe");
const timeseL = document.querySelector("#times");
let ign = 0;
lovemeL.addEventListener("dblclick", (e) => {
  MouseEvent(e);
});

const MouseEvent = (e) => {
  const op = document.createElement("ion-icon");

  op.setAttribute("name", "heart");
  op.classList.add("oi");

  lovemeL.appendChild(op);
  timeseL.innerHTML = ++ign;
  setTimeout(() => {
    op.remove("ion-icon");
  }, 1000);
};
