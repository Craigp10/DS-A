function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoList(l1, l2) {
  let head = new ListNode();
  let current = head;
  let ptr1 = l1;
  let ptr2 = l2;
  while (ptr1 && ptr2) {
    if (ptr2 && ptr2.val < ptr1.val) {
      current.next = ptr2;
      ptr2 = ptr2.next;
    } else {
      current.next = ptr1;
      ptr1 = ptr1.next;
    }
    current = current.next;
  }
  if (ptr1) {
    current.next = ptr1;
  }
  if (ptr2) {
    current.next = ptr2;
  }

  return head.next;
}

let a1 = [1, 2, 4];
let a2 = [1, 3, 4, 5];

let l1 = new ListNode();
let l2 = new ListNode();
let prev1 = l1;
let prev2 = l2;

a1.forEach((val) => {
  prev1.next = new ListNode(val);
  prev1 = prev1.next;
});

prev1.next = null;

a2.forEach((val) => {
  prev2.next = new ListNode(val);
  prev2 = prev2.next;
});

prev2.next = null;

// console.log(l1.next, l2.next);

// let mergedLi = mergeTwoList(l1.next, l2.next);

// while (mergedLi) {
//   console.log(mergedLi);
//   mergedLi = mergedLi.next;
// }

function mergeTwoList_recurs(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoList_recurs(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoList_recurs(l1, l2.next);
    return l2;
  }
}

console.log(mergeTwoList_recurs(l1.next, l2.next));
