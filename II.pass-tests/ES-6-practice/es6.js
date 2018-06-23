// Turn this function into an arrow function
const arrow = () => "es6 is awesome!";


//Use the es6 syntax for default parameter
const defaultParameter = (name) => {
  name = name || "sam";
  return name;
}


// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => arr3 = [...arr1, ...arr2];

//use destructuring to return the object's cyf property
const destructuring = ({ cyf }) => { return cyf };

// use template literal to return a string with the sum of a and b
templateString = (a, b) => `The sum is equal to ${(a + b).toString()}`


module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
};
