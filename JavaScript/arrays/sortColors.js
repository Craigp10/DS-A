/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  //O(3n log n) -> n log n;
  if (nums.length < 2) return nums;

  //brute -- iterate through create occurance object w/ color + # of occurances
  //iterate object and update arr based on occurances and color...
  let colorObj = {};
  nums.forEach((val) => {
    !colorObj[val] ? (colorObj[val] = 1) : colorObj[val]++;
  });
  //sort;
  let keys = Object.keys(colorObj);
  keys.sort((a, b) => a - b);
  let ctr = 0;
  keys.forEach((color) => {
    let occurances = colorObj[color];
    while (occurances > 0) {
      nums[ctr] = parseInt(color);
      occurances--;
      ctr++;
    }
  });
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors([]), []);
console.log(sortColors([1]), [1]);

const sortColors_dutch = (nums) => {
  //Since we know how many diffetent values there are (3), we can assign each 'pointer' to where those values will exist

  let red = 0; //will be middle, so when occurs we just increment white because red is our 0.
  let white = 0; //incrementer
  let blue = nums.length - 1; //end

  while (white <= blue) {
    if (nums[white] == 0) {
      let tmp = nums[red];
      nums[red] = nums[white];
      nums[white] = tmp;
      white += 1;
      red += 1;
    } else if (nums[white] == 1) {
      white += 1;
    } else {
      let tmp = nums[white];
      nums[white] = nums[blue];
      nums[blue] = tmp;
      blue -= 1;
    }
  }
  return nums;
};

console.log(sortColors_dutch([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors_dutch([]), []);
console.log(sortColors_dutch([1]), [1]);
