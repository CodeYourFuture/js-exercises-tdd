var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var array = ["ashelia", "daniel", "hiwot"];
  // Act
  var result = greetPeople(array);
  // Assert
  expect(result).toEqual("Hello asheliadanielhiwot");
});
