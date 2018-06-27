// people = ["Irina", "Ashleigh", "Etza"]
// greeting = 'Hello Irina'
// person = "Ashleigh"

// []

// ["Irina", "Ashleigh", "Etza"] => ["Hello Irina", "Hello Ashleigh", "Hello Etza"]
//
function greetPeople(people) {
  return people.map(person => "Hello " + person).join(", ");
}

// function greetPeople(people) {
//   var greeting = "";

//   people.forEach(function(person) {
//     greeting = greeting + " Hello " + person;
//   });

//   return greeting.trim();
// }

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
