let paintShop = (carsObjet, paint) => {
  var duplicateObject = JSON.parse(JSON.stringify(carsObjet));
  for (let i in duplicateObject) {
    if (duplicateObject[i].colour === "Red") {
      duplicateObject[i].colour = paint;
    } else {
      carsObjet;
    }
  }
  return duplicateObject;
};
module.exports = paintShop;

/**
 * When using
 *let newObject = Object.assign(carsObjet); or let newObject = carsObjet.slice();
 * A change in the originalObject will reflect on the dublicated object
 * one the other hand, when using  var duplicateObject = JSON.parse(JSON.stringify(carsObjet))
 * A change  in the originalObject, will bot be applied to  the duplicate object!
 */
