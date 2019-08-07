function add(a, b) {
  if (a === "" && b === "") {
    return "";
  }
  if (a != "" && b != "") {
    return a + ", " + b;
  }
  if (a != "") {
    return a;
  }
  if (b != "") {
    return b;
  }
}
module.exports = add;
