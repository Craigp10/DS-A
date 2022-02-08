const { SinglyLinkedList } = require("../data-structures/singly-linkedList");

let list = new SinglyLinkedList([1, 2, 3, 4, 5, 3, 5, 7, 8, 6, 2]); //length = 11; ktoLast = 8

function kToLastLinear(list, k) {
  //return the kth to last data
  //assume we don't know the size

  let size = list.size();
  let head = list.getFirst();

  let stopIndex = size - k;
  nextNode = head;
  let i = 0;
  while (i <= stopIndex) {
    if (!nextNode.next) {
      return false;
    }
    if (i == stopIndex) {
      return nextNode;
    }

    nextNode = nextNode.next;
    i++;
  }
}
function kToLastPointers(head, k) {
  //return the kth to last data
  //assume we don't know the size
  //two pointers one starts on head and other starts on kth element. k - 1 index.

  //Time Complexity O(2n) -> O(n)
  //Space Complexity O(1) -- Not considering initial linkedlist

  let ptr1 = head;
  let ptr2 = head;
  for (let j = 0; j < k; j++) {
    ptr2 = ptr2.next;
  }
  console.log({ ptr1, ptr2 });

  while (ptr2) {
    ptr2 = ptr2.next;
    ptr1 = ptr1.next;
  }

  return ptr1;
}
let head = list.head;

console.log(kToLastLinear(list, 3).val, 8);
console.log(kToLastPointers(head, 3).val, 8);
