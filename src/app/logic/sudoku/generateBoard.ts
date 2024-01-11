import { Difficulty } from '@/app/components/ui/Options'

const shuffleArray = (array: number[]): number[] => {
  const shuffledArray = array.slice()
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

// Function to generate a completed Sudoku board

export const generateCompletedBoard = (): number[][] => {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const board: any = []

  // Shuffle rows
  for (let i = 0; i < 9; i++) {
    board.push(shuffleArray(base))
  }

  // Transpose to shuffle columns
  const transposedBoard = board[0].map((_: any, col: any) =>
    board.map((row: any) => row[col]),
  )

  // Shuffle 3x3 subgrids
  const subgrids: any = []
  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      const subgrid = []
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          subgrid.push(transposedBoard[startRow + row][startCol + col])
        }
      }
      subgrids.push(shuffleArray(subgrid))
    }
  }

  // Transpose back to the original orientation
  const shuffledBoard = subgrids[0].map((_: any, col: any) =>
    subgrids.map((row: any) => row[col]),
  )

  return shuffledBoard
}

// Function to remove cells based on difficulty
export const removeCellsBasedOnDifficulty = (
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
