const Stack = require("./stackImplementation");

class MinStack {
  //Dynamic Stack that displays min
  constructor() {
    this.items = new Stack(); //All items
    this.s2 = new Stack(); //minStack
  }

  pop() {
    let popped = this.items.pop();
    if (popped == this.min()) {
      this.s2.pop();
    }
    return popped;
  }
  push(item) {
    if (this.s2.isEmpty() || item < this.s2.peek()) {
      this.s2.push(item);
    }
    this.items.push(item);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length ? true : false;
  }

  min() {
    console.log("c", this.s2);
    if (this.s2.isEmpty()) {
      throw "Empty Min Stack";
    } else {
      return this.s2.peek();
    }
  }
}

let stack = new MinStack();
stack.push(6);
console.log(stack);
stack.push(4);
console.log(stack);
stack.push(5);
console.log(stack);
stack.push(1);
console.log(stack);
