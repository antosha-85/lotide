const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`) 
  : console.log(`Assertion Failed: ${actual} !== ${expected}`)         
};

const countLetters = function(str) {
  const results = {};
  str = str.replace(/\s/g, '');

  for (const item of str) {
    if (results[item]) {
      results[item] += 1;
      console.log(`adding ${item} again and the count is ${results[item]}`)
    } else {
      results[item] = 1;
      console.log(`adding ${item} first time and the count is ${results[item]}`)
    }
  }
    // OLD CODE
    // if (itemsToCount[item]) { 
    //   // inside the loop, increment the counter for each item:
    //   // set a property with that string key to: the value that was already there (or zero if nothing there) with 1 added to it.
    //   if (results[item]) {
    //     results[item] += 1;
    //     console.log(`adding ${item} again and the count is ${results[item]}`)
    //   } else {
    //     results[item] = 1;
    //     console.log(`adding ${item} first time and the count is ${results[item]}`)
    //   }
    // }
  return results;
}
console.log(countLetters('LHL'));
