import {expect, test} from '@jest/globals';
import { gcd } from './gcd';

test('Given a number x: 4 and a number y: 6 should return 2' , () => {
    expect(gcd(4,6)).toBe(2);
})

test('Given a number x: 20 and a number y: 15 should return 5' , () => {
    expect(gcd(20,15)).toBe(5);
})

test('Given a number x: 3456 and a number y: 4320 should return 864' , () => {
    expect(gcd(3456,4320)).toBe(864);
})