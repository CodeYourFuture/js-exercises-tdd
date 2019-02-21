// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function (numbers) {
  //filtering the numbers
  numbers = numbers.filter(number => {
    return typeof number === "number";
  });
  return (numbers.reduce((total, number) => {
    //finding the total of filtered numbers
    return total + number;
  }) / numbers.length // calculating the average
  );
};
