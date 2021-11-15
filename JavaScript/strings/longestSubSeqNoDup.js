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

// console.log(longestSubSeqNoDup_brute("abcabc") == 3); //"abc"
// console.log(longestSubSeqNoDup_brute("abcbcad") == 4); //"bcad"
// console.log(longestSubSeqNoDup_brute("pwwkew") == 3); //"wke"
// console.log(longestSubSeqNoDup_brute("bbbbb") == 1); //"b"

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
// console.log(longestSubSeqNoDup_Sliding("abcabc") == 3);
// console.log(longestSubSeqNoDup_Sliding("pwwkew") == 3);
// console.log(longestSubSeqNoDup_Sliding("craigisbest") == 5);
// console.log(longestSubSeqNoDup_Sliding("bbbbb") == 1);

const longestSubSeqNoDup = function (s) {
  //O(n) space complexity -- more space used
  //Sliding window w/ Two indexes i (start), j (end).
  //lastIndexDict -- Stores index of char occurences in our window. If we find dup we replace the dict key value w/ new j index.
  if (!s || s.length == 1) {
    return s.length;
  }
  let maxLength = 0;
  let lastIndexDict = {}; //O(n) space
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    //O(n)
    let current = s[j];
    if (lastIndexDict[current] != undefined) {
      //O(1)
      i = Math.max(i, lastIndexDict[current] + 1); //Max between our current i (start) or the current value + 1, which would be our last i + 1 cause we just found a dup current
    }

    lastIndexDict[current] = j;

    if (j + 1 - i > maxLength) maxLength = j + 1 - i;
  }

  return maxLength;
};

console.log(longestSubSeqNoDup("abcabc") == 3);
console.log(longestSubSeqNoDup("pwwkew") == 3);
console.log(longestSubSeqNoDup("craigisbest") == 5);
console.log(longestSubSeqNoDup("bbbbb") == 1);
console.log(longestSubSeqNoDup("abba") == 2);
console.log(longestSubSeqNoDup("dvdf") == 3);

const longestSubSeqNoDup_js = function (s) {
  //Super fast method using the JS methods
  if (!s) return 0;
  var sub = "";
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    var l = s[i];
    var match = sub.indexOf(l); //O(n)
    if (match >= 0) {
      max = Math.max(max, sub.length);
      sub = sub.substring(match + 1) + l; //O(1)
    } else {
      sub += l;
      max = Math.max(max, sub.length);
    }
  }
  return max;
};
