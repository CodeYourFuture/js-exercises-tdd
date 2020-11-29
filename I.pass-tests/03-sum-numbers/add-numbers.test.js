var addAllnumbers = require("./add-numbers");

test("Add all numbers", function() {
  var numbers = [9, 23, 10, 3, 8];
  var expected = 53;

  var output = addAllnumbers(numbers);

  expect(output).toEqual(expected);
});

test("Check if array is empty", function() {
  var numbers = [];
  expect(()=>addAllnumbers(numbers)).toThrow(Error);
});

test("If there is an element that is not a number", function(){
  const words = [123, "string"]
  expect(() => wordLengths(words).toThrow(Error))
})
