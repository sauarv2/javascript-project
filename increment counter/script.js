const countEL = document.querySelectorAll(".count");

// ---- using for each method when you have multple class in same name -----
countEL.forEach((counter) => {
  counter.innerHTML = "";

  const updateCounter = () => {
    // ----this line target the data number write in html-----
    // using (+) sign it covert to string to number-------

    const target = +counter.getAttribute("data-target");
    const c = +counter.innerHTML;
    const increment = target / 250;
    console.log(increment);
    console.log(c);
    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCounter();
});
