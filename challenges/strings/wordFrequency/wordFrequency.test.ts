import { expect, test } from '@jest/globals';
import { getWords } from './wordFrequency';

test('Given a paragraph: "Coding in Python is fun because coding Python allows for coding in Python easily while coding"', () => {
  expect(
    getWords(
      'Coding in Python is fun because coding Python allows for coding in Python easily while coding',
    ),
  ).toEqual(['coding', 'python', 'in']);
});
