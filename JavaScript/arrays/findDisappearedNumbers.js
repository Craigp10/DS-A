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

// console.log(
//   findDisappearedNumbers_hash([1, 1, 4, 3, 5, 6, 4, 3, 1, 3, 10]),
//   [2, 7, 8, 9, 11]
// );
// console.log(findDisappearedNumbers_hash([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
function findDisappearedNumbers_brute(nums) {
  //Loop [1,nums] length. For each iteration check if that value exist in nums array, if not push i to missing array
  //O(n2) time complexity O(n) space
  let missing = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing;
}

// console.log(findDisappearedNumbers_brute([1, 1]), [2]);

function findDisappearedNumbers_spaceOptimized(nums) {
  //O(n) Space and time
  //temporary sort nums by placing nums[i] in nums[i] - 1
  //Loop range [1,nums], if j doesn't exist at nums[j-1] it didn't appear in nums and can be pushed onto return array
  let missing = [];
  for (let i = 0; i < nums.length; i++) {
    //Loop nums
    while (nums[nums[i] - 1] != nums[i]) {
      let tmp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = tmp;
    }
  }
  for (let j = 1; j < nums.length + 1; j++) {
    if (j != nums[j - 1]) {
      missing.push(j);
    }
  }

  return missing;
}

console.log(
  findDisappearedNumbers_spaceOptimized([4, 2, 7, 2, 2, 1, 1]),
  [3, 5, 6]
);

console.log(
  findDisappearedNumbers_spaceOptimized([4, 3, 2, 7, 8, 2, 3, 1]),
  [5, 6]
);
