function isOneAwaySimple(str1, str2) {
  //given two strings, check for how many edits the string1 is away from string2. If edits <= 1 return true else return false.
  //An edit can be replacing an existing index or removing/adding a char into an index.
  //Would each index manipulation be considered a move? Meaning if str2 is a perm of str1, but index 1 & 2 need to be swapped that would be two moves?
  //(pale, ple) -> true
  //(pales, pale) -> true
  //(pale, bale) -> true
  //(pale, bake) -> false

  //think about each of the 3 edits
  //replace - The lengths will match but one of the indexes will need to be replaced with a new character
  //add - the lengths will not match but a char will need to be inserted in a specified index
  //remove - the lengths will not match but a char will need to be removed from a specified index
  // I also need a way to count the edits along the way, if there are ever more than 1 return false
  let edits = 0;
  let i = 0; //str1 iterator
  let j = 0; //str2 iteratorc
  //Brute Force, loop and for each of the edit options, we can loop the strs and compare

  if (Math.abs(str1.length - str2.length) > 1) return false;
  //return because there is garunteed more than 1 edit
  // else if (str1.length != str.length) edits++;

  // for (let j = 0; j < str2.length; j++) {
  while (edits < 2) {
    if (j == str2.length) return true;
    if (str1[i] != str2[j]) {
      edits++;
      if (str1.length < str2.length) {
        //We must need to add a character
        j++;
        //increment j and skip over what we're assuming is a index we need to insert at. skip to next index on str2 and keep comparing
      } else if (str1.length > str2.length) {
        //We must need to remove a character
        i++;
        //Assume the character we need to remove is the current index so lets just increment i and keep comparing
      } else {
        //lengths are equal so we assume we just need to replace the character at the current index
        i++;
        j++;
        //Increment both iterators and keep comparing
      }
    } else {
      //index is good, move on to next
      i++;
      j++;
    }
  }

  return false;

  // if (str1.length > str2.length && edits == 1) return false;
  // return true;
}

console.log(isOneAwaySimple("pale", "ple"), true);
console.log(isOneAwaySimple("pale", "bake"), false);
console.log(isOneAwaySimple("craig", "craigs"), true);
console.log(isOneAwaySimple("andy isweird", "andy is weird"), true);
console.log(isOneAwaySimple("andy is weird", "andi is wierd"), false);
console.log(isOneAwaySimple("", "a"), true);
