function formating(capitals, transform) {
  var expected = [];
  var expected = capitals.map(function(array) {
    return transform(array);
  });
  return expected;
}
module.exports = formating;
