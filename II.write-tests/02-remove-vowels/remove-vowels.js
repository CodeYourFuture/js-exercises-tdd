function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" ||
      character === "A" ||
      character === "E" ||
      character === "I" ||
      character === "O" ||
      character === "U"
    ) {
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;
//var result = removeVowels("Samuel");

//console.log(result);

/*
  Let's trace this piece of code - what is the value of result with this input

  
  what is the value of result?
*/
