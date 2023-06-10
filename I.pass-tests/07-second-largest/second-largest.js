function secondLargest(numbers) {
    var max = -Infinity;
    var secondMax = -Infinity;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        secondMax = max;
        max = numbers[i];
    }else if(numbers[i] > secondMax && numbers[i] !== max) {
        secondMax = numbers[i];
    }
}
return secondMax;
}

module.exports = secondLargest;