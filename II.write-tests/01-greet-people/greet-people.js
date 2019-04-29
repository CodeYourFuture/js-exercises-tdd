function greetPeople(people) {
  var greeting = "Hello ";

  people.forEach(function(person, idx) {
    var lastElement = idx === people.length - 1;
    if (lastElement) {
      greeting = greeting + "" + person;
    } else {
      greeting = greeting + "" + person + ", ";
    }
  });

  return greeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
