//need to complete
class Queue {
  constructor() {
    this.items = [];
  }

  pop() {
    return this.items.shift();
  }

  push(item) {
    this.items.push(item);
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0 ? true : false;
  }

  getLength() {
    return this.items.length;
  }
}

//create animal queues
