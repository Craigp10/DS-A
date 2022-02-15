/**
 * @param {character[][]} grid
 * @return {number}
 *
 * Given a grid of 0's = water and 1's = land return the size of the smallest island found
 * Garuntee there is atleast 1 island in the grid
 *
 */

const smallestIsland = (grid) => {
  //just in-case we're given a grid without any length -- shouldn't happen due to instructions
  if (!grid.length) return 0;

  //initialize visited -- necessary for avoiding dup counts
  let visited = new Set();

  const explore = (r, c) => {
    //dfs function -- explore each island and incremnt a count via recursion
    let count = 0;

    // conditions to exist
    //grid point is out of bounds
    //the grid point is not an island (its water == "0")
    //Or if the point has already been visited (visited.has == true)

    //check that we are still in bounds of our grid
    const rowInbounds = 0 <= r && r < grid.length;
    const columnInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !columnInbounds) return 0;

    //check if the current coord is water
    if (grid[r][c] == "0") return 0;

    //get current coord in set hash -- visited already
    let pos = r + "," + c;
    if (visited.has(pos)) return 0; //end

    visited.add(pos);
    count++;

    //to left
    count += explore(r, c - 1);
    //to right
    count += explore(r, c + 1);
    //above
    count += explore(r - 1, c);
    //below
    count += explore(r + 1, c);

    //increase island count
    return count;
  };
  //init smallest value to be biggest possible value
  let smallestSize = grid.length * grid[0].length;

  //iterate rows and columns in our grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      //grab count from explore
      let compareSize = explore(r, c);
      //if there is a current island and it is smaller than our smallestFound so far -- replace it
      if (compareSize < smallestSize && compareSize > 0)
        smallestSize = compareSize;
    }
  }
  //return smallest island found
  return smallestSize;
};

console.log(
  smallestIsland([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "1", "1"],
  ]),
  3
);
console.log(
  smallestIsland([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["0", "0", "1", "1", "1"],
  ]),
  13
);
console.log(
  smallestIsland([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  2
);
console.log(
  smallestIsland([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0"],
  ]),
  1
);
console.log(
  smallestIsland([
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
  ]),
  20
);
console.log(smallestIsland([["1", "1", "1", "0", "1"]]), 1);
c;
console.log(smallestIsland([["1"]]), 1);
