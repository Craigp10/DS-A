/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare_brute = function (s, t) {
  // implment via stacks... if iterating and run into # pop stack
  //return stacks joined on "" comparing eachother
  //O(2m+n) -> O(m+n)

  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current == "#") stack1.pop();
    else stack1.push(s[i]);
  }
  for (let j = 0; j < t.length; j++) {
    let current = t[j];
    if (current == "#") stack2.pop();
    else stack2.push(t[j]);
  }
  console.log(stack1, stack2);
  return stack1.join("") == stack2.join("");
};

const backspaceCompare = function (S, T) {
  //call reducer function
  //O(n) O(1) space
  return reduce(S) === reduce(T);
};

const reduce = (str) => {
  //if null return empty str for comparison
  if (str === null) return "";

  //else iterate string breaking it down

  for (let i = 0; i < str.length; i++) {
    //if backspace
    if (str[i] === "#") {
      //if backspace and i > 0 slice string from beginning to i (exclusive of i)
      // + all after i (inclusive of i)
      if (i > 0) {
        str = str.slice(0, i - 1) + str.slice(i + 1);
        i -= 2;
      } else {
        //else remove first index of str and decrement i
        str = str.slice(1);
        i--;
      }
    }
  }

  return str;
};
console.log(backspaceCompare("ab##", "c#d#"), true);
console.log(backspaceCompare("a#c", "b"), false);
