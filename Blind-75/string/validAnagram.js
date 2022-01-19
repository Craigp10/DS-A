/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *  typically using all the original letters exactly once.
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]]) sObj[s[i]] = 0;
    if (!tObj[t[i]]) tObj[t[i]] = 0;

    sObj[s[i]]++;
    tObj[t[i]]++;
  }
  for (let char in sObj) {
    if (sObj[char] != tObj[char]) return false;
  }

  return true;
};
