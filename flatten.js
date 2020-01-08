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

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // newArr.push(arr[i]);
    if (Array.isArray(arr[i])) {
      for(let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }


  return newArr
}


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]