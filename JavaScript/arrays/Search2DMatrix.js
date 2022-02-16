/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 *
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * return boolean value if target exist in matrix
 */

//We know the rows are always increasing in order and the rows them selves are always larger than the previosu row

var searchMatrix_brute = function (matrix, target) {
  //nested loop checking for target
  let m = matrix.length;
  if (!m) return false;
  let n = matrix[0].length;
  if (!n) return false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) return true;
    }
  }
  return false;
};

//Binary search each row comparing the target with the last element and first element
//if within its on current row
//if less then its on previous row
//if greater then its on future row

//conditions to account for aside from traidtional BS search
//empty rows
//1 value rows
const searchMatrix = function (matrix, target) {
  let m = matrix.length;
  if (!m) return false;
  let n = matrix[0].length;
  if (!n) return false;

  let stRow = 0;
  let edRow = matrix.length - 1;
  //while start row is less than or equal to edRow

  while (stRow <= edRow) {
    let midRow = Math.floor((edRow + stRow) / 2);

    //check the current row ... if it is on it start binary searching values
    if (matrix[midRow][0] <= target && target <= matrix[midRow][n - 1]) {
      //on row
      let st = 0;
      let ed = n - 1;
      while (st <= ed) {
        let mid = Math.floor((ed + st) / 2);
        if (matrix[midRow][mid] == target) return true;
        else if (matrix[midRow][mid] < target) st = mid + 1;
        else ed = mid - 1;
      }
      //not found on row return false;
      return false;
    } else if (matrix[midRow][n - 1] < target) {
      //above
      stRow = midRow + 1;
    } else {
      //below row
      edRow = midRow - 1;
    }
    // break;
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  ),
  true
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    6
  ),
  false
);
console.log(searchMatrix([[1], [3], [5], [6]], 6), true);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    10
  ),
  true
);
console.log(searchMatrix([[], [], []], 10), false);
