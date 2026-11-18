import {expect, test} from '@jest/globals';
import { oneHundred } from './oneHundred';

test('Given the chars: "One hundred " should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "', () => {
    expect(oneHundred('One hundred ')).toEqual('One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ')
})

test('Given the chars: "freeCodeCamp " should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"', () => {
    expect(oneHundred('freeCodeCamp ')).toEqual('freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC')
})

test('Given the chars: "!" should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"', () => {
    expect(oneHundred('!')).toEqual('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})