const {
  SinglyLinkedList,
  ListNode,
} = require("../data-structures/singly-linkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  //Time - O(n) Space - O(k)
  let newHead = new ListNode();
  if (!head) return new ListNode();
  if (!head.next) return head;
  //For each sequence of k in the list reverse those nodes
  //[1,2,3,4] -> [3,2,1,4] -- k = 3
  //[1,2,3,5,6] - > [3,2,1,6,5,4] -- k = 3
  //We need a way to track leftover k value when iterating
  //Not reverse when we run into the end
  //[previous, 1st,2nd,3rd... kth]; O(n)
  //iterate list. Create array and store the nodes in memory in that array + the previous node
  //once array.length == k + 1, reverse those nodes, if we run out of iterations break.
  //Need a way to re assign our head to the reversed value
  let node = head;
  let prev;
  let nodeArray = [newHead];
  let i = 0;
  while (node || k == i) {
    if (k == i) {
      let tmp = nodeArray[k].next;
      let prevNode = nodeArray[0];

      for (let j = nodeArray.length - 1; j > 0; j--) {
        prevNode.next = nodeArray[j];
        prevNode = prevNode.next;
      }
      node = prevNode;
      node.next = tmp;

      nodeArray = [node];
      i = 0;
    } else {
      nodeArray.push(node);
      i++;
    }
    prev = node;
    node = node.next;
  }
  return newHead.next;
};

// let list1 = new SinglyLinkedList([1, 2, 3, 4, 5]);
// let b = reverseKGroup(list1.head, 3);
// console.log(b);
// let list2 = new SinglyLinkedList([1, 2]);
// let a = reverseKGroup(list2.head, 2);
// console.log(a);

const reverseKGroup_stack = (head, k) => {
  //stack holds k nodes in reversed order, pop off to work with it

  if (!head) return new ListNode();
  if (!head.next) return head;

  let stack = [];
  let newHead = new ListNode();
  let prev;
  let node = head;
  let last = newHead;
  while (node || k == stack.length) {
    if (stack.length == k) {
      // let tmp = stack.peek().next;
      let tmp = stack[stack.length - 1].next;

      while (stack.length) {
        let next = stack.pop();
        last.next = next;
        last = last.next;
      }
      last.next = tmp;
      node = last;
    } else {
      stack.push(node);
    }
    prev = node;
    node = node.next;
  }
  return newHead.next;
};

let list1 = new SinglyLinkedList([1, 2, 3, 4, 5]);
let b = reverseKGroup_stack(list1.head, 3);
list1.head = b;
// list1.printList();

let list2 = new SinglyLinkedList([1, 2]);
let a = reverseKGroup_stack(list2.head, 2);
list2.head = a;
list2.printList();
