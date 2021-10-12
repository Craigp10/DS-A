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

class SetOfStacks {
  constructor(threshold) {
    this.stacks = [];
    this.threshold = threshold;
  }

  pop() {
    if (this.checkActiveStack() == 0) {
      this.stacks.pop();
    }
    return this.stacks[this.stacks.length - 1].pop();
  }

  push(item) {
    if (this.isEmpty() || this.checkActiveStack() == this.threshold) {
      this.stacks.push(new Stack());
    }
    this.stacks[this.stacks.length - 1].push(item);
  }

  checkActiveStack() {
    return this.stacks[this.stacks.length - 1].getLength();
  }

  peek() {
    return this.stacks[this.stacks.length - 1];
  }

  isEmpty() {
    return this.stacks.length == 0 ? true : false;
  }
}

let stack = new SetOfStacks(4);
stack.push(6);
stack.push(4);
stack.push(5);
stack.push(1);
stack.push(1);
stack.push(12);
stack.push(0);
console.log(stack.stacks);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.stacks);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.stacks);

console.log(stack.checkActiveStack());
