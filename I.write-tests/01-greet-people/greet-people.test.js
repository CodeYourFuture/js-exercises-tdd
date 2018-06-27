test("print list of names prefixed with Hello", function() {
  // Arrange
  // Given
  var greetPeople = require("./greet-people");
  var mentors = ["Irina", "Ashleigh", "Etza"];

  // Act
  //When
  var result = greetPeople(mentors);

  // Assert
  //Then
  expect(result).toEqual("Hello Irina, Hello Ashleigh, Hello Etza");

  // expect(greetPeople([
  //     "Irina",
  //     "Ashleigh",
  //     "Etza"
  //   ])).toEqual("Hello Irina, Hello Ashleigh, Hello Etza");
});
