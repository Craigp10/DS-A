//Stack - Linear Data structure that follows Last In First Out (LIFO) princples.
//Methods
//Pop - return item at top of stack
//Push - Add item to top of stack
//peek - See item at top of stack
//IsEmpty - Check if stack has values
//getLength - Return length of the stack

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

module.exports = {
  Stack,
};

let stack = new Stack();
let emptyStack = new Stack();

stack.push(6);
stack.push(4);
stack.push(5);
stack.push(532);
stack.push(1);
stack.push(12);
stack.push(0);

console.log(stack);
stack.pop();
console.log(stack);
