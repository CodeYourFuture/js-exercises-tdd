function greetPeople(people) {
  var greeting = "Hello ";
  var myarray = []
  people.forEach(function (person) {
    myarray.push(greeting + person);
  });

  return myarray;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
