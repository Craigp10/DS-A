const { tree } = require("./BStree_implementation");
//          10
//       6      15
//     3   8     20

let queue = [15, 3, 8, 20]; //This would be a queue once we visit 6
let visited = [10, 6]; // We have visited 10 then 6.

//Check imported tree
// console.log("find 33", tree.find(33));
// console.log("find 34", tree.find(34));

function BFS(root) {
  let queue = [];
  let visited = [];

  //place root in queue
  queue.push(root);
  // while (queue.notEmpty()) {
  while (queue.length) {
    let current = queue.shift(); //Removes first element from queue and assigns it to variable
    // console.log("new node", current);

    //place child nodes in queue if they exist
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    visited.push(current.value);
  }

  return visited;
}

//My Tree
//          11
//      7                15
//    1   9          12         34
//         10          13      30  120
//                        14  18   35 324
//

//visited: [11,7,15,1,9,12,34,10,13,30,120,14,18,35,324]
console.log(BFS(tree.root));
