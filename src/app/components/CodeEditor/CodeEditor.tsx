'use client'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import { DotsCodeEditor } from '../ui'
import { ButtonT } from '..'

interface Props {
  code: string
  component?: any
}

const CodeBlock = ({ code, component }: Props) => {
  const scope = {
    // ...React,
    // component,
  }

  // Patch to hide warning about defaultProps, discussion on github:https://github.com/recharts/recharts/issues/3615
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <LiveProvider code={code} scope={scope}>
        <LivePreview />
        <div className="relative rounded-xl p-3 bg-[#1D1F21] my-10 md:w-1/2 pr-10">
          <ButtonT
            customStyles="absolute right-10 top-5"
            label="Copy"
            onClick={() => console.log(code, 'code')}
          />
          <DotsCodeEditor padding="5" />
          <LiveEditor language="jsx" />
        </div>
        <LiveError className=" bg-gray-800 rounded-md  md:w-1/2 text-center px-3 py-5 shadow-xl text-white" />
      </LiveProvider>
    </div>
  )
}

export default CodeBlock
