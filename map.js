const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["1round", "5ontrol", "to", "major", "tom"];
const words3 = ["ground", "control", "7o", "8ajor", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
// console.log(map())
const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ '1', '5', 't', 'm', 't' ]);
assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ]);