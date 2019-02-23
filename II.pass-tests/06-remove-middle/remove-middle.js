function removeMiddle (words) {
  if (words.length % 2) {
    // returns 1 which evaluates as true
    return words.splice((words.length - 1) / 2, 1) // getting the middle Element index
  }
}
module.exports = removeMiddle
