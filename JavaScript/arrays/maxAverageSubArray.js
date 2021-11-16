function maxAverageSubArray_brute(nums, k) {
  //Given array of nums and integer, k, find the largest average sub array of length k
  //O(n2)
  //Faster than 5%
  //Less space than 52%

  let largestAvg = -Infinity; //undefined

  for (let i = 0; i < nums.length - k + 1; i++) {
    currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += nums[i + j];
    }
    let currentAvg = currentSum / k;
    if (currentAvg > largestAvg) largestAvg = currentAvg;
  }

  return largestAvg;
}

console.log(maxAverageSubArray_brute([1, 2, 3, 4, 5, 6], 4), 18 / 4);
console.log(maxAverageSubArray_brute([1, 12, -5, -6, 50, 3], 4), 42 / 4);
console.log(maxAverageSubArray_brute([1, 2, 3, 4, 5, 6], 4), 18 / 4);

function maxAverageSubArray(nums, k) {
  //Given array of nums and integer, k, find the largest average sub array of length k
  //O(n)
  //faster than 88%
  //less space than 30%

  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    //Initialize our maxSum at the first k values in our array
    maxSum += nums[i];
  }
  windowSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}

console.log(maxAverageSubArray([1, 2, 3, 4, 5, 6], 4), 18 / 4);
console.log(maxAverageSubArray([1, 12, -5, -6, 50, 3], 4), 51 / 4);
console.log(maxAverageSubArray([1, 2, 3, 4, 5, 6], 4), 18 / 4);
