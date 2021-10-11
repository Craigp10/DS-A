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

let linkedList_values = [1, 2, 3, 8, 6, 2];
console.log(linkedList_values);
let previousNode;
linkedList_values.forEach((node, idx) => {
  let newNode = new Node(node);
  if (idx) {
    newNode.next = previousNode;
  }

  previousNode = newNode;
});
let list = new LinkedList(previousNode);
// console.log(list.size());
nextNode = list.head;
while (nextNode) {
  console.log(nextNode);
  nextNode = nextNode.next;
}
function reverseLinkedList(head) {
  //Given the head of a linkedList, reverse it. The tail is now the head and the head is now the tail
  //O(n)

  //Loop over list, Keep track of previous node and set the current node next to the previous node.
  //Returns new head
  let node;
  let currentNode = head;
  let previousNode;
  while (currentNode) {
    nextNode = currentNode.next;

    if (!previousNode) {
      currentNode.next = null;
    } else {
      currentNode.next = previousNode;
    }
    previousNode = currentNode;
    currentNode = nextNode;
  }
  node = previousNode;
  return node;
}

let head = reverseLinkedList(list.head);
console.log("RAN FUNCTION");

nextNode = head;
while (nextNode) {
  console.log(nextNode);
  nextNode = nextNode.next;
}
