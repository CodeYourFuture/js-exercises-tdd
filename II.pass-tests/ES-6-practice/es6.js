/* Turn this function into an arrow function
function arrow() {
  return "es6 is awesome!";
} */
const arrow = () => "es6 is awesome!";

/*Use the es6 syntax for default parameter
function defaultParameter(name) {
  var name = name || "sam";
  return name;
}
*/
var defaultParameter = (name = "sam") => name;

// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => [...arr1, ...arr2];

/*use destructuring to return the object's cyf property
function destructuring(obj) {
  return obj.cyf;
} */
const destructuring = ({ cyf }) => cyf;

// use template literal to return a string with the sum of a and b
const templateString = (a, b) => `The sum is equal to ${(a + b).toString()}`;

module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
};
