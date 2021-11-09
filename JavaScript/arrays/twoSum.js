/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum_brute = function (nums, target) {
  if (nums.length == 2) {
    return [0, 1];
  }

  // brute force is loop nums, subtract i from target then check if remaining value exist in nums -- O(n2) i think -- Could get it to O(n) if we use a hash table
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == remaining) {
        return [i, j];
      }
    }
  }
};

let twoSum = function (nums, target) {
  //Input array of integers and a target integer
  //Return the indexs of the two integers that sum the target
  //Assume there will always be two numbs that sum and only two to the target
  //only positive integers
  //array will not always be sorted

  //[2,7,11,15], 9 == [0,1]
  //[3,2,4], 6 == [1,2]

  // base case check is necessary if length is equal to 2
  if (nums.length == 2) {
    return [0, 1];
  }

  //How can I speed it up? We're not counting but we do want to keep each iteration. Could loop nums store each value, then loop again checking if its remain value is stored. Hold index as the value... Run into a problem tho if theres a duplicate value... Check if it exist if so, check if that is our answer, if not skip it
  let existing_nums = {};
  for (let i = 0; i < nums.length; i++) {
    if (existing_nums.hasOwnProperty([nums[i]])) {
      if (target / 2 == nums[i]) {
        return [existing_nums[nums[i]], i];
      }
    } else {
      existing_nums[nums[i]] = i;
    }
  }
  for (let j in existing_nums) {
    let remaining = target - j;
    if (existing_nums[remaining]) {
      return [existing_nums[j], existing_nums[remaining]];
    }
  }
};

console.log(twoSum_brute([3, 2, 3, 4], 7), [0, 3]);
console.log(twoSum([3, 2, 3], 6), [0, 2]);
