const {
  BinarySearchTree,
  Node,
} = require("../data-structures/binarySearchTree");

class AVLNode extends Node {
  constructor(value) {
    super(value);
    this.height = 1;
  }
}

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
  }

  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  // A utility function to get
  // maximum of two integers
  max(a, b) {
    return a > b ? a : b;
  }

  // A utility function to right
  // rotate subtree rooted with y
  // See the diagram given above.
  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // A utility function to left
  // rotate subtree rooted with x
  // See the diagram given above.
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    /* 1. Perform the normal BST insertion */
    if (node == null) return new AVLNode(key);

    if (key < node.value) node.left = this.insert(node.left, key);
    else if (key > node.value) node.right = this.insert(node.right, key);
    // Duplicate keys not allowed
    else return node;

    /* 2. Update height of this ancestor node */
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    /* 3. Get the balance factor of this ancestor
      node to check whether this node became
      unbalanced */
    let balance = this.getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.left.value) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && key > node.right.value) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && key > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  preOrder(node) {
    if (node != null) {
      console.log(node.value + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

let tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
// console.log("1");
// tree.preOrder(tree.root);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);
console.log("1", tree);
tree.preOrder(tree.root);
