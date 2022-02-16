const intervalIntersection_brute = function (firstList, secondList) {
  //brute loop
  //nested loop... loop first and secondlist in each iteration
  //merge function in merge sort basically
  //O(n*m)
  let mergeList = [];
  if (!firstList.length || !secondList.length) return [];
  for (let i = 0; i < firstList.length; i++) {
    for (let j = 0; j < secondList.length; j++) {
      //compare firstlist[i] w/ secondlist if we find a merge until we don't anymore.
      //compare next iteration of firstList with existing last 3rd index.
      //if we have a potential merge... iterate until we don't
      let firstListInterval = firstList[i];
      let secondListInterval = secondList[j];
      if (
        Math.max(firstListInterval[0], secondListInterval[0]) <=
        Math.min(firstListInterval[1], secondListInterval[1])
      ) {
        //interval
        mergeList.push([
          Math.max(firstListInterval[0], secondListInterval[0]),
          Math.min(firstListInterval[1], secondListInterval[1]),
        ]);
      }
    }
  }
  return mergeList;
};

// console.log(
//   intervalIntersection_brute(
//     [
//       [0, 2],
//       [5, 10],
//       [13, 23],
//       [24, 25],
//     ],
//     [
//       [1, 5],
//       [8, 12],
//       [15, 24],
//       [25, 26],
//     ]
//   ),
//   [
//     [1, 2],
//     [5, 5],
//     [8, 10],
//     [15, 23],
//     [24, 24],
//     [25, 25],
//   ]
// );

const intervalIntersection = function (firstList, secondList) {
  //two pointer optimization
  //O(n+m)

  let mergeList = [];
  if (!firstList.length || !secondList.length) return [];

  let ptr1 = 0;
  let ptr2 = 0;
  //break while loop once one of pointers reaches end... no more intersections at that point
  while (ptr1 < firstList.length && ptr2 < secondList.length) {
    //assign ptrs to values for readability
    let firstListInterval = firstList[ptr1];
    let secondListInterval = secondList[ptr2];
    //compare maximum start index with minimum end index ... if it is lower we have an insertion
    if (
      Math.max(firstListInterval[0], secondListInterval[0]) <=
      Math.min(firstListInterval[1], secondListInterval[1])
    ) {
      //interval
      //merge the interval... create interval with maximum start to minimum ending
      mergeList.push([
        // Math.max(
        Math.max(firstListInterval[0], secondListInterval[0]),
        Math.min(firstListInterval[1], secondListInterval[1]),
      ]);
    }
    //iterate the pointer that has the lowest ending... Since we know the intervals given have to increase
    //We only care about the bigger ending now
    firstListInterval[1] < secondListInterval[1] ? ptr1++ : ptr2++;
  }
  return mergeList;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  ),
  [
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ]
);
