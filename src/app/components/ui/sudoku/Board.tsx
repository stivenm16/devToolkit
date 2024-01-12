'use client'

import { playableBoard, sumColumn, sumRow } from '@/app/logic/sudoku'
import { FC, useEffect, useState } from 'react'
import { Cell } from '.'
import { Difficulty } from '../Options'

interface Props {
  difficulty: Difficulty
}

const Board: FC<Props> = ({ difficulty }) => {
  const emptyBoard = Array.from(Array(9), () => Array(9).fill(0))
  const [board, setBoard] = useState<number[][]>(emptyBoard)
  const [initalBoard, setInitalBoard] = useState<number[][]>(emptyBoard)

  const handleCellValue = (
    value: number,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const updatedBoard = board.map((row) => [...row])
    updatedBoard[rowIndex][columnIndex] = value
    setBoard(updatedBoard)
  }

  useEffect(() => {
    const { puzzleBoard } = playableBoard(difficulty)
    setBoard([...puzzleBoard])
    setInitalBoard([...puzzleBoard])
  }, [difficulty])

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
              isInitial={initalBoard[rowIndex][columnIndex] > 0}
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
