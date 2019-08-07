module.exports = largerThanTen;

function largerThanTen(array) {
  return array.filter(number => {
    return number > 10;
  });
}
