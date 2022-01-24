/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given an integer array nums,
 * find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * Need to consider negative numbers
 *  [2,3,-4,3 ,-1] -> 72
 * Edge cases to consier: negative numbers, 0
 *
 *
 */
//Idea here is two pointers, the st and end will move in each iteration, but if we reach a edge case:
//0 start will be moved to index of 0 + 1
const maxProductSubarray_brute = (nums) => {
  //Nested loop - calculating the product for each element with each element after it in the array.
  //As the loop continues the length of our product shrink and excludes values that came before it.
  //O(n2)
  if (nums.length < 2) return nums[0];
  let largestProduct = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let runningProd = 1;
    for (let j = i; j < nums.length; j++) {
      runningProd *= nums[j];
      // console.log(runningProd);
      if (runningProd > largestProduct) largestProduct = runningProd;
    }
  }
  return largestProduct;
};

// console.log(maxProductSubarray_brute([-2, 3, -4, 3, -4]), 144);
// console.log(maxProductSubarray_brute([-2, 0, -1]), 0);
// console.log(maxProductSubarray_brute([-2, 3, -4, -3, -4]), 288);

const maxProductSubarray = (nums) => {
  //O(n) time - O(1) space
  //Create variables for Max and min so far
  //create greatest max
  //On each iteration we are going to create a temp max/min and compare that with the current max/min so far.
  if (nums.length < 2) return nums[0];
  let maxSF = nums[0];
  let minSF = nums[0];
  let greatestMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    tempMax = maxSF * current;
    tempMin = minSF * current;
    maxSF = Math.max(current, tempMin, tempMax);
    minSF = Math.min(current, tempMin, tempMax);
    greatestMax = Math.max(greatestMax, maxSF);
  }
  return greatestMax;
};

console.log(maxProductSubarray([-2, 3, -4, -3, -4]), 288);
console.log(maxProductSubarray([-2, 3, -4, 3, -4]), 144);
console.log(maxProductSubarray([-2, 0, -1]), 0);
// let st = nums[0];
// let ed = nums[st + 1];
// while (st != nums.length - 1 || ed != nums.lenght - 1) {
//   st++;
//   ed++;
// }
