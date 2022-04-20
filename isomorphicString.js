function isIsomorphic(s,t){

  // create i and j var
  // loop over s and t
  // if the char doesnt exist as a key, create it
  // if it does, check it
  // return true or false

  let j = 0;
  let checker = {}
  let checkerB = {}

  if(s && t && s.length === 1 && t.length === 1) return true

  for(let i = 0; i < s.length; i++){

    let sChar = s[i]
    let tChar = t[i]
    if(!checker[sChar] && !checkerB[tChar]){
      checker[sChar] = tChar
      checkerB[tChar] = sChar
    } else {

      if(checker[sChar] !== tChar || checkerB[tChar] !== sChar){
        return false
      }

    }

  }

  return true

}


console.log(isIsomorphic('tdd', 'egg'));
console.log(isIsomorphic('badc', 'baba'));

