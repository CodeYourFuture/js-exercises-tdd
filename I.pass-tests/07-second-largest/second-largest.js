function secondLargest(numbers){
    return numbers.sort((a,b) => a-b)[numbers.length -2];
}

module.exports =secondLargest;
