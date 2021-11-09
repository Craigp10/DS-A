function mergeSorted(arr1, arr2) {
  //Given two sorted arrays, merge the arrays to return a new array containing the sorted elements from both the arrays

  //O(n) Complexity

  let newArray = [];
  let k = 0;
  let j = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (typeof (Math.min(arr1[k], arr2[j]) != "number"))
      newArray.push(typeof arr1[k] == "number" ? arr1[k] : arr2[j]);
    else newArray.push(Math.min(arr1[k], arr2[j]));
    if (arr1[k] < arr2[j]) {
      k++;
    } else {
      j++;
    }
  }
  return newArray;
}

console.log("merge", mergeSorted([0], [1]), [0, 1]);
console.log(mergeSorted([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeSorted([1, 2, 3], [2, 5, 6]), [1, 2, 2, 3, 5, 6]);
console.log(mergeSorted([1, 3, 5], [2, 4]), [1, 2, 3, 4, 5]);
