const greetPeople = require("./greet-people.js")

test("print list of names prefixed with Hello", function () {
  // Arrange
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  const expected = ['Hello Irina', 'Hello Ashleigh', 'Hello Etza'];
  // Act
  const result = greetPeople(mentors)

  // Assert
  expect(result).toEqual(expected)
});
