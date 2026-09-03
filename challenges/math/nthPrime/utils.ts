export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // Si agarro los numeros antes de la raiz tambien puedo saber si es primo
  // Aumento de a 2 porque ya se que después del 2 no hay mas numeros pares primos
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
