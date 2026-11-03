export function sumStrings(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  const response = [];

  // @CodeScene(disable:"Complex Conditional")
  while (i >= 0 || j >= 0 || carry) {
    const digitA = Number(a[i] ?? 0);
    const digitB = Number(b[j] ?? 0);
    const sum = digitA + digitB + carry;

    response.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return response.reverse().join('').replace(/⁰+/, '');
}
