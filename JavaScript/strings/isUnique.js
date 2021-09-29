function isUnique(str) {
  //Input a string and return true if all characters are unique

  //O(n)
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]]) {
      return false;
    }

    charObj[str[i]] = true;
  }
  return true;
}

console.log(isUnique("aflkmflkamfkoamfa"), false);
console.log(isUnique("abcdef"), true);
console.log(isUnique("abcdefghijklmnopqrstuvwxyz"), true);
