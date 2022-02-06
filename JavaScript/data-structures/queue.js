//Queue - Linear Data Structure FIFO princples.
//Methods
//Enqueue - Add item to queue
//Dequeue - Remove item from queue
//Front - return item at top of queue
//Rear - return item at end of queue
//Queues can be full and empty but for this simple implementation we're not considering that

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    return this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  view() {
    console.log(this.items);
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(43);
queue.enqueue(100);
queue.enqueue(-1);
queue.view();
console.log(queue.front());
console.log(queue.rear());
