export function infected(days: number): number {
  let infectedComputers = 1;

  for (let i = 1; i <= days; i++) {
    infectedComputers *= 2;
    if (i % 3 === 0) {
      const patch = Math.ceil(infectedComputers * 0.2);
      infectedComputers -= patch;
    }
  }
  return infectedComputers;
}
