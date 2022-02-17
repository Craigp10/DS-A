/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Given an array of nums and a k value, return the count of different
 * number products in the array that are less than k
 * 
 * Ex. [10,5,2,6], k = 100 -> 8
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is == k, we want strictly less than

* Ex 2. [10,5,1,2,6] k = 100 -> 13
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6], [10,5,1], [1], [5,1],[5,1,2],[5,1,2,6]
 * 
 */
const numSubarrayProductLessThanK_brute = function (nums, k) {
  //O(n2)
  //nested loop, comparing each continuous window until the product >= k
  if (!nums.length || k == 0) return [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    let j = i;
    while (prod < k) {
      prod *= nums[j];
      if (prod < k) count++;
      j++;
    }
  }
  return count;
};

const numSubarrayProductLessThanK = function (nums, k) {
  //O(n)
  
  //if n[i] < k it needs to be pushed
  //sliding window/2 pointer
  //start sliding window at position 0 until prod > k;
  //At that point we know a couple of instances we need to count
    //1. the window size
    //2. each value inside the window
    //3. the different sub windows in the window.
  //This can be accomplished by right - left... [3,1] 2 unique values inside + 1 for the window it self
  // each iteration we can add to count --accounting for the different combos created with the new increment + new window size


  //O(n)
  if (!nums.length || k == 0) return [];
  let left = 0,
    prod = 1,
    count = 0,

  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
    while (prod >= k && left <= i) {
      prod /= nums[left];
      left += 1;
    }
    count += i - left + 1;
  }
  return count;
};

console.log(numSubarrayProductLessThanK_brute([10, 5, 1, 2, 6], 100), 13);
console.log(numSubarrayProductLessThanK_brute([10, 5, 2, 6], 100), 8);
console.log(numSubarrayProductLessThanK_brute([10, 5, 2, 6], 0), 0);
console.log(numSubarrayProductLessThanK_brute([], 50), 0);
