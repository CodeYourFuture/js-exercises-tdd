function removeVowels(word) {
    return word.toLowerCase().replace(/[aeiou]/g, '');
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/