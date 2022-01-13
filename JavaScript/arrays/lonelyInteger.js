function lonelyInteger_brute(a) {
  //Given an array of integers, return the value integer that is lonely, only occurs once
  //There will always be one and only one lonely integer
  //Sort array
  a.sort((a, b) => a - b); //O(n log n)
  //Loop array
  for (let i = 0; i < a.length - 1; i++) {
    //if the next or previous vlaue is equal to current than continue to next iteration
    if (a[i] == a[i + 1] || a[i] == a[i - 1]) continue;
    //If above is false, means that the current integer is our lonely integer since we stored the array
    else return a[i];
  }
  return a[a.length - 1];
}

console.log(lonelyInteger_brute([2, 2, 1]), 1);
console.log(lonelyInteger_brute([1, 2, 3, 4, 3, 2, 1]), 4);
console.log(lonelyInteger_brute([1, 2, 3, 4, 3, 4, 1, 2, 5]), 5);
console.log(lonelyInteger_brute([1, 2, 3, 4, 3, 2, 1]), 4);

function lonelyInteger(a) {
  let numBank = {};
  for (let i = 0; i < a.length; i++) {
    if (numBank[a[i]]) numBank[a[i]]++;
    else numBank[a[i]] = 1;
  }
  for (let j in numBank) {
    if (numBank[j] == 1) return j;
  }
}

console.log(lonelyInteger([2, 2, 1]), 1);
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]), 4);
console.log(lonelyInteger([1, 2, 3, 4, 3, 4, 1, 2, 5]), 5);
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]), 4);

function lonelyIntegerXOR(a) {
  if (a.length == 1) return a[0];
  let xor = a[0];
  for (i = 1; i < a.length; i++) {
    xor ^= a[i];
  }

  return xor;
}

console.log(lonelyIntegerXOR([2, 2, 1]), 1);
console.log(lonelyIntegerXOR([1, 2, 3, 4, 3, 2, 1]), 4);
console.log(lonelyIntegerXOR([1, 2, 3, 4, 3, 4, 1, 2, 5]), 5);
console.log(lonelyIntegerXOR([1, 2, 3, 4, 3, 2, 1]), 4);
