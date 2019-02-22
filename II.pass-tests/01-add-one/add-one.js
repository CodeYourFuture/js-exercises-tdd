module.exports = function(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] + 1);
  }

  return newArray;

  /*the function numbers will create a new array
  which is a modified version of the current array, 
  the for loop goes through each number in the indexes 
  of the current and and will push this to the new array but plus 1 */
};
