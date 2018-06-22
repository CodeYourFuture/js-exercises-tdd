test('print list of names prefixed with Hello', function () {
   var greetPeople =require('./greet-people'); // Arrange
  var people = ['Irina','Ashleigh','Etza'];
    // Act
var result = greetPeople(people);
    // Assert
    expect(result).toEqual('Hello IrinaAshleighEtza');
})