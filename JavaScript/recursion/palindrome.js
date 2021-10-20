function palindrome(n) {
  if (n.length == 1) return true;
  if (n.length == 2) return n[0] == n[1];
  if (n[0] != n[n.length - 1]) {
    return false;
  }
  return palindrome(n.substring(1, n.length - 1));
}

console.log(true, palindrome("121"));
console.log(false, palindrome("1211"));
console.log(true, palindrome("123454321"));
console.log(false, palindrome("awesome")); // false
console.log(false, palindrome("foobar")); // false
console.log(true, palindrome("tacocat")); // false
console.log(true, palindrome("amanaplanacanalpanama")); // false
console.log(false, palindrome("amanaplanacanalpandemonium")); // false
