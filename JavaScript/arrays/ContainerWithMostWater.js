/**
 * @param {number[]} height
 * @return {number}
 * 
 * Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

 * Find two lines that together with the x-axis form a container, such that the container contains the most water.

 * Return the maximum amount of water a container can store.

 * Notice that you may not slant the container.


 * Determine the biggest of water that can be held. l * h -- where as l is the length of j (endpoint) and i (start point)
 * Conditons: height of the vertical lines, we can only consider the min height of the two lines in our product. h = min(i,j)
 * l will be the length in the array they are from eachother. l = j - i;
 */

const maxArea_brute = function (height) {
  //create st and ed pointer
  //rolling area calc
  //iterate throug the array and utilize nested array to find the area of water at each i,j combination
  let rollingMax = Math.min(height[0], height[1]) * 1;
  if (height.length == 2) return rollingMax;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      //compare new area with current max
      let h = Math.min(height[j], height[i]);
      let l = j - i;
      console.log(h * l);
      //If that area is larger than the current max area we'll replace it
      rollingMax = Math.max(rollingMax, h * l);
    }
  }
  return rollingMax;
};

// console.log(maxArea_brute([1, 1]), 1);
// console.log(maxArea_brute([2, 2]), 4);
// console.log(maxArea_brute([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
// console.log(maxArea_brute([4, 3, 2, 1, 4]), 16);
// console.log(maxArea_brute([8, 20, 1, 2, 3, 4, 5, 6]), 16);

//How to optimize?
//Could we start at the end and beginning and create a max window for those points. Then incredment inwards on a condition?
//What would the condition be? The smallest value of the two hieght[pointers]  would be incremented/decremented. Shrinking our window

const maxArea = (height) => {
  //O(n)
  let ptr1 = 0;
  let ptr2 = height.length - 1;
  if (height.length == 2) return Math.min(height[ptr1], height[ptr2]) * 1;
  let maxProduct = 0;
  while (ptr1 < ptr2) {
    let minHeight = Math.min(height[ptr1], height[ptr2]);
    let length = ptr2 - ptr1;
    let currentArea = minHeight * length;
    if (currentArea > maxProduct) maxProduct = currentArea;
    //condition
    height[ptr1] < height[ptr2] ? ptr1++ : ptr2--;
  }
  return maxProduct;
};
// console.log(maxArea([1, 1]), 1);
// console.log(maxArea([2, 2]), 2);
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
// console.log(maxArea([4, 3, 2, 1, 4]), 16);
// console.log(maxArea([8, 20, 1, 2, 3, 4, 5, 6]), 42);
