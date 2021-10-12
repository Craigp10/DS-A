class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }
}

function createLinkedList(values) {
  let previousNode;
  values.forEach((node, idx) => {
    let newNode = new Node(node);
    if (idx) {
      newNode.next = previousNode;
    }

    previousNode = newNode;
  });
  let linkedList = new LinkedList(previousNode);

  return linkedList;
}

function printLinkedList(head) {
  let nextNode = head;
  while (nextNode) {
    console.log(nextNode);
    nextNode = nextNode.next;
  }
}
let linkedListValues = [1, 2, 3, 8, 6, 2];
let list = createLinkedList(linkedListValues);
printLinkedList(list.head);

function removeDupsHash(head) {
  //Remove duplicates from an unsorted linkedList.
  //The list is unsorted so we can implement a hashtable and store the value as a key, if we find a dup we can move the previous pointer
  //to the next link, which will remove the current standing node. Assume Singly linkedList
  // this method uses extra space because we implement a hashtable runs in O(n) but added space complexity

  let currentNode = head;
  let previousNode;
  let nodeObj = {};
  while (currentNode) {
    //{2,next()}
    console.log(currentNode);
    if (nodeObj[currentNode.data]) {
      // {2:true,6:true,8:true,7:true,5:true,3:true,4:true}
      //skip node by setting node's next to current nodes next
      previousNode.next = currentNode.next;
    } else {
      // -> {2:true};
      nodeObj[currentNode.data] = true;
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }
}

function removeDupsRunner(head) {
  //Remove duplicates from an unsorted linkedList. W/ Runner approach (also known as tortoise and haire)
  //The list is unsorted so we can implement two pointers to iterate through the list and check for duplicates
  //to the next link, which will remove the current standing node. Assume Singly linkedList
  // this method uses two pointers to iterate the list at different intervals... removes need for extra space but adds time...

  // Time Complexity - O(n2)
  // Space Complexity - O(1) not considering existing linkedList.

  let currentNode = head;
  while (currentNode) {
    let runnerNode = currentNode;
    while (runnerNode.next) {
      if (runnerNode.next.data == currentNode.data) {
        runnerNode.next = runnerNode.next.next;
      }
      runnerNode = runnerNode.next;
    }
    currentNode = currentNode.next;
  }
}
console.log("**** REMOVING DUPS ****");
console.log("List order after dups removed", [2, 6, 8, 7, 5, 3, 4, 1]);
// removeDupsHash(list.head);
removeDupsRunner(list.head);

printLinkedList(list.head);
