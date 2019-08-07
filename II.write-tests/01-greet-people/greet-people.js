function greetPeople(people) {
  var greeting = "Hello ";

  var newPeople = people.map(person => {
    return " " + greeting + person;
  });

  return newPeople.toString().trim();
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input
*/
var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);
