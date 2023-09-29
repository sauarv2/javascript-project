// ----------------------- Dom seclection --------------------------

const hrsel = document.getElementById("hrs");
const minel = document.getElementById("min");
const secel = document.getElementById("sec");

/*In this block, we're using document.getElementById to retrieve HTML elements with IDs "hrs", "min", and "sec". These elements are placeholders where we'll display the hours, minutes, and seconds of the current time, respectively.*/

console.log(hrsel, minel, secel);

/*
This line logs the retrieved elements to the console, helping us ensure that the correct elements are selected.*/

setInterval(() => {
  // current time
  let currtime = new Date();

  hrsel.innerHTML = (currtime.getHours() < 10 ? "0" : "") + currtime.getHours();
  minel.innerHTML =
    (currtime.getMinutes() < 10 ? "0" : "") + currtime.getMinutes();
  secel.innerHTML =
    (currtime.getSeconds() < 10 ? "0" : "") + currtime.getSeconds();
}, 1000);

/*
We begin by getting references to the HTML elements with the IDs "hrs," "min," and "sec" using document.getElementById.

Next, we define a function named updateClock which will be responsible for updating the clock's display.

Inside updateClock, we create a Date object called currtime to hold the current time.

We then update the content of the hours, minutes, and seconds elements using the innerHTML property. The ternary operator is used to add leading zeros to single-digit values to maintain a consistent format.

Finally, we use setInterval to call the updateClock function every 1000 milliseconds (1 second). This ensures that our clock updates in real-time. */
