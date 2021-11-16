function luckyNumbers_brute(matrix) {
  //Return all of the lucky numbers in the matrix in any order
  //A Lucky number is a number that is the smallest number in its row but largest in its column
  // [
  //   [3,7,8],
  //   [9,11,13],
  //   [15,16,17]
  // ]
  // return [15]

  //Faster than 70% - 80ms
  //Less space than 63% 41mb
  //O(n2)
  let luckyNumbers = [];
  //Loop through each row, find the smallest values, then loop through each column and compare if the row value is the largest value

  for (let i = 0; i < matrix.length; i++) {
    //O(n)
    let luckyValueIndex = 0;
    let luckyValue = matrix[i][0];
    let isLucky = true;
    //loop through row
    for (let j = 0; j < matrix[i].length; j++) {
      //O(n)
      if (luckyValue > matrix[i][j]) {
        luckyValue = matrix[i][j];
        luckyValueIndex = j;
      }
    }
    for (let k = 0; k < matrix.length; k++) {
      //O(n)
      if (luckyValue < matrix[k][luckyValueIndex]) {
        isLucky = false;
      }
    }

    if (isLucky) {
      luckyNumbers.push(luckyValue);
    }
  }
  return luckyNumbers;
}

console.log(
  luckyNumbers_brute([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ]),
  [15]
);

function luckyNumbers(matrix) {
  //Return all of the lucky numbers in the matrix in any order
  //A Lucky number is a number that is the smallest number in its row but largest in its column
  // [
  //   [3,7,8],
  //   [9,11,13],
  //   [15,16,17]
  // ]
  // return [15]

  //fastest solution leetcode O(n2) - fastest 86%
  //less space than 76%

  let rows = matrix.length - 1;
  let luckyNumbers = [];
  for (let i = 0; i <= rows; i++) {
    //O(n)
    const smallest = Math.min(...matrix[i]);
    let result = findMaxInCol(smallest, matrix[i].indexOf(smallest), matrix);
    if (result == true) luckyNumbers.push(smallest);
  }
  return luckyNumbers;
}

function findMaxInCol(num, tempcol, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    //O(n)
    if (matrix[i][tempcol] > num) return false;
  }
  return true;
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ]),
  [15]
);

function test(matrix) {
  //slower method

  let luckyNumbers = [];
  let minInRows = [];
  for (let i = 0; i < matrix.length; i++) {
    //O(n)
    let minInRow = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minInRow) {
        minInRow = matrix[i][j];
      }
    }
    minInRows[i] = minInRow;
  }
  let maxInCols = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let maxInCol = 0;
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] > maxInCol) {
        maxInCol = matrix[row][col];
      }
    }
    maxInCols[col] = maxInCol;
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (minInRows[row] == maxInCols[col]) {
        luckyNumbers.add(matrix[row][col]);
      }
    }
  }
  return luckyNumbers;
}
