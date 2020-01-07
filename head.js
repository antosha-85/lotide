// FUNCTION IMPLEMENTATION
head = arr => arr[0];

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`Assertion Passed: ${actual} === ${expected}`) 
  : console.log(`Assertion Failed: ${actual} !== ${expected}`)         
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");