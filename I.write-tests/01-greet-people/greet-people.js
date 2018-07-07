function greetPeople(people) {
    var greeting = '';

    people.forEach(function (person) {
        greeting = greeting + 'hello' + person;
    });

    return greeting;
}

module.exports = greetPeople;


  //Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
console.log(result);