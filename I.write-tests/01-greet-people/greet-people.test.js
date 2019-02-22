const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  const people = ["Irina", "Ashleigh", "Etza"];
  const expected = "Hello Irina, Ashleigh, Etza";

  // Act
  const result = greetPeople(people);
  
  // Assert
  expect(result).toEqual(expected);
});
