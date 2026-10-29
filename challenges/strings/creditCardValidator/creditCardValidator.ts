import { doubleDigit } from './utils';

export function creditCardValidator(cardNumber: string): boolean {
  const processedNumber = [...cardNumber];
  for (let i = cardNumber.length - 2; i >= 0; i -= 2) {
    processedNumber[i] += doubleDigit(cardNumber[i]);
  }

  const totalSum = processedNumber.reduce((acc, curr) => (acc += Number(curr)), 0);

  return totalSum % 10 === 0;
}
