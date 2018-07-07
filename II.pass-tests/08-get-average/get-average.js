// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the stringsmodule.exports = function (array) {
    function getAverage(array) {
        var sum = 0;
         numbersOnly = array.filter(item=>typeof item == "number").map(item=>item);
        return numbersOnly.reduce((sum,number)=>sum+number)/numbersOnly.length;
       }

     
       module.exports = getAverage;