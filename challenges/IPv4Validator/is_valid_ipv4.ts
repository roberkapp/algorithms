export function isValidIPv4(ipv4: string): boolean {
  const chunks = ipv4.split('.').filter((chunk) => !!chunk);

  return (
    chunks.length === 4 &&
    chunks.every((chunk) => {
      const isOnRange = +chunk >= 0 && +chunk <= 255;
      const doesNotStartWithZero = !(chunk.startsWith('0') && chunk.length > 1);
      const isInt = Number.isInteger(+chunk);
      return isOnRange && doesNotStartWithZero && isInt;
    })
  );
}
