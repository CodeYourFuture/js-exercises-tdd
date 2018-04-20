function verify(password) {
  var array = password.split("");
  var msg = [];
  var upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z"
  ];
  var lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "j",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "y",
    "z"
  ];
  var numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];

  function isThereUpperCase(array) {
    var sum = 0;
    upperCaseLetters.map(function(letter) {
      if (array.includes(letter) === true) {
        sum = sum + 1;
      }
    });
    return sum;
  }

  function isThereLowerCase(array) {
    var sum = 0;
    lowerCaseLetters.map(function(letter) {
      if (array.includes(letter) === true) {
        sum = sum + 1;
      }
    });
    return sum;
  }

  function isThereNumber(array) {
    var sum = 0;
    numbers.map(function(num) {
      if (array.includes(num) === true) {
        sum = sum + 1;
      }
    });
    return sum;
  }
  var num = 0;
  if (password === "") {
    msg.push("Please write a password! ");
    num = 4;
  } else {
    if (isThereLowerCase(array) === 0) {
      msg.push("It doesn't have an lower case. ");
      num = 4;
    }
    if (array.length < 8) {
      msg.push("It is lesser than 8 characters. ");
      num = num + 1;
    }
    if (isThereUpperCase(array) === 0) {
      msg.push("It doesn't have an upper case. ");
      num = num + 1;
    }
    if (isThereNumber(array) === 0) {
      msg.push("It doesn't have an number. ");
      num = num + 1;
    }
  }
  if (num === 0) {
    msg.push("The password is valid!");
  } else if (num < 3 && num > 0) {
    msg.push("But the password is valid!");
  } else {
    msg.push("The password isn't valid!");
  }
  num = 0;
  return msg.join("");
}
module.exports = verify;
