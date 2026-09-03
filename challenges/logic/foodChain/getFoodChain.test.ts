import { expect, test } from '@jest/globals';
import { getFoodChain } from './getFoodChain';

test('Given a chain [["cat", "mouse"]] should return ["cat", "mouse"]', () => {
  expect(getFoodChain([['cat', 'mouse']])).toEqual(['cat', 'mouse']);
});

test('Given a chain [["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]] should return ["cat", "mouse"]', () => {
  expect(
    getFoodChain([
      ['seal', 'salmon'],
      ['herring', 'shrimp'],
      ['orca', 'seal'],
      ['shrimp', 'plankton'],
      ['salmon', 'herring'],
    ]),
  ).toEqual(['orca', 'seal', 'salmon', 'herring', 'shrimp', 'plankton']);
});
