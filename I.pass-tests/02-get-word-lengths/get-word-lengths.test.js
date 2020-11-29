var wordLengths = require("./get-word-lengths");

test("Get word lengths", function() {
  var words = ["sun", "potato", "roundabout", "pizza"];
  var expected = [3, 6, 10, 5];


  var output = wordLengths(words);
  expect(output).toEqual(expected);
});

test("If there is an element that is not a string", function(){
  const words = [123, "string"]
  expect(() => wordLengths(words).toThrow(Error))
})

test("If array of words is empty", function(){
  const words = []
  expect(() => wordLengths(words)).toThrow(Error)
})