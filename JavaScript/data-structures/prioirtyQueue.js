class PriorityQueueItem {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  // Array implementation - Highest prioirity
  constructor() {
    this.items = [];
  }

  // functions to be implemented
  push(val, priority) {
    this.insert(new PriorityQueueItem(val, priority));
  }

  insert(item) {
    if (!this.items.length) {
      this.items.push(item);
      return;
    }

    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < item.priority) {
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }
    // if the element have the highest priority
    // it is added at the end of the queue
    if (!added) {
      this.items.push(item);
    }
  }

  pop() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return !this.items.length ? true : false;
  }
  print() {
    console.log(this.items);
  }
}

let newPQ = new PriorityQueue();
console.log(newPQ.isEmpty());
newPQ.push(3, 3);
newPQ.push(5, 5);
newPQ.push(1, 1);
newPQ.print();
console.log(newPQ.pop());
newPQ.print();
console.log(newPQ.isEmpty());

module.exports = {
  PriorityQueue,
};
