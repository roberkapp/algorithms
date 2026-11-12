import { LETTERS } from './const';

export function emailSignatureGenerator(name: string, title: string, company: string): string {
  const firstLetter = name[0].toUpperCase();
  const code = firstLetter.charCodeAt(0);
  const prefix = code <= LETTERS['A-I'] ? '>>' : code <= LETTERS['J-R'] ? '--' : '::';

  return `${prefix}${name}, ${title} at ${company}`;
}
