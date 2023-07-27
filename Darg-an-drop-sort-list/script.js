let data = [
  // data of persons  *******************************

  //   you can use as api ******************************

  {
    name: "Kristina Zasiadko",
    image: "img-1.jpg",
  },
  {
    name: "Gabriel Wilson",
    image: "img-2.jpg",
  },
  {
    name: "Ronelle Cesicon",
    image: "img-3.jpg",
  },
  {
    name: "James Khosravi",
    image: "img-4.jpg",
  },
  {
    name: "Annika Hayden",
    image: "img-5.jpg",
  },
  {
    name: "Donald Horton",
    image: "img-6.jpg",
  },
];

// **********************select the item by querySelector***********************

const ul = document.querySelector("ul");

const createListelement = () => {
  ul.innerHTML = "";
  data.forEach((profile, i) => {
    // ************* CREATE A lI ELEMENT AND PUT THE DATA *********************

    const li = document.createElement("li");
    li.setAttribute("list-pos", i);

    // *********** ADD HTML CODE ***********

    li.innerHTML = `  
    <div class="details">
    <img src="images/${profile.image}">
    <span>${profile.name}</span>
    </div>
    <i class="uil uil-draggabledots"></i>`;
    ul.appendChild(li);
  });
  listenToEvents();
};
createListelement();

function listenToEvents() {
  let list = ul.querySelectorAll("li"),
    current_pos,
    drop_pos;

  for (let li of list) {
    li.draggable = true;

    li.ondragstart = function () {
      current_pos = this.getAttribute("list-pos");
    };
    li.ondragenter = () => console.log();
    li.ondragleave = () => console.log();
    li.ondragend = () => console.log();
    li.ondragover = (e) => e.preventDefault();
    li.ondrop = function () {
      // e.preventDefault();
      drop_pos = this.getAttribute("list-pos");
      data.splice(drop_pos, 0, data.splice(current_pos, 1)[0]);

      createListelement();
    };
  }
}

//  ******************data of person and images*********************
// need to save data drag and drop
