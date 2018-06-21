function removeVowels(word) {
    var characters = word.split('');

    var result = [];

    characters.forEach(function (character) {
        if (character === 'a' || character === 'o' || character === 'i' || character === 'e'
            || character === 'u' || character === 'y') {
            result.push(character)
        } else {
            result.push('_')
        }
    })

    return result.join('');
}
function removeVowels2(word) {
    var characters = word.split('');

    var result = [];

    characters.forEach(function (char) {
        let character = char.toLowerCase();
        if (character === 'a' || character === 'o' || character === 'i' || character === 'e'
            || character === 'u' || character === 'y') {
            // result.push(character)
        } 
        else {
            result.push(character);
        }
    })

    return result.join('');
}

module.exports = { removeVowels, removeVowels2 };

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/

