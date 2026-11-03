import { getLetterValue } from './utils';

export const signatureValidation = (message: string, key: string, signature: number): boolean => {
  let totalValue = 0;

  for (const letter of [...message, ...key]) {
    if (!/[a-z]/i.test(letter)) continue;
    totalValue += getLetterValue(letter);
  }

  return totalValue === signature;
};
