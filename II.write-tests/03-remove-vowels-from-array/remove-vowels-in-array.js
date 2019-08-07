var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = removeVowelsForWords;

var array1 = ["Irina", "Etza", "Daniel"];
//    expected output: ["rn", "tz", "Dnl"]

removeVowelsForWords(array1);
