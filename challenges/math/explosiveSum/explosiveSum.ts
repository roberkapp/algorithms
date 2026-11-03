export function explosiveSum(num: number): number {
  // We create an array of posible combinations per value.
  // Example if num = 5 => [1,0,0,0,0,0]
  const ways: number[] = Array(num + 1).fill(0);
  // There is always a way to reach 0 which is not sum anything.
  ways[0] = 1;

  // Now we iterate from 1 to 5
  for (let n = 1; n <= num; n++) {
    // We check for every number if we can reach it
    for (let current = n; current <= num; current++) {
      // If there is a way to get what i need to reach num, then we add those ways
      // It works by checking if we have the complementary number to get num
      // If we need to reach 4 and we are at iteration 2, we need another 2
      // So by checking the ways of getting 2 if there is any we just know that we can reach 4.
      ways[current] += ways[current - n];
    }
  }
  // Finally we return the ways to get num.
  return ways[num];
}
