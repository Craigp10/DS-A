function longestSameSubSeq(strArr) {
  //Given array of strings return the long shared sequence amoung all strings in array
  //Unknown length of string and array -- This tells us we need to use a while loop

  //faster than 91.63% - 72 ms
  //less space than 28.745 - 40.7 MB

  let idx = 0;
  let longestSeq = "";
  let currentSeq = "";
  let searching = true;

  while (searching) {
    let currentChar = strArr[0][idx];
    for (let i = 0; i < strArr.length; i++) {
      if (!strArr[i][idx] || strArr[i][idx] != currentChar) {
        searching = false;
        break;
      }
    }
    if (!searching) {
      break;
    }

    currentSeq += currentChar;

    if (currentSeq.length > longestSeq.length) {
      longestSeq = currentSeq;
    }

    idx += 1;
  }

  return longestSeq;
}

console.log(longestSameSubSeq(["abcdefg", "abcdef", "ab"]));
console.log(longestSameSubSeq(["abcdefg", "abcdef", "abc"]));
console.log(longestSameSubSeq(["flower", "flower", "flower"]));
console.log(longestSameSubSeq(["cir", "car"]));
