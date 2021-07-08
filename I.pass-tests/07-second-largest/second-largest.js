function secondLargest(numbers) {
 return numbers.sort((a, b) => b-a)[1];
}
module.exports = secondLargest;
