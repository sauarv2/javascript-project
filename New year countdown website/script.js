// var datee1 = new Date();
// var datee2 = new Date("15 feb 2022");
// var difff = new Date(datee2 - datee1);

// console.log(difff);

// var years = difff.getUTCFullYear() - 1970; // Gives difference as year
// var months = difff.getMonth(); // Gives month count of difference
// var days = difff.getDate(); // Gives day count of difference

// console.log("remaining time = " + years + " years, " + months + " months, " + days + " days.");

const putDate = "1 jan 2024";

const DaysRl = document.getElementById("Day");
const HoursRl = document.getElementById("Hour");
const MinutesRl = document.getElementById("Minute");
const SecondsRl = document.getElementById("Second");

let futureDate = new Date(putDate);
let todaysDate = new Date();

let remaining_day = futureDate - todaysDate;

const remainingTime = function () {
  let putingDate = new Date(putDate);
  let currentDate = new Date();
  //   const putingDate = new Date(putDate);
  //   const currentDate = new Date();
  //   console.log(putingDate - currentDate);

  //   frist take substract newyear date to current date into total secound->

  const totalSecound = (putingDate - currentDate) / 1000;

  //   count days from totalsecound->
  const Days = Math.floor(totalSecound / 86400);

  //   count hours from totalsecound ->
  const Hours = Math.floor(totalSecound / 3600) % 24;

  //   count minutes from totalsecound->
  const Minutes = Math.floor(totalSecound / 60) % 60;

  //   count secounds from totalsecound->
  const Seconds = Math.floor(totalSecound) % 60;

  //   const Seconds = getSeconds();

  //   this numbers Days Hours Minutes  Seconds  to show in webpages ->

  DaysRl.innerHTML = timeFormat(Days);

  HoursRl.innerHTML = timeFormat(Hours);

  MinutesRl.innerHTML = timeFormat(Minutes);

  SecondsRl.innerHTML = timeFormat(Seconds);
};
// if number less then  ten minutees ->

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

remainingTime();

if (remaining_day <= 0) {
  clearInterval(remainingTime);
  DaysRl.innerHTML = 0;

  HoursRl.innerHTML = 0;

  MinutesRl.innerHTML = 0;

  SecondsRl.innerHTML = 0;
} else {
  setInterval(remainingTime, 1000);
}
