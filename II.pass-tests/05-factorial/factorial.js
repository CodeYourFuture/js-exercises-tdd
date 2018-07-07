// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {

    if (int === 0||int === 1) {

        return 1;
    
      } else {
    
        for(var i = int-1; i > 0; --i) { //always make sure to decrement the value BEFORE it's tacked onto the original as a product
          int *= i;
        }
    
        return int;
    
      }
    
    }


module.exports = factorial;