function secondLargest(numbers) {
    numbers.sort(function(a,b){return b-a});
    console.log(numbers);
    return numbers[1];
}

module.exports = secondLargest;