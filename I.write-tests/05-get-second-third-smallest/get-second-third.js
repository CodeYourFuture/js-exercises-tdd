module.exports = function getSecondThird(array) {
  // function getSecondThird(array) {
  array.sort(function(x, y) {
    return x > y;
  });
  // var newArray = [];
  // newArray.push(x);
  console.log("array " + array[1]);
  console.log("new array " + array[2]);
  return array[0], array[1];
}
//var result = getSecondThird([90, 5, 11, 8, 6]);
