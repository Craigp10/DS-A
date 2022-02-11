class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree
//Methods
//Create - empty tree
//Insert - Insert a node O(n) - worst case - O(log n) best case
//Delete - delete a node - O(n) worst - O(log n) best
//Search - Find a node in the tree - O(n) worst - O(log n) best
//print - O(n)

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    console.log(value, this.root);
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    //BFS search to insert element
    let q = [this.root];
    while (q.length) {
      let dequeued = q.shift();
      if (!dequeued.left) {
        dequeued.left = node;
        return;
      } else if (!dequeued.right) {
        dequeued.right = node;
        return;
      } else {
        //dequeued.left && dequeued.right
        q.push(dequeued.left, dequeued.right);
      }
    }
  }

  search(value) {
    //BFS until value is found
    let q = [this.root];
    while (q.length) {
      let dequeued = q.shift();
      if (dequeued == value) return dequeued;
      else {
        //dequeued.left && dequeued.right
        q.push(dequeued.left, dequeued.right);
      }
    }
  }

  printTree() {
    //preorder
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let bTree = new BinaryTree();
bTree.add(24);
bTree.add(23);
bTree.add(4);
bTree.add(14);
bTree.add(84);
bTree.add(23);
bTree.add(256);

/* 
        24
        /\
       23 4
      / \   /\
    14  84 23 256
  PreOrder - 24,23,14,84,4,23,256
*/

console.log(bTree.printTree());
