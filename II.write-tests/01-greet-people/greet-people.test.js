var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  var input = greetPeople(["Irina", "Ashleigh", "Etza"]);
  var result = "Hello IrinaAshleighEtza";
  expect(result).toBe(input);

  // Arrange
  // Act
  // Assert
});
