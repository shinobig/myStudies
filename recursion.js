// function power(a,b){
//   if(b === 0) return 1
//   return a * power(2, b-1)
// }
//
// console.log(power(2,0))


// function productOfArray(arr){
//   if(arr.length === 0) return 1
//   return arr[0] * productOfArray(arr.slice(1))
// }
//
// console.log(productOfArray([1,2,3,10]));


// function recursiveRange(num){
//   if (num===1) return 1
//   return num + recursiveRange(num - 1)
// }

// function fib(num){
//   if (num === 1) return 1
//   return num + fib(num - 1)
// }
//
//  console.log(fib(4));

function isPalindrome(mainString){

function reverse(str){
  if(str === '') return '';
  let char = str[str.length - 1]
  let edited = str.slice(0, -1)
  return `${char}${reverse(edited)}`
}

let palindrome = reverse(mainString)

  return palindrome === mainString

}

