// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

var getEvenNumber = require("./get-even-numbers");
test("Get even number", function() {
  var input = [22, 13, 73, 82, 4];
  var result = getEvenNumber(input);

  expect(result).toEqual([22, 82, 4]);
});
