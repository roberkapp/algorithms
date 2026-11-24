import {expect, test} from '@jest/globals';
import { countCharacters } from './countCharacters';

test('Given the sentence: "hello world" should return: ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"]', () => {
    expect(countCharacters('hello world')).toEqual(["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"])
});

test('Given the sentence: "// TODO: Complete this challenge ASAP!" should return: ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"]', () => {
    expect(countCharacters('// TODO: Complete this challenge ASAP!')).toEqual(["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"])
});
