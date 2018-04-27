function removeMiddle(array) {
  var removed = [];
  var count = (array.length - 1) / 2;
  removed.push(array[count]);
  array = array.splice(count, 1);

  return removed;
}
module.exports = removeMiddle;
