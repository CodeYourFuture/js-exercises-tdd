function orderArray(numbers) {
  var orderedArray = numbers.sort(function(a, b) {
    return b - a;
  });
  return orderedArray[1];
}

module.exports = orderArray;
