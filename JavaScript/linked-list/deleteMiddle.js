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

let linkedList_values = [1, 2, 3, 4, 5, 3, 5, 7, 8, 6, 2]; //length = 11; dups = 3;
console.log(linkedList_values);
let previousNode;
linkedList_values.forEach((node, idx) => {
  let newNode = new Node(node);
  if (idx) {
    newNode.next = previousNode;
  }

  previousNode = newNode;
});
let list = new LinkedList(previousNode);
console.log(list.size());

function deleteMiddle(node) {
  //Given a middle node of a linkedList, remove it from the linked list.
  //O(1)
  if (node == null || node.next == null) return false;
  //We can  copy over the contents of the 'next' node entirely to the current node, then change the next pointer to remove the next node.
  node.data = node.next.data;
  node.next = node.next;

  return true;
}

// console.log(deleteMiddle(list[3]));
// console.log(list.size());
