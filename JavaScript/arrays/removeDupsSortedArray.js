//Easy
//Remove duplicates from sorted array
//k - length of removed dup elements

function removeDups_brute(arr) {
  //Given array of integers remove any duplicates in place... return the array
  //Just loop array and remove index if its a dup
  let previous;
  let i = 0;
  while (arr[i]) {
    if (arr[i] == previous) {
      arr.splice(i, 1);
    } else {
      previous = arr[i];
      i++;
    }
  }

  return arr;
}

console.log(removeDups_brute([1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7]));
console.log(removeDups_brute([1, 1, 2]));
