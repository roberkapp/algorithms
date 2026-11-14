import {expect, test} from '@jest/globals';
import { squareIntoSquares } from './squareIntoSquares';


test('Given a num: 11 should return [1,2,4,10]', () => {
    expect(squareIntoSquares(11)).toEqual([1,2,4,10]);
});

test('Given a num: 50 should return [1,3,5,8,49]', () => {
    expect(squareIntoSquares(50)).toEqual([1,3,5,8,49]);
});

test('Given a num: 44 should return [2,3,5,7,43]', () => {
    expect(squareIntoSquares(44)).toEqual([2,3,5,7,43]);
})