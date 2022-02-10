const { SinglyLinkedList } = require("../data-structures/singly-linkedList");
/**
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const swapPairs = function (head) {
  //O(n/2) - We can skip through half of the nodes in n.

  //If head or head next is null return head -- can't do any swaps
  if (!head || !head.next) return head;
  //if head and head next ar valid but but head.next.next then swap
  //head with head next and return;
  if (head && head.next && !head.next.next) {
    let tmp = head;
    let newHead = head.next;
    tmp.next = head.next.next;
    newHead.next = tmp;
    //newHead -> head -> null;
    return newHead;
  }

  let previous = head;
  let newHead = head.next;
  previous.next = head.next.next;
  newHead.next = previous;
  let current = previous.next;
  while (current && current.next) {
    //iterate while current && current.next exist, if current.next doesn't exist then we've concluded our swaps
    //current represents the first position of the node swap and previous represents the last position of the previous node swap

    //assign tmp to current.next.next -- This is will be our current position for the next iteration.
    let tmp = current.next.next;
    //Start the node swap -- set previous node to the current.next node
    previous.next = current.next;
    //assign current.next to our new starter node
    current.next = tmp;
    //finish swap by assigning previous.next next to the current node
    previous.next.next = current;
    //prepare for next iteration -- assign  previous to the current place
    previous = current;
    //current to our starting position for next iteration.
    current = tmp;
  }
  return newHead;
};

let list1 = new SinglyLinkedList([1, 2, 3, 4, 5, 6]);

// console.log(head);

let node = swapPairs(list1.head);
console.log("SHOULD BE: 2 -> 1 -> 4 -> 3 -> 6 -> 5", node);
while (node) {
  console.log(node.val);
  node = node.next;
}

let list2 = new SinglyLinkedList([1, 2, 4]);
node = swapPairs(list2.head);
console.log("SHOULD BE: 2 -> 1 -> 4");
while (node) {
  console.log(node.val);
  node = node.next;
}
let list3 = new SinglyLinkedList([1, 2, 3, 4]);
node = swapPairs(list3.head);
console.log("SHOULD BE: 2 -> 1 -> 4 -> 3");
while (node) {
  console.log(node.val);
  node = node.next;
}
