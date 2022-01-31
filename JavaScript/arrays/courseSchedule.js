/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 You are given an array prerequisites where prerequisites[i] = [ai, bi] 
 indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1 
[[1,0]] - true; Must take 1 before 0, no other checks

Example 2
[[1,0],[0,1]] - false; Two courses to check, but they over lap


Example 3
[[0,1],[1,3],[3,0]] - false because I would need to take 3 before 0, 0 before 1 and 1 before 3? Assume yes


Can a course have more than 1 pre req? I.E - [[0,3], [1,3], [0,1]] - true Yes.
Looking for intervals and cycles

//Brute force

Iterate courses
Build object with key as the course #, values as an array with pre reqs
For each iteration check if i[0] exist in object and if so check that pre reqs do not contain i[1].
This completes the outter approach but doesn't consider deeper cycles.
code this up




if preQ object contains the req... Call helper with current course and preQ.
Iterate preQ until we find a value with no preq, or the current course - if no preq, return true else return false;

*/

const helper = (currentCourse, currentPreq, preq, courseObj) => {
  //Check preq courses recursively until cycle is found or until there are no preqs
  // console.log("1", preq, courseObj[preq] == undefined, courseObj);
  if (courseObj[preq]) {
    for (let i = 0; i < courseObj[preq].length; i++) {
      let course = courseObj[preq][i];
      // console.log("2", course == currentCourse);
      if (course == currentCourse || course == currentPreq || course == preq) {
        return false;
      }
      // console.log("3", currentCourse, currentPreq, course, courseObj);
      return helper(currentCourse, currentPreq, course, courseObj);
    }
  }
  return true;
};

var canFinish_brute = function (numCourses, prerequisites) {
  //O(n**n);

  let courseObj = {};

  for (let i = 0; i < prerequisites.length; i++) {
    //courses are same return false;
    if (prerequisites[i][0] == prerequisites[i][1]) return false;
    //preq exist in our courseObj
    let currentCourse = prerequisites[i][1];
    let currentPreq = prerequisites[i][0];
    if (courseObj[currentPreq]) {
      //iterate helper for every course in preQ's array.
      //check every course preq for the current preq for cycle or dup.
      for (let j = 0; j < courseObj[currentPreq].length; j++) {
        let preq = courseObj[currentPreq][j];
        if (preq == currentCourse) {
          return false;
        }
        // console.log(currentCourse, currentPreq, preq, courseObj);
        let response = helper(currentCourse, currentPreq, preq, courseObj);
        // console.log("response", response);
        if (!response) return false;
      }
    }
    if (!courseObj[currentCourse]) courseObj[currentCourse] = [];

    courseObj[currentCourse].push(currentPreq);
  }
  return true;
};

console.log(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ]),
  true
);
console.log(
  canFinish(3, [
    [1, 0],
    [0, 2],
  ]),
  true
);
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
  false
);
console.log(
  canFinish(3, [
    [0, 2],
    [1, 2],
    [0, 1],
  ]),
  true
);
console.log(
  canFinish(3, [
    [1, 0], //{0:1}
    [0, 2], //{0:1, 2:0}
    [2, 1], //{0:1, 2:0, 1: 2}
  ]),
  false
);
console.log(
  canFinish(7, [
    [1, 0],
    [0, 3],
    [0, 2],
    [3, 2],
    [2, 5],
    [4, 5],
    [5, 6],
    [2, 4],
  ]),
  true
);
console.log(
  canFinish(20, [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ]),
  false
);
