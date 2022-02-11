//PQ BINARY HEAP IMPLEMENTATION

class HeapNode {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
    /**
     * Position 0 will be null
       Arr[(i-1)/2]	Returns the parent node
       Arr[(2*i)+1]	Returns the left child node
       Arr[(2*i)+2]	Returns the right child node
     */
  }

  push(val) {
    //push value to end of heap
    this.heap.push(new HeapNode(val, val));
    this.bubble_up(0, this.heap.length - 1);
  }

  bubble_up() {
    //Move value to where it fits in heap
    let index = this.heap.length - 1;
    if (!this.heap.length) return;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent.priority <= element.priority) break;
      // if the parent is bigger than the child then swap the parent and child
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  pop() {
    //remove min value
    const min = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return min;
  }

  bubble_down() {
    let index = 0;
    let min = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;
      // check if left or right child is smaller than parent
      if (
        (left < n && this.heap[left].priority < this.heap[min].priority) ||
        (right < n && this.heap[right].priority < this.heap[min].priority)
      ) {
        // pick the smaller child if both child is present
        if (right < n) {
          min =
            this.heap[left].priority < this.heap[right].priority ? left : right;
        } else {
          min = left;
        }
      }

      if (min === index) break;
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  getRoot() {
    return this.heap[0];
  }
}

// let minHeap = new MinHeap();
// minHeap.push(4);
// minHeap.push(5);
// minHeap.push(3);
// console.log(minHeap.peek()); //3
// minHeap.push(1);
// minHeap.pop();
// console.log(minHeap);

class MaxHeap {
  //Quick maxHeap implementation where we inverted sign of int when storing, re invert when returning
  constructor() {
    this.heap = [];
    /**
     * Position 0 will be null
       Arr[(i-1)/2]	Returns the parent node
       Arr[(2*i)+1]	Returns the left child node
       Arr[(2*i)+2]	Returns the right child node
     */
  }

  push(val) {
    //push value to end of heap
    this.heap.push(new HeapNode(val * -1, val * -1));
    this.bubble_up(0, this.heap.length - 1);
  }

  bubble_up() {
    //Move value to where it fits in heap
    let index = this.heap.length - 1;
    if (!this.heap.length) return;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent.priority <= element.priority) break;
      // if the parent is bigger than the child then swap the parent and child
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  pop() {
    //remove min value
    const min = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return min * -1;
  }

  bubble_down() {
    let index = 0;
    let min = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;
      // check if left or right child is smaller than parent
      if (
        (left < n && this.heap[left].priority < this.heap[min].priority) ||
        (right < n && this.heap[right].priority < this.heap[min].priority)
      ) {
        // pick the smaller child if both child is present
        if (right < n) {
          min =
            this.heap[left].priority < this.heap[right].priority ? left : right;
        } else {
          min = left;
        }
      }

      if (min === index) break;
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0].val * -1;
  }

  getRoot() {
    return this.heap[0].val * -1;
  }
}

let maxHeap = new MaxHeap();
maxHeap.push(4);
maxHeap.push(5);
maxHeap.push(3);
console.log(maxHeap.peek()); //5
maxHeap.push(1);
maxHeap.pop();
console.log(maxHeap);

module.exports = {
  MinHeap,
  MaxHeap,
};
