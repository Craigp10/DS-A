/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * 
 * [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
-> 1

[
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
-> 3

diagonal is not connected
*/

const numIslands = function (grid) {
  //O(r*c);
  let islandCount = 0;

  let visited = new Set();
  //visited.add('1,3') coordinates, use the string as our hash
  //console.log(visited.has('1,3)) //true;
  //use comma cause (1,24) != (12,4) ... but they would if we didn't have comma

  const explore = (r, c) => {
    //dfs
    const rowInbounds = 0 <= r && r < grid.length;
    const columnInbounds = 0 <= c && c < grid[0].length;
    //check that we are still in bounds of our grid
    if (!rowInbounds || !columnInbounds) return false;

    //check if the current coord is water
    if (grid[r][c] == "0") return false;

    //get current coord in set hash
    let pos = r + "," + c;
    if (visited.has(pos)) return false; //end

    //We are garunteed now to be at a unvisited piece of land
    //add pos to visited
    visited.add(pos);

    //start exploring neighbors

    //to left
    explore(r, c - 1);
    //to right
    explore(r, c + 1);
    //above
    explore(r - 1, c);
    //below
    explore(r + 1, c);

    //increase island count
    return true;
  };

  //iterate rows and columns
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(r, c)) {
        //its an isalnd and has been marked in our visited set.
        islandCount++;
      }
    }
  }
  return islandCount;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);

console.log(
  numIslands([
    ["1", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "0"],
    ["", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
  ]),
  4
);

console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]), 3);
