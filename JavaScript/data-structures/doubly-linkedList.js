class ListNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

//Double Linked List - Linked List that contains a pointer to the next node and a pointer to the previous node
//Methods:
//create List - given values array build list
//insert - insert given value at end of list
//prepend - insert given value at head of list -- replacing the head
//print List - print all of the values in the list in order

class DoublyLinkedList {
  //created provided an array of values
  constructor(values, head = null) {
    this.head = new ListNode(values[0]);
    this.tail = this.head;
    this.length = this.createList(values);
  }

  createList(values) {
    // let node = this.head;
    let previous = this.head;
    let ctr = 1;
    for (let i = 1; i < values.length; i++) {
      if (i == values.length - 1) {
        let node = new ListNode(values[i], null, previous);
        previous.next = node;
        break;
      }

      let node = new ListNode(values[i], null, previous);
      previous.next = node;
      previous = node;
    }
    ctr++;
    this.tail = previous;
    return ctr;
  }

  insert(value) {
    this.tail.next = new ListNode(value, null, this.tail);
    this.tail = this.tail.next;
    this.length++;
    return;
  }

  insertAt(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return;
    }

    if (index === this.length) {
      this.insert(value);
      return;
    }

    let newNode = new ListNode(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }
    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.prev = previousNode;
    nextNode.prev = newNode;

    this.length++;
    return;
  }

  getNth(index) {
    let current = this.head;
    let count = 0;

    //index of Node we are currently looking at

    while (current != null) {
      if (count == index) return current.data;
      count++;
      current = current.next;
    }

    return 0;
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }
    return;
  }
  deleteList() {
    //explain it? Since no values are being referenced anymore they are removed via garbage collection?
    head = null;
  }
}

let newList = new DoublyLinkedList([1, 2, 3, 4]);
newList.printList();
newList.insertAt(1, 10);
newList.printList();
