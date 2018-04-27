function carPainting(array, color) {
  var newArray = array.slice();
  newArray.map(function(element) {
    if (element.make === "Ford") {
      element.colour = color;
      return element;
    } else {
      return element;
    }
  });
  return newArray;
}
module.exports = carPainting;
