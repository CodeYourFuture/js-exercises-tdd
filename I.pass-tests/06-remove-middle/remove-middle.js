function removeMiddle(arr) {
  //The "Math.floor(arr.length / 2)" is for finding the middle of array
  return arr.splice(Math.floor(arr.length / 2), 1);
}

module.exports = removeMiddle;
