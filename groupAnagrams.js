function groupAnagrams(strs) {

  if (strs.length === 1) return [strs];

  let anagramsLists = [];

  let results = [];

  let collectionBySize = {};

  strs.forEach(str => {

    if (collectionBySize[`${str.length}`]) {
      collectionBySize[`${str.length}`].push(str);
    } else {
      collectionBySize[`${str.length}`] = [str];
    }
  });


  Object.values(collectionBySize).forEach(strs => {


    if (strs.length === 1) {
      results.push(strs);
    } else {
      while (strs.length > 0) {

        let word = strs.pop();

        let index = 0;

        while (index < anagramsLists.length) {

          let collection = anagramsLists[index];
          let found = true;

          // check if is part of collection
          for (let i = 0; i < word.length; i++) {
            if (!collection[word[i]]) {
              found = false;
            }
          }

          if (found) {
            break;
          } else {
            index++;
          }

        }

        if (index === anagramsLists.length) {
          let anagramCollection = {};
          for (let i = 0; i < word.length; i++) {
            anagramCollection[word[i]] = 1;
          }
          anagramCollection.arr = [word];

          anagramsLists.push(anagramCollection);

        } else {
          anagramsLists[index].arr.push(word);
        }


      }
        anagramsLists.forEach(collection => results.push(collection.arr));
      // console.log('R1', result1);
        // results.push(result1);


    }


  });


  return results;
}
console.log(groupAnagrams(["bat","nat","tan","ate","eat","tea"]));
console.log(groupAnagrams(["", "b"]));
