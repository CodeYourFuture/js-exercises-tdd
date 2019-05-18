let removeMiddle = words => {
  let removedWord = words.splice(2, 1);
  return removedWord;
};

module.exports = removeMiddle;
