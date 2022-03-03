function secondLargest(numbers){
  return numbers.sort((a,b) => {return a-b})[numbers.length - 2]
}


module.exports=secondLargest;

console.log(secondLargest([2, 0, 23, 0, 57, 1, 230]))