//Given an array of strings, group the anagrams together into seperate arrays of anagrams.
// ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]

//Assumptions
// - Unknown length of array
// - Assume varying lengths of strings at arr[i]

function groupAnagram_brute(anagramArr) {
  //build anagram object by looping through array and if current value is not found to be an anagram with anything in the obj,
  //create a new key value pair -- The value of the keys will be an array of all strings that are an anagram of that word.
  //O(2n) space - O(2n) time
  let anagramObj = {};
  for (let i = 0; i < anagramArr.length; i++) {
    let current = anagramArr[i].split("").sort().join("");
    if (anagramObj[current]) anagramObj[current].push(anagramArr[i]);
    else anagramObj[current] = [anagramArr[i]];
  }
  // let result = [];
  // for (let anagram in anagramObj) result.push(anagramObj[anagram]);
  // return anagramObj.values();
  return Object.values(anagramObj);
}

console.log(groupAnagram_brute(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
