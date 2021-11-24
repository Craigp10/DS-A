var minSteps = function (n) {
  //brute force print a * ne
  //operations: copy all or paste all]
  //Approach - Find the smallest divider continously until we break n down to 1, we know at 1 we don't need to add any operations to it

  //(9) -> 3
  //O()
  let i = 2;
  let ctr = 0;
  while (n > 1) {
    if (n % i == 0) {
      ctr += i;
      n /= i;
    } else {
      i += 1;
    }
  }

  return ctr;
};

// let operDict = {
//   1: 0, //Just returns 'A'
//   2: 2, // Copy and paste
//   3: 3, //Copy and paste and paste
//   4: 4, //Copy paste copy paste
//   5: 5, // Copy paste paste paste paste
//   6: 5, // copy paste paste copy paste
//   7: 7, //Copy paste paste paste paste paste paste
//   8: 6, // copy paste copy paste copy paste
//   9: 6, // copy paste paste copy paste paste
//   10: 7, //copy paste paste paste paste copy paste
//   11: 11, //copy paste paste paste paste
//   12: 7, //copy paste copy paste copy paste paste
//   13: 13, //copy paste
//   14: 9, //copy paste copy paste
//   15: 8, //copy paste copy paste
//   16: 8, //copy paste copy paste
//   17: 17, //
//   18: 8,
//   19: 19,
//   20: 9,
// };

// console.log(minSteps(0), 0);
// console.log(minSteps(1), 0);
// console.log(minSteps(2), 2);
// console.log(minSteps(3), 3);
// console.log(minSteps(4), 4);
// console.log(minSteps(5), 5);
// console.log(minSteps(6), 6);
// console.log(minSteps(7), 7);
// console.log(minSteps(8), 6);
// console.log(minSteps(9), 6);
// console.log(minSteps(10), 7);
// console.log(minSteps(11), 11);
// console.log(minSteps(12), 7);
// console.log(minSteps(18), 8);
// console.log(minSteps(20), 9);
// console.log(minSteps(20), 9);
console.log(minSteps(35), 9);
