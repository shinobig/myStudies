function isValid(s) {


  // Crear un stash que registre que es lo que sigue

  // revisar que debe aparecer y ponerlo en su lugar

  // si si aparece en el orden correcto,

  let stash = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];


    if (char === '(') {
      stash.push(')');
    }

    if (char === '[') {
      stash.push(']');
    }

    if (char === '{') {
      stash.push('}');
    }

    if (char === ")" || char === '}' || char === ']') {

      let next = stash.pop()
      if(char !== next){
        return false
      }

    }

  }
  console.log(stash);

  console.log(stash.pop())
  //return stash.length === 0




}

console.log(isValid("([)]"));
