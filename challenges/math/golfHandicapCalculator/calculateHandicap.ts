export function calculateHandicap(score: number[], pars: number[]): string {
  const differentials = score.reduce(
    (acc, score, i) => (acc += score - pars[i]),
    0
  );
  return (differentials / score.length).toFixed(1);
}
