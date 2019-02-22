var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  const people = ["Irina", "Ashleigh", "Etza"]; // Arrange //input
  const expectation = "Hello Irina, Ashleigh, Etza"; //expected output

  const result = greetPeople(people); // actual Act

  expect(result).toEqual(expectation); // Assert- was it what was expected.
});
