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
}

let stack = new Stack();

stack.push(4);
stack.push(5);
stack.push(6);
stack.push(1);

console.log(stack);
stack.pop();
console.log(stack);
