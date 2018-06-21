var { removeVowels, removeVowels2} = require('../02-remove-vowels/remove-vowels')
removeVowels2("samuel");
function removeVowelsForWords(words) {
    var result = words.map(function (word) {
        return removeVowels2(word)
    });

    return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "dnl"]
*/