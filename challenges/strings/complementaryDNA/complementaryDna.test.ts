import { complementaryDNA } from './complementaryDna';
import { test, expect } from '@jest/globals';

test('Given a string: "ACGT" should return "TGCA"', () => {
  expect(complementaryDNA('ACGT')).toEqual('TGCA');
});

test('Given a string: "GGCTTACGATCGAAG" should return "CCGAATGCTAGCTTC"', () => {
  expect(complementaryDNA('GGCTTACGATCGAAG')).toEqual('CCGAATGCTAGCTTC');
});
