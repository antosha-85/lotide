const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`)
    : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  const results = {};
  str = str.replace(/\s/g, '');

  for (const item of str) {
    if (results[item]) {
      results[item] += 1;
      console.log(`adding ${item} again and the count is ${results[item]}`);
    } else {
      results[item] = 1;
      console.log(`adding ${item} first time and the count is ${results[item]}`);
    }
  }
    
  return results;
};
console.log(countLetters('LHL'));
