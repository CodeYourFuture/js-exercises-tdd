var greetPeople = require('./greet-people');

test("print list of names prefixed with Hello", function() {
    // Arrange
    var mentors = ['irina', 'ashleigh', 'etza'];
    // Act
    var result = greetPeople(mentors);
    // Assert
    expect(result).toEqual('Hello irinaashleighetza');
});
