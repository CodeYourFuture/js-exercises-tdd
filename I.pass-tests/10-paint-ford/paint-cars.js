function paintShop(cars, newColour) {
    var carArr = JSON.parse(JSON.stringify(cars));
  if (newColour) {
    carArr.map((car) => {
      car.colour = car.colour === "Red" ? newColour : car.colour;
    });
  }
 
  return carArr;
}
module.exports = paintShop;
