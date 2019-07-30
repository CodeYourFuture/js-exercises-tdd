function addNumbers(numbers) {
  var sumNum = numbers.reduce((num, total) => {
    return num + total;
  }, 0);
  return sumNum;
}
module.exports = addNumbers;
