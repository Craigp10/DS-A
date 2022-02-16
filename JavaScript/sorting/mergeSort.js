function mergeSort(arr, l, r) {
  //O( n log n )
  //Given an arr and starting/ending index that this function will look at, break them down until left ptr > right ptr
  //Merge those together in sorted fashion. Then merge the arrays together on the stack calls up
  //left right
  if (l < r) {
    //middle
    let m = l + parseInt((r - l) / 2);

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

function merge(arr, l, m, r) {
  //This is our iterative merge approach implemented in the mergeSort...
  //We have two sorted arrays of this point and need to merge them together in order
  //We do this in our arr in place of the indices.

  //Gather lengths of the sorted arrays (m - left + 1) (right - middle)
  let n1 = m - l + 1;
  let n2 = r - m;

  //define arrays with lengths
  let L = new Array(n1); //left
  let R = new Array(n2); //right

  //populate the arrays with the stored values.. the image our greater array is now sorted in the divide portions.
  //So before the final merge we'd have something like [9,3,7,5,6,4,8,2] -> [3,5,7,9     2,4,6,8] -> arr
  for (let i = 0; i < n1; i++) L[i] = arr[l + i]; //L          //R
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; // reset index of first subarray
  j = 0; // reset index of second subarray

  let k = l; // Initial index of merged subarray
  while (i < n1 || j < n2) {
    //Merge both arrays into our main arr with respect to each other... Lower value is inserted first
    //Incase we exceed the length of one array before the other, we conditionally check for undefined (JS) and can just
    //merge the other array at that point
    if (R[j] == undefined || L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    //K is our main arr iterator
    k++;
  }
}

let arr1 = [1, 3, 3, 5, 6, 2, 6, 7, 2, 0]; //10 length
mergeSort(arr1, 0, arr1.length - 1); //arr, 0, 9
console.log(arr1);
let arr2 = [0, 3, 7, 5, 6, 4, 8, 2];
mergeSort(arr2, 0, arr2.length - 1); //arr, 0, 9
console.log(arr2);

function mergeIterative(l1, l2) {
  //two seperate arrays
  //O(m+n) - m = l1.length , n = l2.length
  let i = 0;
  let j = 0;
  let l3 = [];
  while (l3.length < l1.length + l2.length) {
    if (l2[j] == undefined || l1[i] < l2[j]) {
      l3.push(l1[i]);
      i++;
    } else {
      l3.push(l2[j]);
      j++;
    }

    //or if we had our l3 created -- l3[i + j] = ....
  }
  return l3;
}

// console.log(mergeIterative([2, 8, 15, 18, 22, 23], [5, 9, 12, 17]));
