let cities = state => {
  let arr = [];
  for (let place of state) {
    if (place.city) {
      arr.push(place.city + " is the capital of " + place.country);
    }
  }
  return arr;
};

//return key
module.exports = cities;
