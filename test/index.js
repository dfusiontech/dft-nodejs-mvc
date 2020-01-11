
// Using STRICT mode for ES6 features
"use strict";

/**
 * Default test file
 *
 * @author     Eugene A. Kalosha <ekalosha@dfusiontech.com>
 * @copyright  dFusion Tech, Inc
 * @licence    GNU GPL v3
 * @package    test
 */

import {sum, subtract} from '../lib/testes6.js';  //using the ES6 modules

test ('add 3 + 4 should equals 7', () => {
    expect(sum(3,4)).toBe(7)
});

test ('subtract 3 - 4 should equals -1', () => {
    expect(subtract(3,4)).toBe(-1)
});

test('NodeJS MVC unit tests', () => {
    expect(1).toBe(1);
});
