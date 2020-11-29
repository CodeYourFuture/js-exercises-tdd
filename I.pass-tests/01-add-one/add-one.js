module.exports = function(numbers) {
  if(numbers.length === 0){
    throw new Error()
  }
  return numbers.map((n)=> n + 1)
};