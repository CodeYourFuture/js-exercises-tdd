let average = numbers => {
  let listOfNumbers = excludeStrings(numbers);
  const denominator = listOfNumbers.length;
  const numerator = sum(listOfNumbers);
  return numerator / denominator;
};

function sum(numbers) {
  let additon = numbers.reduce((a, b) => {
    return a + b;
  });
  return additon;
}

function excludeStrings(numbers) {
  // be sure to exclude the strings
  let arrayOfNumbers = numbers.filter(number => {
    return typeof number === "number";
  });
  return arrayOfNumbers;
}

module.exports = average;

// function average(arr) {
//   let count = 0;
//   arr.reduce((x, y) => {
//     if (+y) {
//       count++;
//       x += +y;
//     } else {
//       return x;
//     }
//   }, 0);
//   return count;
// }
