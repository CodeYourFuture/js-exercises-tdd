function paintShop(arrayOfCars, suggestedColor) {
  // I used the line below to make a copy without refrence of the array of object.
  var newArr = Array.from(JSON.parse(JSON.stringify(arrayOfCars)));
  newArr[0].colour = suggestedColor;

  return newArr;
}

module.exports = paintShop;
