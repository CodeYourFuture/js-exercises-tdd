// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

//Recursively

function factorial(int) {
  if (int < 0) {
    return -1;
  } else if (int == 0) {
    return 1;
  } else {
    return int * factorial(int - 1);
  }
}

//Non-Recursively
// function factorial(int) {
//   if (int < 0) {
//     return -1;
//   } else if (int == 0) {
//     return 1;
//   } else {
//     product = 1;
//     for (i = 1; (i = int); i++) {
//       product *= 1;
//     }
//     return product;
//   }
// }

module.exports = factorial;
