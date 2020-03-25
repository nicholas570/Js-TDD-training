'use strict';

/*
 * Create a `concatStr` function that takes 2 arguments and concatenate them
 *
 * @notions Functions, Operators
 */

// Your code:

const concatStr = (str1, str2) => str1.concat(str2);

console.log(concatStr('man', 'ger'));

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof concatStr, 'function', 'Should be a function');
assert.strictEqual(concatStr.length, 2, 'Should takes 2 arguments');
assert.strictEqual(concatStr('a', 'b'), 'ab');
assert.strictEqual(concatStr('yolo', 'swag'), 'yoloswag');
// End of tests */
