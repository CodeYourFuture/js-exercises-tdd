let secondLargest = numbers => {
  let secondLargestNumber = numbers.sort(function(firstNum, secondNum) {
    return secondNum - firstNum;
  });
  return secondLargestNumber[1];
};

module.exports = secondLargest;

// function secondLargest(number) {
//   return number.sort(function (a, b) {
//     return b - a;
//   })[1];
// }
