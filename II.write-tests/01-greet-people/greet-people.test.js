var greetPeople = require('./greet-people.js');

test("print list of names prefixed with Hello", function() {
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);

  var expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"];

  expect(result).toEqual(expected);
});

