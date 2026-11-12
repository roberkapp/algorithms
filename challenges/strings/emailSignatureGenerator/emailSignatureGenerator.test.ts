import { expect, test } from '@jest/globals';
import { emailSignatureGenerator } from './emailSignatureGenerator';

test('Given a name: "Quinn Waverly",a title: "Founder and CEO",and a company: "TechCo" should return: "--Quinn Waverly, Founder and CEO at TechCo"', () => {
  expect(emailSignatureGenerator('Quinn Waverly', 'Founder and CEO', 'TechCo')).toEqual(
    '--Quinn Waverly, Founder and CEO at TechCo',
  );
});

test('Given a name: "Alice Reed",a title: "Engineer",and a company: "TechCo" should return: ">>Alice Reed, Engineer at TechCo"', () => {
  expect(emailSignatureGenerator('Alice Reed', 'Engineer', 'TechCo')).toEqual(
    '>>Alice Reed, Engineer at TechCo',
  );
});

test('Given a name: "windstorm",a title: "Cloud Architect",and a company: "Atmospheronics" should return: "::windstorm, Cloud Architect at Atmospheronics"', () => {
  expect(emailSignatureGenerator('windstorm', 'Cloud Architect', 'Atmospheronics')).toEqual(
    '::windstorm, Cloud Architect at Atmospheronics',
  );
});
