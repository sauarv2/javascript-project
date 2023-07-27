//    THIS IS  A TRICK  TO CHANGE THE CURRENCY LOGO ********************************************
const number = 12345;
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});
console.log(formatter.format(number));
// Output: $123,456.79

const number1 = 45556;

const format = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(number1);

console.log(format);
