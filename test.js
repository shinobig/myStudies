//console.log('testing node')

// input
// let test = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// let output = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//
//
// function rotate(matrix) {
//
//   const gridQuantity = matrix.length;
//
//
//     //console.log(gridQuantity);
//
//     for(let i= gridQuantity - 1; i >= 0; i--){
//
//
//       for(let j = gridQuantity - 1; j >= 0; j--){
//
//         //console.log(matrix[i][j])
//
//         let numToMove = matrix[i].splice(j,1);
//         console.log('numToMove', numToMove);
//
//         matrix[j].push(numToMove)
//
//       }
//
//
//     }
//
//     console.log(matrix)
// };
//
//
// rotate(test)

// const  s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
//
// const mi = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," "," ","a",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
// const ex = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
//
// function reverseString(s){
//
//   console.log(s.reverse())
//   for(let i = 0; i<= Math.floor(s.length / 2); i++){
//     let letterToChange = s[i];
//     s[i] = s[(s.length - 1) - i];
//     s[(s.length - 1) - i] = letterToChange
//   }
// };
//
// reverseString(s)

//
// function reverse(x){
//
//    let reversed =  `${x}`.split('').reverse()
//
//   if(reversed[reversed.length - 1] === '-'){
//     reversed.unshift('-')
//     reversed.pop()
//   }
//
//   if(reversed > 2147483647) return 0
//
//   return +reversed.join('')
// };
// console.log(reverse(-321))

//
// function firstUniqChar(s) {
//   let guide = {};
//
//   for (let i = 0; i < s.length; i++) {
//     if (!guide[s[i]]) guide[s[i]] = 0;
//     guide[s[i]]++;
//   }
//
//   for (let i = 0; i < s.length; i++) {
//     if (guide[s[i]] === 1) return i;
//   }
//
//   return -1;
// };
//
//
// console.log(firstUniqChar('ccaabb'));
// console.log(firstUniqChar("leetcode"));
// function validAnagram(s, t) {
//
//   if (s.length !== t.length) return false;
//
//   let string1 = {}
//   let string2 = {}
//
//   for(let char of s){
//     string1[char] = (string1[char] || 0) + 1
//   }
//
//   for(let char of t){
//     string2[char] = (string2[char] || 0) + 1
//   }
//
//   for(let char of s){
//     if(string1[char] !== string2[char]){
//       return false
//     }
//   }
//
//   return true;
// }
//
// console.log(validAnagram('', ''));
//  console.log(validAnagram('aaz', 'zza'));
//console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
//console.log(validAnagram('awesome', 'awesom'));


// function isPalindrome(s) {
//
//   //type strType = string | string[]
//
//  // let str : strType = s.toLowerCase();
//   let str = s.toLowerCase();
//   str = str.replace(/\W|\s|_/g, '').trim().split('');
//
//   console.log(str)
//   for (let i = 0; i < str.length; i++) {
//
//     if (str[i] !== str[(str.length - 1) - i]) {
//       return false;
//     }
//
//   }
//
//   return true;
// };
//
//
// // isPalindrome("A man, a plan, a canal: Panama")
// //console.log(isPalindrome("abc"));
// console.log(isPalindrome("ab_a"));

//
// function myAtoi(s) {
//   let str;
//   if (!isNaN(+s.trim()[0])) {
//     str = s.replace(/[^0-9.\-]/g, '').trim();
//   } else {
//     str = s.replace(/[^a-zA-Z0-9.\-|+]/g, '').trim();
//   }
//
//   if ((str[0] === "-" && str[1] === "0") || str[0] === "0") {
//
//     let newStr = '';
//
//     let testArr = []
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== '0') {
//         testArr.push(str[i])
//       }
//     }
//     console.log(testArr);
//
//   }
//
//   const num = +str;
//
//   if (isNaN(num)) return 0;
//   if (num > 2147483647) return 2147483647;
//   if (num < -2147483648) return -2147483648;
//
//   return num;
// }
//
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("+-12"));
// console.log(myAtoi("  -0012a42"));
//


// function strStr(haystack, needle) {
//
//   if(needle === '') return 0
//   if(haystack.includes(needle)){
//
//     return haystack.indexOf(needle)
//
//   }
//   return -1
//
//
// };
//
// console.log(strStr("mississippi" ,"issip"))

// function longestCommonPrefix(strs) {
//
//   if (strs.length === 1) return strs[0];
//
//   let prefix = '';
//   let counter = 0;
//   let valid = true;
//   let longest = strs.reduce(
//     function (a, b) {
//       return a.length > b.length ? a : b;
//     }
//   );
//
//   while (valid) {
//     prefix = longest.slice(0, counter);
//     if (strs.every(word => word.slice(0, counter) === prefix) && counter <= longest.length) {
//       counter++;
//     } else {
//       prefix = prefix.substring(0, counter - 1 );
//       valid = false;
//     }
//   }
//
//
//   return prefix;
// };
//
//   console.log(longestCommonPrefix(["flower","flow","flight"]))
// // console.log(longestCommonPrefix([ '', '' ]))
//  console.log(longestCommonPrefix([ 'ab', 'a' ]))
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
// console.log(longestCommonPrefix(["c","acc","ccc"]));
//
//
// function countUniqueValues(numbers) {
//   if (numbers.length === 0) return 0;
//   let counter = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[counter]) {
//       counter++;
//       numbers[counter] = numbers[i];
//     }
//   }
//   return counter + 1;
// }
//
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
// function sameFrequency(num1, num2) {
//   // good luck. Add any arguments you deem necessary.
//   let num1Str = num1.toString();
//   let num2Str = num2.toString();
//
//
//   if (num1Str.length !== num2Str.length) return false;
//   let num1Obj = {};
//   let num2Obj = {};
//
//   for (let i = 0; i < num1Str.length; i++) {
//     let num = num1Str[i]
//     let num2 = num2Str[i]
//     num1Obj[num] = (num1Obj[num] || 0) + 1
//     num2Obj[num2] = (num2Obj[num2] || 0) + 1
//   }
//
//   for (let i = 0; i < num1Str.length; i++) {
//     let num = num2Str[i]
//     if(num1Obj[num] !== num2Obj[num]){
//       return false
//     }
//   }
//
//   return true
// }
//
// function areThereDuplicates() {
//   let objConst = {};
//   for (let i = 0; i < arguments.length; i++) {
//     let key = arguments[i].toString();
//     if (objConst[key]) {
//       return true;
//     } else {
//       objConst[key] = true;
//     }
//   }
//   return false;
// }
//
// console.log(areThereDuplicates(1,2,3,4,2))


// function averagePair(arr, average){
//
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//
//   while(leftPointer < rightPointer){
//     let tempAverage = (arr[leftPointer] + arr[rightPointer]) / 2
//
//     if(tempAverage === average){
//       return true
//     } else if (tempAverage > average){
//       rightPointer--
//     } else {
//       leftPointer++
//     }
//
//   }
//
// return false
// }
//
//
// function isSubsequence(str1, str2) {
//
//
//   let pointer = 0;
//
//   for (let i = 0; i < str2.length; i++) {
//     if (str1[pointer] === str2[i]) {
//       pointer++;
//       if (pointer + 1 > str1.length) {
//         i = str2.length;
//       }
//     }
//   }
//
//   return pointer + 1 > str1.length;
// }
//
// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('abc', 'acb'));


//
// function solution(S) {
//
//   if(S.length === 1) return true
//
//   for(let i = 0; i < S.length - 1; i++){
//     let j = i+1;
//     if(S[i] === 'b' && S[j] === 'a'){
//       return false
//     }
//   }
//
//   return true
//
// }

// console.log(solution('aaabbb'))
// console.log(solution('aaabbbaaaaaaaabbbaaa'))
// console.log(solution('bbbbb'))
// console.log(solution('aaa'))

//




// 'use strict';
//
// /* global CustomError, getLikedBrands, getTopBrandsForGender */
//
// f;
//
// function solution(U, N) {
//   return new Promise((resolve, reject) => {
//     // Resolve the promise with the result
//
//     if (!U.id || !U.gender) {
//       throw new Error('Missing data');
//     }
//
//     try {
//
//       Promise.all([getLikedBrands(U.id), getTopBrandsForGender(U.gender)])
//         .then(values => {
//           let favoritesToDisplay = {};
//           values.forEach(brandCollection => {
//             brandCollection.forEach(brand => {
//               favoritesToDisplay[brand.name] = (favoritesToDisplay[brand.name] || true);
//             });
//           });
//
//           const favorites = Object.keys(favoritesToDisplay);
//
//           if (favorites.length < N) {
//             reject(new CustomError("Not enough data"));
//           }
//
//           let result = [];
//
//           for (let i = 0; i < N; i++) {
//             result.push(favorites[i]);
//           }
//
//           resolve(result);
//
//         });
//
//     } catch (error) {
//
//       reject(new CustomError(error.message));
//
//     }
//   });



