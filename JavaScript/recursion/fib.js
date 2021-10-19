function fib(n) {
  //Take in integer and return nth integer in fib sequence
  //fib sequence is where the number is equal to the sum of its previous two numbers in the sequence
  //1,1,2,3,5,8,13,21
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10), 55);
console.log(fib(5), 5);
console.log(fib(4), 3);

//Deeper look
//Instead of incrementing we decrement down starting at the target seq # because when our stack starts w/ the sequence #'s and returns the value it adds up to when it increments back up
//to finish executing the values
//returned will be the # in the fib sequence. We know we can add two values together starting at 1, 1 to get the next value in the sequence
//Our base case is <= 2 because ultimately 1, 1 are the first two in the sequence.
// First call fib with our target sequence #, 5

//5 doesn't meet base case condition
//start to decrement 5 by looking at it's next two lower values
// 4 & 3, don't meet our base case so we break them apart again into 3 & 2 -- 2 & 1 respectfully
//2 & 1 meet our base case so we return the values for those which are 1 + 1 (2).
// 3 & 2 almost meets our base case, we can return 1 for the fib(2) call, but need to break down fib(3) one more time.
// fib(3) -> equals 2 and 1... which meet the base case and equate to 1 each. So know we can move up the stack and sum all of fib(4) together
// fib(3) 1+1 & fib(2) +1 = 3.
//contining up the call stack, fib(4) & fib(3) are returned as 3 and 2 respectfully, so fib(5) equates to fib(4) 3 + fib(3) 2 == 5.
