//Medium Difficulty
//Given an array of strings, group the anagrams together into seperate arrays of anagrams.
// ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]

//Assumptions
// - Unknown length of array
// - Assume varying lengths of strings at arr[i]

function groupAnagram(strs) {
  // O(n*mlog(m)) complexity -- where n is the number of elements in strs and m is the max length of strs[i].
  //Loop strs (n) and sort strs[i] (m)
  let anagramObj = {};

  for (let i = 0; i < strs.length; i++) {
    //O(n)
    let current = strs[i].split("").sort().join(""); //O(m log(m))
    if (anagramObj[current]) anagramObj[current].push(strs[i]);
    else anagramObj[current] = [strs[i]];
  }
  return Object.values(anagramObj);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
console.log(groupAnagram(["", "", ""]));
console.log("***********************************");
function groupAnagram_brute(strs) {
  //build anagram object by looping through array and if current value is not found to be an anagram with anything in the obj,
  //create a new key value pair -- The value of the keys will be an array of all strings that are an anagram of that word.
  function isAnagram(str, compareStr) {
    //O(2n)
    if (str.length != compareStr.length) return false;
    let strObj = {};
    let compareObj = {};
    for (let i = 0; i < str.length; i++) {
      if (!strObj[str[i]]) strObj[str[i]] = 0;
      if (!compareObj[compareStr[i]]) compareObj[compareStr[i]] = 0;
      strObj[str[i]]++;
      compareObj[compareStr[i]]++;
    }
    for (let char in strObj) {
      if (strObj[char] != compareObj[char]) return false;
    }
    return true;
  }

  let result = [];
  while (strs.length) {
    //O(n3)???
    let currentAnagram = [strs[0]];
    let i = 1;
    while (i < strs.length) {
      if (isAnagram(strs[0], strs[i])) {
        currentAnagram.push(strs[i]);
        strs.splice(i, 1);
      } else {
        i++;
      }
    }
    strs.splice(0, 1);
    result.push(currentAnagram);
  }
  return result;
}

console.log(groupAnagram_brute(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
console.log(groupAnagram_brute(["", "", ""]));
