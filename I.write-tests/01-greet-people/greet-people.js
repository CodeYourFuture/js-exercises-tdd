function greetPeople(people) {
  var greeting = "Hello ";
  return greeting + people.join(", ");
}

module.exports = greetPeople;
