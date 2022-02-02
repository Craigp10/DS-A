/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

//Understanding the problem:
// We need to determine which words are anagrams of eachother, group them together in arrays and return a 2d array.

//Approach: Utilize a helper function to determine if word is anagram, utilize a dictionary with array of anagrams as values and general anagram as the key
//As we iterate through the anagram array we'll build out the dictionary. If anagram is found in dictionary key push it to its value otherwise create new entry
//This approach will be O(n2) time and O(n) space

const groupAnagrams = (strs) => {
  //O(2n log n) -> O(n log n)
  let anagramObj = {};
  //O(n)
  for (let i = 0; i < strs.length; i++) {
    //O(n) O(n log n) O(n) => O(3n log n) => O(n log n)
    let current = strs[i].split("").sort().join("");
    if (anagramObj[current]) anagramObj[current].push(strs[i]);
    else {
      anagramObj[current] = [strs[i]];
    }
  }
  //O(n)
  return Object.values(anagramObj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);

console.log(groupAnagrams([""]));
