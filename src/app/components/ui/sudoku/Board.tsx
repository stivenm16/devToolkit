'use client'

import isValidBoard, { isMoveValid } from '@/app/logic/sudoku'
import React, { useEffect } from 'react'
import { Cell } from '.'

interface Props {
  // size: number
}

const Board: React.FC<Props> = () => {
  const [board, setBoard] = React.useState<number[][]>([
    [0, 3, 5, 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, 5, 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 8],
    [5, 0, 9, 1, 3, 0, 7, 8, 2],
    [1, 2, 3, 6, 7, 8, 5, 4, 9],
    [7, 4, 0, 5, 2, 9, 1, 6, 3],
    [6, 5, 2, 7, 8, 1, 0, 9, 4],
    [9, 8, 1, 3, 4, 5, 2, 7, 6],
    [3, 7, 4, 9, 6, 2, 8, 1, 0],
  ])

  //give me a data mock of a sudoku matriz solved

  const handleCellValue = (
    value: number,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const updatedBoard = [...board]

    updatedBoard[rowIndex][columnIndex] = value
    setBoard(updatedBoard)
  }

  const sumRow = (row: number[]) => {
    return row.reduce((sum, value) => sum + value, 0)
  }

  const sumColumn = (board: number[][], columnIndex: number) => {
    return board.reduce((sum, row) => sum + row[columnIndex], 0)
  }

  useEffect(() => {
    // const isValidB = isValidBoard(board)

    solveSudokuStepByStep()
  }, [])

  //////

  const solveSudokuStepByStep = () => {
    const clonedBoard = JSON.parse(JSON.stringify(board)) // Create a copy of the board
    const [solved, step] = solveSudokuStepByStepHelper(clonedBoard, 0, 0)

    if (solved) {
      setBoard(clonedBoard)
      console.log('Sudoku solved successfully!')
    } else {
      console.log('The Sudoku cannot be solved. Invalid board or no solution.')
    }
  }

  const solveSudokuStepByStepHelper = (
    currentBoard: number[][],
    row: number,
    col: number,
  ): [boolean, number] => {
    if (row === 9) {
      // Reached the end of the board
      return [true, 0]
    }

    if (col === 9) {
      // Move to the next row
      return solveSudokuStepByStepHelper(currentBoard, row + 1, 0)
    }

    const cellValue = currentBoard[row][col]

    if (cellValue !== 0) {
      // Cell is already filled, move to the next column
      return solveSudokuStepByStepHelper(currentBoard, row, col + 1)
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
        )

        if (solved && isValidBoard(currentBoard)) {
          return [true, 0]
        }

        currentBoard[row][col] = 0 // Backtrack
      }
    }

    return [false, col]
  }

  return (
    <div className="grid-cols-9 gap-0">
      {board.map((row, rowIndex) => (
        <div className="flex md:grid-rows-9" key={rowIndex}>
          {row.map((cellValue: number, columnIndex: number) => (
            <Cell
              key={columnIndex}
              value={cellValue}
              onChange={handleCellValue}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
            />
          ))}
          <span className="mt-3">{sumRow(row)}</span>
        </div>
      ))}
      <div className="flex w-auto justify-around">
        {board[0].map((_, columnIndex) => (
          <span key={columnIndex} className="mr-4">
            {sumColumn(board, columnIndex)}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Board
