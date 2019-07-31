function removeMiddle(arr) {
  var retWord = [arr[Math.floor(arr.length / 2)]];
  arr.splice(Math.floor(arr.length / 2), 1);
  return retWord;
}
module.exports = removeMiddle;
