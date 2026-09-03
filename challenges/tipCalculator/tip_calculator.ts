export function tipCalculator(mealPrice: string, customTip: string): string[] {
  const price = Number(mealPrice.replace('$', ''));
  const tip = Number(customTip.replace('%', '')) / 100;

  return [0.15, 0.2, tip].map(
    (percentage) => '$' + (price * percentage).toFixed(2)
  );
}
