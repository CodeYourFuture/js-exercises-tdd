module.exports = getSecondThird;

function getSecondThird(array) {
  const newArray = array.slice();
  newArray.sort(function(x, y) {
    return x - y;
  });
  return [newArray[1], newArray[2]];
}
