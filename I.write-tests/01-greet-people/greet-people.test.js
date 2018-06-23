var greetPeople = require("../01-greet-people/greet-people")

test('print list of names prefixed with Hello', function () {
    // Arrange
    //given
    var mentors = ['Irina', 'Ashleigh', 'Etza'];
    // Act
    //when

    var result = greetPeople(mentors)


    // Assert
    //then
    expect(result).toBe('Hello IrinaAshleighEtza');

})