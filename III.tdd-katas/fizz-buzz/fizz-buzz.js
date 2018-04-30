//refactoring

function isDividedBy3(number) {
  return number % 3 === 0;
}
function isDividedBy5(number) {
  return number % 5 === 0;
}
/////////////////////////////////

function fizzbuzz(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    if (isDividedBy3(i) && isDividedBy5(i)) {
      result.push("fizzbuzz");
    } else if (isDividedBy3(i)) {
      result.push("fizz");
    } else if (isDividedBy5(i)) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

module.exports = fizzbuzz;
