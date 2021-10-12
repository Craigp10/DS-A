class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    return this.items.pop();
  }
  push(item) {
    this.items.push(item);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0 ? true : false;
  }

  getLength() {
    return this.items.length;
  }
}

function sortStack(stack) {
  let orderStack = new Stack();
  while (!stack.isEmpty()) {
    let stackTop = stack.pop();
    while (stackTop < orderStack.peek() && !orderStack.isEmpty()) {
      stack.push(orderStack.pop());
    }
    orderStack.push(stackTop);
  }
  return orderStack;
}

let stack = new Stack();
stack.push(6);
stack.push(4);
stack.push(5);
stack.push(532);
stack.push(1);
stack.push(12);
stack.push(0);
console.log(stack);

let newStack = sortStack(stack);
console.log(newStack);
