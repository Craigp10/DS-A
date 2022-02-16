/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array 
[a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

Ex. [4,5,6,7,0,1,2] -> 0
Ex. [-1] -> -1


Constraints
1 <= nums.length <= 5000
-5000 <= nums[i] <= 5000
All values are unique

 */

const findMin = function (nums) {
  //We can flip the binary search... If nums[mid] > nums[ed] we know that the smaller values are in the end
  //if nums[mid] < nums[st] we know that the greater values are in the front

  //condition checks
  if (nums.length == 1) return nums[0];
  //init st and ed
  let st = 0;
  let ed = nums.length - 1;
  //init minimum at st + ed;
  let minimum = nums[st] + nums[ed];
  //binary search while loop
  while (st <= ed) {
    //init mid
    let mid = parseInt((st + ed) / 2);
    //if nums[mid] < minimum set new minimum
    if (nums[mid] < minimum) minimum = nums[mid];

    //if nums[mid] < nums[ed] assign ed to mid - 1... our small window is before mid
    if (nums[mid] < nums[ed]) {
      ed = mid - 1;
    } else {
      //otherwise assign st to mid + 1... our small window is above mid
      st = mid + 1;
    }
  }

  return minimum;
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
console.log(findMin([4, 5, 6, 7, 1, 2]), 1);

const findMax = function (nums) {
  //We can flip the binary search... If nums[mid] > nums[ed] we know that the smaller values are in the end
  //if nums[mid] < nums[st] we know that the greater values are in the front

  //condition checks
  if (nums.length == 1) return nums[0];
  //init st and ed
  let st = 0;
  let ed = nums.length - 1;
  //init minimum at st + ed;
  let maximum = 0;
  //binary search while loop
  while (st <= ed) {
    //init mid
    let mid = parseInt((st + ed) / 2);
    //if nums[mid] < minimum set new minimum
    if (nums[mid] > maximum) maximum = nums[mid];

    //logic here is to determine which side the max is on using the current mid by comparing mid to st.
    //If st is greater that means there were rotations and move the high values before the middle point of the array
    //If st is less that means we can treat it as an original sorted array (the rotations didn't mess up our
    // find max purpose)
    if (nums[mid] > nums[st]) {
      st = mid + 1;
    } else {
      //otherwise the max is on the left side of mid
      ed = mid - 1;
    }
  }

  return maximum;
};

console.log(findMax([4, 5, 6, 0, 1, 2]), 6);
console.log(findMax([4, 5, 6, 7, 1, 2]), 7);
