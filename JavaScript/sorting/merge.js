function mergeSort(arr, l, r) {
  //left right
  if (l < r) {
    //middle
    let m = l + parseInt((r - l) / 2);

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
  return arr;
}

function merge(arr, l, m, r) {
  //arr left middle right
  let n1 = m - l + 1;
  let n2 = r - m;
  console.log(n1, n2);
  let L = new Array(n1); //left
  let R = new Array(n2); //right

  //store values in new arrays
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; // reset index of first subarray
  j = 0; // reset index of second subarray

  let k = l; // Initial index of merged subarray

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements of L[], if there
    are any */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Copy the remaining elements of R[], if there
    are any */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

let unsorted = [1, 3, 3, 5, 6, 2, 6, 7, 2, 0];
console.log(unsorted);
let sorted = mergeSort(unsorted, 0, unsorted.length - 1);
console.log(sorted);
