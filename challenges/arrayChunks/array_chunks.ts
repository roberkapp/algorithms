export function chunkArrays<T>(arr: Array<T>, chunk: number): T[][] {
  const response = [];
  for (let i = 0; i < arr.length; i += chunk) {
    response.push(arr.slice(i, i + chunk));
  }
  return response;
}
