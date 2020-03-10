var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
    // Arrange
    var mentors = ['Irina', 'Ashleigh', 'Etza'];
    var expected1 = "Hello Irina";
    var expected2 = "Hello Ashleigh";
    var expected3 = "Hello Etza";
    // Act
    var result = greetPeople(mentors)
        // Assert
    expect(result).toEqual(expected1);
    expect(result).toEqual(expected2);
    expect(result).toEqual(expected3);
});