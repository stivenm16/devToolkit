// Function to check if a move is valid in terms of Sudoku rules

import { isMoveValid } from "./toValidateBoard"

export const sumRow = (row: number[]) => {
  return row.reduce((sum, value) => sum + value, 0)
}

export const sumColumn = (board: number[][], columnIndex: number) => {
  return board.reduce((sum, row) => sum + row[columnIndex], 0)
}
export const solveSudoku = (board: number[][]): boolean => {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (const num of shuffleArray(base)) {
          if (isMoveValid(board, row, col, num)) {
            board[row][col] = num

            if (solveSudoku(board)) {
              return true
            }

            board[row][col] = 0
          }
        }
        return false
      }
    }
  }
  return true
}
export const shuffleArray = (array: number[]): number[] => {
  const shuffled = array.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
