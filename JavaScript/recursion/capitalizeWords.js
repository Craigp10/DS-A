function capitalizeWords(arr) {
  //Given array of words, captialize the words.. We don't know how many words are in the array or how long the words are
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
