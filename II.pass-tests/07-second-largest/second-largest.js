function secondLargest(numbers) {
 var sortNum = numbers.sort();
 var indexOfLargest = numbers.length - 1;
 var secondLargest= indexOfLargest-2;
 var result = numbers[secondLargest];
 return  result;
}

module.exports = secondLargest;

//////////////////////////////////////////

// function secondLargest(numbers) {
// var big = numbers[0];
// var secondLargest = null;
// for(var i=0; i<numbers.length;i++) {
// if(numbers[i]>big) {
//     secondLargest=big;
//     big=numbers[i];
// } else if (numbers[i]>secondLargest) {
//     secondLargest=numbers[i];
// }

// }
// return secondLargest;
// }
