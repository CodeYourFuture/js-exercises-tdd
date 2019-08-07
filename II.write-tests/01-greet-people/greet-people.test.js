var greetPeople = require("./greet-people");

test("print list names", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);

  expect(result).toBe("Hello IrinaAshleighEtza");
});
