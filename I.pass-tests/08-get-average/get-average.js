// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getAvarage(arr) {
  let numbers = arr.filter(num => {
    return typeof num === "number";
  });
  return numbers.length;
}
module.exports = getAvarage;
