/**
 * @param nums - nums[]
 * @returns boolean
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

const containsDuplicate_brute = (nums) => {
  //nested loop, comparing each value to one another and if equal return true. Otherwise false
  //O(1) space - O(n2) time
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }

  return false;
};

console.log(containsDuplicate_brute([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
console.log(containsDuplicate_brute([1, 2, 3, 4]), false);
console.log(containsDuplicate_brute([1, 2, 3, 1]), true);

const containsDuplicate = (nums) => {
  //Create object storing values. If current value already exist in object than return true;
  //O(n) space - O(n) time
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numObj[nums[i]]) return true;
    else numObj[nums[i]] = true;
  }
  return false;
};

const containsDuplicate = (nums) => {
  //super fast algo.
  return new Set(nums).size != nums.length;
};
