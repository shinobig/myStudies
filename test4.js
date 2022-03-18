// function merge(nums1, m, nums2, n) {
//
//   if (m > 0 && n === 0) return;
//
//   let i = nums1.length - (n + 1);
//   let j = n - 1;
//   let k = nums1.length - 1;
//
//
//   while (k >= 0 && typeof nums1[j] === "number" && typeof nums2[j] === "number") {
//
//     if (nums1[i] > nums2[j]) {
//
//       nums1[k] = nums1[i];
//       i--;
//
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//
//     k--;
//   }
//
//
// };

//    i k
// [1,2,3,3,5,6]
//j
// [2,5,6]

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
// merge([0], 0, [1], 1);

//      l r
// [1,2,3,4,5]

//
