//Easy
//Remove duplicates from sorted array
//k - length of removed dup elements

function removeDups(nums) {
  //Given array of integers remove any duplicates in place... return the number of unique values in array
  //Just loop array and remove index if its a dup...
  let n = nums.length;
  let j = 1;

  if (n <= 1) return n;

  for (let i = 1; i < n; i++) {
    if (nums[i] != nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}

console.log(removeDups([1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7]), 7);
console.log(removeDups([1, 1, 2]), 2);

function removeDups_brute(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i + 1]) nums.splice(i, 1);
    else i++;
  }
  return nums.length;
}

console.log(removeDups_brute([1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7]), 7);
console.log(removeDups_brute([1, 1, 2]), 2);
