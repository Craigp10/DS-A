//Defining a LinkedList and Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
}

function createLinkedList(values) {
  let previousNode;
  values.split("c").forEach((node, idx) => {
    let newNode = new Node(node);
    if (idx) {
      newNode.next = previousNode;
    }

    previousNode = newNode;
  });
  let linkedList = new LinkedList(previousNode);

  return linkedList;
}

function printLinkedList(head) {
  let nextNode = head;
  while (nextNode) {
    console.log(nextNode);
    nextNode = nextNode.next;
  }
}

let firstDigit = "716";
let list1 = createLinkedList(firstDigit);
let secondDigit = "592";
let list2 = createLinkedList(secondDigit);
printLinkedList(list1.head);
printLinkedList(list2.head);

function sumList(list1, list2) {
  //Given two linkedList that are in reverse order, add its digits together as a string and sum the two strings
  //ex. (7 -> 1 -> 6) + (5 -> 9 -> 2) ... 617 + 295 = 912.
  //Assume the digits are the same length

  //Space Complexity O(n)
  //Time Complexity O(1) -- Not considering initial linkedlist

  let digit1 = "";
  let digit2 = "";

  let nextNode1 = list1.head;
  let nextNode2 = list2.head;

  while (nextNode1 && nextNode2) {
    digit1 += nextNode1.data.toString();
    digit2 += nextNode2.data.toString();

    nextNode1 = nextNode1.next;
    nextNode2 = nextNode2.next;
  }
  console.log(digit1, digit2);
  return parseInt(digit1) + parseInt(digit2);
}

console.log(sumList(list1, list2));
