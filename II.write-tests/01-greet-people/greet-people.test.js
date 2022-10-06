const myFunctions = require('./greet-people');

myFunctions.gree
test("print list of names prefixed with Hello", function() {
  // Arrange
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  // Act
  const result = myFunctions.greetPeople(mentors);
  // Assert
     expect(name).toEqual('Hello IrinaAshleighEtza');
});
