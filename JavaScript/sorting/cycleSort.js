const cycleSort = (nums) => {
  //O(n)
  nums.forEach((val, idx) => {
    if (val !== idx + 1) {
      let tmp = nums[val - 1];
      nums[val - 1] = val;
      nums[idx] = tmp;
    }
  });
};

let arr = [6, 2, 5, 3, 4, 1];
cycleSort(arr);
console.log(arr);

// graphs (dfs, bfs, union find [usually asked as a follow up question to optimize a purely dfs/bfs approach], dijkstra)
// two pointers (very often)
// binary search (very very often)
