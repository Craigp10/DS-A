const { MinHeap, MaxHeap } = require("../data-structures/binaryHeap");

var MedianFinder = function () {
  //utilize array PQ for this... O(log n) insert... O(1) findMedian -- Insertion Sort
  //init
  this.stream = [];
  this.length = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  //adds from data stream to medianFinder -- Binary Search

  //O(n) -- could convert to binary search
  if (this.length < 1) {
    this.stream[0] = num;
    this.length++;
    return;
  }

  let i = 0;
  while (i < this.length && num >= this.stream[i]) {
    i++;
  }
  i == this.length ? this.stream.push(num) : this.stream.splice(i, 0, num); //O(n)
  this.length++;
  return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  //if length is even, return middle two summed / divide by 2
  //else return middle
  let mid = Math.floor(this.length / 2);
  if (this.length % 2 == 0) {
    return (this.stream[mid] + this.stream[mid - 1]) / 2;
  } else {
    return this.stream[mid];
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
  
  
  
  Build ds to store numbers from a number stream and
  on call add numbers to the ds
  or return the current median
  return an array storing the 'return' value of the operations called
  
  operations:
      1. Init - always first and returns [];
      2. addNum - inserts num into ds and returns [num]
      addNum || findMedian
*/

let a = new MedianFinder(); //init
a.addNum(1);
a.addNum(2);
console.log(a.findMedian(), 1.5); // 1.5
a.addNum(3);
console.log(a.findMedian(), 2); //2
a.addNum(-1);
a.addNum(-2);
// console.log(a);
console.log(a.findMedian(), 1); //1

//OPTIMIZED WITH HEAPs
var MedianFinderHeap = function () {
  //utilize array PQ for this... O(log n) insert... O(1) findMedian -- Insertion Sort
  //init
  this.lo = new MaxHeap();
  this.hi = new MinHeap();
};
MedianFinderHeap.prototype.addNum = function (num) {
  //iinsert number in maxHeap - lo
  //pop minHeap and append to minHeap - hi
  //this garuntees that we have either same amount of elements in both (if so we calc med) or more elements
  //in minHeap hi, so for med we can pop the minHeap for med if it has more than Max.
  this.lo.push(num);
  this.hi.push(this.lo.pop());

  if (this.lo.size() < this.hi.size()) {
    // maintain size as mentioned above
    this.lo.push(this.hi.peek());
    this.hi.pop();
  }
};
MedianFinderHeap.prototype.findMedian = function () {
  //if lo is bigger (not even in size) lo (MaxHeap) top is the median value
  //else calc min from both heaps peek
  return this.lo.size() > this.hi.size()
    ? this.lo.peek()
    : (this.lo.peek() + this.hi.peek()) / 2;
};

let aH = new MedianFinderHeap(); //init
a.addNum(1);
a.addNum(2);
console.log(a.findMedian());
a.addNum(3);
console.log(a.findMedian());
aH.addNum(-1);
aH.addNum(-2);
aH.addNum(-3);
aH.addNum(-4);
aH.addNum(1);
aH.addNum(2);
console.log(aH.findMedian());
aH.addNum(2);
aH.addNum(0);
aH.addNum(0);
