'use client'

import React from 'react'
import { Cell } from '.'

interface Props {
  // size: number
}

const Board: React.FC<Props> = () => {
  const [board, setBoard] = React.useState<number[][]>([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
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
          <span>{sumRow(row)}</span>
        </div>
      ))}
      <div className="flex w-auto justify-around">
        {board[0].map((_, columnIndex) => (
          <span key={columnIndex} className="">
            {sumColumn(board, columnIndex)}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Board
