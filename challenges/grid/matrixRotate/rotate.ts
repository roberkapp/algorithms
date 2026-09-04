export function rotate(matrix: number[][]): number[][] {
  const rotated: number[][] = [...matrix].map((_) => []);
  const rows = matrix.length;
  const cols = matrix[0].length;
  // new row becomes the original column
  // new column can be obtained by substrabting the rotation to the amount of rows
  // and to that product substract the current row
  // example: a square of 3x3 (rows = 3 rotation: 1 row, current row lets say: 0)
  // first row = [1, 2 , 3] => 1 is on [0,0] => becomes the first number on the last column [0,2]
  // original row = new col => 0, new col => rows: 3 - 1 - current row: 0 => 2 => we get [0,2]
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rotated[col][rows - 1 - row] = matrix[row][col];
    }
  }
  return rotated;
}
