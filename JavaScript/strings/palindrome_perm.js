function isPalinPerm(str) {
  //Input string check if it is a perm of a palindrome
  //Palindrome -- When a word is spelt the same backwords as forwards.
  //Meaning we don't care about the order of the letters in this str sequence but we need to check it meets the requirements of a palindrome.
  //(tact Coa) => true //Permutation palindrome: taco cat
  //We don't need to generate any permutations to check this, we can run the assumption that as long as it meets the even char palindrome or odd char palindrome requirement that it is true
  //even char - str length is even meaning all characters appear an even # of times
  //odd char - str length is odd meaning all but 1 character appear an even # of times, that odd char appears once, it is the middle of the str.

  //create char obj
  let char_obj = {};
  for (let i = 0; i < str.length; i++) {
    if (/[^a-zA-Z]/.test(str[i])) continue;

    if (!char_obj[str[i]]) char_obj[str[i]] = 1;
    else char_obj[str[i]]++;
  }

  let oneCharOdd = false;
  console.log(char_obj);
  for (let char in char_obj) {
    if (char_obj[char] % 2 == 0) continue;
    else {
      if (oneCharOdd) return false;
      else oneCharOdd = true;
    }
  }
  return true;
}

console.log(isPalinPerm("tact coa"), true);
console.log(isPalinPerm("tact coat"), false);
