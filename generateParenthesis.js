function generateParentheses(n) {

  if(!n) return []
  if(n === 1) return ['()']

  let parentheses = [];

  let helper = (left, right, str) => {

    // console.log('STR', str);

    if (str.length === n * 2) {
      parentheses.push(str);
      return;
    }

    // if (left < right) {
    //   let newStr = `${str})`;
    //   helper(left, right - 1, newStr);
    //
    //
    // }

    if(left > 0){
      let newStr = `${str}(`;
      helper(left - 1, right, newStr);
    }

    if(right > left){

      let otherStr = `${str})`
      helper(left, right - 1, otherStr)
    }


  };

  helper(n, n, '');


  return parentheses

}


console.log(generateParentheses(3));
