import { wiseSpeak } from './wise_speak';
import { test, expect } from '@jest/globals';

test('Given the sentence: "You must speak wisely." should return "Speak wisely, you must."', () => {
  expect(wiseSpeak('You must speak wisely.')).toBe('Speak wisely, you must.');
});

test('Given the sentence: "Do you think you will complete this?" should return "Complete this, do you think you will?"', () => {
  expect(wiseSpeak('Do you think you will complete this?')).toBe(
    'Complete this, do you think you will?'
  );
});
