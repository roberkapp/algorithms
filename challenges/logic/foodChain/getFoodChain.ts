import type { Pair } from './modes';

export function getFoodChain(pairs: Pair[]): string[] {
  const chain = new Map<string, string>();
  const predators = new Set<string>();
  const preys = new Set<string>();

  // Creo un map para guardar la presa de cada depredador
  // Separo los depredadores de las presas
  for (const [predator, prey] of pairs) {
    chain.set(predator, prey);
    predators.add(predator);
    preys.add(prey);
  }

  // Busco la cima de la cadena alimenticia para tener punto de partida
  let apex = '';
  for (const predator of predators) {
    if (!preys.has(predator)) {
      apex = predator;
      break;
    }
  }

  // Con el punto de partida ordeno la cadena alimenticia
  const foodChain: string[] = [];
  let current: string | undefined = apex;

  while (current) {
    foodChain.push(current);
    current = chain.get(current);
  }

  return foodChain;
}
