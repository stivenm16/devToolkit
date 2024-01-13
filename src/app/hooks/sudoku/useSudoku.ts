import { isValidBoard, playableBoard } from '@/app/logic/sudoku'
import { Difficulty } from '@/app/types/global'
import { useEffect, useState } from 'react'

const useSudoku = (difficulty: Difficulty) => {
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

  useEffect(() => {
    const isBoardComplete = board.every((row) =>
      row.every((value) => value > 0),
    )
    if (isBoardComplete && isValidBoard(board)) {
      alert('You win!')
    }
  }, [board])

  const getBorderStyle = (rowIndex: number, columnIndex: number) => {
    const borderStyles: React.CSSProperties = {}

    if (rowIndex % 3 === 2) {
      borderStyles.borderBottom = '2px solid #000'
    }

    if (columnIndex % 3 === 2) {
      borderStyles.borderRight = '2px solid #000'
    }

    return borderStyles
  }
  return { board, initalBoard, handleCellValue, getBorderStyle }
}

export default useSudoku
