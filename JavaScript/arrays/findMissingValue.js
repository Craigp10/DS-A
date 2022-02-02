/**
 * 
 * @param {} nums 
 * @returns num 

 Given an array nums containing n distinct numbers in the range [0, n],
 return the only number in the range that is missing from the array.

 */

const findMissing_brute = (nums) => {
  //O(2n)
  let appeared = {};

  for (let i = 0; i < nums.length; i++) {
    appeared[nums[i]] = true;
  }
  for (let j = 1; j < nums.length + 1; j++) {
    if (!appeared[j]) return j;
  }
};

const findMissing = (nums) => {
  //O(n)
  //Iterate array compiling a sum
  //Compare sum with total that array should have in [1,n] and return the difference. That is the missing valeu
  let total = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};

console.log(findMissing_brute([0, 1, 2, 3, 4]), 5);
console.log(findMissing_brute([0, 1, 2, 3, 5]), 4);
