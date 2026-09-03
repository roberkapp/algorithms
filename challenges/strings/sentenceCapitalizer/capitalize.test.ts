import { test, expect } from '@jest/globals';
import { capitalize } from './capitalize';

test('Given the sentence "this is a simple sentence." should return "This is a simple sentence."', () => {
  expect(capitalize('this is a simple sentence.')).toBe(
    'This is a simple sentence.'
  );
});

test('Given the sentence "hello world. how are you?" should return "Hello world. How are you?"', () => {
  expect(capitalize('hello world. how are you?')).toBe(
    'Hello world. How are you?'
  );
});

test('Given the sentence "crazy!!!strange???unconventional...sentences." should return "Crazy!!!Strange???Unconventional...Sentences."', () => {
  expect(capitalize('crazy!!!strange???unconventional...sentences.')).toBe(
    'Crazy!!!Strange???Unconventional...Sentences.'
  );
});
