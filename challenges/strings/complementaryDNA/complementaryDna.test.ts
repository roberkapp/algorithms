import { expect, test } from '@jest/globals';
import { complementaryDNA } from './complementaryDna';

test('Given a string: "ACGT" should return "TGCA"', () => {
  expect(complementaryDNA('ACGT')).toEqual('TGCA');
});

test('Given a string: "GGCTTACGATCGAAG" should return "CCGAATGCTAGCTTC"', () => {
  expect(complementaryDNA('GGCTTACGATCGAAG')).toEqual('CCGAATGCTAGCTTC');
});
