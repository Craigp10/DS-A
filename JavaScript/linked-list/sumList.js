const { SinglyLinkedList } = require("../data-structures/singly-linkedList");

let firstDigit = [7, 1, 6];
let secondDigit = [5, 9, 2];
let list1 = new SinglyLinkedList(firstDigit);
let list2 = new SinglyLinkedList(secondDigit);

list1.printList();
list2.printList();

function sumList(node1, node2) {
  //Given two linkedList that are in reverse order, add its digits together as a string and sum the two strings
  //ex. (7 -> 1 -> 6) + (5 -> 9 -> 2) ... 617 + 295 = 912.
  //Assume the digits are the same length

  //Space Complexity O(n)
  //Time Complexity O(1) -- Not considering initial linkedlist

  let digit1 = "";
  let digit2 = "";

  while (node1 && node2) {
    digit1 += node1.val.toString();
    digit2 += node2.val.toString();

    node1 = node1.next;
    node2 = node2.next;
  }
  return parseInt(digit1) + parseInt(digit2);
}

console.log(sumList(list1.head, list2.head), 1308);
