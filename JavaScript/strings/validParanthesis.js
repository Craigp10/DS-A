//Implements Stack

function validParentheses(str) {
  //O(n) time Complexity

  let stack = [];
  let validObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (str.length % 2 != 0) return false;

  for (let i = 0; i < str.length; i++) {
    if (validObj[str[i]]) {
      stack.push(str[i]);
    } else {
      let last = stack.pop();
      if (validObj[last] != str[i]) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}

console.log(validParentheses("()"), true);
console.log(validParentheses("(("), false);
console.log(validParentheses("([{}])"), true);
console.log(validParentheses("(([{()}]])"), false);
