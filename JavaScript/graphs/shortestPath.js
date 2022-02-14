const shortestPath = (edges, start, end) => {
  //build the graph
  let graph = buildGraph(edges);
  console.log(graph);
  //find shortest path

  //visited
  let visited = new Set([start]);

  //node and distance from start node;
  let queue = [[start, 0]];
  //BFS
  while (queue.length) {
    let [node, distance] = queue.shift();
    if (node == end) return distance;
    distance++;
    //append neighbors to our graph
    for (let i = 0; i < graph[node].length; i++) {
      let neighbor = graph[node][i];
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance]);
        visited.add(neighbor);
      }
    }
  }

  return -1;
};

function buildGraph(edges) {
  let graph = {};

  for (let edge of edges) {
    let [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

// shortestPath([
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]);
console.log(
  shortestPath(
    [
      ["w", "x"],
      ["x", "y"],
      ["z", "y"],
      ["z", "v"],
      ["w", "v"],
    ],
    "w",
    "z"
  )
);
