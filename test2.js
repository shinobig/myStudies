// function maxSubarraySum(arr, num) {
//
//   if (arr.length < num) return null;
//
//   let sum = 0;
//
//   for (let i = 0; i < num; i++) {
//     sum += arr[i];
//   }
//
//   let maxSum = sum;
//   let indexNum = num - 1
//
//   for (let i = 1; i < arr.length - indexNum; i++) {
//   //  console.log(sum, maxSum)
//     sum-= arr[i - 1];
//     sum += arr[i + indexNum];
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }
//
//   return maxSum;
//
// }
//
//  console.log(maxSubarraySum([100, 200, 300, 400], 2));
//  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));

//          i
// [2,3,1,2,4,3] => [4,3]
//            j

// cuando total > num, mueve i
// cuando total < num, mueve j


//
// function minSubArrayLen(arr, num){
//
//   if(arr[0] === num) return [arr[0]]
//   let foundArr = [arr[0], arr[1]];
//   let sum = arr[0] + arr[1];
//
//   let leftIndex = 0;
//   let rightIndex = 1;
//
//   while(rightIndex < arr.length){
//
//     if(sum < num){
//       rightIndex++
//       sum += arr[rightIndex]
//     } else {
//       sum -= arr[leftIndex]
//       leftIndex ++
//     }
//
// console.log(sum)
//   }
//
//   return null
//
//
//
// }
// //          i
// // [2,3,1,2,4,3] => [4,3]
// //            j
//
// console.log(minSubArrayLen([2,3,1,2,4,3], 7))
//
//


// Add any extra import statements you may need here


// Add any helper functions you may need here
// const lowerChart = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
// const upperChart = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
// const numberChar = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
//
// const allValues = {
//   lowerChart,
//   upperChart,
//   numberChar
// };
//
// function getValue(charSet, currentVal, num) {
//
//   if (currentVal + num > charSet[1]) {
//
//     let numToAdd = num % ((charSet[1] - charSet[0]) + 1)
//
//     if((currentVal + numToAdd) > charSet[1]){
//       return charSet[0] + (((currentVal + numToAdd) - 1) - charSet[1])
//     }else {
//     return currentVal + numToAdd;
//     }
//   } else {
//     return currentVal + num;
//   }
//
// }
//
// function getCharCipherValue(currentValue) {
//   if (currentValue >= lowerChart[0] && currentValue <= lowerChart[1]) {
//     return allValues.lowerChart
//   } else if (currentValue >= upperChart[0] && currentValue <= upperChart[1]) {
//     return allValues.upperChart
//   } else if (currentValue >= numberChar[0] && currentValue <= numberChar[1]) {
//     return allValues.numberChar
//   }
//   return null
// }
//
// function rotationalCipher(input, rotationFactor) {
//
//   let inputToChange = '';
//   for (let i = 0; i < input.length; i++) {
//     let charValue = input.charCodeAt(i);
//     let charSet = getCharCipherValue(charValue);
//     let chart = input[i];
//     if (charSet) {
//       chart = String.fromCharCode(getValue(charSet, charValue, rotationFactor));
//     }
//
//     inputToChange = `${inputToChange}${chart}`;
//
//   }
//
//   return inputToChange
// }

//rotationalCipher("Zebra-493?", 3);
// console.log(rotationalCipher("abcdZXYzxy-999.@", 200))


//        i
// [3, 4, 1, 6, 2]
//           j


// Empieza a irse para atras
// si no puede ir mas para atras, o

// function countSubarrays(arr) {
//   // Write your code here
//
//   let counters = [];
//
//   arr.forEach((number, index) => {
//
//     let goingBack = true;
//     let counter = 0;
//     let j = index;
//
//
//     while (j < arr.length) {
//       if (goingBack) {
//         j--;
//         if ((j >= 0) && arr[j] < number) {
//           counter++;
//         } else {
//           j = index;
//           counter++;
//           goingBack = false;
//         }
//       } else {
//         j++;
//         if (arr[j] < number) {
//           counter++;
//         } else {
//           j = arr.length
//         }
//       }
//     }
//
//     counters.push(counter);
//   });
//
//   return counters;
// }

// console.log(countSubarrays([3, 4, 1, 6, 2]));
// console.log(countSubarrays([2, 4, 7, 1, 5, 3]));

//          i
//[1, 5, 3, 3, 3];
//             j

// {1: 1, 5: 1, 3: 3}
//


function binarySearch(arr, num) {

  let index = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length - 1;
  let checkNum = arr[index];
  while ((end > start) && checkNum !== num) {
    checkNum = arr[index];
    if (checkNum < num) {
      start = index + 1;
    } else if (checkNum > num) {
      end = index - 1;
    }
    index = Math.floor((start + end) / 2);
  }

  return arr[index] === num ? index : -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 0));
