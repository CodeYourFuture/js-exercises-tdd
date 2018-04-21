var getEvenNumber = require("./get-even-numbers");
test("return even number", function() {
  //arrange
  var input = [22, 13, 73, 82, 4];
  //act
  var result = getEvenNumber(input);
  //assert
  expect(result).toEqual([22, 82, 4]);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
