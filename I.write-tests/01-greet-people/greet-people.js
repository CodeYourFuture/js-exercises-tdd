function greetPeople(people) {
    var greeting = 'Hello ';

  return greeting + people.join(', ');
}

module.exports = greetPeople;
console.log(greetPeople(['Irina', 'Ashleigh', 'Etza']))

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/