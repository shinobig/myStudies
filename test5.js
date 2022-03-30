// // function minSubArrayLen(arr, num) {
// //
// //   let i = 0;
// //   let j = 1;
// //
// //   let result = [];
// //   let sum = arr[i] + arr[j];
// //   while (i <= arr.length - 1 && j <= arr.length - 1) {
// //
// //     if (sum >= num) {
// //
// //       let result2 = [];
// //
// //       for (let k = i; k <= j; k++) {
// //         result2.push(arr[k]);
// //       }
// //
// //       if (result.length === 0 || result2.length <= result.length) {
// //         result = result2;
// //       }
// //
// //       sum = sum - arr[i];
// //       i++;
// //
// //     } else if (sum > num) {
// //
// //       sum = sum - arr[i];
// //       i++;
// //
// //     } else {
// //       j++;
// //       sum = sum + arr[j];
// //     }
// //
// //   }
// //
// //   return result.length;
// //
// // }
// //
// // console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// //
// // //       i j
// // //[2,3,1,2,4,3]
// // console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// // console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
// // console.log(minSubArrayLen([3, 1, 67, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// // // console.log([2,1,6,5,4], 9);
// // // console.log([1,4,16,22,5,7,8,9,10], 95);
// //
//
// function findLongestSubstring(str) {
//
//   if (str.length === 0) return 0;
//
//   let characters = {};
//
//   let substr = str[0];
//
//   characters[substr] = 1;
//   let i = 0;
//   let j = 1;
//   let counter = 1;
//   let result = 1;
//
//   while (j < str.length) {
//
//     if (characters[str[j]]) {
//
//       characters = {};
//
//       i++;
//       j = i;
//       characters[str[i]] = true;
//       if (counter > result) {
//         result = counter;
//       }
//       counter = 1;
//     } else {
//       characters[str[j]] = true;
//       counter++;
//     }
//
//     j++;
//   }
//
//   if (counter > result) {
//     result = counter;
//   }
//
//   return result;
//
// }
//
//
// console.log(findLongestSubstring('rithmschool'));
// console.log(findLongestSubstring('bbbbbb'));
// console.log(findLongestSubstring('longestsubstring'));
//
// //        i      j
// //longestsubstring

// function someRecursive(arr, func){
//   if(arr.length === 1) return func(arr[0])
//
//   return func(arr.pop()) || someRecursive(arr,  func)
// }
//
// console.log(someRecursive([4,6,8], val => val > 10));

//
// function flatten(arr) {
//
//   let flat = [];
//
//   arr.forEach(val => {
//     if (Array.isArray(val)) {
//
//       flat = flat.concat(flatten(val));
//     } else {
//       flat.push(val);
//     }
//   });
//
//   return flat;
//
// }
//
//
// console.log(flatten([1, 2, 3, [4, 5]]));
//
//
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
//
// let test = [1,2,3]
// test =test.concat(4)
//
// console.log(test);

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }
//
// function capitalizeFirst(arr) {
//
//   if (arr.length === 1) return capitalize(arr[0]);
//   let newArr = [capitalize(arr.shift())];
//   return newArr.concat(capitalizeFirst(arr));
//
// }
//
// console.log(capitalizeFirst(['car', 'taco', 'banana']));


// function nestedEvenSum(weirdObj) {
//
//   let sum = 0;
//
//   Object.keys(weirdObj).forEach(property => {
//     let currentVal = weirdObj[property];
//     if (typeof currentVal === 'number') {
//       if (currentVal % 2 === 0) {
//         sum = sum + currentVal;
//       }
//     } else if (typeof currentVal === 'object') {
//       sum = sum + nestedEvenSum(currentVal);
//     }
//   });
//
//   return sum;
// }
//
//
// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// };
//
// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
//
// // 6
// //nestedEvenSum(obj2); // 10
//
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 6


// function capitalizeWords(arr) {
//   if (arr.length === 1) return arr[0].toUpperCase();
//   let newArr = [arr.shift().toUpperCase()];
//   return newArr.concat(capitalizeWords(arr));
// }
//
// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));
// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// };

// function stringifyNumbers(weirdObj) {
//
//   let weird = Object.create(weirdObj)
//
//   Object.keys(weird).forEach(property => {
//
//     let value = weird[property];
//
//     if(typeof value === 'number'){
//       weird[property] = `${value}`
//     } else if (typeof value === 'object'){
//
//       weird[property] = stringifyNumbers(value)
//
//     }
//
//   })
//
//   return weird
//
// }
//
//
// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// };
//
//
// // {
// //     num: "1",
// //     test: [],
// //     data: {
// //         val: "4",
// //         info: {
// //             isRight: true,
// //             random: "66"
// //         }
// //     }
// // }
//
// console.log(stringifyNumbers(obj));


function collectStrings(obj){

  let collection = [];

  Object.keys(obj).forEach(key =>{

    let value = obj[key]

    if(typeof value === 'string'){
      collection.push(value)
    } else if(typeof value === 'object'){

     collection = collection.concat(collectStrings(value))
    }

  })

  return collection

}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}
console.log(collectStrings(obj));
