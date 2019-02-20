// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers){
    var sum = 0;
    const arrayNumbers = numbers.filter(number => {
        return typeof number === "number";
    } )
    arrayNumbers.forEach(number => {
    return sum += number;
    });
return sum / arrayNumbers.length;
}
module.exports = average;


//for(var i =0; i < numbers.length; i++){
    //     sum += Number(numbers[i], 10)
    //     return sum;
    // }
    // var avg = numbers.length / sum;
    //  return avg