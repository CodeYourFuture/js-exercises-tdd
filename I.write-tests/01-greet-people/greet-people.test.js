var greetPeople = require("./greet-people");
test("print hello + names", function() {
  // Arrange
  var mentors = ["irina", "ashleigh", "etza"];

  // Act
  var result = greetPeople(mentors);

  // Assert
  expect(result).toEqual("Hello irinaashleighetza");
});
