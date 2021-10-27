const Stack = require("./stackImplementation");

class MyQueue {
  //Implementing a queue with two stacks
  constructor() {
    this.newStack = new Stack(); //Where new items are inserted onto on top
    this.existingStack = new Stack(); //Where we reorder our stack to represent a queue and pop on top
  }

  pop() {
    if (!this.newStack.isEmpty()) {
      this.reverseStack();
    }

    return this.existingStack.pop();
  }

  push(item) {
    this.newStack.push(item);
  }

  reverseStack() {
    while (!this.newStack.isEmpty()) {
      this.existingStack.push(this.newStack.pop());
    }
  }

  peek() {
    if (!this.newStack.isEmpty()) {
      this.reverseStack();
    }

    return this.existingStack.peek();
  }
}

let queue = new MyQueue(4);
queue.push(6);
queue.push(4);
queue.push(5);
queue.push(532);
queue.push(1);
queue.push(12);
queue.push(0);
console.log(queue);
queue.pop();
queue.push(12);
console.log(queue);
console.log(queue.peek());
console.log(queue);
