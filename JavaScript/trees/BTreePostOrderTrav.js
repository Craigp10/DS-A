const { tree } = require("./BStree_implementation");
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
// [1, null, 2, 3];

// let a = new TreeNode(3, 4, 5);
// console.log(a);

function BTreePostOrderTrav(root) {
  //Return an array containing the postorder of the nodes

  //Post order is the order nodes then parent, left to right.
  if (root == null) {
    return [];
  }
  let array = [];
  function postOrder(node) {
    if (node == null) return;
    postOrder(node.left);
    postOrder(node.right);
    array.push(node.value);
  }

  postOrder(root);

  return array;
}

console.log(
  BTreePostOrderTrav(tree.root),
  [1, 10, 9, 7, 14, 13, 12, 18, 30, 35, 324, 120, 34, 15, 11]
);
