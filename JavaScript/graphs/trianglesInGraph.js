// import collections
const countTriangles = (n, edges) => {
  //Create key value pair obj that will store connected nodes

  if (n < 3 || edges < 2) return 0;

  d = new Object(new Array());

  //iterate our edges store the connections in our store
  for (let j = 0; j < edges.length; j++) {
    let x = edges[j][0];
    let y = edges[j][1];
    if (!d[x]) d[x] = [];
    if (!d[y]) d[y] = [];
    d[x].push(y);
    d[y].push(x);
  }
  // console.log(d);

  count = 0;
  for (let i = 0; i < edges.length; i++) {
    //gather coords
    let x = edges[i][0];
    let y = edges[i][1];
    for (let node in d) {
      //iterate nodes
      //check if the current connections x, y connect to our current node... x and y connect two different nodes.
      if (d[node].includes(x) && d[node].includes(y)) {
        //if so it means that a triangle has been created
        count += 1;
      }
    }
  }
  //Divide by 3 because for each cycle, it will increment count 3 times for each value in the edge cycle.
  return count / 3;
};

console.log(
  countTriangles(7, [
    [0, 1],
    [3, 0],
    [0, 2],
    [3, 2],
    [1, 2],
    [4, 0],
    [3, 4],
    [3, 5],
    [4, 5],
    [1, 5],
    [1, 3],
  ])
);

console.log(
  countTriangles(5, [
    [1, 2],
    [2, 5],
    [5, 4],
    [4, 1],
    [1, 3],
    [3, 2],
    [3, 5],
    [3, 4],
  ]),
  4
);
console.log(countTriangles(2, [[1, 2]]), 0);
console.log(
  countTriangles(3, [
    [1, 2],
    [1, 3],
  ]),
  0
);
console.log(
  countTriangles(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
  1
);
