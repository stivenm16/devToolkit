import { findEmptyCell, isValidBoard } from './toValidateBoard'

// Function to check if a move is valid in terms of Sudoku rules
export const isMoveValid = (
  board: number[][],
  row: number,
  col: number,
  num: number,
): boolean => {
  // Check if the number is not already present in the row and column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false
    }
  }

  // Check if the number is not already present in the 3x3 subgrid
  const subgridStartRow = Math.floor(row / 3) * 3
  const subgridStartCol = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[subgridStartRow + i][subgridStartCol + j] === num) {
        return false
      }
    }
  }

  return true // The move is valid
}

//Sudoku solver

const solveSudoku = (board: number[][]): boolean => {
  const emptyCell = findEmptyCell(board)

  if (!emptyCell) {
    // If no empty cell is found, the Sudoku is solved
    return true
  }

  const [row, col] = emptyCell

  for (let num = 1; num <= 9; num++) {
    if (isMoveValid(board, row, col, num)) {
      board[row][col] = num

      if (solveSudoku(board)) {
        return true // Move is valid, continue to solve rest of the board
      }

      // If the current placement doesn't lead to a solution, backtrack
      board[row][col] = 0
    }
  }

  return false // No valid number for this cell, trigger backtracking
}

export const sumRow = (row: number[]) => {
  return row.reduce((sum, value) => sum + value, 0)
}

export const sumColumn = (board: number[][], columnIndex: number) => {
  return board.reduce((sum, row) => sum + row[columnIndex], 0)
}

export const solveSudokuStepByStepHelper = (
  currentBoard: number[][],
  row: number,
  col: number,
  setBoard: React.Dispatch<React.SetStateAction<number[][]>>,
): [boolean, number] => {
  if (row === 9) {
    // Reached the end of the board
    return [true, 0]
  }

  if (col === 9) {
    // Move to the next row
    return solveSudokuStepByStepHelper(currentBoard, row + 1, 0, setBoard)
  }

  const cellValue = currentBoard[row][col]

  if (cellValue !== 0) {
    return solveSudokuStepByStepHelper(currentBoard, row, col + 1, setBoard)
  }

  for (let num = 1; num <= 9; num++) {
    if (isMoveValid(currentBoard, row, col, num)) {
      currentBoard[row][col] = num

      // Visualize the solving process by setting the board step by step
      setBoard(JSON.parse(JSON.stringify(currentBoard)))

      const [solved, nextCol] = solveSudokuStepByStepHelper(
        currentBoard,
        row,
        col + 1,
        setBoard,
      )

      if (solved && isValidBoard(currentBoard)) {
        return [true, 0]
      }

      currentBoard[row][col] = 0 // Backtrack
    }
  }

  return [false, col]
}
export const solveSudokuStepByStep = (
  board: number[][],
  setBoard: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  const clonedBoard = JSON.parse(JSON.stringify(board)) // Create a copy of the board
  const [solved, step] = solveSudokuStepByStepHelper(
    clonedBoard,
    0,
    0,
    setBoard,
  )
  return { solved, clonedBoard }
}
