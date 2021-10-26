const { tree } = require("./BStree_implementation");

//My Tree
//          11
//      7                15
//    1   9          12         34
//         10          13      30  120
//                        14  18   35 324
//

//visited: [11,7,1,9,10,15,12,13,14,34,30,18,120,35,324]

function DFS_preOrder(root) {
  let visited = [];
  visited = traverse(root);
  return visited;
}

function traverse(current) {
  //place root in queue
  queue.push(current);

  if (current.left) {
    preOrder(current.left);
  }
  if (current.right) {
    preOrder(current.right);
  }

  // while (queue.notEmpty()) {
  while (queue.length) {
    let current = queue.shift(); //Removes first element from queue and assigns it to variable

    //place child nodes in queue if they exist
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    visited.push(current.value);
  }

  return visited;
}

console.log(DFS_preOrder());
