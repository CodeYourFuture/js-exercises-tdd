var makeNumber = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return 0;
};

var stringToArray = function(string, delimiter) {
  return string.split(delimiter || ",");
};

var fixString = function(string, delimiter) {
  return string.replace("\n", delimiter || ","); //this is for 3. step
};

var findDelimiter = function(string) {
  if (string.substr(0, 2) === "//") {
    var numIndex = string.indexOf("\n");
    var delimiter = string.substring(2, numIndex);
    var string = string.substring(numIndex + 1);
    return [string, delimiter];
  } else {
    return [string, null];
  }
};
var checkNegativeNumber = function(array) {
  var newArray = array.filter(element => {
    if (element < 0) {
      return element;
    }
  });
  if (newArray.length >= 1) {
    return [true, newArray];
  } else {
    return [false, null];
  }
};

function intAdd(numbers) {
  temp = findDelimiter(numbers);
  numbers = temp[0];
  var delimiter = temp[1];
  numbers = fixString(numbers, delimiter);
  var sum = 0;
  var numbersArray = stringToArray(numbers, delimiter);
  var isNegative = checkNegativeNumber(numbersArray);
  if (isNegative[0] === true) {
    sum = "negatives not allowed: " + isNegative[1];
  } else {
    numbersArray.forEach(total => {
      var addnumber = makeNumber(total);
      sum += addnumber;
    });
  }
  return sum;
}
module.exports = intAdd;
