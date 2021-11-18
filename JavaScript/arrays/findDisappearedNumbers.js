//Given array of integers, nums, where nums[i] is within range [1,nums], return an array of all of the missing values
//not found in nums but are found in range [1,nums]

function findDisappearedNumbers_hash(nums) {
  //How can we optimize it?
  //Could make it O(n) in one pass through of nums and build dictionary of found values
  //loop range [1,nums] and if value i not found in dictionary, push that value to our missing array.
  //O(2n) time O(n) space
  let missing = [];
  let appeared = {};
  for (let i = 0; i < nums.length; i++) {
    appeared[nums[i]] = true;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!appeared[i]) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(
  findDisappearedNumbers_hash([1, 1, 4, 3, 5, 6, 4, 3, 1, 3, 10]),
  [2, 7, 8, 9, 11]
);

//Loop [1,nums] length. For each iteration check if that value exist in nums array, if not push i to missing array
//O(n2) time complexity O(n) space
function findDisappearedNumbers_brute(nums) {
  let missing = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(findDisappearedNumbers_brute([1, 1]), [2]);
