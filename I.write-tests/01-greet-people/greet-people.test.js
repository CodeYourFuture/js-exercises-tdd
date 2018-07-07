test('print list of names prefixed with Hello', function () {
    // Arrange
    var mentors = ['Irina', 'Ashleigh', 'Etza'];
    var greetPeople = require('./greet-people');
    // Act
    var result = greetPeople(mentors)
    // Assert
    expect(result).toEqual('helloIrinahelloAshleighhelloEtza');
});