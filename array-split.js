/* slice -> (কোপ মারা) works on index
-> returns selected elements in an array, as a new array.
-> selects from a given start, up to a (not inclusive) given end.
-> does not change the original array.
-> params e জেই index থাকবে, তার আগে সে কোপ মারবে
-> orginal array remain unchaged */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //    0, 1, 2, 3, 4, 5, 6, 7, 8
const part2to6Slice = nums.slice(2, 6);
console.log("Index 2 to 6 using slice", part2to6Slice);  // [ 3, 4, 5, 6 ]
console.log(nums);


/* splice -> works on index 
 -> adds and/or removes array elements..
 -> first param - start index, second param - 
 -> orginal array cahnges */
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8];
        //     0, 1, 2, 3, 4, 5, 6, 7
const remove2to5Splice = nums2.splice(2, 5);
console.log("Index 2 to 5 using splice", remove2to5Splice);  // [ 3, 4, 5, 6, 7 ]
console.log(nums2);  // [1, 2, 8]

// splice and add
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8];
        //     0, 1, 2, 3, 4, 5, 6, 7
const removeADD2to5Splice = nums3.splice(2, 5, 39, 20);
console.log("Index 2 to 5 using splice & then add", removeADD2to5Splice);  // [ 3, 4, 5, 6, 7 ]
console.log(nums3);  // [ 1, 2, 39, 20, 8 ]

const join = nums3.join("', ");
console.log("Join", join);
console.log(nums3);

{  /* synatx 
1. array.slice(start, end(up to the end))
2. array.splice(index, howmany, item1, ....., itemX)
*/  }