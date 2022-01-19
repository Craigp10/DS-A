/**
 * @param {string} s
 * @return {boolean}
 * Given a string s containing just the characters
 *  '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * a string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 */

const validParantheses = (s) => {
  if (s.length % 2 != 0) return false;
  let charObj = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  let stack = [];
  //nested loop
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (Object.keys(charObj).includes(current)) stack.push(current);
    else {
      let popped = stack.pop();
      if (charObj[popped] != current) return false;
    }
  }
  return stack.length == 0;
};

console.log(validParantheses("([]{}())"), true);
console.log(validParantheses("(("), false);
console.log(validParantheses("([]{}()}"), false);
