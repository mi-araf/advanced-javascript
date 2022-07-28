const nums = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// index ->    0,  1,  2,  3,  4,  5,  6,  7,  8
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 13) {
        break;
    }
    console.log(element); // 11 12 13
}

console.log(` `);

const nums2 = [11, -12, 13, 14, -15, -16, 17, -18, 19];
// index ->    0,  1,  2,  3,  4,  5,  6,  7,  8
for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    if (element < 0) {
        continue;
    }
    console.log(element); // 11 -12 13
}