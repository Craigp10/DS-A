/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given an array of numbers, find the max sub array of continguous values when addding them all up
 *
 *
 * [-2,1,-3,4,-1,2,1,-5,4]
 *  6
 *  [ 4, -1, 2, 1 ]
 */

const maxSubArray_brute = (arr) => {
  //nested loop, for each value loop throug the rest and create a running sum
  // O(n2) time
  let maxSum = arr[0];
  if (arr.length < 2) return maxSum;
  for (let i = 0; i < arr.length; i++) {
    let runningMaxSum = 0;
    for (let j = i; j < arr.length; j++) {
      runningMaxSum += arr[j];
      if (runningMaxSum > maxSum) {
        maxSum = runningMaxSum;
      }
    }
  }

  return maxSum;
};

console.log(maxSubArray_brute([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

const maxSubArray = (arr) => {
  //sliding window - sliding value - start at 0-1 and iterate arr. Compare the next value in the array -- Maybe not
  //O(n)
  let maxSum = arr[0];
  if (arr.length < 2) return maxSum;
  let rollingSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    rollingSum = Math.max(arr[i], rollingSum + arr[i]);
    if (maxSum < rollingSum) maxSum = rollingSum;
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

const KadaneAlgo = (nums) => {
  //O(n) time
  //Iterate with a rolling sum and updating max when the rolling sum is greater than the current max.
  //init max at arr[0] so that we have our beginning to check with, avoids returning 0 if all nums are negative.
  let n = nums.length;
  if (n < 2) return nums[0];
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    max = Math.max(sum, max); //0, 1, 1,4,4,5,6,6,6
    if (sum < 0) sum = 0; //0,1,0,4, 3,5,6,1,5
  }
  return max;
};
