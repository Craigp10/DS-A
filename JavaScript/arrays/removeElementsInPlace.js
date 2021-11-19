function removeElementInPlace(nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return i;
}

console.log(removeElementInPlace([3, 2, 2, 3], 3), 2, [2, 2]);
console.log(
  removeElementInPlace([0, 1, 2, 2, 3, 0, 4, 2], 2),
  5,
  [0, 1, 3, 0, 4]
);
