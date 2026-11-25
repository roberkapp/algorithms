import {expect, test} from '@jest/globals';
import { fizzBuzz } from './fizzBuzz';

test('Given integer: 4 should return [1,2,"Fizz",4]', () => {
    expect(fizzBuzz(4)).toEqual([1,2,'Fizz',4]);
});

test('Given integer: 20 should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]', () => {
    expect(fizzBuzz(20)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
});