const toasteL = document.getElementById("toasts");
const buttoneL = document.getElementById("button");
// select the dom element************ 💥

// messagess ***************** 🎫

const messages = [
  "Message One 1️⃣",
  "Message Two 2️⃣",
  "Message Three 3️⃣",
  "Message Four 4️⃣",
  "Message Five 5️⃣",
  "Message Six 6️⃣",
  "Message Saven 7️⃣",
  "Message Eaight 8️⃣",
  "Message Nine 9️⃣",
  "Message Ten🔟",
];

buttoneL.addEventListener("click", () => createNotfi()); //⬇ ⬇ ⬇ ⬇

const tyofmessage = ["info", "success", "error"];
// type of meaasge according to color in css same name 😙😙

function createNotfi(messaage = null, type = null) {
  // create a parameter thats default value is null😶

  // create a div element -------------- 🎉
  const op = document.createElement("div");
  op.classList.add("toast");
  op.classList.add(type ? type : tyofmessage[showType()]); // if type is null show the ramdom type of meaaage after click 🎃🎃
  //   ⬇ ⬇ same comment
  op.innerHTML = messaage ? messaage : messages[showMessage()]; // use trinary oporetor
  //   here i need random messaage  so i call a function that give me random numaber
  //   according the  random number we got random message ************ 🎭

  toasteL.appendChild(op); // use appendchild *********
  setTimeout(() => {
    op.remove(); //click after 3sec new div element will remove ******** 🥚
  }, 3000);
}

function showMessage() {
  return Math.trunc(Math.random() * messages.length); // create a ramdom number ********* ♉
}
function showType() {
  return Math.trunc(Math.random() * tyofmessage.length); // create a ramdom number ********* ♉
}

// ******************************** code working in success 💃🏻💃🏻💃🏻 ******************
