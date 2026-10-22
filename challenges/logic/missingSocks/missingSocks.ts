export function sockPairs(pairs: number, cycles: number): number {
  let socks = pairs * 2;

  for (let i = 1; i <= cycles; i++) {
    if (i % 2 === 0) socks--;
    if (i % 3 === 0) socks++;
    if (i % 5 === 0) socks--;
    if (i % 10 === 0) socks += 2;

    // Cannot be negative so we restore it to 0 in that case.
    socks = Math.max(socks, 0);
  }
  // We turn it to pairs again removing any single sock.
  return Math.floor(socks / 2);
}
