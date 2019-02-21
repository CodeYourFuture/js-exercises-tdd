function addNumbers(numbers) {
/*    var total=0;
for (i=0; i<numbers.length; i++){
    total = total + numbers[i];
}
return total;
*/
total=0;
total= numbers.reduce(
     function (total, number) { 
        return total+number;   
        }
     );
return total;
}
module.exports = addNumbers;