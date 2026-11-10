import { expect, test } from '@jest/globals';
import { getExtension } from './extensionExtractor';

test('Given a filename: "document.txt" should return "txt"', () => {
  expect(getExtension('document.txt')).toEqual('txt');
});

test('Given a filename: "README" should return "none"', () => {
  expect(getExtension('README')).toEqual('none');
});

test('Given a filename: "image.PNG" should return "PNG"', () => {
  expect(getExtension('image.PNG')).toEqual('PNG');
});

test('Given a filename: ".gitignore" should return "gitignore"', () => {
  expect(getExtension('.gitignore')).toEqual('gitignore');
});

test('Given a filename: "final.draft." should return "none"', () => {
  expect(getExtension('final.draft.')).toEqual('none');
});
