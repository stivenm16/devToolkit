import { Difficulty } from '@/app/types/global'
import { isValidBoard } from '.'
import { solveSudoku } from './sudokuSolver'

// Function to generate a completed Sudoku board

const generateCompletedBoard = (): number[][] => {
  const board: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0))

  solveSudoku(board)

  return board
}

// Function to remove cells based on difficulty

const removeCellsBasedOnDifficulty = (
  board: number[][],
  difficulty: Difficulty,
): number[][] => {
  const totalCells = 81
  let cellsToRemove

  switch (difficulty) {
    case 'easy':
      cellsToRemove = Math.floor(totalCells * 0.5)
      break
    case 'medium':
      cellsToRemove = Math.floor(totalCells * 0.6)
      break
    case 'hard':
    default:
      cellsToRemove = Math.floor(totalCells * 0.7)
      break
  }

  let removedCells = 0
  const clonedBoard = JSON.parse(JSON.stringify(board))

  while (removedCells < cellsToRemove) {
    const randomRow = Math.floor(Math.random() * 9)
    const randomCol = Math.floor(Math.random() * 9)

    if (clonedBoard[randomRow][randomCol] !== 0) {
      clonedBoard[randomRow][randomCol] = 0
      removedCells++
    }
  }

  return clonedBoard
}
export const playableBoard = (difficulty: Difficulty = 'medium') => {
  const completedBoard = generateCompletedBoard()

  if (!isValidBoard(completedBoard)) {
    console.log('Board is not valid')
  }

  const puzzleBoard = removeCellsBasedOnDifficulty(completedBoard, difficulty)

  return { puzzleBoard, completedBoard }
}
