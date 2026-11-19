import {expect, test} from '@jest/globals';
import { headingConverter } from './markdownHeadingConverter';

test('Given a heading text: "# My level 1 heading" should return "<h1>My level 1 heading</h1>"' , () => {
    expect(headingConverter('# My level 1 heading')).toEqual('<h1>My level 1 heading</h1>');
});

test('Given a heading text: "My heading" should return "Invalid format"' , () => {
    expect(headingConverter('My heading')).toEqual('Invalid format');
});

test('Given a heading text: "##### My level 5 heading" should return "<h5>My level 5 heading</h5>"' , () => {
    expect(headingConverter('##### My level 5 heading')).toEqual('<h5>My level 5 heading</h5>');
});

test('Given a heading text: "####### My level 7 heading" should return "Invalid format"' , () => {
    expect(headingConverter('####### My level 7 heading')).toEqual('Invalid format');
})