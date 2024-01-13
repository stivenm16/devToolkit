'use client'
import { FC, useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  codeSnippet: string
  children?: React.ReactNode
}

const test = [1, 2, 3, 4, 5]
const CodeEditor: FC<Props> = ({ codeSnippet, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const codeEditorRef = useRef<HTMLDivElement>(null)
  const codeString = `export const isMoveValid = (
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

  return true // The move is valid
}`

  useEffect(() => {
    const handleScroll = () => {
      if (codeEditorRef.current) {
        const rect = codeEditorRef.current.getBoundingClientRect()
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight

        // Check if at least 30% of the component is visible
        setIsVisible(
          rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3,
        )
      }
    }

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll)

    // Call handleScroll once to initialize the visibility state
    handleScroll()

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      ref={codeEditorRef}
      className={`flex transition-opacity ease-in-out duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}

      <div
        className={`hidden md:flex md:flex-col w-max bg-[#4c4a6f] rounded-2xl shadow-2xl my-6`}
      >
        <>
          <div className="h-10  w-full  flex gap-4 p-4 pl-6">
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <SyntaxHighlighter
            language="typescript"
            style={shadesOfPurple}
            customStyle={{
              width: 700,
              borderRadius: 10,
              padding: 30,
              boxShadow:
                '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              marginBottom: 10,
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </>
      </div>
    </div>
  )
}

export default CodeEditor
