test("print list of names prefixed with Hello", function() {
  // Arrange
  var greetPeople = require("./greet-people");
  var mentors = ["Irina", "Ashleigh", "Etza"];
  // Act
  var result = greetPeople(mentors);

  // Assert
  expect(result).toEqual("Hello Irina, Hello Ashleigh, Hello Etza");
});
