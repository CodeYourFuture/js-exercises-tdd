function removeMiddle(array) {
  if (array.length % 2 === 0) {
    var midIndex = array.length / 2;
    var result = [array[midIndex-1], array[midIndex]];
    array.splice(midIndex-1, 2);
    return result;
  } else {
    var midIndex = (array.length - 1) / 2;
    var result = [array[midIndex]];
    array.splice(midIndex, 1);
    return result;
  }
}
module.exports = removeMiddle;
