/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  const calcList = (node) => {
    if (node.next == null) {
      return node.val;
    } else {
      return calcList(node.next) + node.val.toString();
    }
  };

  let num1 = parseInt(calcList(l1));
  let num2 = parseInt(calcList(l2));

  return num1 + num2;
};

//l1
function createLinkedList(values) {
  let previousNode;
  values.forEach((node, idx) => {
    let newNode = new ListNode(node);
    if (idx) {
      newNode.next = previousNode;
    }

    previousNode = newNode;
  });

  return previousNode;
}

const l1 = createLinkedList([3, 4, 2]);
const l2 = createLinkedList([4, 6, 5]);

console.log(addTwoNumbers(l1, l2), 807);
