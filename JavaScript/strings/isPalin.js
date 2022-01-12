function isPalin(s) {
  //Palindrome check with only lowercase characters passed into the function
  return s.split("").reverse().join("") === s;
}

console.log(isPalin("racecar"), true);
console.log(isPalin("racecars"), false);
console.log(isPalin("racecara"), false);

function isPalinAny(s) {
  //Palindrome check where the string can be made up of any character, uppercase, special, space, etc....
  let newS = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // return newS.split("").reverse().join("") == newS;
  let ptr1 = 0;
  let ptr2 = newS.length - 1;
  while (ptr1 < ptr2) {
    if (newS[ptr1] != newS[ptr2]) return false;
    ptr1++;
    ptr2--;
  }
  return true;
}

console.log(isPalinAny("A man, a plan, a canal: Panama"), true);
console.log(isPalinAny("A man, a plan, a canal: Panae"), false);
console.log(isPalinAny("1racecar 1"), true);
