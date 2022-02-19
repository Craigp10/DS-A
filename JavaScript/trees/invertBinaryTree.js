const { BinaryTree } = require("../data-structures/binaryTree");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * Invert a binary tree by switching left and right nodes in the tree
 *[1,2,3,4,5,null,6] => [1,3,2,6,null,5,4];
 */

const invertTree_bfs = function (root) {
  if (!root) return null;

  //create queue w/ root
  let q = [root];
  //while q is not empty
  while (q.length) {
    //pop node and reassign left, right nodes
    let node = q.pop();
    if (!node) continue;

    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    //If respective children nodes exist add to queue
    // if (node.left != null) {
    q.push(node.left);
    // }
    // if (node.right != null) {
    q.push(node.right);
    // }
  }
  return root;
};
let tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(null);
tree.insert(6);
// console.log(tree.root.right);
// invertTree_bfs(tree.root);

const invertTree_dfs = function (root) {
  //if root is null return null
  if (!root) return null;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  //recursive tree with reverted 'parent' nodes
  invertTree_dfs(root.right);
  invertTree_dfs(root.left);

  return root;
};

console.log(tree.printTree());
invertTree_dfs(tree.root);
// console.log(tree.printTree());
