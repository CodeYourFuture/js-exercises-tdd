// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers){
    total=0;
    numberOfNumbers =0;
for (i=0; i<numbers.length; i++){
    if (typeof(numbers[i]) === "number"){
        total = total + numbers[i];
        numberOfNumbers = numberOfNumbers+1;
    }
}
return total/numberOfNumbers;
}

module.exports = average;
