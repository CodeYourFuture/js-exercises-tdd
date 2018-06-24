function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "A" ||
      character === "O" ||
      character === "I" ||
      character === "E" ||
      character === "U" ||
      character === "Y" ||
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" ||
      character === "y"
    ) {
      // result.push("_");
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("").toLowerCase();
  console.log("end result " + result);
}

module.exports = removeVowels;

var result = removeVowels("samuel");
/*
  Let's trace this piece of code - what is the value of result with this input

  

  what is the value of result?
*/
