function removeMiddle(array) {
    
    if(array.length%2===0) {
        result[0] = array[(array.length/2)-1];
        result[1] = array[(array.length/2)];
    } else {
        result[0] = array[(array.length/2)];
    }
    return result;
}
module.exports = removeMiddle;


// public int[] makeMiddle(int[] nums) { 
//     int[] a;
//     if (nums.length %2 == 0) {
//         // even-length array (two middle elements)
//         a = new int[2];
//         a[0] = nums[(nums.length/2) - 1];
//         a[1] = nums[nums.length/2];
//     } else {
//         // odd-length array (only one middle element)
//         a = new int[1];
//         a[0] = nums[nums.length/2];
//     }
//     return a;
// }