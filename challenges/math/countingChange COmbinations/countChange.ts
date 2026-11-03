export function countChange(amount: number, coins: number[]): number {
  //One position for every input, from 0 to amount;
  const ways = Array(amount + 1).fill(0);

  //There is always a way to get 0: not using coins.
  ways[0] = 1;

  //We process a coin at a time
  for (const coin of coins) {
    // Lets calculate the new combinations that we can create
    // Adding this coin to previous combinations.
    for (let current = coin; current <= amount; current++) {
      ways[current] += ways[current - coin];
    }
  }
  return ways[amount];
}
