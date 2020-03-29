'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

const cutFirst = (str) => {
    const slice = str.slice(2, str.length);
    return slice;
}


const cutLast = (str) => {
    const slice = str.slice(0, str.length - 2);
    return slice;
}


const cutFirstLast = (str) => {
    const first = str.slice(2, str.length);
    const last = first.slice(0, first.length - 2);
    return last;
}



//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function');
assert.strictEqual(cutLast('dormir'), 'dorm');
// End of tests */
