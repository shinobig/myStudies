// function numberOfWays(arr, k) {
//
//   let numbersObject = {};
//
//   arr.forEach((num, index) => {
//     if (num < k) {
//       numbersObject[`${num}`] = (numbersObject[`${num}`] || []);
//     }
//
//     numbersObject[`${num}`].push(index);
//
//   });
//
//   let counter = 0;
//   Object.keys(numbersObject).forEach(num => {
//
//     let matchNumber = k - +num;
//     let numbersArr = numbersObject[num];
//     let matchArr = numbersObject[`${matchNumber}`];
//
//     if (matchArr) {
//       numbersArr.forEach(nIndex => {
//         matchArr.forEach(mIndex => {
//           if (mIndex > nIndex) {
//             counter++;
//           }
//         });
//       });
//     }
//   });
//
//   return counter;
// }
//
//
// console.log(numberOfWays([1, 2, 3, 4, 3], 6));
// console.log(numberOfWays([1, 5, 3, 3, 3], 6));

function getMaxE(N,D,K){
  let counter = 1
  let left = 1 - K;
  let right = 0;


  for(let i = 1; i < D.length; i++){

    let food = D[i]
    let eat = true;

    console.log('FOOD', food)

    for(let j = left; j <= right; j++){

      console.log('COMPARED WITH', D[j])

      if(D[j] === food){
        eat = false;
      }
      console.log('EATIN', eat)

    }

    if(eat){
      counter++
      left = (i + 1) - K
      right = (i + 1) - 1

      console.log('LEFT', left)

    }


  }



  return counter;
<zx>
