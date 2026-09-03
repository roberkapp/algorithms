export function shiftMatrix<T>(matrix: T[][], shift: number): T[][] {
  const newMatrix: T[] = [];
  const flatMatrix = matrix.flat();
  // en caso de que el shift sea mas grande que el tamaño del array entero, debo formatearlo.
  const parsedShift = Math.abs(shift) > flatMatrix.length ? shift % flatMatrix.length : shift;

  // empiezo a llenar el nuevo array con las nuevas posiciones
  for (let i = 0; i < flatMatrix.length; i++) {
    const curr = flatMatrix[i];
    // fuera de js no habria necesidad de sumar el flat length.
    const nextIndex = (i + parsedShift + flatMatrix.length) % flatMatrix.length;
    newMatrix[nextIndex] = curr;
  }

  const response: T[][] = [];
  const rowSize = matrix[0].length;
  // reconstruyo usando el rowSize para un nuevo array
  for (let i = 0; i < flatMatrix.length; i += rowSize) {
    response.push(newMatrix.slice(i, i + rowSize));
  }
  return response;
}
