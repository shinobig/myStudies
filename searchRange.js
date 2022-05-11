function searchRange(nums, target) {

  if (nums.length === 0) return [-1, -1];
  if(nums.length === 1 && nums[0] === target) return [0,0]

  let locations = [-1,-1];



  let index = Math.floor(nums.length / 2);


  let start = 0;
  let end = nums.length - 1;
  let checkNum = nums[index];


  while ((end > start) && checkNum !== target) {
    checkNum = nums[index];
    if (checkNum < target) {
      start = index + 1;
    } else if (checkNum > target) {
      end = index - 1;
    }
    index = Math.floor((start + end) / 2);
  }

  let numBefore = index;
  let numAfter = index;

  while(numBefore >= 0 && nums[numBefore] === target ){
    locations[0] = numBefore
    numBefore--
  }

  if (nums[nums.length - 1] === target) {
    locations.push(nums.length - 1);
    return locations;
  }

  while(numAfter <= nums.length - 1 && nums[numAfter] === target ){
    locations[1] = numAfter
    numAfter++
  }

  return locations;


}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([0,0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,8,10,10], 4));
