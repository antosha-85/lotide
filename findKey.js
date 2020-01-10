const inspect = require('util').inspect; 
const findKey = function(obj, callback) {
  //if callback equal to a key it should return it otherwise return undefined
  for (const item in obj) {
    if(callback(obj[item])) {
      return item;
    }
  } 
  return undefined;
}

// example

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 4 }
}, x => x.stars === 2) // => "noma"
console.log(result1);
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`)
    : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

// // TEST CODE
assertEqual(result1, "noma");
// assertEqual(1, parseInt('1', 10));
// assertEqual(1, 2);
// assertEqual('Anton', 'Anton');
