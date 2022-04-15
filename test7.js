
function getNumberValue(char){
  const map = [
    ["a", "b"],
    ["c","d", "e"],
    ["f", "g", "h"],
    ["i", "j", "k",],
    ["l", "m", "n"],
    [ "o", "p", "q"],
    ["r", "s", "t"],
    [ "u", "v","w"],
    [ "x", "y", "z"]
  ];

  return map.findIndex(collection => collection.includes(char)) + 1
}

function countSubstrings(input_str) {



// i  j
// asdf


  let i = 0;
  let j = 1;


  let iChar = input_str[i]
  let jChar = input_str[j]

  let counter = input_str.length

  let sum = getNumberValue(iChar) + getNumberValue(jChar)
  let charachtersLenght = 2

  console.log(input_str.length);

  while(i < j){

    console.log('SUM', sum);
    console.log('J', j);
    console.log('I', i);
    console.log('CHA', charachtersLenght);
    console.log('counter', counter);
    console.log();



    if(sum % charachtersLenght === 0){
      counter++
    }

    if( j < input_str.length -1){
      j++
      charachtersLenght ++
      jChar = input_str[j]
      sum += getNumberValue(jChar)
    } else {
      iChar = input_str[i]
      sum -= getNumberValue(iChar)
      i++
      charachtersLenght--

    }


  }

  return counter



}

console.log(countSubstrings('nrqqigtqph')) // 22

// 10
// 3
//       i j
//nrqqigtqph
