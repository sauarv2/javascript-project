const sounds = ["appaluse", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    pausePlay();
    document.getElementById(sound).play();
  });
  document.getElementById("button").appendChild(btn);
});

function pausePlay() {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  });
}
