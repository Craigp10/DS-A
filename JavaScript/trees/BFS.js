const { tree } = require("./BStree_implementation");
//          10
//       6      15
//     3   8     20

let queue = [15, 3, 8, 20]; //This would be a queue once we visit 6
let visited = [10, 6];

console.log("find 33", tree.find(33));
console.log("find 34", tree.find(34));
// let tree = new BinarySearchTree();
// console.log(tree);

function BFS() {}
