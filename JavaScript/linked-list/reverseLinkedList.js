function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//creating LinkedList
let values = [5, 4, 3, 2, 1];
let previousNode;
values.forEach((node, idx) => {
  let newNode = new ListNode(node);
  if (idx) {
    newNode.next = previousNode;
  }

  previousNode = newNode;
});
// console.log(previousNode);

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

let head = reverseLinkedList(previousNode);
console.log(head);
