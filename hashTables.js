// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//
//   return total;
// }


class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  display() {
    return this.keyMap;
  }

  keys(){
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {

          if (!valuesArr.includes(this.keyMap[i][j][0])) {
            valuesArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return valuesArr;

  }

  values() {

    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {

          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;

  }


  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {

    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, val]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {

      let foundKey = this.keyMap[index];
      for (let i = 0; i < foundKey.length; i++) {
        if (foundKey[i][0] === key) {
          return foundKey[i][1];
        }
      }
    }

    return undefined;

  }

}


const hashTable = new HashTable();

hashTable.set('pink', 'hola soy pink');
hashTable.set('cyan', 'hola soy cyan');
hashTable.set('red', 'hola soy red');
hashTable.set('blue', 'hola soy blue');
hashTable.set('green', 'hola soy green');
hashTable.set('taco', 'hola soy green');

//
// console.log(hashTable.get('pink'));
// console.log(hashTable.get('blue'));
// console.log(hashTable.get('green'));
// console.log(hashTable.get('caca'));

console.log(hashTable.values());
console.log(hashTable.keys());
