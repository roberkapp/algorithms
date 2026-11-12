import { expect, test } from '@jest/globals';
import { trilingualDemocracy } from './trilingualDemocracy';

test('Given 3 people that speak "FFF" should return "F"', () => {
  expect(trilingualDemocracy('FFF')).toEqual('F');
});

test('Given 3 people that speak "IIK" should return "K"', () => {
  expect(trilingualDemocracy('IIK')).toEqual('K');
});

test('Given 3 people that speak "DFK" should return "I"', () => {
  expect(trilingualDemocracy('DFK')).toEqual('I');
});
