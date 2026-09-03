import { contrastRating3 } from './contrastRating3';
import { expect, test } from '@jest/globals';

test('Given a rgb1 of: [255,255,255], a rgb2 of: [0,0,0] and a isLargeText false this shoul return AAA', () => {
  expect(contrastRating3([255, 255, 255], [0, 0, 0], false)).toEqual('AAA');
});

test('Given a rgb1 of: [215, 188, 188], a rgb2 of: [55, 55, 55] and a isLargeText false this shoul return AA', () => {
  expect(contrastRating3([215, 188, 188], [55, 55, 55], false)).toEqual('AA');
});

test('Given a rgb1 of: [125, 210, 195], a rgb2 of: [105, 130, 90] and a isLargeText true this shoul return Fail', () => {
  expect(contrastRating3([125, 210, 195], [105, 130, 90], true)).toEqual(
    'Fail'
  );
});
