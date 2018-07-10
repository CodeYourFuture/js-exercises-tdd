// greetPeople :: array of strings and return each string with greeting  -> String 
// var mentors = ['Irina', 'Ashleigh', 'Etza'];
function greetPeople(mentors) {
   greeting = 'Hello';
   
   mentors.forEach(function(person) {
        greeting= greeting + person;
    })
    return greeting;
};

module.exports = greetPeople;

/*var mentors = ['Irina', 'Ashleigh', 'Etza'];
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/