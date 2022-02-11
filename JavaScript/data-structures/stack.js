//Stack - Linear Data structure that follows Last In First Out (LIFO) princples.
//Methods
//Pop - return item at top of stack
//Push - Add item to top of stack
//peek - See item at top of stack
//IsEmpty - Check if stack has values
//getLength - Return length of the stack
//getIndex - return index of value in stack if it exist

class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    //O(1)
    return this.items.pop();
  }
  push(item) {
    //O(1)
    this.items.push(item);
  }

  peek() {
    //O(1)
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  getIndex(value) {
    //O(n)
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == value) return i;
    }
    return -1;
  }

  last() {
    return this.items[0];
  }
  print() {
    console.log(this.items);
  }
  getLength() {
    return this.items.length;
  }
}

module.exports = {
  Stack,
};

let stack = new Stack();

console.log(stack.isEmpty());
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
console.log(stack.isEmpty());
