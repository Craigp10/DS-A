const quickSort = (arr, low, high) => {
  //Reminder that the sorting is done in place... If not we'd need to return the array and
  //make sure we integrate response from each quicksort call.

  // console.log("quickSort called", arr.slice(low, high + 1), low, high); //used to show arr 'slice' for each iteration

  //not sure on this logic... need to double check

  if (low < high) {
    //new pivot will be the parition return j
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1); // Before pi
    quickSort(arr, pivot + 1, high); // After pi
  }
};

const partition = (arr, l, h) => {
  //the purpose of this function is to sort out array to move all of the values below our pivot (arr[l]) to the first half
  //of the arr bounds provides and the vice versa for the higher bounds
  //at end we move out pivot to the middle and return its index so we can continuely break the array down in half
  //to lower and higher bounds.

  //assign pivot to our low bound
  let pivot = arr[l];

  //set our iterators to low and high
  let i = l;
  let j = h;

  //until lower becomes greater than higher iterate
  while (i < j) {
    //increment i (low) to a value that is greater than pivot value
    while (arr[i] <= pivot && i < arr.length) i++;
    //decrement j (high) to a value that is less than pivot value
    while (arr[j] > pivot) j--;

    //arr[i] and arr[j] should be now be values that need to be swapped and only swap if i and j are still following the while
    //loop condition
    if (i < j) {
      //swap
      let tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }
  }
  //swap j - now the lower value with our pivot --
  //return j (new pivot index) so we can repeat the process with the two halves separated
  tmp = arr[j];
  arr[j] = pivot;
  arr[l] = tmp;

  return j;
};

let arr1 = [10, 16, 8, 12, 15, 6, 3, 9, 5]; //10 length
quickSort(arr1, 0, arr1.length - 1); //arr, 0, 9
console.log(arr1);
let arr2 = [0, 3, 7, 5, 6, 4, 8, 2];
quickSort(arr2, 0, arr2.length - 1); //arr, 0, 9
console.log(arr2);
