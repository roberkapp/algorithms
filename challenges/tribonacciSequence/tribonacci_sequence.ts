export function tribonacciSequence(
  startSequence: number[],
  length: number
): number[] {
  const sequence = [...startSequence];
  if (sequence.length > length) return sequence.slice(0, length);

  for (let i = 3; i < length; i++) {
    const first = sequence[i - 3];
    const second = sequence[i - 2];
    const last = sequence[i - 1];

    sequence.push(first + second + last);
  }
  return sequence;
}
