function removeVowels(word) {
    var strInLowerCase = word.toLowerCase();
    var characters = strInLowerCase.split("");
    

    var result = [];

    characters.forEach(function (character) {
     
        if (
          character == "a" ||
          character == "e" ||
          character == "i" ||
          character == "o" ||
          character == "u"
        ) {
          result.push("");
        } else {
          result.push(character);
        }
    })

    return result.join('');
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/