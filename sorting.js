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


// function pivot(arr, start = 0, end = arr.length - 1) {
//
//
//   function swap(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//
//   let pivot = arr[start];
//   let swapIndex = start;
//   for (let i = start + 1; i < end; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++;
//       swap(arr, swapIndex, i);
//     }
//   }
//
//   swap(arr, start, swapIndex);
//   return swapIndex;
//
// }
//
// // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
//
//
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
//
// }
//
//
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));


// Radix sort

function getDigit(num, place) {
  let numStr = `${num}`;
  if (place > numStr.length) {
    return 0;
  } else {
    let index = (numStr.length) - place;
    return +numStr[index];
  }
}

function digitCount(num) {
  return `${Math.abs(num)}`.length;
}

function mostDigit(nums) {
  let max = 0;
  nums.forEach(num => {
    max = Math.max(max, digitCount(num));
  });
  return max;
}

function radixSort(nums) {

  let maxDigits = mostDigit(nums);

  for (let i = 1; i <= maxDigits; i++) {
    
    let buckets = Array.from({length: 10}, () => []);

    nums.forEach(num => {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    });

    nums = [].concat(...buckets);
  }

  return nums;
}

console.log(radixSort([12, 36, 485, 239, 5884, 92, 48573, 495, 204, 43, 2, 1]));









































