// Convertor functions to go from a4 to row/col for example

export function toRowCol(algebraic) {
  return null;
}

export function toAlgebraicNotation(row, col) {
  const newRow = 8 - row;
  const newCol = String.fromCharCode(97 + col);
  return newCol + newRow;
}
