import { expect, test } from '@jest/globals';
import { decodeQr } from './qrDecoder';

test('Given a matrix of integers: ["110011", "110011", "000000", "000000", "110000", "110001"] should return a qrCode equal to 000000000000000000000001', () => {
  expect(decodeQr(['110011', '110011', '000000', '000000', '110000', '110001'])).toEqual(
    '000000000000000000000001',
  );
});
