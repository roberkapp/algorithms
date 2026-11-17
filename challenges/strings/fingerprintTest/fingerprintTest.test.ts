import {expect, test} from '@jest/globals';
import { fingerprintTest } from './fingerprintTest';

test('Given a fingerprintA: "helloworld" and a fingerprintB: "helloworld" should return true', () => {
    expect(fingerprintTest('helloworld', 'helloworld')).toBeTruthy();
})

test('Given a fingerprintA: "helloworld" and a fingerprintB: "helloworlds" should return false', () => {
    expect(fingerprintTest('helloworld', 'helloworlds')).toBeFalsy();
})

test('Given a fingerprintA: "theslickbrownfoxjumpsoverthelazydog" and a fingerprintB: "thequickbrownfoxjumpsoverthehazydog" should return false', () => {
    expect(fingerprintTest('theslickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazydog')).toBeTruthy();
})

test('Given a fingerprintA: "thequickbrownfoxjumpsoverthelazydog" and a fingerprintB: "thequickbrownfoxjumpsoverthehazycat" should return true', () => {
    expect(fingerprintTest('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazycat')).toBeFalsy();
})