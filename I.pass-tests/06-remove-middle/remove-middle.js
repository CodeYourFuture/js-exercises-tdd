function removeMiddle(arr) {
  /*
  find length of array
  if array length is positive return
  if array length is negative divide by 2
  round answer up to next whole number
  use this value as index
  */
  const arrLength = arr.length;
  const arrIndex = Math.floor(arrLength / 2);

  if (arrLength % 2 === 0) return;

  return arr.splice(arrIndex, 1);
}

module.exports = removeMiddle;