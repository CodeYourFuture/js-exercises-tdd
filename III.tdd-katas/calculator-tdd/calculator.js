function calculator(string) {
  if (string.includes("-")) {
    var newArr = string.split("");
    return (
      "Negative numbers not allowed: " + "-" + newArr[newArr.indexOf("-") + 1]
    );
  } else {
    var newArrSplitted = string.split("");
    var newArrFiltered = newArrSplitted.filter(function(item) {
      return parseInt(item);
    });
    var arrToReduce = newArrFiltered.map(elem => parseInt(elem));
    return arrToReduce.reduce((a, b) => a + b, 0);
  }
}

module.exports = calculator;
