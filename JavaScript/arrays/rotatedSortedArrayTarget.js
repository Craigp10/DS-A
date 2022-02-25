var search = function (nums, target) {
  if (nums.length == 1) return nums[0] == target ? 0 : -1;
  let st = 0,
    ed = nums.length - 1;

  while (st < ed) {
    //two cases... treat it as a standard sorted w/ 1 check if target < st
    //it is rotated enough for mid < st... must do a couple of checks to determine how rotated it is.
    let mid = Math.floor((st + ed) / 2);

    if (nums[mid] === target) return mid;
    if (nums[st] === target) return st;
    if (nums[ed] === target) return ed;

    if (nums[st] > nums[mid]) {
      //determines that rotation exceeds mid ... must check if the target is below st and above mid (large rotation)
      //or if not ... little rotation
      if (target < nums[st] && target > nums[mid]) st = mid + 1;
      else ed = mid - 1;
    } else {
      //determines that we can do standard binary search w/ one check... if target < st (meaning its a small value)
      if (target < nums[st]) st = mid + 1;
      else if (target < nums[mid]) {
        ed = mid - 1;
      } else st = mid + 1;
    }
  }
  return -1;
};

console.log(search([2, 3, 4, 55, 63, 75, 80, 100, 1], 1) == 8);
console.log(search([55, 63, 75, 80, 100, 1, 2, 3, 4], 100) == 4);
console.log(search([53, 66, 75, 83, 90, 10, 25, 30, 45], 53) == 0);
console.log(search([53, 66, 75, 83, 90, 100, 25, 30, 45], 30) == 7);
console.log(search([53, 66, 75, 83, 90, 100, 25, 30, 45], 100) == 5);
console.log(search([55, 63, 75, 80, 100, 1, 2, 3, 4], 75) == 2);
console.log(search([55, 63, 75, 80, 100, 1, 2, 3, 4], 1) == 5);
console.log(search([55, 63, 75, 80, 100, 1, 2, 3, 4], 3) == 7);
console.log(search([53, 66, 75, 8, 9, 10, 25, 30, 45], 66) == 1);
console.log(search([5, 1, 2, 3, 4], 1) == 1);

// nums[]: 53, 66, 75, 83, 90, 10, 25, 30, 45
// target: 53
// expected output: 0

// nums[]: 53, 66, 75, 83, 90, 100, 25, 30, 45
// target: 30
// expected output: 7

// nums[]: 53, 66, 75, 83, 90, 100, 25, 30, 45
// target: 100
// expected output: 5
//compare target to st... use st as our 'mid' checker in standard BS

// nums[]: 53, 66, 75, 8, 9, 10, 25, 30, 45
// target: 66
// expected output: 1
