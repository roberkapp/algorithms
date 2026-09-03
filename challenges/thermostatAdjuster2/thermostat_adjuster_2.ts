export function thermostatAdjuster2(currentF: number, targetC: number): string {
  const expectedInF = targetC * 1.8 + 32;
  const diff = Math.abs(currentF - expectedInF).toFixed(1);

  if (currentF < expectedInF) return `Heat: ${diff} degrees Fahrenheit`;
  if (currentF > expectedInF) return `Cool: ${diff} degrees Fahrenheit`;
  return 'Hold';
}
