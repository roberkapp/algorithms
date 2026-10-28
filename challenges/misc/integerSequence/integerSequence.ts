export function sequence(n: number): string {
  let response = '';
  for (let i = 1; i <= n; i++) {
    response += i;
  }
  return response;
}
