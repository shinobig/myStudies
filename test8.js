// function convert(s, numRows) {
//   if(s.length === 1) return s
//   let arrays =  [];
//
//   for(let i = 0; i<numRows; i++){
//     arrays.push([])
//   }
//
//   let i = 0;
//   let j = 0;
//   let isGoingUp = false;
//
//
//   while (i < s.length) {
//
//     let character = s[i];
//
//     arrays[j].push(character);
//
//     if (j === numRows - 1) {
//       isGoingUp = true
//     } else if (j === 0) {
//       isGoingUp = false
//     }
//
//     if(isGoingUp){
//       j--
//     } else {
//       j++
//     }
//
//
//     i++;
//   }
//
//
//   return arrays.flat().join('');
//
// };
//
// console.log(convert('PAYPALISHIRING', 3));
//
// function getArea(leftWall, rightWall) {
//
//   let height;
//   if (leftWall.h < rightWall.h) {
//     height = leftWall.h;
//   } else {
//     height = rightWall.h;
//   }
//
//   let base = rightWall.index - leftWall.index;
//
//   return height * base;
//
// }
//
// function maxArea(height) {
//
//
//   // sacar area maxima
//
//   // sacar area de +1 index
//   // sacar area de -1 index
//
//   //poner area maxima
//   // reducir la ventana (+1 o -1)
//
//
//   let left = 0;
//   let right = height.length - 1;
//
//   let leftWall = {h: height[left], index: left};
//   let rightWall = {h: height[right], index: right};
//
//   let maxWater = getArea(leftWall, rightWall);
//
//   while (left < right) {
//
//     let maxLeft;
//     let maxright;
//
//     let tempLeft = left + 1;
//     let tempRight = right - 1;
//
//     let tempLeftWall = {h: height[tempLeft], index: tempLeft};
//     let tempRightWall = {h: height[tempRight], index: tempRight};
//
//
//     maxLeft = getArea(tempLeftWall, rightWall);
//     maxright = getArea(leftWall, tempRightWall);
//
//     console.log('LEFT', left, leftWall);
//     console.log('RIGHT', right, rightWall);
//     console.log('TEMPL', tempLeft, tempLeftWall);
//     console.log('TEMPR', tempRight, tempRightWall);
//
//
//     if(maxLeft === maxright){
//
//     }
//
//     if (maxLeft > maxright) {
//       left++;
//       leftWall = tempLeftWall;
//     } else {
//       right--;
//       rightWall = tempRightWall;
//     }
//
//     console.log('MAX LEFT', maxLeft);
//     console.log('MAX RIGHT', maxright);
//     console.log('MAX', maxWater);
//     console.log();
//
//
//     if (maxLeft > maxWater) {
//       maxWater = maxLeft;
//     }
//
//
//     if (maxright > maxWater) {
//       maxWater = maxright;
//     }
//
//   }
//
//
//   return maxWater;
//
// };

// [1,8,6,2,5,4,8,3,7]
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));

// console.log(maxArea([1,3,2,5,25,24,5]));

//
// function isValid(s){
//
//
//
// }
//
//
// console.log(isValid());


function searchInsert(nums, target){

  let index = Math.floor(nums.length / 2);
  let start = 0;
  let end  = nums.length -1

  let checkNum = nums[index]

  while((end > start) && checkNum !== target){
    checkNum = nums[index];

    if(checkNum === target) return index

    if(checkNum < target){
      start = index + 1;

    } else if (checkNum > target){
      end = index - 1;
    }

    index = Math.floor((start + end)/2)

  }


  if(nums[index] >= target){
    return index
  }

  return index+1


}

console.log(searchInsert([1,3,5,6], 2));
