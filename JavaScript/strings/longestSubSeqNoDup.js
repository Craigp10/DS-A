//Given string, determine the longest subsequence in the string without repeating characters and return its length
//The subsequence can occur at any point in the string

let longestSubSeqNoDup_brute = function (s) {
  //O(n2) complexity
  //faster than 9%
  //less space than 5%
  //A lot can be improved
  let longestSeq = "";
  for (let i = 0; i < s.length; i++) {
    let charDict = {};
    let currentSeq = "";
    for (let j = i; j < s.length; j++) {
      if (charDict[s[j]]) {
        break;
      } else {
        currentSeq += s[j];
        charDict[s[j]] = 1;
      }
    }
    if (currentSeq.length > longestSeq.length) longestSeq = currentSeq;
  }
  return longestSeq.length;
};

console.log(longestSubSeqNoDup_brute("abcabc") == 3); //"abc"
console.log(longestSubSeqNoDup_brute("abcbcad") == 4); //"bcad"
console.log(longestSubSeqNoDup_brute("pwwkew") == 3); //"wke"
console.log(longestSubSeqNoDup_brute("bbbbb") == 1); //"b"

const longestSubSeqNoDup_Sliding = function (s) {
  //Sliding window approach
  //O(n2)
  //Faster than 57.64%
  //Less space than 39.89%

  let maxLength = -1;
  let window = [];
  let charDict = {};

  if (!s || s.lenght == 1) {
    return s.length;
  }

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (charDict[current]) {
      //remove all elements from index and before
      while (window[0] != current) {
        let shifted = window.shift();
        charDict[shifted] = false;
      }
      window.shift(); //We end our loop up until we run into our dup element, so we still need to remove it.
    }
    charDict[s[i]] = true;
    window.push(s[i]);
    if (window.length > maxLength) maxLength = window.length;
  }
  return maxLength;
};
console.log(longestSubSeqNoDup_Sliding("abcabc") == 3);
console.log(longestSubSeqNoDup_Sliding("pwwkew") == 3);
console.log(longestSubSeqNoDup_Sliding("craigisbest") == 5);
console.log(longestSubSeqNoDup_Sliding("bbbbb") == 1);
