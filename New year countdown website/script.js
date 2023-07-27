
// var datee1 = new Date();
// var datee2 = new Date("15 feb 2022");
// var difff = new Date(datee2 - datee1);

// console.log(difff);

// var years = difff.getUTCFullYear() - 1970; // Gives difference as year
// var months = difff.getMonth(); // Gives month count of difference
// var days = difff.getDate(); // Gives day count of difference

// console.log("remaining time = " + years + " years, " + months + " months, " + days + " days.");


const putDate = "29 nov 2022";

const DaysRl = document.getElementById('Day');
const HoursRl =  document.getElementById('Hour');
const MinutesRl =  document.getElementById('Minute');
const SecondsRl =  document.getElementById('Second');

function remainingTime(){
      const putingDate = new Date(putDate);
      const currentDate =new Date();

      const totalSecound = (putingDate - currentDate)/1000;
    //   console.log(totalSecound);
       const Days = Math.floor(totalSecound/3600/24);

       const Hours = Math.floor(totalSecound/3600)%24;

       const Minutes = Math.floor(totalSecound/60)%60;

       const Seconds = Math.floor(totalSecound)%60;

    //   const Seconds = getSeconds();

    DaysRl.innerHTML = timeFormat(Days);

    HoursRl.innerHTML = timeFormat(Hours);

    MinutesRl.innerHTML = timeFormat(Minutes);

    SecondsRl.innerHTML = timeFormat(Seconds);


}

function timeFormat(time){
 return time < 10 ?(`0${time}`):(time);
}

remainingTime();

 setInterval(remainingTime,1000);