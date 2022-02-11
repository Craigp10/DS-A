//Queue - Linear Data Structure FIFO princples.
//Methods
//Enqueue - Add item to queue
//Dequeue - Remove item from queue
//peek - return item at top of queue
//last - return item at end of queue
//isEmpty - return bool is there is val in queue
//getLength - return length of queue
//getIndex - return index of value in queue if it exist
//Queues can be full and empty but for this simple implementation we're not considering that

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    //O(1);
    return this.items.push(item);
  }

  dequeue() {
    //O(1)
    return this.items.shift();
  }

  peek() {
    //O(1)
    return this.items[0];
  }

  last() {
    //O(1)
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    //O(1);
    return !this.items.length;
  }

  print() {
    //O(1)
    console.log(this.items);
  }
  getLength() {
    //O(1)
    return this.items.length;
  }
  getIndex(value) {
    //O(n)
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == value) return i;
    }
    return -1;
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(43);
queue.enqueue(100);
queue.enqueue(-1);
queue.print();
console.log(queue.front());
console.log(queue.rear());
