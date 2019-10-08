module.exports = function(numbers) {
  let newArr = numbers.map(number => {
    return number + 1;
  });
  return newArr;
};
