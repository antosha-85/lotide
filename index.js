const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual')
const assertEqualTest = require('./assetEqualTest')
const assertObjectEqual = require('./assetObjectEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const assertEqualTest = require('./assertEqualTest')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')

module.exports = {
    head:   head,
    tail:   tail,
    middle: middle,
    assertEqual: assertEqual,
    assertEqualTest: assertEqualTest,
    assertObjectEqual: assertObjectEqual,
    countLetters: countLetters,
    countOnly: countOnly,
    assertEqualTest: assertEqualTest,
    eqArrays: eqArrays,
    eqObjects: eqObjects,
    findKey: findKey,
    findKeyByValue: findKeyByValue,
    flatten: flatten,
    letterPositions: letterPositions,
    map: map,
    takeUntil: takeUntil,
    without: without
};