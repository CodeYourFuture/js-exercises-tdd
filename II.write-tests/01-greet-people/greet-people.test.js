var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);
  expect(result).toBe("Hello Irina, Hello Ashleigh, Hello Etza");
  // Arrange
  // Act
  // Assert
});

/* esempio 2
test("print list of names prefixed with Hello sorted", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"].sort();
  var result = greetPeople(mentors);
  expect(result).toBe("Hello Irina, Hello Ashleigh, Hello Etza");
  // Arrange
  // Act
  // Assert
});

 esempio 3
test("empty list", function() {
  var mentors = [];
  var result = greetPeople(mentors);
  expect(result).toThrow();
  // Arrange
  // Act
  // Assert
});
*/
