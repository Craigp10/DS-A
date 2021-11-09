function mergeSortedInplace(nums1, m, nums2, n) {
  //Given two sorted arrays, merge the second array into the first array in place

  //O(m+n) complexity

  let i = 0; //nums1 counter
  let j = 0; //nums2 counter

  while (nums2[j] != undefined) {
    if (nums1[i] <= nums2[j] && i < m) {
      i++;
    } else if (nums1[i] <= nums2[j] && i >= m) {
      nums1.splice(i, 1, nums2[j]);
      i++;
      j++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      m++;
      i++;
      j++;
    }
  }
  return nums1;
}

console.log("merge", mergeSortedInplace([0], 0, [1], 1), [0, 1]);
console.log(
  mergeSortedInplace([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
  [1, 2, 2, 3, 5, 6]
);
console.log(
  mergeSortedInplace([-1, 0, 1, 1, 0, 0, 0, 0, 0], 4, [-1, 0, 2, 2, 3], 5),
  [-1, -1, 0, 0, 1, 1, 2, 2, 3]
);

console.log(
  mergeSortedInplace([1, 3, 5, 0, 0, 0], 3, [2, 5, 6], 3),
  [1, 2, 3, 5, 5, 6]
);
