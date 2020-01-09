const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`)
    : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// const findKeyByValue = function(obj, str) {
//   const keys = Object.keys(obj);
//   for (const item of keys) {
//     if (obj[item] === str) {
//     return item;
//     }
//   } 
//   return undefined;
// }
const findKeyByValue = function(obj, str) {
  for (const item in obj) {
    if (obj[item] === str) {
    return item;
    }
  } 
  return undefined;
}
    

// console.log(`keys: ${keys}`)
  // for (const item of keys) {
  //   console.log(`item ${item}`)
  // }
  // for (let i = 0; i < str.length; i++) {
  //   if (results[str[i]]) {
  //     results[str[i]].push(i);
  //   } else {
  //     results[str[i]] = [i];
  //   }
  // }
  
  
findKeyByValue(bestTVShowsByGenre, "The Wire");


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
