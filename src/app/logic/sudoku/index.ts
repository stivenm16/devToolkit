import { isMoveValid } from './sudokuSolver'
import { isValidBoard } from './toValidateBoard'

//  Function to generate a random Sudoku board

// Function to shuffle an array using Fisher-Yates algorithm
import { removeCellsBasedOnDifficulty } from './generateBoard'
import { sumColumn, sumRow } from './sudokuSolver'
import { solveSudokuStepByStep } from './sudokuSolver'
import { generateCompletedBoard } from './generateBoard'

export {
  isMoveValid,
  solveSudokuStepByStep,
  isValidBoard,
  generateCompletedBoard,
  removeCellsBasedOnDifficulty,
  sumColumn,
  sumRow,
}
