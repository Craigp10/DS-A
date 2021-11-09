function strCompress(str) {
  let compressedStr = "";

  let strHash = {};

  for (let i = 0; i < str.length; i++) {
    if (strHash[str[i]]) strHash[str[i]]++;
    else strHash[str[i]] = 1;
  }

  for (let i in strHash) {
    compressedStr += i + strHash[i];
  }

  return str.length < compressedStr.length ? str : compressedStr;
}

console.log(strCompress("aabcccccaaa"));
console.log(strCompress("aabecccaccaaa"));
