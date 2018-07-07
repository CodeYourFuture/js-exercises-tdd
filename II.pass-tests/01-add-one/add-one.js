module.exports = function (numbers) {
    // Create an array to hold our new values
    var numberArr2 = [];

    // Iterate through each element in the original array
    for (var i = 0; i < numbers.length; i++) {
      // Decrement the value of the original array and push it to the new one
        numberArr2.push(numbers[i] + 1);
    }
    return numberArr2;
};