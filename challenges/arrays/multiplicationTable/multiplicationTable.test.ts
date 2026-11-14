import {expect, test} from '@jest/globals';
import { multiplicationTable }from './multiplicationTable';

test('Given a matrix size of: 2 should return: [[1,2],[2,4]]', () => {
    expect(multiplicationTable(2)).toEqual([[1,2],[2,4]]);
})

test('Given a matrix size of: 3 should return: [[1,2,3],[2,4,6],[3,6,9]]', () => {
    expect(multiplicationTable(3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
})
