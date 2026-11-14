import {expect, test} from '@jest/globals';
import { uniqueInOrder } from './uniqueInOrder';

test('Given an iterable string: "AAAABBBCCDAABBB" to return: ["A","B","C","D","A","B"]', () => {
    expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A","B","C","D","A","B"]);
})

test('Given an iterable string: "ABBCcAD" to return: ["A","B","C","c","A","D"]', () => {
    expect(uniqueInOrder("ABBCcAD")).toEqual(["A","B","C","c","A","D"]);
})

test('Given an iterable array of numbers: [1,2,2,3,3] to return: [1,2,3]', () => {
    expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
})