function convertObjToString(obj) {
  let arr = [];
  for (var key of obj) {
    arr.push(`${key.city} is the capital of ${key.country}`);
  }
  return arr;
}

module.exports = convertObjToString;
