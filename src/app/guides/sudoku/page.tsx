'use client'
import { Layout } from '@/app/components'
import CodeEditor from '@/app/components/CodeEditor'
import React, { useEffect, useRef, useState } from 'react'

const test = [1, 2, 3, 4, 5]
const Explanation = () => {
  return (
    <div className="m-8">
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
  const [isVisibleArray, setIsVisibleArray] = useState(test.map(() => false))
  const codeEditorRefs = test.map(() => useRef<HTMLDivElement>(null))

  useEffect(() => {
    const handleScroll = () => {
      codeEditorRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight

          // Check if at least 30% of the component is visible
          const isVisible =
            rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4

          setIsVisibleArray((prev) => {
            const newVisibleArray = [...prev]
            newVisibleArray[index] = isVisible
            return newVisibleArray
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [codeEditorRefs])

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
              ref={codeEditorRefs[index]}
              className={`flex my-6 transition-opacity ease-in-out duration-500 ${
                isVisibleArray[index] ? 'opacity-100' : 'opacity-0'
              } `}
            >
              <Explanation />
              <CodeEditor codeSnippet={''} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default SudokuPage
