const { SinglyLinkedList } = require("./singly-linkedList");
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
//Assuming singly linkedList -- Builds cycle connecting tail to head.
class CycleLinkedList extends SinglyLinkedList {
  constructor(values, head = null, tail = null) {
    super(values);
    this.head = new ListNode(values[0]);
    this.tail = null;
    this.createList(values);
  }

  insert(value) {
    this.tail.next = new ListNode(value, null);
    this.tail = this.tail.next;
    this.tail.next = this.head;
  }

  printList() {
    let node = this.head;
    node = node.next;
    while (node != this.head) {
      console.log(node);
      node = node.next;
    }
  }
}

let cycleNewList = new CycleLinkedList([1, 2, 3, 4, 5, 5]);
console.log(cycleNewList);
cycleNewList.insert(7);
cycleNewList.printList();

module.exports = {
  CycleLinkedList,
};
