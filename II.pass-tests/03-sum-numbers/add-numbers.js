function addNumbers(numbers) {
    var sum=0;
 return numbers.reduce((sum,number)=>sum+number);
}
module.exports = addNumbers;