const eqArrays = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2)       
};


console.log(assertEqual([1, 2, 3], [1, 2, 3]));
console.log(assertEqual([1, 2, 3], [1, 2, '3']));