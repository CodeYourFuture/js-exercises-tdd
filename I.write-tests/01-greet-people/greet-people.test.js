test("print list of names prefixed with Hello", function() {
  // Arrange
  //Given
  var greetPeople = require("./greet-people");
  var mentors = ["Irina", "Asleigh", "Etza"];

  // Act
  //When
  var result = greetPeople(mentors);

  // Assert
  // Then
  expect(result).toEqual("Hello IrinaAsleighEtza");
});
