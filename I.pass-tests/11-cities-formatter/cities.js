function formatCities(arr, funct) {
  var obj = [];
  arr.forEach(d => {
    obj.push(funct(d));
  });
  return obj;
}
module.exports = formatCities;
