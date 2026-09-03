export function getLaptopCost(laptops: number[], budget: number): number {
  // ordenamos los precios de mayor a menor
  const sortedLaptopsByPrice = [...laptops].sort((a, b) => b - a);
  // sacamos repetidos
  const normalizedLaptops = Array.from(new Set(sortedLaptopsByPrice));
  // agarramos el segundo para ver si entra en nuestro budget
  if (normalizedLaptops[1] <= budget) return normalizedLaptops[1];
  // si no entra buscamos la mejor que podemos comprar dentro del presupuesto
  const best = normalizedLaptops.find((laptop) => budget >= laptop);
  // devolvemos la mejor que podemos con nuestro budget y sino devolvemos 0
  return best ?? 0;
}
