import {expect, test} from '@jest/globals';
import { messageValidator } from './messageValidator';

test('Given a message: "hello world" and a validator: "hw" should return true', () => {
    expect(messageValidator('hello world', 'hw')).toBeTruthy();
});

test('Given a message: "Coding challenge are boring." and a validator: "cca" should return false', () => {
    expect(messageValidator('Coding challenge are boring.', 'cca')).toBeFalsy();
});

test('Given a message: "The quick brown fox jumps over the lazy dog." and a validator: "TQBFJOTLD" should return true', () => {
    expect(messageValidator('The quick brown fox jumps over the lazy dog.', 'TQBFJOTLD')).toBeTruthy();
});

test('Given a message: "The quick brown fox jumps over the lazy dog." and a validator: "TQBFJOTLDT" should return false', () => {
    expect(messageValidator('The quick brown fox jumps over the lazy dog.', 'TQBFJOTLDT')).toBeFalsy();
});