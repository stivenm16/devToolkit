'use client'

import { Cell } from '.'
import { Difficulty } from '../../types'
import useSudoku from '../hooks/useSudoku'

const Board = ({ difficulty }: { difficulty: Difficulty }) => {
  const { getBorderStyle, board, initalBoard, handleCellValue } =
    useSudoku(difficulty)

  return (
    <div className="grid-cols-9 gap-0">
      {board.map((row, rowIndex) => (
        <div className="flex md:grid-rows-9" key={rowIndex}>
          {row.map((cellValue: number, columnIndex: number) => (
            <div
              key={columnIndex}
              className="relative"
              style={getBorderStyle(rowIndex, columnIndex)}
            >
              <Cell
                value={cellValue}
                onChange={handleCellValue}
                rowIndex={rowIndex}
                columnIndex={columnIndex}
                isInitial={initalBoard[rowIndex][columnIndex] > 0}
              />
            </div>
          ))}
          {/* <span className="mt-3">{sumRow(row)}</span> */}
        </div>
      ))}
      {/* <div className="flex w-auto justify-around">
        {board[0].map((_, columnIndex) => (
          <span key={columnIndex} className="mr-4">
            {sumColumn(board, columnIndex)}
          </span>
        ))}
      </div> */}
    </div>
  )
}

export default Board
