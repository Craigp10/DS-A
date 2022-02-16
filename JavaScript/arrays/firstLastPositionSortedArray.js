/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Given a sorted array of numbers and a target num
 * return the first index and last index of the target element in the array
 * If target not foudn in array -- return [-1,-1]
 *
 */

const searchRange_brute = (nums, target) => {
  if (!nums.length) return [-1, -1];
  if (nums.length == 1 && nums[0] == target) return [0, 0];

  //brute force -- O(n)
  let ptr1 = 0;
  let ptr2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      ptr1 = i;
      ptr2 = i;
      let j = i + 1;
      while (j < nums.length && nums[j] == target) {
        j++;
        ptr2++;
      }
      return [ptr1, ptr2];
    }
  }
  return [-1, -1];
};

//Ex. 1 [5], 8 -> [-1,-1]
//Ex. 2 [5,7,7,8,8,8,10], 8 -> [3,5]

const searchRange = (nums, target) => {
  //binary Search + while loops when found
  //edge conditions

  if (!nums.length) return [-1, -1];
  if (nums.length == 1) return nums[0] == target ? [0, 0] : [-1, -1];

  //start binary search for target. continue search until we find index of target
  //While loop in both directions to find the first and last positon with two ptrs.
  let st = 0;
  let ed = nums.length - 1;

  while (st <= ed) {
    if (st == ed) {
      return nums[st] == target ? [st, ed] : [-1, -1];
    }

    let mid = Math.floor(ed - st / 2);
    if (nums[mid] == target) {
      st = mid;
      ed = mid;
      break;
    } else if (nums[mid] > target) {
      ed = mid - 1;
    } else {
      st = mid + 1;
    }
  }

  if (st > ed) return [-1, -1];

  while (nums[st - 1] === target) st--;
  while (nums[ed + 1] === target) ed++;

  return [st, ed];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8), [3, 5]);
console.log(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
console.log(searchRange([2, 2], 2), [0, 1]);
console.log(searchRange([1, 3], 1), [0, 0]);
