function secondLargestNum(arr) {
  let numLarge = arr.sort(function(a, b) {
    return a - b;
  });
  return numLarge[numLarge.length - 2];
}
module.exports = secondLargestNum;
