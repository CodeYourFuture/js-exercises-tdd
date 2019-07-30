var getWordLengths = function(someWords) {
  let numLength = [];
  someWords.filter(num => {
    numLength.push(num.length);
  });
  return numLength;
};

module.exports = getWordLengths;
