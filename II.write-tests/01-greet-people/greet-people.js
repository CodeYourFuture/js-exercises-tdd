
function greetPeople(people) {
  const greeting = people.map(person => `Hello ${person}`);
  return greeting;
}

module.exports = {greetPeople};


