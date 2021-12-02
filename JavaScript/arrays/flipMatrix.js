function flipMatrix(matrix) {
  //By fliping columns and rows, determine the greastest sum of the possible values for the top left quadrant in a 2n x 2n matrix.
  //The top left quadrant will be on length n x n.
  //qSize == Quadrant size

  let qSize = matrix[0].length / 2;
  let maxSum = 0;
  for (let r = 0; r < qSize; r++) {
    //Iterate all columns in quadrant
    for (let c = 0; c < qSize; c++) {
      let p1 = matrix[r][c];
      let p2 = matrix[2 * qSize - r - 1][c];
      let p3 = matrix[r][2 * qSize - c - 1];
      let p4 = matrix[2 * qSize - r - 1][2 * qSize - c - 1];
      console.log(Math.max(p1, p2, p3, p4));
      maxSum += Math.max(p1, p2, p3, p4);
    }
  }
  return maxSum;
}

console.log(
  flipMatrix([
    [8, 6, 10, 4],
    [5, -6, 7, -2],
    [9, -3, 2, -7],
    [2, 10, -3, 7],
  ]),
  34
);
