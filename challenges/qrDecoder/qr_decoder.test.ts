import { decodeQr } from './qr_decoder';
import { test, expect } from '@jest/globals';

test('Given a matrix of integers: ["110011", "110011", "000000", "000000", "110000", "110001"] should return a qrCode equal to 000000000000000000000001', () => {
  expect(
    decodeQr(['110011', '110011', '000000', '000000', '110000', '110001'])
  ).toEqual('000000000000000000000001');
});
