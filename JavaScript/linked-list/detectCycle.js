const { CycleLinkedList } = require("../data-structures/cycle-linkedList");
/**
 * Definition for singly-linked list.
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//to detect a cycle if we run into the same node after iterating through, it is a cycle.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle_brute = function (head) {
  //Utilize set to compare objects
  //O(n2)
  if (!head) return false;
  let nodeSet = new Set();
  let node = head;
  //O(n)
  while (node.next) {
    //O(n)
    if (nodeSet.has(node)) {
      return true;
    }
    nodeSet.add(node);
    node = node.next;
  }
  return false;
};

const hasCycle = (head) => {
  if (!head) return false;
  let ptr1 = head; //tortise
  let ptr2 = head; //haire
  //O(n)
  while (ptr2.next && ptr2.next.next) {
    ptr2 = ptr2.next.next;
    ptr1 = ptr1.next;
    if (ptr1 == ptr2) {
      //if We cared about the point they meet at we run this loop
      // while (ptr1 != ptr2) {
      //   ptr1 = ptr1.next;
      //   ptr2 = ptr2.next;
      // }
      //return ptr2;
      return true;
    }
  }
  return false;
};

let list1 = new CycleLinkedList([1, 2, 3, 4, 5]); //1 -> 2 -> 3 -> 4 -> 5 -> 1
console.log(hasCycle(list1.head), false);
let list2 = new CycleLinkedList([1, 2, 3, 4, 5]); //1 -> 2 -> 3 -> 4 -> 5 -> 1
list2.insert(6); //inserting creates the cycle with our class
console.log(hasCycle(list2.head), true);
