// Board validator

export const hasDuplicates = (arr: number[]): boolean => {
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

const isValidBoard = (board: number[][]): boolean => {
  return isValidRowsColumns(board) && isValidSubgrid(board)
}

const findEmptyCell = (board: number[][]): [number, number] | null => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col]
      }
    }
  }
  return null
}

// Function to check if a move is valid in terms of Sudoku rules
const isMoveValid = (
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

//  Function to generate a random Sudoku board

// Function to shuffle an array using Fisher-Yates algorithm
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
  difficulty: 'easy' | 'medium' | 'hard',
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
