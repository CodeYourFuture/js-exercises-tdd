var getWordLengths = function(someWords) {
  var arr = [];
  someWords.forEach(element => {
    arr.push(element.length);
  });
  return arr;
};

module.exports = getWordLengths;
