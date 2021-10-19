function reverse(str) {
  //Take in string and reverse it recursively

  //Base case will be str length of 1
  if (str.length == 1) {
    return str[0];
  }
  let popped = str.slice(-1);
  return popped + reverse(str.substring(0, str.length - 1));
}

console.log(reverse("craig") == "giarc");
console.log(reverse("emily") == "ylime");

//Deeper look
//Approach will be to pop off the last element of each string passed into reverse and append the returned string to that value
//First we pass in the string, it doesn't pass the base case, popped off the last element and append the returned value of reverse to that value
//Fast forward when we get a length of 1 for our string we return that value, it is the first letter in the string and will become the last value in the reversed string

//The the last element is returned and that call on stack is removed, the next call on the stack continues to execute where it appends
//the returned value (the last element on the string) with its popped off value.
//Fast forward to the first call with the example 'craig', 'giar' is returned and the popped off value 'c' can append that string to itself
//'giarc'
