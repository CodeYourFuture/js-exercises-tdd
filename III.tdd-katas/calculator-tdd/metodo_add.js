function add(string) {
  var check = /\n/g; // regexp check for \n
  var checkAllTypeDelimiter = /^\/\/.\n/; // find out which delimiter is used
  var checkNegativeNumbers = /-[0-9]+/g; // check for negative numbers
  var bool = checkNegativeNumbers.test(string); // boolean for test negatives numbers
  var arrayNegativeNumbers = [];
  // check for negative numbers********************************************
  if (bool) {
    var errorMessage = "";
    arrayNegativeNumbers = string.match(checkNegativeNumbers);
    arrayNegativeNumbers.forEach(element => {
      errorMessage = errorMessage + " " + element;
    });
    return "negatives not allowed:" + errorMessage;
  }
  // check for if string is empity and if string is only one character*****
  if (string === "") {
    return 0; // return 0 if string is empity
  } else if (string.length === 1) {
    return parseInt(string); // return int value if string is only one character
  }
  // take new delimitator *************************************************
  if (string.match(checkAllTypeDelimiter)) {
    var newDelimiter = string.charAt(2); // get delimiter
    check = new RegExp(`\\` + `${newDelimiter}`, "g"); // build new regexp with delimiter
    string = string.substr(4); // clean string from delimiter declaration
  }
  var newString = string.replace(check, ",");
  var unFilterResult = newString.split(",");
  var filterResult = unFilterResult.filter(
    elemento => parseInt(elemento) < 1001
  );
  var finalResult = filterResult.reduce(
    (acc, elem) => (acc = parseInt(acc) + parseInt(elem))
  );
  return finalResult;
}
module.exports = add;
