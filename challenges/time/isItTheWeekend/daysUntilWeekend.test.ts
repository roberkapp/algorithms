import { expect, test} from '@jest/globals';
import { daysUntilWeekend } from './daysUntilWeekend';

test('Given a date: "2025-11-14" should return "1 day until the weekend."', () => {
    expect(daysUntilWeekend('2025-11-14')).toEqual('1 day until the weekend.');
})

test('Given a date: "2025-01-01" should return "3 days until the weekend."', () => {
    expect(daysUntilWeekend('2025-01-01')).toEqual('3 days until the weekend.');
})

test('Given a date: "2025-12-06" should return "Its the weekend!"', () => {
    expect(daysUntilWeekend('2025-12-06')).toEqual("It's the weekend!");
})