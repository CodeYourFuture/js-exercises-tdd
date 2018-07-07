function secondLargest(array) {
  var secondlargestNumber;
  array.sort((a, b) => b - a);
  secondLargestNumber= array[1];
  
  return secondLargestNumber;
}

module.exports = secondLargest;
