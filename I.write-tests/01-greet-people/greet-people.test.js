//npm test -- greet-people
var greetPeople = require("./greet-people");
test("print hello +name", function() {
  // Arrange
  var mentors = ["irina", "ashleigh", "etza"];
  // Act
  var result = greetPeople(mentors);
  // Assert
  expect(result).toEqual("Hello irinaashleighetza");
});
