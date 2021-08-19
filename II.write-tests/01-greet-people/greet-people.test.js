var  greetPeople = require("./greet-people")
test("print list of names prefixed with Hello", function() {
  // Arrange
  var listOfNames = ['Irina', 'Ashleigh', 'Etza'];
  var result = "Hello IrinaAshleighEtza"
  // Act
  var output = greetPeople(listOfNames)
  // Assert
  expect(output).toEqual(result);
});
