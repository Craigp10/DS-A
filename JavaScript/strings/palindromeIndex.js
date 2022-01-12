function palindromeIndex(s) {
  // Write your code here
  let st = 0;
  let ed = s.length - 1;
  let indexAt = -1;
  while (st < ed) {
    if (s[st] != s[ed]) {
      if (s[st + 1] == s[ed]) {
        indexAt = st;
        st++;
      } else {
        indexAt = ed;
        ed--;
      }
    } else {
      st++;
      ed--;
    }
  }
  return indexAt;
}

console.log(palindromeIndex("aaab") === 3);
console.log(palindromeIndex("aaa") === -1);
console.log(palindromeIndex("racecar") === -1);
console.log(palindromeIndex("aaaaaaaaaabaaa") === 10);
