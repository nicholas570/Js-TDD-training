'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

//Your code:

const jadenCase = (str) => {
    const strArray = str.split(' ');
    let result = '';
    for (let current of strArray){
        const toUp = current.slice(0, 1).toUpperCase();
        const toLow = current.slice(1, current.length);
        result = `${toUp}${toLow}`;
    }
    return result;  
}





//* Begin of tests
const assert = require('assert');

assert.strictEqual(jadenCase('str'), 'Str');
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd');
// End of tests */
