const { tree, dupTree } = require("./BStree_implementation");

function isSameTree(a, b) {
  //Given root of two trees, compare the trees and determine if the trees are the exact same. If so return true, else return false
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (a.value != b.value) {
    return false;
  }
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let a = [1, 2, 3];
let b = [1, 2, 3];

let aHead = new TreeNode(a[0], a[1], a[2]);
let bHead = new TreeNode(b[0], b[1], b[2]);

console.log(isSameTree(aHead, bHead), true);
c;
console.log(isSameTree(tree.root, dupTree.root), false);
