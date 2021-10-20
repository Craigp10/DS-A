function flatten(arr) {
  //Accept an array of arrays, with varying depths in each array and flatten the data structure to return an single array of all of
  //the elements in a single array.
  //mimics the functionality of .flat()

  //base case will be when the data type is not an object w/ a length... Meaning dictionaries and strings both pass... arrays will not.

  const return_array = [];
  function helper(arr) {
    if (typeof arr != "object" && !arr.length) {
      return_array.push(arr);
    } else {
      for (let j = 0; j < arr.length; j++) {
        helper(arr[j]);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    helper(arr[i]);
  }
  return return_array;
}
console.log(flatten([1, 2, 3, [4, 5], [[[[4]]]]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
//Deeper Dive
//Array is passed into flatten function. Initialize our return array and start to loop through the passed in array passing each index into helper
//Our helper function will be running the logic to check if the passed in value is an array or not... If it isn't then push it to our return
//array. If it is then recall helper passing in the current index.
//First 3 values will passed base case check and be pushed onto the return_array.
//3rd index will fail base case and looped through again, mimicing the our loop, each index will be passed into the helper function. Both values now meet
//base case

//4th index will fail 3 times but the fourth time it will meet base case and be pushed onto return_array

console.log(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]);
console.log(flatten([[1], [2], [3]]), [1, 2, 3]);
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]);
