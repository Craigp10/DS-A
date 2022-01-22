class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
module.exports = {
  SinglyLinkedList: class SinglyLinkedList {
    constructor(values, head = null) {
      this.head = head;
      this.createList(values);
    }

    createList = (values) => {
      let previous = null;
      values.forEach((node, idx) => {
        let newNode = new Node(node);
        if (idx) {
          newNode.next = previous;
        }

        previous = newNode;
      });
      this.head = previous;
      console.log(this.head);
    };

    size() {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    }

    getFirst() {
      return this.head;
    }

    print() {
      let nextNode = this.head;
      while (nextNode) {
        console.log(nextNode);
        nextNode = nextNode.next;
      }
    }
  },
  DoublyLinkedList: class DoublyLinkedList {
    constructor(head = null) {
      this.head = head;
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

    getFirst() {
      return this.head;
    }

    print() {
      let nextNode = this.head;
      while (nextNode) {
        console.log(nextNode);
        nextNode = nextNode.next;
      }
    }
  },
};
