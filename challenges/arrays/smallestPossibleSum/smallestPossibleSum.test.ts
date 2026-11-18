import {expect, test} from '@jest/globals';
import { smallestPossibleSum } from './smallestPossibleSum';

test('Given an array of numbers: [6,9,21] should return 9', () => {
    expect(smallestPossibleSum([6,9,21])).toBe(9);
})