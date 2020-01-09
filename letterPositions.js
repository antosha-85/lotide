const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2);
};

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
};

const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (results[str[i]]) {
      results[str[i]].push(i);
    } else {
      results[str[i]] = [i];
    }
  }
  return results;
};

letterPositions('hello');
console.log(assertArraysEqual(letterPositions("hello").l, [2,3]));