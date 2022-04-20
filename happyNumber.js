function isHappy(n){

  let counter = 0
  const helper = (numToTest) => {

  if(numToTest === 1) return true
  if(counter === 10) return false
    counter ++
  let nums = `${numToTest}`.split('')

  let build = 0;

  nums.forEach(num => {
    let sqr = +num * +num

    build = build + +sqr

  })

  return helper(build)
  }


  return helper(n)

}

console.log(isHappy(7));
