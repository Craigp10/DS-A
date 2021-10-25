function someRecursive(arr, callBack) {
  if (arr.length == 0) return true;
  if (arr.length == 1) return callBack(arr[0]);
  arr.pop();
  return someRecursive(arr, callBack);
}

// console.log(
//   false,
//   someRecursive([1, 10, 20, 30], (n) => n > 15)
// );

const isOdd = (val) => val % 2 !== 0;
const isEven = (val) => val % 2 == 0;

console.log(false, someRecursive([1, 2, 3, 4], isOdd)); //false
console.log(true, someRecursive([3, 5, 9], isOdd)); // true
console.log(true, someRecursive([4, 6, 8], isEven)); // true
// console.log(
//   false,
//   someRecursive([4, 6, 8], (val) => val > 10)
// ); // true
