const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
// The JavaScript code starts by selecting two HTML elements using their id attributes: textEl represents the <h1> element with "text" id, and speedEl represents the input element with "speed" id.💥

const text = "My name is saurav saha";
// A JavaScript variable text is defined, containing the text you want to display with the auto text effect: "My name is saurav saha."👨🏻
let idx = 1;
// The variable idx is initialized with a value of 1. It will be used to track the current position in the text string.9️⃣

autoText();
// Next, there's a function autoText() defined. This function is responsible for the auto text effect.🌴

function autoText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(autoText, 200);
}

// It updates the content of the textEl element with a substring of the text variable, starting from index 0 and ending at idx.📝
// It increments idx by 1.🔆🍋🔆🍋🔆
// If idx exceeds the length of the text string, it's reset to 1, allowing the effect to loop.➕➕➕
// A setTimeout function is used to call the autoText() function every 200 milliseconds, creating the auto text effect with a delay of 200 milliseconds between each character reveal.⏳⌛⌚⏲
