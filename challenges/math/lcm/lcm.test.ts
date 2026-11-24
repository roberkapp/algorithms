import {expect, test} from '@jest/globals';
import { lcm } from './lcm';

test('Given the numbers 4 and 6 the least common multiple should be 12.', () => {
    expect(lcm(4,6)).toBe(12);
});

test('Given the numbers 10 and 100 the least common multiple should be 100.', () => {
    expect(lcm(10,100)).toBe(100);
});

test('Given the numbers 45 and 70 the least common multiple should be 630.', () => {
    expect(lcm(45,70)).toBe(630);
});