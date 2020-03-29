'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

const keepFirst = (str) => {
    const slice = str.slice(0, 2);
    return slice;
};

const keepLast = (str) => {
    const slice = str.slice(str.length - 2, str.length);
    return slice;
}

const keepFirstLast = (str) => {
    const slice = str.slice(2, 4);
    return slice;
}



//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function', 'Should be a function');
assert.strictEqual(keepFirstLast('dormir'), 'rm');
// End of tests */
