var numbers = [2, 0, 23, 0, 57, 1];

function secondLargest(num) {
    var Biggest = 0;
    var secondBiggest = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > Biggest) {
            secondBiggest = Biggest;
            Biggest = num[i];

        }
    }
    return (secondBiggest);
}
// secondLargest(numbers);



module.exports = secondLargest;