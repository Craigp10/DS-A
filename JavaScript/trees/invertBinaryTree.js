/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * Invert a binary tree by switching left and right nodes in the tree
 *[1,2,3,4,5,null,6] => [1,3,2,6,null,5,4];
 */

var invertTree = function (root) {
  if (!root) return null;

  let q = [root];
  while (q.length) {
    //pop node and reassign left, right nodes
    let node = q.pop();
    let left = node.left;
    node.left = node.right;
    node.right = left;
    //If respective children nodes exist add to queue
    if (node.left != null) {
      q.push(node.left);
    }
    if (node.right != null) {
      q.push(node.right);
    }
  }
  return root;
};
