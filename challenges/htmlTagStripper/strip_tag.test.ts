import { stripTags } from './strip_tag';
import { test, expect } from '@jest/globals';

test('Given an html: "<a href="#">Click here</a>" should return "Click here"', () => {
  expect(stripTags('<a href="#">Click here</a>')).toBe('Click here');
});

test('Given an html: "<main id="main"><section class="section">section</section><section class="section">section</section></main>" should return "sectionsection"', () => {
  expect(
    stripTags(
      '<main id="main"><section class="section">section</section><section class="section">section</section></main>'
    )
  ).toBe('sectionsection');
});
