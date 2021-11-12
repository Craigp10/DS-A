function validAnagram_brute(s, t) {
  //Given two strings, determine if the strings are valid anagrams of eachother. Meaning if they are made up of the same # of characters, just rearranged.

  //brute force -- loop both strings, create a dictionary on each loop of the characters and increment by occurances of those
  //O(3n) -> O(n) complexity
  if (s.length != t.length) {
    return false;
  }

  let firstDict = {};
  let secondDict = {};

  for (let i = 0; i < s.length; i++) {
    if (!firstDict[s[i]]) {
      firstDict[s[i]] = 0;
    }
    firstDict[s[i]]++;
  }
  for (let j = 0; j < t.length; j++) {
    if (!secondDict[t[j]]) {
      secondDict[t[j]] = 0;
    }
    secondDict[t[j]]++;
  }
  console.log(firstDict, secondDict);
  for (let char in firstDict) {
    if (firstDict[char] != secondDict[char]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram_brute("anagram", "nagaram"), true);
// console.log(validAnagram_brute("rat", "car"), false);
// console.log(validAnagram_brute("race car", "racecar "), true);

function validAnagram_space(s, t) {
  if (s.length != t.length) {
    return false;
  }

  let charDict = {};

  for (let i = 0; i < s.length; i++) {
    if (!charDict[s[i]]) {
      charDict[s[i]] = 0;
    }
    charDict[s[i]]++;
  }

  for (let j = 0; j < t.length; j++) {
    if (!charDict[t[j]]) return false;
    else charDict[t[j]]--;
  }

  for (let char in charDict) {
    if (charDict[char] != 0) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram_space("anagram", "nagaram"), true);
console.log(validAnagram_space("rat", "car"), false);
console.log(validAnagram_space("race car", "racecar "), true);
