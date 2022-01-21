/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 *  and return an array of the non-overlapping intervals that cover all the intervals in the input.

  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

const mergeInterval = (intervals) => {
  //O(n log n) time - O(n) space worst case

  if (intervals.length < 2) return intervals;

  let merged = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let currentMerge = [intervals[0][0], intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    let currentED = intervals[i][1];
    let currentST = intervals[i][0];
    if (currentST <= currentMerge[1])
      currentMerge[1] = Math.max(currentMerge[1], currentED);
    else {
      merged.push(currentMerge);
      currentMerge = [currentST, currentED];
    }
  }
  merged.push(currentMerge);
  return merged;
};

// console.log(
//   mergeInterval([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ]),
//   [
//     [1, 6],
//     [8, 10],
//     [15, 18],
//   ]
// );
// console.log(
//   mergeInterval([
//     [1, 4],
//     [0, 2],
//     [3, 5],
//   ]),
//   [[0, 5]]
// );
// console.log(
//   mergeInterval([
//     [1, 3],
//     [2, 6],
//     [5, 10],
//     [15, 18],
//   ]),
//   [
//     [1, 10],
//     [15, 18],
//   ]
// );

// console.log(
//   mergeInterval([
//     [1, 4],
//     [2, 3],
//   ]),
//   [[1, 4]]
// );

console.log(
  mergeInterval([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]]
);
