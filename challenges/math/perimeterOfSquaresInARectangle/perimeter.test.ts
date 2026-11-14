import {expect, test} from '@jest/globals';
import { perimeter } from './perimeter';

test('Given a number in the sequence 5 should return a perimeter of 80', ()=> {
    expect(perimeter(5)).toEqual(80)
})

test('Given a number in the sequence 30 should return a perimeter of 14098308', ()=> {
    expect(perimeter(30)).toEqual(14098308)
})