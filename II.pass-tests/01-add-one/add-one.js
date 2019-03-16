 function addOne(numbers) {

     numbers.forEach((element, index, arr) => {
         arr[index] = element + 1;
     });

     return (numbers);

     //  console.log(numbers);

 }
 //  const myArray = [31, 57, 12, 5];
 //  addOne(myArray);



 module.exports = addOne;



 //  const unchanged = [31, 57, 12, 5];
 //  const expected = [32, 58, 13, 6];
 //  const output = addOne(myArray);