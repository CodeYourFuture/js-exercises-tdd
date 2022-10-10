const greeFuncs = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  // Arrange
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  // Act
  const result = greeFuncs.greetPeople(mentors);
  // Assert
  expect(result).toEqual(['Hello Irina', 'Hello Ashleigh', 'Hello Etza']);
});
