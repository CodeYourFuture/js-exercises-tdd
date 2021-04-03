const greetPeople = require('./greet-people')

describe("The greetPeople function", function() {
  test("print list of names prefixed with Hello", function() {
    // Arrange
    // Act
    // Assert

    const mentors = ['Irina', 'Ashleigh', 'Etza']
    const result = greetPeople(mentors)
    const output = [
      'Hello Irina',
      'Hello Ashleigh',
      'Hello Etza'
    ]

    expect(result).toEqual(output)
  })
})
