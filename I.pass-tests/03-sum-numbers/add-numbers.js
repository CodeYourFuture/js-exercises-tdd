function addNumbers(numbers) {
  return numbers.reduce(function (acc, curr) {
    if (typeof curr !== 'number') return acc;
    return acc + curr;
  }, 0);
}

module.exports = addNumbers;
