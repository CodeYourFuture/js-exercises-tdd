module.exports = function getSecondThird(array) {
  // function getSecondThird(array) {
  array.sort(function(x, y) {
    return x > y;
  });
  var newArray = [];
  newArray.push(array);
  console.log("array " + array);
  console.log("new array " + newArray);
  return [newArray[1], newArray[2]];
};
var result = getSecondThird([90, 5, 11, 8, 6]);
