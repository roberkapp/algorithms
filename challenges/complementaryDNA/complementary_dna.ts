import { Letter } from './models';

const complements: Record<Letter, Letter> = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

export function complementaryDNA(strand: string): string {
  return [...strand].map((letter) => complements[letter as Letter]).join('');
}
