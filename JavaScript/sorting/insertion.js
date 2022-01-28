const insertion = (nums) => {
  //iterate. Compare current with all values prior, move it prioir if it needs to be
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let prev = i - 1;
    while (current < nums[prev] && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = current;
  }
  return nums;
};

console.log(insertion([12, 11, 13, 5, 6]), [5, 6, 11, 12, 13]);
console.log(insertion([1, 3, 2, 4, 6, 7, 8, 5]), [1, 2, 3, 4, 5, 6, 7, 8]);
