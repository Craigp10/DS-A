const Stack = require("./stackImplementation");

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
console.log("pre sort", stack);
let newStack = sortStack(stack);
console.log("post sort", newStack);
