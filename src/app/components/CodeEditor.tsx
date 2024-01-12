'use client'
import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  codeSnippet: string
}

const CodeEditor: FC<Props> = ({ codeSnippet }) => {
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

  // const [isVisible, setIsVisible] = useState(false)
  // const codeEditorRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (codeEditorRef.current) {
  //       const rect = codeEditorRef.current.getBoundingClientRect()
  //       const windowHeight =
  //         window.innerHeight || document.documentElement.clientHeight

  //       // Check if the top or bottom of the component is within the viewport
  //       setIsVisible(
  //         rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4,
  //       )
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   handleScroll()

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  return (
    <div className={` w-max bg-[#4c4a6f] rounded-2xl shadow-2xl  `}>
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
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeEditor
