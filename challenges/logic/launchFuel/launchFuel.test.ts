import { expect, test } from '@jest/globals';
import { launchFuel } from './launchFuel';

test('Given a payload of 50Kg the fuel needed should be "12.4"', () => {
  expect(launchFuel(50)).toEqual('12.4');
});

test('Given a payload of 500Kg the fuel needed should be "124.8"', () => {
  expect(launchFuel(500)).toEqual('124.8');
});

test('Given a payload of 243Kg the fuel needed should be "60.7"', () => {
  expect(launchFuel(243)).toEqual('60.7');
});

test('Given a payload of 6214Kg the fuel needed should be "1553.4"', () => {
  expect(launchFuel(6214)).toEqual('1553.4');
});
