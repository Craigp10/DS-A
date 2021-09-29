//O(2n) => O(n)
function isPerm(str1, str2) {
  //Input two strings, check if second string is a permutation of the first
  //Permutation meaning that it contains the same letters of the first string to create a new word/sequence of chars

  if (str1.length != str2.length) return false;

  let charObj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!charObj[str1[i]]) charObj[str1] = 1;
    else charObj[str1]++;
  }
  for (let i = 0; i < str1.length; i++) {
    if (charObj[str2[i]] < 0) return false;
    charObj[str2]--;
  }

  return true;
}

function isPermSorted(str1, str2) {
  //Input two strings, check if second string is a permutation of the first
  //Permutation meaning that it contains the same letters of the first string to create a new word/sequence of chars
  if (str1.length != str2.length) return false;
  let str1_sorted = str1.split("").sort().join("");
  let str2_sorted = str2.split("").sort().join("");

  for (let i = 0; i < str1_sorted.length; i++) {
    if (str1_sorted[i] != str2_sorted[i]) return false;
  }

  return true;
}

console.log("O(n)");
console.log(isPerm("abcdef", "fedcba"), true);
console.log(isPerm("abcdefedad", "faedcdb"), false);
console.log(isPerm("abcdefedad", "faedcdbaed"), true);

console.log("O(n log n)"); //sorting -- Double check complexity
console.log(isPermSorted("abcdef", "fedcba"), true);
console.log(isPermSorted("abcdefedad", "faedcdb"), false);
console.log(isPermSorted("abcdefedad", "faedcdbaed"), true);
