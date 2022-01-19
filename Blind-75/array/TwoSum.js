/***
 * @param nums - number[]
 * @param target - number
 * @returns number[]
 *
 * Given Array of nums and a target num, return the indecies as an array for the nums that when added together equal target
 * Assume there will only have be 1 combination that works
 */

const twoSum_brute = (nums, target) => {
  //Nested loop, adding each element with every other element and comparing with the target value
  //O(n2) runtime - O(1) space
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (curr + nums[j] == target) return [i, j];
    }
  }
};

// console.log(twoSum_brute([1, 2, 3, 4, 5], 8), [2, 4]);
// console.log(twoSum_brute([1, 2, 3, 4, 5], 3), [0, 1]);
// console.log(twoSum_brute([1, 2, 3, 4, 5], 9), [3, 4]);
// console.log(twoSum_brute([1, 2, 3, 4, 5], 4), [0, 2]);

const twoSum = (nums, target) => {
  //Creating object and for each iteration determine the value needed to equal the target in addition to the current val
  //If the val exist in our object then return its value, which will be its index and the current index
  //O(n) time - O(n) space

  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (needed in numsObj) return [numsObj[needed], i];
    numsObj[nums[i]] = i;
  }
};

console.log(twoSum([3, 3], 6), [0, 1]);
console.log(twoSum([1, 2, 3, 4, 5], 8), [2, 4]);
console.log(twoSum([1, 2, 3, 4, 5], 3), [0, 1]);
console.log(twoSum([1, 2, 3, 4, 5], 9), [3, 4]);
console.log(twoSum([1, 2, 3, 4, 5], 4), [0, 2]);
console.log(twoSum([1, 2, 3, 4], 6), [1, 3]);
