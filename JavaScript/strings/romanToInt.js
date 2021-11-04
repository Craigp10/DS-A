function romanToInt(romanStr) {
  /**
  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
  Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
  The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
  "I":1,
  "V":5,
  "X":10,
  "L":50,
  "C":100,
  "D":500,
  "M":1000
  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900. */
  let romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let last = 1001;
  for (let i = 0; i < romanStr.length; i++) {
    if (romanDict[romanStr[i]] > last) {
      sum += romanDict[romanStr[i]] - last * 2;
    } else {
      sum += romanDict[romanStr[i]];
    }
    last = romanDict[romanStr[i]];
  }
  return sum;
}

console.log(romanToInt("III"), 3);
console.log(romanToInt("CDLXVII"), 467);
console.log(romanToInt("MCCCXXXVII"), 1337);
