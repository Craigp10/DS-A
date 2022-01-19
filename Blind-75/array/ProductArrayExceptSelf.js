/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

const productArrayExceptSelf_brute = (arr) => {
  //O(n2) time - O(n) space
  let productArray = [];

  for (let i = 0; i < arr.length; i++) {
    let rollingProduct = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      else rollingProduct *= arr[j];
    }
    productArray.push(rollingProduct);
  }
  return productArray;
};

console.log(productArrayExceptSelf([1, 2, 3, 4]));

const productArrayExceptSelf = (arr) => {
  //How can we do this in O(n)
  //two passes - find all elements product ot left of each element then find product of all elements ot right of each element
  let productArray = new Array(arr.length);
  let prefix = 1;
  for (let i = 0; i < arr.length; i++) {
    productArray[i] = prefix;
    prefix *= arr[i];
  }
  let postfix = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    productArray[j] *= postfix;
    postfix *= arr[j];
  }
  return productArray;
};
