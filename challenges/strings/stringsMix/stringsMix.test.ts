import { expect, test } from '@jest/globals';
import { stringsMix } from './stringsMix';

test('Given a first string: "Are they here" and a second string: "yes, they are here" should return "2:eeeee/2:yy/=:hh/=:rr"', () => {
  expect(stringsMix('Are they here', 'yes, they are here')).toEqual('2:eeeee/2:yy/=:hh/=:rr');
});

test('Given a first string: "looping is fun but dangerous" and a second string: "less dangerous than coding" should return: "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"', () => {
  expect(stringsMix('looping is fun but dangerous', 'less dangerous than coding')).toEqual(
    '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg',
  );
});
