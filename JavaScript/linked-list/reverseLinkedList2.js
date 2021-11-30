const { SinglyLinkedList, Node } = require("./linkedListImplementation");
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseLinkedListValues(head, left, right) {
  //Given the head of a linkedList, a left, and a right node, reverse the left and right node, return the new linkedList
  // [1,2,3,4,5] -> [1,4,3,2,5]
  if (left === right) return head;
  let one = new ListNode(1); // to avoid left is one
  (one.next = head), (head = one), left++, right++;
  let fast = head;
  let slow = head;
  let curr = 1;
  while (curr !== right) {
    if (curr < left - 1) slow = slow.next;
    fast = fast.next;
    curr++;
  }
  curr = left;
  while (curr !== right) {
    let node = slow.next;
    slow.next = slow.next.next;
    let temp = fast.next;
    fast.next = node;
    fast.next.next = temp;
    curr++;
  }
  return head.next;
}

// let linkedListValues = [5, 4, 3, 2, 1];
let linkedListValues = [1, 2, 3, 4, 5];
let head;
let node;
linkedListValues.forEach((val, idx) => {
  if (idx == 0) {
    head = new ListNode(val, null);
    node = head;
  } else if (idx == linkedListValues.length) prev = null;
  else {
    node = new ListNode(val, null);
    prev.next = node;
  }
  prev = node;
});

let returned = reverseLinkedListValues(head, 2, 4);
while (returned.next) {
  console.log(returned);
  returned = returned.next;
}
