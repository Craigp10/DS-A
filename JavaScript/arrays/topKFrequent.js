/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums < 2) return [nums[0]];

  //brute force iterate nums, create object with counts, return sorted array

  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) numsObj[nums[i]] = 0;

    numsObj[nums[i]]++;
  }
  let res = [];
  let keys = Object.keys(numsObj);
  keys.sort((a, b) => {
    return numsObj[a] - numsObj[b];
  });
  console.log(keys);
  while (res.length < k) {
    res.push(keys.pop());
  }

  return res;
};
