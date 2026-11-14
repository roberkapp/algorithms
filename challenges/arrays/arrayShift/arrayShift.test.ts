import {expect, test} from '@jest/globals';
import { arrayShift } from './arrayShift'

test('Given an array: [1,2,3] and a shift of: 1, should return [2,3,1]', () => {
    expect(arrayShift([1,2,3],1)).toEqual([2,3,1]);
})

test('Given an array: [1,2,3] and a shift of: -1, should return [3,1,2]', () => {
    expect(arrayShift([1,2,3],-1)).toEqual([3,1,2]);
})

test('Given an array: ["alpha","bravo","charlie"] and a shift of: -11, should return ["bravo","charlie","alpha"]', () => {
    expect(arrayShift(["alpha","bravo","charlie"],-11)).toEqual(["bravo","charlie","alpha"]);
})

test('Given an array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] and a shift of: 15, should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]', () => {
    expect(arrayShift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],15)).toEqual([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
})