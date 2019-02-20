function removeVowels(word) {
  var characters = word.split("");

  var result = [];
  const myVowels = ["a", "A", "o", "O", "i", "I", "e", "E", "u", "U", "y", "Y"];
  characters.forEach(function(character) {
    if (myVowels.includes(character)) {
      result.push("");
    } else {
        result.push(character.toLowerCase());
    }
  });

  return result.join("");
}
// const names = ["Irina", "Etza", "Daniel"];
// var x = names.map(function(name) {
//   return removeVowels(name);
// });
// console.log(x);
module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
  the expected value of ("samuel") result will be sml because aue are vowel
*/
