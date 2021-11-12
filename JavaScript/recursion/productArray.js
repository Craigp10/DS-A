function productArray(arr) {
  //Take array and return the product of the array
  //Base case would be to reduce the array down to length of 1 and multiply that number by the popped number from the previous iteration

  if (arr.length == 0) {
    return 0;
  }

  if (arr.length == 1) {
    return arr[0];
  } else {
    let popped = arr.pop();
    return popped * productArray(arr);
  }
}

console.log(productArray([1, 2, 3, 4]) == 24);
console.log(productArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 3628800);
console.log(productArray([1, 2, 3, 4]), 24);
console.log(productArray([-1, 1, 0, -3, 3]), 0);
console.log(productArray([-1, 1, 2, -3, 3]), 18);
