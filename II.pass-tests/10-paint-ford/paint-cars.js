function paintShop(carsArrays) {
  var pinkCarsArray = carsArrays.filter(make=>make.colour ==='pink');
  
  return pinkCarsArray;
};
module.exports = paintShop;
