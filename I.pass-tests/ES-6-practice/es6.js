// Turn this function into an arrow function
let arrow = () => "es6 is awesome!";

//Use the es6 syntax for default parameter
let defaultParameter = (name = "sam") => name;

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

//use destructuring to return the object's cyf property
function destructuring({ cyf }) {
  return cyf;
}

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return `The sum is equal to ${JSON.stringify(a + b).toString()}`;
}

module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
};
