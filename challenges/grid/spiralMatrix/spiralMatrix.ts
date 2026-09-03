export function spiralMatrix<T>(matrix: T[][]): T[] {
  const response: T[] = [];

  while (matrix.length > 0) {
    const firstRow = matrix.shift() ?? [];
    response.push(...firstRow);

    for (const row of matrix) {
      const lastItem = row.pop();
      if (lastItem !== undefined) response.push(lastItem);
    }

    const lastRow = matrix.pop();
    if (!lastRow) break;
    response.push(...lastRow.reverse());

    for (let i = matrix.length - 1; i >= 0; i--) {
      const row = matrix[i];
      const firstItem = row.shift();
      if (firstItem !== undefined) response.push(firstItem);
    }
  }
  return response;
}
