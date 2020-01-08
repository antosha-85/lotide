const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2)       
};

const eqArrays = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const without = (arr1, arr2) => {
    const intersection = arr1.filter(element => !arr2.includes(element));
    return intersection;
  }

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]