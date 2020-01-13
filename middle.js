const eqArrays = require('./eqArrays.js')

const assertEqual = require('./assertEqual');

const assertArraysEqual = require('./assertArraysEqual');

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
module.exports = middle;
