function removeMiddle(words) {
  let numIndex = words.indexOf("queen");
  let oneWord = words.splice(numIndex, 1);
  return oneWord;
}

module.exports = removeMiddle;
