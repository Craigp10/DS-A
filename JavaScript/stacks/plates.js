const Stack = require("./stackImplementation");

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

  popAt(index) {
    return this.stacks[index].pop();
  }
}

let stack = new SetOfStacks(4);
stack.push(6);
stack.push(4);
stack.push(5);
stack.push(532);
stack.push(1);
stack.push(12);
stack.push(0);
console.log(stack.stacks);

console.log(stack.pop());
console.log(stack.pop());
console.log("PopAt", stack.popAt(0));
console.log(stack.stacks);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.stacks);

console.log(stack.checkActiveStack());
