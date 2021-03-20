module.exports = function(numbers) {
  return numbers.map(number => {
    if (typeof number !== 'number') return null;
    return number + 1;
  });
};
