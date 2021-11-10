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

console.log(productArrayExceptSelf_brute([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productArrayExceptSelf_brute([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(
  productArrayExceptSelf_brute([-1, 1, 2, -3, 3]),
  [-18, 18, 9, -6, 6]
);
