function addNumbers(numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  });
  //   var total = 0;
  //   numbers.forEach(number => {
  //     total += number;
  //   });
  //   return total;
}
module.exports = addNumbers;
