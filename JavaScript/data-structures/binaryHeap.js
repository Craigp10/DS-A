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
    if (val instanceof HeapNode) {
      this.heap.push(val);
    } else {
      this.heap.push(new HeapNode(val, val));
    }
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

  heapSort = (arr) => {
    let n = arr.length;
    // Build heap (rearrange array)
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
      this.minHeapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i >= 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      this.minHeapify(arr, i, 0);
    }
    this.heap = arr.map((val) => {
      return new HeapNode(val, val);
    });
  };

  minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] > arr[smallest]) {
      smallest = l;
    }

    // If right child is smaller than smallest so far
    if (r < n && arr[r] > arr[smallest]) {
      smallest = r;
    }

    // If smallest is not root
    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

      // Recursively heapify the affected sub-tree
      this.minHeapify(arr, n, smallest);
    }
  };

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0].val;
  }

  getRoot() {
    return this.heap[0];
  }
  print() {
    console.log(this.heap);
  }
}

// let minHeap = new MinHeap();
// minHeap.heapSort([5, 23, 22, 13, 4, 56, 27, 43, 2, 3, 36]); // [1,2,4,5,14,22,23,27,36,43,56]
// minHeap.print();
// console.log(minHeap.peek()); //2
// minHeap.push(100);
// minHeap.push(1);
// console.log(minHeap.peek()); //2
// minHeap.pop(); //2
// minHeap.print();
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
    if (val instanceof HeapNode) {
      this.heap.push(val);
    } else {
      this.heap.push(new HeapNode(val, val));
    }
    // this.heap.push(new HeapNode(val * -1, val * -1));
    this.bubble_up(0, this.heap.length - 1);
  }

  bubble_up() {
    //Move value to where it fits in heap. Work with inserted item at end
    if (!this.heap.length) return;
    let index = this.heap.length - 1;
    while (index > 0) {
      const element = this.heap[index]; //inserted element
      const parentIndex = Math.floor((index - 1) / 2); //parent index
      const parent = this.heap[parentIndex]; //parent

      if (element.priority <= parent.priority) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  pop() {
    //remove min value
    const max = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return max;
  }

  bubble_down() {
    let index = 0;
    let max = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;
      // check if left or right child is larger than parent
      if (
        (left < n && this.heap[left].priority > this.heap[max].priority) ||
        (right < n && this.heap[right].priority > this.heap[max].priority)
      ) {
        // pick the bigger child if both child is present
        if (right < n) {
          max =
            this.heap[left].priority > this.heap[right].priority ? left : right;
        } else {
          max = left;
        }
      }

      if (max === index) break;
      [this.heap[max], this.heap[index]] = [this.heap[index], this.heap[max]];
      index = max;
    }
  }

  heapSort = (arr) => {
    let n = arr.length;
    // Build heap (rearrange array)
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
      this.maxHeapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i >= 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      this.maxHeapify(arr, i, 0);
    }
    this.heap = arr.map((val) => {
      return new HeapNode(val, val);
    });
  };

  maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] < arr[largest]) {
      largest = l;
    }

    // If right child is smaller than smallest so far
    if (r < n && arr[r] < arr[largest]) {
      largest = r;
    }

    // If smallest is not root
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Recursively heapify the affected sub-tree
      this.maxHeapify(arr, n, largest);
    }
    // this.heap = arr;
  };

  size() {
    return this.heap.length;
  }

  peek() {
    // return this.heap[0].val * -1;
    return this.heap[0].val;
  }

  getRoot() {
    return this.heap[0].val;
  }

  print() {
    console.log(this.heap);
  }
}

// let maxHeap = new MaxHeap();
// maxHeap.print();
// maxHeap.heapSort([5, 23, 22, 13, 4, 56, 27, 43, 2, 1, 36]); //[56, 43, 36, 27,23,22,13,5,4,2,1]
// maxHeap.push(46);
// maxHeap.print();
// console.log(maxHeap.pop(), maxHeap.getRoot());
// console.log(maxHeap.pop(), maxHeap.getRoot());
// console.log(maxHeap.pop(), maxHeap.getRoot());
// console.log(maxHeap.pop(), maxHeap.getRoot());
// console.log(maxHeap.pop(), maxHeap.getRoot());
// console.log(maxHeap.pop(), maxHeap.getRoot());
// maxHeap.getRoot(); //22
// maxHeap.push(57);
// maxHeap.push(3);
// console.log(maxHeap.peek()); //57
// maxHeap.push(1);
// maxHeap.pop();
// console.log(maxHeap.peek()); //22
// maxHeap.pop(); // new root should be 13
// maxHeap.print();

module.exports = {
  MinHeap,
  MaxHeap,
};
