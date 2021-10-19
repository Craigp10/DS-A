function sumHelper(n) {
  //Use Recursion to sum all of the values counting up to n
  let i = 0;
  let sum = 0;
  function helper(n) {
    i++;
    if (i == n) {
      return i;
    } else {
      return i + helper(n);
    }
  }
  sum = helper(n);

  return sum;
}

console.log(sumHelper(15), 120);
console.log(sumHelper(10), 55);

function sum(n, i) {
  //Use Recursion to sum all of the values counting up to n
  if (i == n) {
    return i;
  } else {
    return i + sum(n, i + 1);
  }
}

console.log(sum(15, 1), 120);
console.log(sum(10, 1), 55);

//Breaking it down
//We call sum with our target n and the iterating value 0.
//We check if our iterating value is equal to our target, since it wont be, we call sum again and increment our iterator
// Fast forward, we build our call stack up with i -> n - 1, all waiting on the next iteration of sum to finish executing.
//We iterate i one last time, it equals n and we can return i.
//We return 10 and the call comes off of the stack. The next call on the stack is finished executing and adds the current i (9) w/ the returned value 10.
//Fast forward, since we started at 0, we add 0 to the second to last call return value 55.
