function secondLargest(array) {
  var newArray = array.sort(function(a, b) {
    return a < b;
  });
  return newArray[1];
}
module.exports = secondLargest;
