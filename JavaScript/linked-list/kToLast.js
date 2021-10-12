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
let linkedListValues = [1, 2, 3, 4, 5, 3, 5, 7, 8, 6, 2]; //length = 11; dups = 3;
let list = createLinkedList(linkedListValues);
printLinkedList(list.head);
console.log(list.size());

function kToLastLinear(list, k) {
  //return the kth to last data
  //assume we don't know the size

  let size = list.size();

  let head = list.getFirst();

  let stopIndex = size - k;
  nextNode = head;
  let i = 0;
  while (i <= stopIndex) {
    if (!nextNode.next) {
      return false;
    }
    if (i == stopIndex) {
      return nextNode;
    }

    nextNode = nextNode.next;
    i++;
  }
}
function kToLastPointers(head, k) {
  //return the kth to last data
  //assume we don't know the size
  //two pointers one starts on head and other starts on kth element. k - 1 index.

  //Time Complexity O(2n) -> O(n)
  //Space Complexity O(1) -- Not considering initial linkedlist

  let ptr1 = head;
  let ptr2 = head;
  for (let j = 0; j < k; j++) {
    ptr2 = ptr2.next;
  }
  console.log({ ptr1, ptr2 });

  while (ptr2) {
    ptr2 = ptr2.next;
    ptr1 = ptr1.next;
  }

  return ptr1;
}
let head = list.head;

console.log(kToLastLinear(list, 3), 3);
console.log(kToLastPointers(head, 3), 3);
