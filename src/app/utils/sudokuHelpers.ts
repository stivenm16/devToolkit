export const sumRow = (row: number[]) => {
  return row.reduce((sum, value) => sum + value, 0)
}

export const sumColumn = (board: number[][], columnIndex: number) => {
  return board.reduce((sum, row) => sum + row[columnIndex], 0)
}
