import { getRentalCost } from './get_rental_cost';
import { expect, test } from '@jest/globals';

test('Given a rental date of: 2026-06-18T18:30:00Z a date of return of: "2026-06-19T10:30:00Z" a tier 1 we expect a price of $4.99', () => {
  expect(
    getRentalCost('2026-06-18T18:30:00Z', '2026-06-19T10:30:00Z', 1)
  ).toEqual('$4.99');
});

test('Given a rental date of: 2026-06-18T10:15:00Z a date of return of: 2026-06-18T19:45:00Z a tier 3 we expect a price of $3.99', () => {
  expect(
    getRentalCost('2026-06-18T10:15:00Z', '2026-06-18T19:45:00Z', 3)
  ).toEqual('$3.99');
});

test('Given a rental date of: 2026-06-18T08:00:00Z a date of return of: 2027-06-18T14:00:00Z a tier 7 we expect a price of $358.40', () => {
  expect(
    getRentalCost('2026-06-18T08:00:00Z', '2027-06-18T14:00:00Z', 7)
  ).toEqual('$358.40');
});
