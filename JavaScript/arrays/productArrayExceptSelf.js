//Given an array of ints, return an array containing the product of the array excluding the same index element.

function productArrayExceptSelf_brute(arr) {
  //[1,2,3,4] -> [24, 12, 8, 6]

  //brute force -- Loop through array, loop again and multiply the current product by all elements, skip when i == j;
  // O(n2) time complexity
  // O(n) space complexity

  let productArray = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      product *= arr[j];
    }
    productArray.push(product);
  }
  return productArray;
}

// console.log(productArrayExceptSelf_brute([1, 2, 3, 4]), [24, 12, 8, 6]);
// console.log(productArrayExceptSelf_brute([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
// console.log(
//   productArrayExceptSelf_brute([-1, 1, 2, -3, 3]),
//   [-18, 18, 9, -6, 6]
// );

function productArrayExceptSelf(arr) {
  //prefix postfix
  //O(n) time complexity

  //Our prefix and postfix integer will be the rolling product of all of the values iterated through the array up to the current index.
  //Meaning by the end of a loop, the rolling product will be equal to the product of all the elements.
  //Think of it as, the two loops will calculate the product of all the elements before the current index (first loop) and after (second loop)
  //Excludes the current idnex in the product because we multiply the rolling product by the current current index value before including it in the rolling product.
  //Prefix and post fix are initialized at 1, because by the end of the iterations the rolling product is the product for array excluding those elements
  let prefix = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }
  let postfix = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= arr[j];
  }

  return result;
}
console.log(productArrayExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productArrayExceptSelf([2, 3, 4, 5]), [60, 40, 30, 24]);
console.log(productArrayExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(productArrayExceptSelf([-1, 1, 2, -3, 3]), [-18, 18, 9, -6, 6]);
