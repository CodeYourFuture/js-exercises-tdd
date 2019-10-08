var greetPeople = require("./greet-people.js");
test("print list of mentors prefixed with Hello", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);
  expect(result).toBe("Hello Irina, Ashleigh, Etza");
});
