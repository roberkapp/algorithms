import { OPERATORS } from './models';

export function evaluate(numbers: number[], operators: OPERATORS[]): number {
  let result = numbers[0];

  const operations = {
    [OPERATORS['+']]: (a: number, b: number) => a + b,
    [OPERATORS['-']]: (a: number, b: number) => a - b,
    [OPERATORS['*']]: (a: number, b: number) => a * b,
    [OPERATORS['/']]: (a: number, b: number) => a / b,
    [OPERATORS['%']]: (a: number, b: number) => a % b,
  };

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    // con el resto puedo resetear el indice ciclicamente.
    const operationIndex = (i - 1) % operators.length;
    result = operations[operators[operationIndex]](result, current);
  }

  return result;
}
