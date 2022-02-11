const { tree } = require("../data-structures/binarySearchTree");

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
  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return visited;
}

console.log("PRE ORDER", DFS_preOrder(tree.root));

function DFS_inOrder(root) {
  //      10
  //    6       15
  //  3   8       20
  //[3,6,8,10,15,20]

  let visited = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return visited;
}

console.log("IN ORDER", DFS_inOrder(tree.root));
//[1,7,9,10,11,12,13,14,15,18,30,34,35,120,324]
//          11
//      7                15
//    1   9          12         34
//         10          13      30  120
//                        14  18   35 324
//

function DFS_postOrder(root) {
  //      10
  //    6       15
  //  3   8       20
  //[3,8,6,20,15,10]
  let visited = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }
  traverse(root);
  return visited;
}
console.log("POST ORDER", DFS_postOrder(tree.root));
//[1, 10, 9, 7, 14, 13, 12, 18, 30, 35, 324, 120, 34, 15, 11]
