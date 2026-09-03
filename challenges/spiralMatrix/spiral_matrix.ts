export function spiralMatrix<T>(matrix: T[][]): T[] {
  const response: T[] = [];

  while (matrix.length > 0) {
    const firstRow = matrix.shift();
    response.push(...firstRow!);

    for (const row of matrix) {
      const lastItem = row.pop();
      response.push(lastItem!);
    }

    let lastRow = matrix.pop();
    if (!lastRow) break;
    response.push(...lastRow.reverse());

    for (let i = matrix.length - 1; i >= 0; i--) {
      const row = matrix[i];
      const firstItem = row.shift();
      response.push(firstItem!);
    }
  }
  return response;
}
