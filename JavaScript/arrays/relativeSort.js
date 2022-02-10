/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
  //iterate arr2 store values and index
  //arr2 contains distinct elements. Arr1 contains all of arr2 plus more in random order.
  //Sort the elements in arr1 based on the arr2 order, sort remaining values in asc ordering
  // n - arr1.length, m - arr2.length;
  //O(m + n log (m - n)) => n + m log (m - n)
  let arr2Obj = {};
  //O(m)
  arr2.forEach((val, indx) => (arr2Obj[val] = (val, indx + 1)));

  let sortedArr = Array.from({ length: arr2.length }, (e) => Array().fill(0));
  let rest = [];

  // O(n)
  arr1.forEach((val) => {
    if (arr2Obj[val]) {
      sortedArr[arr2Obj[val] - 1].push(val);
    } else {
      rest.push(val);
    }
  });
  // O(n - m log n - m)
  rest.sort((a, b) => a - b);
  //O(n)

  return [...sortedArr.flat(), ...rest];
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
