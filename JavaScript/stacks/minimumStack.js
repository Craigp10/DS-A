const { Stack } = require("../data-structures/stack");

class MinStack {
  //Dynamic Stack that displays min
  //items is our regular stack
  //minStack contains the min values as a stack.
  //When we run operations push/pop we just how the new/removing value relates to our min stack

  constructor() {
    this.items = new Stack(); //All items
    this.minStack = new Stack(); //minStack
  }

  pop() {
    //compare popped value to current min (top of min stack) -- If they are the same pop it.
    let popped = this.items.pop();
    if (popped == this.min()) {
      this.minStack.pop();
    }
    return popped;
  }
  push(item) {
    //compare new item to minstack top -- If it is lower push it onto the stack
    if (this.minStack.isEmpty() || item < this.minStack.peek()) {
      this.minStack.push(item);
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
    //Return top of min stack
    if (this.minStack.isEmpty()) {
      throw "Empty Min Stack";
    } else {
      return this.minStack.peek();
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
