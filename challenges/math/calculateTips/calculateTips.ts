export function calculateTips(mealPrice: string, customTip: string): string[] {
  const parsedPrice = Number(mealPrice.replace('$', ''));
  const parsedTip = Number(customTip.replace('%', '')) / 100;
  const tips = [0.15, 0.2, parsedTip];

  return tips.map((tip) => `$${(parsedPrice * tip).toFixed(2)}`);
}
