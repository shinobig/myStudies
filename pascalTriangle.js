function generate(numRows) {

  // crear un loop que entre a cada row
  // crear un array que contenga los valores de los loops
  // meter ese array en el array total
  // crear una variable que tenga la cantidad de loops (index + 1)
  // crear un loop que tenga uno valor mas que el anterior
  // hacer operaciones
  // poner numeros

  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let result = [[1], [1, 1]];


  for (let i = 2; i < numRows; i++) {

    let rowBefore = result[i - 1];
    let currentRow = [];
    let currentRowsQuantity = i + 1;

    for (let j = 0; j < currentRowsQuantity; j++) {
      let num = 1;
      if (j !== 0 && j !== currentRowsQuantity - 1) {
        num = rowBefore[j] + rowBefore[j - 1];
      }
      currentRow.push(num);
    }

    result.push(currentRow);

  }


  return result;

}

console.log(generate(5));
