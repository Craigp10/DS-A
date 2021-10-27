module.exports = {
  Node: class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  },

  SinglyLinkedList: class SinglyLinkedList {
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
