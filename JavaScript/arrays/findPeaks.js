/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * 
 * A peak element is an element that is strictly greater than its neighbors.

  Given an integer array nums, find a peak element, and return its index. 
  If the array contains multiple peaks, return the index to any of the peaks.

  You may imagine that nums[-1] = nums[n] = -∞.


 */

const findPeakElement = function (nums) {
  //as soon as we find a peak return its index
  //binary search but how does this modify it?
  //Numbers won't be sorted in traditional ascending order... but will be to a peak order?
  //goal to find mid that is great than both st and end?
  if (nums.length == 0) return -1; //this check isn't not necessary in LC run
  if (nums.length == 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  //after condition checks...
  let st = 0;
  let ed = nums.length - 1;
  while (st <= ed) {
    //logic here move in the direction that the bigger value is in from the mid check.
    let mid = Math.floor((st + ed) / 2);
    //check if mid is a peak
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    //if nums[mid] > the next index -- assign mid to mid - 1 and work in the lower direction
    if (nums[mid] > nums[mid + 1]) {
      ed = mid - 1;
    } else {
      //otherwise assign start to mid + 1 and work in the upper direction
      // nums[mid] < nums[mid + 1]
      st = mid + 1;
    }
  }
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]), [1, 5]);
console.log(findPeakElement([1, 2, 3, 1]), [2]);
console.log(findPeakElement([]), -1);
console.log(findPeakElement([4]), 0);
console.log(findPeakElement([2, 1]), 0);
