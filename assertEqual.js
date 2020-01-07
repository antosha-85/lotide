// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
   actual === expected ? console.log(`:) Assertion Passed: ${actual} === ${expected}`) 
   : console.log(`Assertion Failed: ${actual} !== ${expected}`)         
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, parseInt('1', 10));
assertEqual(1, 2);
assertEqual('Anton', 'Anton');
