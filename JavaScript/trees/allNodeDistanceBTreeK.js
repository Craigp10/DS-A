const { BinaryTree } = require("../data-structures/binaryTree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  //distance measured by node distance from target node
  //need to find the target the node and where each node distance from that
  const dfs = (node, parent = null) => {
    if (!node) return null;
    if (node.value == target) targetNode = node;
    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  };
  let targetNode;
  dfs(root);
  if (!targetNode) return [];
  //marks all nodes with parent
  //dequeu
  //node , distance
  let queue = [];
  queue.push([targetNode, 0]);
  let seen = new Set();
  while (queue) {
    if (queue[0][1] == k) {
      //node in queue is k distance
      let res = [];
      for (let node in queue) {
        res.push(node.value);
      }
    }
    let [node, d] = queue.shift();
    // console.log(queue.shift());
    let nodes = [node.parent, node.left, node.right];
    // let d =÷ node.d;
    for (let n in nodes) {
      console.log(nodes[n]);
      if (!nodes[n]) continue;
      if (!seen.has(nodes[n].value)) {
        seen.add(nodes[n].value);
        queue.push([nodes[n], d + 1]); //, n.d + 1]);
      }
    }
    // console.log(queue);
  }
  return [];
};

let bTree = new BinaryTree();
bTree.insert(3);
bTree.insert(5);
bTree.insert(1);
bTree.insert(6);
bTree.insert(2);
bTree.insert(0);
bTree.insert(8);
bTree.insert(null);
bTree.insert(null);
bTree.insert(7);
bTree.insert(4);

console.log(distanceK(bTree.root, 5, 2));
