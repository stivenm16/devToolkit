import { Layout } from '@/app/components'
import CodeEditor from '@/app/components/CodeEditor'
import React from 'react'

const test = [
  'solveSudoku = (board: number[][]): boolean => {\n' +
    '  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n' +
    '  for (let row = 0; row < 9; row++) {\n' +
    '    for (let col = 0; col < 9; col++) {\n' +
    '      if (board[row][col] === 0) {\n' +
    '        for (const num of shuffleArray(base)) {\n' +
    '          if (isMoveValid(board, row, col, num)) {\n' +
    '            board[row][col] = num\n' +
    '\n' +
    '            if (solveSudoku(board)) {\n' +
    '              return true\n' +
    '            }\n' +
    '\n' +
    '            board[row][col] = 0\n' +
    '          }\n' +
    '        }\n' +
    '        return false\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '  return true\n' +
    '}',
  'shuffleArray = (array: number[]): number[] => {\n' +
    '  const shuffled = array.slice()\n' +
    '  for (let i = shuffled.length - 1; i > 0; i--) {\n' +
    '    const j = Math.floor(Math.random() * (i + 1))\n' +
    '    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]\n' +
    '  }\n' +
    '  return shuffled\n' +
    '}',
]
const Explanation = () => {
  return (
    <div className=" flex justify-center flex-col m-8">
      <h2 className="text-xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        This documentation provides an overview of how the Sudoku game is
        implemented in this application.
      </p>

      <h2 className="text-xl font-bold mb-2">Rules</h2>
      <p className="mb-4">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
      <h2 className="text-xl font-bold mb-2">Rules</h2>
      <p className="mb-4">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
    </div>
  )
}

const SudokuPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-900 font-2xl mt-5">
        Sudoku Game Documentation
      </h1>

      <div className="mx-6 ">
        {test.map((item, index) => {
          return (
            <div key={index}>
              <CodeEditor codeSnippet={test[index]}>
                <Explanation />
              </CodeEditor>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default SudokuPage
