//Medium Array
//Given array of positive and negative integers, return an array containing arrays of all
//triplet pairs that sum to 0.
//i != j, i != k, and j != k

function threeSum_brute(nums) {
  //this approach counts duplicate anwsers
  //Complexity O(n3)
  if (nums.length < 3) return [];

  let returnArray = [];

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let second = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        let third = nums[k];
        if (first + second + third == 0 && i != j && i != k && k != j)
          returnArray.push([first, second, third]);
      }
    }
  }
  return returnArray;
}
// console.log(threeSum_brute([-1, 0, 1, 2, -1, -4]));

function threeSum(nums) {
  if (nums.length < 3) return [];
  //sort nums -- We now have dups in consecitive order
  nums.sort(function (a, b) {
    return a - b;
  });

  let returnArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i - 1] == nums[i]) continue; //Meaning if we have two duplicate nums skip the second occurence
    //Set left pointer to i + 1 and right pointer to end of nums
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        returnArray.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left - 1] == nums[left]) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return returnArray;
}

console.log(threeSum([-1, -2, 2, 4, 5, 8, 20, -18, 0, 1, 2, -1, -4]));
