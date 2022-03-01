// console.log([5,4,10,15].sort( (a,b) => a-b))


//bubble sort

//
// function bubbleSort(arr) {
//
//   let start = arr.length;
//
//   while (start > 1) {
//     let noSwaps = true;
//     for (let i = 0; i < start - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         noSwaps = false;
//       }
//     }
//
//     if (noSwaps) break;
//     start--;
//   }
//
//   return arr;
// }
//
//
//
// // console.log(bubbleSort([5, 4, 10, 8, 20]));
// // console.log(bubbleSort([5, 6, 8, 7, 4, 1, 8, 9, 6, 4, 5]));
// console.log(bubbleSort([8,1,2,3,4,5,6,7,8]));


// function getHitProbability(R, C, G) {
//
//   const max = R * C;
//
//   let hits = 0;
//
//   G.forEach(row => {
//
//     row.forEach(hitbox => {
//       if (hitbox === 1) {
//         hits++;
//       }
//     });
//
//   });
//
//
//   return (hits / max).toFixed(6);
// }
//
//
// console.log(getHitProbability(2, 3, [[0, 0, 1], [1, 0, 1]]));
// console.log(getHitProbability(2, 3, [[0, 0, 1], [1, 0, 1]]));


//function getSecondsRequired(N, F, P) {
//
// let map = [];
//
// for (let i = 0; i < N; i++) {
//   if (P.includes(i + 1)) {
//     map.push(i + 1);
//   } else {
//     map.push(0);
//   }
// }
//
// let i = 0;
// let j = 1;
// let counter = 0;
// while (i < N) {
//   if (map[i] === 0) {
//     i++;
//     j = i + 1;
//   } else if (map[i] > 0) {
//     if (map[j] === 0 && j < N - 1) {
//
//       map[j] = map[i];
//       map[i] = 0;
//       i++;
//       j = i + 1;
//       counter++;
//     } else if (map[j] > 0 && j < N - 1) {
//       j++;
//     } else if (j === N - 1) {
//       counter = (j - i) + 1 ;
//       i = N
//     } else {
//       i++;
//       counter++;
//     }
//
//   }
//
// }
// return counter;

//}
//
// function getSecondsRequired(N, F, P) {
//
//
//
// }

// function getSecondsRequired(N, F, P) {
//
//   let min = P[0];
//
//   P.forEach(num => {
//     if(num < min){
//       min = num;
//     }
//   })
//
//   let heapNumber = (N - min) - (F-1);
//   return (heapNumber + (F - 1))
// }
//
// console.log(getSecondsRequired(6, 3, [5, 2, 4]));
// console.log(getSecondsRequired(3, 1, [1]));
// console.log(getSecondsRequired(17, 6, [11,12,2,5,16, 7]));
//
// //[3,4,5 ]
//
// // I, III
//
// // [1] 3
//
// // II
//
// //

//
// function areTheyEqual(array_a, array_b) {
//   // Write your code here
//   if (array_a.length !== array_b.length) return false;
//
//   let start = 0;
//   let end = array_a.length - 1;
//
//   for (let i = 0; i < array_a.length; i++) {
//     if (array_a[i] > array_b[i]) {
//       return false;
//     } else if (array_a[i] !== array_b[i]) {
//       start = i;
//       i = array_a.length;
//     }
//   }
//
//   for (let i = array_a.length; i >= 0; i--) {
//     if (array_a[i] < array_b[i]) {
//       return false;
//     } else if (array_a[i] !== array_b[i]) {
//       end = i;
//       i = -1;
//     }
//   }
//
//
//   let checkLoop = true;
//   let reverse = true;
//   let lastDigit = end;
//
//   while (checkLoop && start !== lastDigit) {
//
//     if (array_a[start] !== array_b[end]) {
//       reverse = false;
//       checkLoop = false;
//     }
//     start++;
//     end--;
//   }
//
//   return reverse;
//
// }
//
// console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2]));
// console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 3]));
// console.log(areTheyEqual([1, 2, 3, 4, 4, 5, 6, 8], [1, 2, 6, 5, 4, 3, 2, 8]));
// function getMaxVisitableWebpages(N, L) {
//   // Write your code here
//   return 0;
// }
//
//
// console.log(getMaxVisitableWebpages(4, [4,1,2,1]));


// function countDown(num) {
//   if (num <= 0) {
//     console.log('All done!');
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }
//
// countDown(5)
//
// function sumRange(num){
//   if (num===1) return 1
//   return num + sumRange(num - 1)
// }
//
//
// console.log(sumRange(3));

function factorial(num) {
  if ( num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(7));
