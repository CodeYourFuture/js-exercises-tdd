function removeMiddle (words){
  return words.splice(Math.floor(words.length / 2), 1)

}
module.exports = removeMiddle;