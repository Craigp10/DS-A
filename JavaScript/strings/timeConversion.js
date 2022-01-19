/**
 *
 * @param {string} s
 * @returns {string}
 * Provided a string of AM/PM time convert the string to military time
 *
 */

function timeConversion(s) {
  // Write your code here
  let ending = s.slice(-2);

  let inputTime = s.substring(0, s.length - 2).split(":");
  if (inputTime[0] == "12") inputTime[0] = "00";
  if (ending == "PM") inputTime[0] = parseInt(inputTime[0]) + 12;

  return inputTime.join(":");
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:40:22AM"));
