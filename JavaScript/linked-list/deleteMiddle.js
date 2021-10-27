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

let linkedListValues = [1, 2, 3, 4, 5, 3, 5, 7, 8, 6, 2]; //length = 11; dups = 3;
let list = createLinkedList(linkedListValues);
console.log(list.size());

function deleteMiddle(node) {
  //Given a middle node of a linkedList, remove it from the linked list.
  //Space Complexity -- O(1)
  //Time Complexity -- O(1)

  if (node == null || node.next == null) return false;
  //We can  copy over the contents of the 'next' node entirely to the current node, then change the next pointer to remove the next node.
  node.data = node.next.data;
  node.next = node.next;

  return true;
}

console.log(
  deleteMiddle({
    data: 5,
    next: { data: 4, next: { data: 3, next: {} } },
  })
);
console.log(list.size());
