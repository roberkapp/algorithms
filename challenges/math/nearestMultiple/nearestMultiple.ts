export function nearestMultiple(num: number, multiple: number): number {
  // we can obtain the nearest by dividing num / multiple and rounding the product.
  const nearest = Math.round(num / multiple);
  return nearest * multiple;
}
