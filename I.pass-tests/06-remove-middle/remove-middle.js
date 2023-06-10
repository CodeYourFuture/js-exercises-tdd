function removeMiddle(arr) {
    // find the index of the middle element.
  let middleIndex = Math.floor(arr.length / 2);
//   Remove the middle element from the array
  let removedElement = arr.splice(middleIndex, 1);
//   return the removed element
  return removedElement;
}
module.exports = removeMiddle;