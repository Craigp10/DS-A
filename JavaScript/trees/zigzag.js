/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/* 
          p           a       h       n
      a      p      l   s   i   i    g
  y            `  i        r    
*/

const zigzag = (s, numRows) => {
  if (numRows === 1) return s;
  let returnStr = new Array(numRows).fill("");
  let j = 0;
  let rowIter = 0;
  let iter = numRows;
  while (j < s.length) {
    if (rowIter == numRows - 1) iter = -1;
    if (rowIter == 0) iter = 1;

    returnStr[rowIter] += s[j];
    rowIter += iter;
    j++;
  }
  return returnStr.join("");
};

console.log(zigzag("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
console.log(zigzag("AB", 1) == "AB");
