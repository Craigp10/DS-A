const { SinglyLinkedList } = require("../data-structures/singly-linkedList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 *
 * Given two linked list, add up the values in reverse order and sum them together
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers_nonOverflow = function (l1, l2) {
  const calcList = (node) => {
    if (node.next == null) {
      return node.val;
    } else {
      return calcList(node.next) + node.val.toString();
    }
  };

  let num1 = parseInt(calcList(l1));
  let num2 = parseInt(calcList(l2));

  let sum = num1 + num2;
  let strNum = JSON.stringify(sum);
  let head;
  let node;
  for (let i = strNum.length - 1; i >= 0; i--) {
    if (i == strNum.length - 1) {
      head = new ListNode(strNum[i], null);
      node = head;
    } else {
      node.next = new ListNode(strNum[i], null);
      node = node.next;
    }
  }
  return head;
};

const l1 = new SinglyLinkedList([3, 4, 2]);
const l2 = new SinglyLinkedList([4, 6, 5]);
console.log(addTwoNumbers_nonOverflow(l1.head, l2.head), 708);

// const l3 = new SinglyLinkedList([
//   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1,
// ]);
// const l4 = new SinglyLinkedList([5, 6, 4]);

// console.log(
//   addTwoNumbers_nonOverflow(l3.head, l4.head),
//   "Error cause of number formatting"
// );

// const l5 = new SinglyLinkedList([2, 4, 2, 5, 7]); //75242
// const l6 = new SinglyLinkedList([2, 4, 2, 9]); //9242
// console.log(addTwoNumbers_nonOverflow(l5.head, l6.head), 75242 + 9242);
// const l7 = new SinglyLinkedList([0]); //0
// const l8 = new SinglyLinkedList([0]); //0
// console.log(addTwoNumbers_nonOverflow(l7.head, l8.head), 0);

const addTwoNumbers_overFlow = (l1, l2) => {
  //init head
  let List = new ListNode(0);
  let head = List;
  //init running sum
  let sum = 0;
  let carry = 0;

  //While either list is not null or sum is greater than 0
  while (l1 !== null || l2 !== null || sum > 0) {
    //if l1 is not null add val to sum... l1 = next;
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      //if l2 is not null add val to sum... l2 = next;
      sum = sum + l2.val;
      l2 = l2.next;
    }
    //if sum >= 10 then create incremental value
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }
  //return head.next
  return List.next;
};
