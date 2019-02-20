// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = numbers => {
  let sum = 0;
  const arryOfNumbers = numbers.filter(number => typeof number === "number");
  arryOfNumbers.forEach(number => (sum += number));
  return sum / arryOfNumbers.length;
};
