export function generateSnowflake(crystals: string): string {
  const lines = crystals.split(/\n/);

  return lines
    .map((line) => {
      const copy = [...line];
      const inverted = copy.reverse().join('');
      return line + inverted;
    })
    .join('\n');
}
