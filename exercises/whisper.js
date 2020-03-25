'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = (str) => {
    const toLow = str.toLowerCase();
    return `*${toLow}*`;
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper('HOLA!'), '*hola!*');
// End of tests */
