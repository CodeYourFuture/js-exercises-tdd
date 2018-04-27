function fizzBuzz(num) {
  var array = [];
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("fizzbuzz");
    } else if (i % 3 == 0) {
      array.push("fizz");
    } else if (i % 5 == 0) {
      array.push("buzz");
    } else {
      array.push(i);
    }
  }
  var array2 = array.join(",");
  return array2;
}
module.exports = fizzBuzz;
