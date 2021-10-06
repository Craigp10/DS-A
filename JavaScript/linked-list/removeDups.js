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
// console.log(list.head.next);

let nextNode = list.head;
// while (nextNode) {
//   console.log(nextNode);
//   nextNode = nextNode.next;
// }

function removeDupsHash(head) {
  //Remove duplicates from an unsorted linkedList.
  //The list is unsorted so we can implement a hashtable and store the value as a key, if we find a dup we can move the previous pointer
  //to the next link, which will remove the current standing node. Assume Singly linkedList
  // this method uses extra space because we implement a hashtable runs in O(n) but added space complexity

  let currentNode = head;
  let previousNode;
  let nodeObj = {};
  while (currentNode) {
    //{2,next()}
    console.log(currentNode);
    if (nodeObj[currentNode.data]) {
      // {2:true,6:true,8:true,7:true,5:true,3:true,4:true}
      console.log("removed", currentNode.next);
      //skip node by setting node's next to current nodes next
      previousNode.next = currentNode.next;
    } else {
      // -> {2:true};
      nodeObj[currentNode.data] = true;
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }
  console.log(nodeObj);
}
function removeDupsPointers(head) {
  //Remove duplicates from an unsorted linkedList. W/ Runner approach (also known as tortoise and haire)
  //The list is unsorted so we can implement two pointers to iterate through the list and check for duplicates
  //to the next link, which will remove the current standing node. Assume Singly linkedList
  // this method uses two pointers to iterate the list at different intervals... removes need for extra space but adds time...
  // timeO(n2) space O(1).

  let currentNode = head;
  while (currentNode) {
    let runnerNode = currentNode;
    while (runnerNode.next) {
      if (runnerNode.next.data == currentNode.data) {
        runnerNode.next = runnerNode.next.next;
      }
      runnerNode = runnerNode.next;
    }
    currentNode = currentNode.next;
  }
}
console.log("**** REMOVING DUPS ****");
console.log([1, 4, 3, 5, 7, 8, 6, 2]);
// removeDupsHash(list.head);
removeDupsPointers(list.head);

nextNode = list.head;
while (nextNode) {
  console.log(nextNode);
  nextNode = nextNode.next;
}
