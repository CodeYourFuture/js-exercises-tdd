function removeMiddle(arr) {
  if (arr.length % 2 != 0) {
    var middleIndex = Math.floor(arr.length / 2);
    var milley = arr.splice(middleIndex, 1);
    return milley;
  }
}
module.exports = removeMiddle;
