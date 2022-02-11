// Node:
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree:
//Operations
//insert - O(log n) - Worst O(n)
//find - O(log n) - Worst O(n)
//remove - O(log n) - Worst O(n)

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = value;
      return this;
    }
    let nextNode = this.root;
    while (nextNode) {
      if (value == nextNode.value) {
        return this;
      } else if (value < nextNode.value) {
        if (!nextNode.left) {
          nextNode.left = new Node(value);
          return this;
        }
        nextNode = nextNode.left;
      } else {
        if (!nextNode.right) {
          nextNode.right = new Node(value);
          return this;
        }
        nextNode = nextNode.right;
      }
    }
  }

  find(value) {
    //Iterate tree looking for specific value.
    //If value < current node search left Else search right
    let current = this.root;
    while (current) {
      if (current.value == value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(key) {
    this.root = this.removeRec(this.root, key);
  }

  removeRec(current, key) {
    if (current == null) return current;

    /* Otherwise, recur down the tree */
    if (key < current.value) current.left = this.removeRec(current.left, key);
    else if (key > current.value)
      current.right = this.removeRec(current.right, key);
    else {
      // key is same as root's key -- this is the node to be deleted
      if (!current.left && !current.right) {
        //No child .. leaf node
        return null;
      } else if (!current.left || !current.right) {
        // node with only one child
        return current.left || current.right;
      }

      // node with two children: Get the inorder successor (smallest in the right of current subtree)
      let nextNode = current.right;
      let min = nextNode.value;
      while (nextNode.left != null) {
        //loop down the left node's until we find a node w/ left equal to null (the current node is our lowest value node.)
        nextNode = nextNode.left;
      }
      min = nextNode.value;

      current = this.removeRec(current, min);
      // Delete the inorder successor
      current.value = min;
      // current.right = this.removeRec(current.right, current.value);
    }
    return current;
  }
}

// const { BinarySearchTree, Node } = require("./BStree_implementation");

let tree = new BinarySearchTree();
tree.root = new Node(11);
tree.root.right = new Node(15); // >11
tree.root.left = new Node(7); // <11
tree.root.left.right = new Node(9); // <11 and <7
tree.insert(10);

tree.insert(12);
tree.insert(34);
tree.insert(1);
tree.insert(120);
tree.insert(324);
tree.insert(13);
tree.insert(14);
tree.insert(30);
tree.insert(18);
tree.insert(35);

// let dupTree = new BinarySearchTree();
// dupTree.root = new Node(11);
// dupTree.root.right = new Node(15); // >11
// dupTree.root.left = new Node(7); // <11
// dupTree.root.left.right = new Node(9); // <11 and <7
// dupTree.insert(10);

// dupTree.insert(12);
// dupTree.insert(34);
// dupTree.insert(1);
// dupTree.insert(120);
// dupTree.insert(324);
// dupTree.insert(13);
// dupTree.insert(14);
// dupTree.insert(30);
// dupTree.insert(18);
// dupTree.insert(35);

//My Tree
//          11
//      7                15
//    1   9          12         34
//         10          13      30  120
//                        14  18   35 324
//
//
// console.log(tree.root);
// console.log(tree.root.left);
// console.log(tree.root.right.left);
// console.log(tree.root.right.right);

// console.log("find 4", tree.find(4));
// console.log("find 1", tree.find(1));

// tree.remove(15); //Should replace 15 with 18
// tree.remove(34); //Should replace 34 with 35
// console.log(tree.root.right.right);

module.exports = {
  tree,
  BinarySearchTree,
};
