const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      }  else {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  eqObjects(actual, expected) ? console.log(`:) Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  : console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
console.log(assertObjectsEqual({ a: '1', b: '2' }, { b: 2, a: '1' }));
console.log(assertObjectsEqual({ a: '1', b: '2', c: '4' }, { b: 2, a: '1', c: '4' }));
console.log(assertObjectsEqual({ a: '1', b: 2, c: '5' }, { b: 2, a: '1', c: '5' }));