export enum DNA_LETTERS {
  T = 'T',
  A = 'A',
  C = 'C',
  G = 'G',
}

export type Letter = keyof typeof DNA_LETTERS;
