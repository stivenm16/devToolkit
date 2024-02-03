'use client'
import { useClipboard } from '@/app/hooks'
import { FC, useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button, DotsCodeEditor } from '.'

interface Props {
  codeSnippet: string

  children?: React.ReactNode
}

const CodeSnippet: FC<Props> = ({ codeSnippet, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const CodeSnippetRef = useRef<HTMLDivElement>(null)
  const { copyToClipboard } = useClipboard(codeSnippet)

  useEffect(() => {
    const handleScroll = () => {
      if (CodeSnippetRef.current) {
        const rect = CodeSnippetRef.current.getBoundingClientRect()
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
      ref={CodeSnippetRef}
      className={`flex relative md:flex-col h-fit  bg-[#2D2B57] rounded-2xl shadow-2xl min-w-full transition-opacity ease-in-out duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Button
        customStyles="h-fit absolute right-6  top-5"
        label="Copy"
        onClick={copyToClipboard}
      />
      <DotsCodeEditor />
      <SyntaxHighlighter
        language="typescript"
        style={shadesOfPurple}
        customStyle={{
          borderRadius: 10,
          padding: 30,
          paddingTop: 40,
          marginBottom: 10,
        }}
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
