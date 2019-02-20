module.exports = words => {
  const middleIndex = Math.ceil((words.length - 1) / 2);
  const middleWord = words.splice(middleIndex, 1);
  return middleWord;
};
