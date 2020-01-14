# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @antosha-85/lotide`

**Require it:**

`const _ = require('@antosha-85/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first item in the array
* `function2(tail)`: returns the "tail" of an array: everything except for the first item (head) of the provided array
* `function3(middle)`: will take in an array and return the middle-most element(s) of the given array.
* `function4(assertEqual)`: description
* `function5(assertObjectEqual)`: Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console
* `function6(countLetters)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `function7(countOnly)`:  will return an object containing counts of everything that the input object listed.
* `function8(eqArrays)`: compares two arrays for a perfect match
* `function9(eqObjects)`:  will take in two objects and returns true or false, based on a perfect match.
* `function10(findKey)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
* `function11(findKeyByValue)`: which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `function12(flatten)`: will take in an array of arrays and return a "flattened" version of the array.
* `function13(letterPositions)`: new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found
* `function14(map)`: The map function will return a new array based on the results of the callback function
* `function15(takeUntil)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value
* `function16(without)`: will return a subset of a given array, removing unwanted elements
* `function17(assertArrayEqual)`: assertion function will make use of your eqArrays function for array comparison.
