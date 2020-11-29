var getWordLengths = function(someWords) {
  if(someWords.length === 0){
    throw new Error()
  }
  return someWords.map((word)=> {
    if(typeof word != 'string'){
      throw new Error()
    }
    return word.split('').length
  })
};

module.exports = getWordLengths;