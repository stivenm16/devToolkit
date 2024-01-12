'use client'
import { Layout } from '@/app/components'
import CodeEditor from '@/app/components/CodeEditor'
import React from 'react'

const test = [1, 2, 3, 4, 5]
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
            <div
              key={index}
              // className={``flex `}
            >
              <CodeEditor codeSnippet={''}>
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
