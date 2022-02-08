const { SinglyLinkedList } = require("../data-structures/singly-linkedList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
 }
 */

var addTwoNumbers = function (l1, l2) {
  const calcList = (node) => {
    if (node.next == null) {
      return node.val;
    } else {
      return calcList(node.next) + JSON.stringify(node.val); //can reverse number by swapping func call and node val addition
    }
  };
  let num1 = parseInt(calcList(l1.head));
  let num2 = parseInt(calcList(l2.head));
  return num1 + num2;
};
let l1 = new SinglyLinkedList([3, 4, 2]); //243
let l2 = new SinglyLinkedList([4, 5, 6]); //654
let list1 = new SinglyLinkedList([1, 2, 3, 4, 5]); //54321
let list2 = new SinglyLinkedList([6, 7, 8, 9, 9]); //99876
console.log(54321 + 99876);
console.log(addTwoNumbers(list1, list2), 154197);
console.log(addTwoNumbers(l1, l2), 243 + 654);
const l3 = new SinglyLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l4 = new SinglyLinkedList([5, 6, 4]);

console.log(addTwoNumbers(l3, l4), "Error cause of number formatting");
