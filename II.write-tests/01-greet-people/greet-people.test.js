const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  var teachers = ["Anu", "Junita", "Saliha"];
  // Act
  var result = greetPeople(teachers);
  // Assert
  expect(result).toBe("Hello AnuJunitaSaliha")
});
