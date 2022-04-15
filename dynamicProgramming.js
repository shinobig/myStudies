// function fib(n, memo = []) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   let res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   return res;
// }
//
// console.log(fib(100));


// function climbStairs(n) {
//
//   let visited = {};
//   let finalSum = 0;
//
//   function helper(n) {
//
//     if (visited[n]) {
//       return visited[n];
//     }
//
//     let sum = 0;
//
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//
//     sum = helper(n - 1) + helper(n - 2);
//
//     visited[n] = sum
//
//     return sum;
//   }
//
//   finalSum = helper(n);
//   //console.log(visited);
//
//   return finalSum;
//
//
// }
//
// console.log(climbStairs(6));


// function maxProfit(prices) {
//
//   let i = 0;
//   let j = 1;
//   let sum = 0;
//   while (j < prices.length) {
//
//     if (prices[i] > prices[j]) {
//       i = j;
//       j = i + 1;
//     } else {
//
//       let temp = prices[j] - prices[i];
//
//       if (temp > sum) {
//         sum = temp;
//       }
//
//       j++;
//     }
//
//   }
//
//   return sum;
// }
//
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]));

// function maxSubArray(nums) {
//
//   let bestSums = [nums.shift()];
//   let bestNum = bestSums[0];
//
//   nums.forEach(num => {
//     let prevBest = num + bestSums[bestSums.length - 1];
//     let selected = Math.max(prevBest, num);
//     bestNum = Math.max(selected, bestNum);
//     bestSums.push(selected);
//   });
//
//   return bestNum;
//
// };
//
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));

function rob(nums) {

  if (nums.length === 1) return nums[0];

  let robbed = [nums.shift()];

  robbed.push(Math.max(nums.shift(), robbed[0]));


  for (let i = 0; i < nums.length; i++) {
    let cuantity = nums[i];

    let maxToRob = Math.max(cuantity + robbed[robbed.length - 2], robbed[robbed.length - 1]);
    robbed.push(maxToRob);
  }

  return Math.max(robbed[robbed.length - 2], robbed[robbed.length - 1]);
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 2]));
console.log(rob([2, 1, 1, 2]));
