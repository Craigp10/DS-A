const { SinglyLinkedList } = require("../data-structures/singly-linkedList");

let linkedListValues = [1, 2, 3, 8, 6, 2];
let list = new SinglyLinkedList(linkedListValues);
list.printList();

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
      //skip node by setting node's next to current nodes next
      previousNode.next = currentNode.next;
    } else {
      // -> {2:true};
      nodeObj[currentNode.data] = true;
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }
}

function removeDupsRunner(head) {
  //Remove duplicates from an unsorted linkedList. W/ Runner approach (also known as tortoise and haire)
  //The list is unsorted so we can implement two pointers to iterate through the list and check for duplicates
  //to the next link, which will remove the current standing node. Assume Singly linkedList
  // this method uses two pointers to iterate the list at different intervals... removes need for extra space but adds time...

  // Time Complexity - O(n2)
  // Space Complexity - O(1) not considering existing linkedList.

  let ptr1 = head;
  while (ptr1 && ptr1.next) {
    let ptr2 = ptr1;
    while (ptr2 && ptr2.next) {
      if (ptr2.next.val == ptr1.val) {
        //remove dup;
        ptr2.next = ptr2.next.next;
      }
      ptr2 = ptr2.next;
    }
    ptr1 = ptr1.next;
  }
}
console.log("**** REMOVING DUPS ****");
console.log("List order after dups removed", [1, 2, 3, 8, 6, 2]);
// removeDupsHash(list.head);
removeDupsRunner(list.head);
list.printList();
console.log("********************************\n");
let list2 = new SinglyLinkedList([2, 4, 6, 3, 2, 4, 5, 7, 3, 1, 9]);
removeDupsRunner(list2.head);
list2.printList();
console.log("List order after dups removed", [2, 4, 6, 3, 5, 7, 1, 9]);
