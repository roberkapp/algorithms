import { expect, test } from '@jest/globals';
import { getItineraryCount } from './getItineraryCount';

test('Given an array of 2 stops: ["library", "park"] should return 2 itineraries', () => {
  expect(getItineraryCount(['library', 'park'])).toBe(2);
});

test('Given an array of 3 stops: ["library", "park", "arcade"] should return 18 itineraries', () => {
  expect(getItineraryCount(['library', 'park', 'arcade'])).toBe(18);
});

test('Given an array of 5 stops: ["library", "park", "arcade", "store", "cafe"] should return 840 itineraries', () => {
  expect(getItineraryCount(['library', 'park', 'arcade', 'store', 'cafe'])).toBe(840);
});
