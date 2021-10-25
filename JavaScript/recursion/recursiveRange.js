function recursiveRange(n, i) {
  i++;
  if (i == n) {
    return i;
  }
  return i + recursiveRange(n, i);
}

console.log(21, recursiveRange(6, 0));
console.log(55, recursiveRange(10, 0));
