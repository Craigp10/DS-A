function reverseInt(n) {
  let isNegative = n < 0 ? true : false;
  let posNum = Math.abs(n);
  function helper(n) {
    if (n < 10) {
      return n;
    } else {
      let popped = n % 10;
      return popped.toString() + helper(Math.floor(n / 10)); //Replaced Math.round to Math.floor ... round rounds where we want the values as they are
    }
  }

  let res = helper(posNum);
  if (res > 2 ** 31 - 1) return 0;
  return isNegative ? -1 * parseInt(res) : parseInt(res);
}

console.log(reverseInt(123), 321);
console.log(reverseInt(-123), -321);
