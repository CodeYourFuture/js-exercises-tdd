
var newArray = [];
function fizzbuzz(item){
    
if (item % 3 == 0 && item % 5 == 0) {
    item = "FizzsBuzz";
        } else 
        if (item % 3 == 0) {
    item = "Fizz";

        } else if (item % 5 == 0) {
    item = "Buzz";
           
        }
    newArray.push(item);
    for(var i =0; i< newArray.length; i++){
    }
    return newArray.toString();
}
module.exports = fizzbuzz;