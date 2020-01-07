// FUNCTION IMPLEMENTATION
const tail = arr => arr.slice(1);

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`Assertion Passed: ${actual} === ${expected}`)
    : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 3);