const {
  SinglyLinkedList,
  ListNode,
} = require("../data-structures/singly-linkedList");
/**
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Remove all duplicate values... not just the remaining duplicates
 * [1,1,1,2,3,4,4,5] -> [2,3,5]
 * Return the head
 *
 * We'll need to iterate the linkedList and maintain the head. If the head is getting removed we'll need to updated it
 * Since the linkedList is sorted we can iterate and remove the values in place.
 *
 * process: head variable
 * iterate list. Hold previous node and previous val. Check if next val is equal to this val. If so we'll assign dup val var
 * iterate until next.val != dup val. Assign previous.next = next;
 *
 * This will remove all of those duplicate values. If next is null while we have a dup val stored then we'll assign previous to null
 *
 *
 */

const deleteDuplicates = function (head) {
  //O(n) -- can't be improved
  if (!head) return head;

  //init dup -- will be our dupVal to check while looping
  let dupVal;
  //init newHead to be our dummy head
  let newHead = new ListNode();
  //assign newHead next to current Head
  newHead.next = head;
  //assign prev to newHead -- dummy head
  let prev = newHead;
  //init node at head
  let node = head;
  //start iterating while node exist
  while (node) {
    //if node.next exist and its value is equal to current node value
    if (node.next && node.next.val == node.val) {
      //assign dup
      dupVal = node.val;
      //iterate to last dup val node
      while (node.next && dupVal == node.next.val) {
        node = node.next;
      }
      //assign prev to the next node (first node of new value)
      prev.next = node.next;
      //assign node = node.next
      node = node.next;
    } else {
      //otherwise condtions were good keep iterating
      prev = node;
      node = node.next;
    }
  }

  return newHead.next;
};

let list = new SinglyLinkedList([1, 1, 1, 2, 3, 4, 4, 5]);
// console.log(list.head);
console.log(deleteDuplicates(list.head));
let list1 = new SinglyLinkedList([1, 2, 2, 3, 3, 4, 4, 5]);
// console.log(list1.head);
console.log(deleteDuplicates(list1.head));
