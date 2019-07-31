function secondLargest(arr) {
  var intArr = arr.map(Number);
  return intArr.sort((a, b) => b - a)[1];
}

module.exports = secondLargest;
