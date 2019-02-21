function getLargestNumber(array) {

    var LargestNumber = array.reduce(function (a, b) { return Math.max(a, b); }); 
return LargestNumber;

// Below provided function doesn't find the largest number in a array in every case. 
// That's why below function codes has been re-edited in above.  
/*    
    var largestNumber;
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            largestNumber = array[i]
        }
    }
    return largestNumber;
*/
}

module.exports = getLargestNumber;