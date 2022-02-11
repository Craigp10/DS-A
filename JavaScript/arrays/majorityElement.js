/**
 * @param {number[]} nums
 * @return {number}
 * given array of ints, return the number that is the majority... Majority means it occurances more than nums.length / 2
 * Majority != n/2, must be greater than
 */
const majorityElement_brute = function (nums) {
  // create dictionary of occurances, calc majority #, iterate dict return
  let numObj = {};
  let majority = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (!numObj[nums[i]]) numObj[nums[i]] = 0;
    numObj[nums[i]]++;
    if (numObj[nums[i]] > majority) return nums[i];
  }
};

const majorityElement = function (nums) {
  //Majority prooves that if we count on occurance we will finish with the most common number since it has to be present
  //more than half of the indexes.
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      count++;
      major = nums[i];
    } else if (major == nums[i]) {
      count++;
    } else count--;
  }
  return major;
};

console.log(majorityElement([2, 2, 3, 1, 3, 3, 2, 3, 3]), 3);
console.log(majorityElement([1, 2, 2]), 2);
