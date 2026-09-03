import { thermostatAdjuster2 } from './thermostatAdjuster2';
import { test, expect } from '@jest/globals';

test('Given a current temperature of 32 in Farenheit and a target of 0°Celcius should return Hold', () => {
  expect(thermostatAdjuster2(32, 0)).toBe('Hold');
});

test('Given a current temperature of 70 in Farenheit and a target of 25°Celcius should return "Heat: 7.0 degrees Fahrenheit"', () => {
  expect(thermostatAdjuster2(70, 25)).toBe('Heat: 7.0 degrees Fahrenheit');
});

test('Given a current temperature of 72 in Farenheit and a target of 18°Celcius should return "Cool: 7.6 degrees Fahrenheit"', () => {
  expect(thermostatAdjuster2(72, 18)).toBe('Cool: 7.6 degrees Fahrenheit');
});
