/*
const countEL = document.querySelectorAll(".count");

// console.log(countEL);
countEL.forEach((count) => {
  //   console.log(count);
  count.innerHTML = "0";
  const updateNum = () => {
    const tarNumber = +count.getAttribute("data-target");
    //   console.log(typeof tarNumber);
    const int = +count.innerHTML;
    const incre = tarNumber / 600;
    //   console.log(int);
    if (int < tarNumber) {
      const innum = `${Math.ceil(int + incre)}`;
      setTimeout(updateNum, 2);
      count.innerHTML = innum;
    } else {
      count.innerHTML = tarNumber;
    }
  };
  updateNum();
});
*/

const countEL = document.querySelectorAll(".count");

// console.log(countEL);

/********* select Every count ****/

countEL.forEach((countp) => {
  countp.innerHTML = "0";

  /*** select the target number ***/
  function numberincre() {
    const targetNum = +countp.getAttribute("data-target");
    // console.log(targetNum); 
    let ini = +countp.innerHTML;
    let incre = targetNum / 600;
    // console.log(incre);
    if (ini < targetNum) {
      let inum = `${Math.ceil(incre + ini)}`;
      setTimeout(numberincre, 3);
      countp.innerHTML = inum;
    } else {
      countp.innerHTML = targetNum;
    }
  }
  numberincre();
});
