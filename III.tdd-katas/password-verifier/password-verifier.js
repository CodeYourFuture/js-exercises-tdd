// You can use this regex(which stands for:regular expresion)

// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
// This regex will enforce these rules:

// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)


function notNull(password) {
  if (password === null || password === "") {
    console.log("Password should not be null or empty");
    return false;
  }
  return true;
}
function haveThisCriterias(password) {
  if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}/)
  ) {
    console.log(
      "Password should have at least one uppercase letter, one lowercase letter and one number and also any characters"
    );
    return false;
  }
  return true;
}

module.exports = { notNull, haveThisCriterias };
