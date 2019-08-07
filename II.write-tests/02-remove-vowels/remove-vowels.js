function removeVowels(word) {
  var characters = word.split("");

  var result = [];
  //inserisci maiuscole e togli spazi
  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "A" ||
      character === "o" ||
      character === "O" ||
      character === "i" ||
      character === "I" ||
      character === "e" ||
      character === "E" ||
      character === "u" ||
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

/*
  Let's trace this piece of code - what is the value of result with this input
*/
var result = removeVowels("samuel");
/*
  what is the value of result?
*/
