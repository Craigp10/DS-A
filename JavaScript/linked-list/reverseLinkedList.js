const {
  Node,
  SinglyLinkedList,
  DoublyLinkedList,
} = require("./linkedListImplementation");

function createLinkedList(values) {
  let previousNode;
  values.forEach((node, idx) => {
    let newNode = new Node(node);
    if (idx) {
      newNode.next = previousNode;
    }

    previousNode = newNode;
  });
  let linkedList = new SinglyLinkedList(previousNode);

  return linkedList;
}

let linkedListValues = [1, 2, 3, 8, 6, 2];
let list = createLinkedList(linkedListValues);
list.print();
console.log("***************");

function reverseLinkedList(head) {
  //Given the head of a singly linkedList, reverse it and return it. The tail is now the head and the head is now the tail
  //Loop over list, Keep track of previous node and set the current node next to the previous node.
  //Returns new head

  //Time Complexity - O(n)
  //Space Complexity - O(n)

  let node = head;
  let prev = null;
  while (node) {
    nxt = node.next;
    node.next = prev;
    prev = node;
    node = nxt;
  }
  return prev;
}

let head = reverseLinkedList(list.head);
list.head = head;
list.print();
