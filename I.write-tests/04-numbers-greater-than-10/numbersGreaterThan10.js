function largerThanTen(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > 10) {
      result.push(value);
    }
  }

  return result;
};
module.exports =  largerThanTen;
/*
var predicate = x => x > 10;
var output = input.filter(predicate);
input = input.filter(x => !predicate(x));
*/