'use client'
import { useClipboard } from '@/app/hooks'
import { FC, useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button, DotsCodeEditor } from '.'

interface Props {
  codeSnippet: string
  wCodeSnippet?: string | number
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
      className={`flex transition-opacity ease-in-out relative duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Button
        customStyles="h-fit absolute right-6  top-20"
        label="Copy"
        onClick={copyToClipboard}
      />
      {children}

      <div
        className={`hidden md:flex md:flex-col h-fit  bg-[#4c4a6f] rounded-2xl shadow-2xl `}
      >
        <>
          <DotsCodeEditor />
          <SyntaxHighlighter
            language="typescript"
            style={shadesOfPurple}
            customStyle={{
              borderRadius: 10,
              padding: 30,
              paddingTop: 70,
              boxShadow:
                '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              marginBottom: 10,
              width: props.wCodeSnippet || '100%',
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </>
      </div>
    </div>
  )
}

export default CodeSnippet
