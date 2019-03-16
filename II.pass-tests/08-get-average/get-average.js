// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

var numbers = [4, '-', 8, 11, 'hello', '57', 0, 2];

function average(arr) {
    for (var i = 0; i < arr.length; i++) { //for (i in arr){}
        if ((typeof arr[i] === "string")) { //!Number.isInteger(arr[i])
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}

average(numbers);
module.exports = average;