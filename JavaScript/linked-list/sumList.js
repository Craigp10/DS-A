const {
  Node,
  SinglyLinkedList,
  DoublyLinkedList,
} = require("./linkedListImplementation");

function createLinkedList(values) {
  let previousNode;
  values.split("").forEach((node, idx) => {
    let newNode = new Node(node);
    if (idx) {
      newNode.next = previousNode;
    }

    previousNode = newNode;
  });
  let linkedList = new SinglyLinkedList(previousNode);

  return linkedList;
}

let firstDigit = "716";
let list1 = createLinkedList(firstDigit);
let secondDigit = "592";
let list2 = createLinkedList(secondDigit);
list1.print();
list2.print();

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
