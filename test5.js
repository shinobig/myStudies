// function minSubArrayLen(arr, num) {
//
//   let i = 0;
//   let j = 1;
//
//   let result = [];
//   let sum = arr[i] + arr[j];
//   while (i <= arr.length - 1 && j <= arr.length - 1) {
//
//     if (sum >= num) {
//
//       let result2 = [];
//
//       for (let k = i; k <= j; k++) {
//         result2.push(arr[k]);
//       }
//
//       if (result.length === 0 || result2.length <= result.length) {
//         result = result2;
//       }
//
//       sum = sum - arr[i];
//       i++;
//
//     } else if (sum > num) {
//
//       sum = sum - arr[i];
//       i++;
//
//     } else {
//       j++;
//       sum = sum + arr[j];
//     }
//
//   }
//
//   return result.length;
//
// }
//
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
//
// //       i j
// //[2,3,1,2,4,3]
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
// console.log(minSubArrayLen([3, 1, 67, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// // console.log([2,1,6,5,4], 9);
// // console.log([1,4,16,22,5,7,8,9,10], 95);
//

function findLongestSubstring(str) {

  if (str.length === 0) return 0;

  let characters = {};

  let substr = str[0];

  characters[substr] = 1;
  let i = 0;
  let j = 1;
  let counter = 1;
  let result = 1;

  while (j < str.length) {

    if (characters[str[j]]) {

      characters = {};

      i++;
      j = i;
      characters[str[i]] = true;
      if (counter > result) {
        result = counter;
      }
      counter = 1;
    } else {
      characters[str[j]] = true;
      counter++;
    }

    j++;
  }

  if (counter > result) {
    result = counter;
  }

  return result;

}


console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));

//        i      j
//longestsubstring
