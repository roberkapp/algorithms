export function fibonacciSequence(
  startSequence: number[],
  length: number
): number[] {
  const response: number[] = [];

  for (let i = 0; i < length; i++) {
    if (i <= 1) {
      response.push(startSequence[i]);
    } else {
      const prev = response[i - 2];
      const last = response[i - 1];
      response.push(prev + last);
    }
  }

  return response;
}
