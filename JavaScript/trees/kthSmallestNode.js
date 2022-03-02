/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

const kthSmallest_dfs = (root, k) => {
  let visited = [];
  function traverse(node) {
    console.log(node);
    if (visited.length == k) return visited[k - 1];
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  console.log(visited);
  return visited[k - 1];
};

const kthSmallest = (root, k) => {
  let result = null;
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    k--;
    if (k == 0) {
      result = node.val;
      return;
    }
    traverse(node.right);
  }

  traverse(root);
  return result;
};
