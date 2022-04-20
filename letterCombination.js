function letterCombinations(digits) {
if(!digits) return []
  let numbers = digits.split('');

  let numToKey = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  let combinationStack = numToKey[numbers[0]];



  for (let i = 1; i < numbers.length; i++) {

    let charToCombine = numToKey[numbers[i]];

    let newStack = [];

    charToCombine.forEach(charA => {

      combinationStack.forEach(charB => {

        let comb = `${charB}${charA}`;
        newStack.push(comb);
      });

    });

    combinationStack = newStack

  }


  return combinationStack


}

console.log(letterCombinations('7'));
