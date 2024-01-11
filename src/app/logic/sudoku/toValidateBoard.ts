// Board validator
const hasDuplicates = (arr: number[]): boolean => {
  const filteredArray = arr.filter((num) => num !== 0) // Filter out empty cells
  const set = new Set(filteredArray)
  return set.size !== filteredArray.length
}

const getSubgrid = (
  board: number[][],
  startRow: number,
  startCol: number,
): number[] => {
  const subgrid = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      subgrid.push(board[startRow + row][startCol + col])
    }
  }
  return subgrid
}

const isValidSubgrid = (board: number[][]): boolean => {
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const subgrid = getSubgrid(board, row, col)
      if (hasDuplicates(subgrid)) {
        console.log(subgrid)
        return false
      }
    }
  }
  return true
}
const isValidRowsColumns = (board: number[][]): boolean => {
  for (let i = 0; i < 9; i++) {
    const row = board[i]
    const column = board.map((row) => row[i])
    if (hasDuplicates(row) || hasDuplicates(column)) {
      console.log(row, 'row')
      console.log(column, 'column')

      return false
    }
  }
  return true
}

export const isValidBoard = (board: number[][]): boolean => {
  return isValidRowsColumns(board) && isValidSubgrid(board)
}

export const findEmptyCell = (board: number[][]): [number, number] | null => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col]
      }
    }
  }
  return null
}
