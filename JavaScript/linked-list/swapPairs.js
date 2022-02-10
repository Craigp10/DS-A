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
  // console.log(previous,current,current.next)
  while (current.next) {
    // console.log(previous,current,current.next)
    // console.l0
    //otherwise we need to iterate through and udpate
    //start with current on 3rd spot (index 2), previous = current - 1
    //if (current.next exist) swap previous.next = current.next, current.next w/ current.
    //previous = current.next, current = current.next.next;
    let tmp = current.next.next;
    let next = current.next;
    previous.next = next;
    current.next = tmp;
    previous.next.next = current;
    previous = current;
    current = tmp;
    if (!current) return newHead;
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
