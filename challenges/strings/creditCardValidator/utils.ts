export const doubleDigit = (digit: string): number => {
  const double = Number(digit) * 2;
  const limit = 9;
  return double > limit ? double - limit : double;
};
