
const log = console.log;
const myFunctions = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  // Arrange 
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  // Act
  const result = myFunctions.greetPeople(mentors);
  // Assert
  log('result',result)
     expect(result).toEqual('Hello IrinaAshleighEtza');

});
