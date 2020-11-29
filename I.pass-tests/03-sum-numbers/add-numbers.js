function addNumbers(numbers) {
  if(numbers.length===0){
    throw new Error()
  }
  return numbers.reduce((acc,current)=> {
    if (typeof current != 'number'){
      throw new Error()
    }  
    return acc+current
  })
}
module.exports = addNumbers;
