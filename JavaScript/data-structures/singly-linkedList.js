class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

//Single Linked List - LinkedList where each node contains a value and a pointer to the next node
//Methods
//Create list - create linked list given array of values
//insert - insert a node at the end of the list
//print list - log the nodes in order
//getFirst - get first node in first (head)

class SinglyLinkedList {
  //created provided an array of values
  constructor(values, head = null) {
    this.head = new ListNode(values[0]);
    this.tail = null;
    this.createList(values);
  }

  createList(values) {
    let node = this.head;
    for (let i = 1; i < values.length; i++) {
      if (i == values.length - 1) {
        node.next = new ListNode(values[i], null);
        continue;
      }

      node.next = new ListNode(values[i]);
      node = node.next;
    }
    this.tail = node;
  }

  insert(value) {
    this.tail.next = new ListNode(value, null);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }
  }

  getFirst() {
    return this.head;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.head = prev;
  }
}

let newList = new SinglyLinkedList([1, 2, 3, 4, 5, 6]);
console.log(newList.getFirst());
newList.printList();
newList.reverse();
newList.printList();

module.exports = {
  SinglyLinkedList,
  ListNode,
};

//@importing into linkedList file
// const { ListNode, SingleLinkedList } = require("./singly-linkedList");

// let values = [1, 2, 3];
// let newList = new SingleLinkedList(values);
// newList.printList();
