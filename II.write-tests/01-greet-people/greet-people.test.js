let greetPeople = require("./greet-people");

test("pring list names", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);

  expect(result).toBe("Hello Irina, Hello Ashleigh", "Hello Etza");
  // Arrange
  // Act
  // Assert
});
