'use client'

import isValidBoard from '@/app/logic/sudoku'
import React, { useEffect } from 'react'
import { Cell } from '.'

interface Props {
  // size: number
}

const Board: React.FC<Props> = () => {
  const [board, setBoard] = React.useState<number[][]>([
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0],
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
    const isValidB = isValidBoard(board)
    // const isValidB = hasDuplicates(board[0])
    // const isValidB = isValidBoard(board)
    // const isValidB = isValidSubgrid(board)

    console.log(isValidB)
  }, [board])
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
