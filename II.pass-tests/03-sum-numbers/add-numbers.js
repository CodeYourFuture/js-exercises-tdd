function addNumbers(numbers) {
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer);
}
module.exports = addNumbers;