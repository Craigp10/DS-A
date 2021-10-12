//Defining a LinkedList and Node

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

function reverseLinkedList(head) {
  //Given the head of a singly linkedList, reverse it and return it. The tail is now the head and the head is now the tail
  //Loop over list, Keep track of previous node and set the current node next to the previous node.
  //Returns new head

  //Time Complexity - O(n)
  //Space Complexity - O(n)

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

printLinkedList(head);
