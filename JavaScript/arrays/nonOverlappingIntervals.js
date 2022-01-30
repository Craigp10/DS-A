/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
Ex. 1
[[1,2],[2,3],[3,4],[1,3]]
1 overlap, [1,3]
return 1;


Ex. 2
[[1,2],[1,2],[1,2]]
2 overlap [1,2],[1,2]
return 2;

Ex. 3
[[1,2], [2,3]]
return 0;
*/

const eraseOverlapIntervals = function (intervals) {
  //Given array of intervals [start, end], return the number of intervals needed to prevent any overlapping intervals

  //Need to compare start and end points amoung intervals. Ultimately compare current interval start with pevious interval ends
  //Will the intervals be ordered?

  //O(n log n)

  if (intervals.lenngth < 2) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let removed = 0;
  let ptr1 = 0;
  let ptr2 = 1;
  while (ptr2 < intervals.length) {
    console.log(ptr1, ptr2, intervals[ptr2], intervals[ptr1]);
    if (intervals[ptr2][0] < intervals[ptr1][1]) {
      removed++;
    } else {
      ptr1 = ptr2;
    }
    ptr2++;
  }

  return removed;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
  1
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
  2
);

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]),
  2
);

console.log(
  eraseOverlapIntervals([
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
  ]),
  2
);
