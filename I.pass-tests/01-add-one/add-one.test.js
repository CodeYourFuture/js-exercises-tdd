var addOne = require("./add-one.js");

test("Add 1 to each item in myArray", function() {
  var myArray = [-1, 57, 12, 5];


  var unchanged = [-1, 57, 12, 5];
  var expected = [0, 58, 13, 6];
  var output = addOne(myArray);


  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

test('should throw error if there are no numbers in the array', () => {
  const myArray = []
  expect(() => addOne(myArray)).toThrow(Error)
})