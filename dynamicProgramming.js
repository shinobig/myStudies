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
