function collectStrings(obj) {
  //Given an obj, return an array containing all of the typeof strings in the object
  let returnArray = [];

  function helper(objValue) {
    console.log(typeof objValue == "string");
    //base case -- if value is string
    if (typeof objValue == "string") {
      returnArray.push(objValue);
    } else {
      for (let key in objValue) {
        helper(objValue[key]);
      }
    }
  }

  for (let key in obj) {
    helper(obj[key]);
  }
  return returnArray;
}

console.log(
  collectStrings({
    stuff: "foo",
    stuff1: ["a"],
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  }),
  ["foo", "bar", "baz"]
); // ["foo", "bar", "baz"]))
