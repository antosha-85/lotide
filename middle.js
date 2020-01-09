const eqArrays = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`)
    : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2);
};

const middle = (arr) => {
  let newArr = [];
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length === 1 || arr.length === 2) {
    newArr = [];
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[midIndex - 1]);
    newArr.push(arr[midIndex]);
  } else {
    newArr.push(arr[midIndex]);
  }
  // } else {
  //   newArr = newArr.push(arr[Math.floor(length/2)]);
  //   newArr = newArr.push(arr[Math.ceil(length/2)]);
  // }
  return newArr;
};

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(assertArraysEqual([1, 2, 3], [1, 2, '3']));