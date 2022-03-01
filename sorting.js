// selectionSort

// function selectionSort(arr) {
//
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//
//     // avoid when the index is the same
//     if (arr[i] !== arr[lowest]) {
//       let temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//
//   return arr;
// }
//
// console.log(selectionSort([34, 22, 10, 19, 17]));


// Insertion Sort

// function insertionSort(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     var currentVal = arr[i];
//
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
//
// console.log(insertionSort([2, 1, 9, 76, 4, 19, 28]));


// Merge sort
//
// function merge(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;
//
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }
//
//   return result;
//
// }
//
//
// function mergeSort(arr) {
//
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left, right)
//
// }
//
// console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
//
//


// Quick Sort














