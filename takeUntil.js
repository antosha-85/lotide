// const takeUntil = function(array, callback) {
//   let newArr1 = array;
//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i])) {
//       newArr1 = array.slice(i + 1);
//     }  else {
//         break;
//     } 
//   } 
//   return newArr1;
// }

const takeUntil = function(array, callback) {
  let newArr1 = array;
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArr1 = array.slice(0, i + 1);
    }  else {
        break;
    } 
  } 
  return newArr1;
}

// examples of comparisons
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// checking function 
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
return true;
}
const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`:) Assertion Passed: ${arr1} === ${arr2}`)
  : console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
};
// calling checking function
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood'  ]);
