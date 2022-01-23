const dirReduc = (arr) => {
  let opp = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };
  let i = 0;
  while (i < arr.length - 1) {
    let curr = arr[i];
    let next = arr[i + 1];
    if (opp[curr] == next) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
};

console.log(dirReduc(["WEST", "EAST", "NORTH", "SOUTH"]), []);
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
  ["WEST"]
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
  "NORTH",
  "WEST",
  "SOUTH",
  "EAST",
]);
