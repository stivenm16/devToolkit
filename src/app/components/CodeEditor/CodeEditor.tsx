'use client'
import { useClipboard } from '@/app/hooks'
import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import ts, { transpile } from 'typescript'
import * as yup from 'yup'
import { Alert, Button, CustomSVG, DotsCodeEditor } from '../ui'

interface Props {
  code: string
  inLine: boolean
}

const CodeBlock = ({ code, inLine, ...props }: Props) => {
  const scope = {
    ...React,
    CustomSVG,
    Button,
    yup,
    yupResolver,
    useForm,
  }

  const transformCode = (snippet: string, target: ts.ScriptTarget) =>
    transpile(snippet, {
      jsx: ts.JsxEmit.React,
      target,
    })
  const { copyToClipboard, handleChange, codeUpdated, copy } =
    useClipboard(code)

  // Patch to hide warning about defaultProps, discussion on github:https://github.com/recharts/recharts/issues/3615
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {copy && <Alert content={'Copied in clipboard!'} />}

      <LiveProvider
        code={codeUpdated}
        language="tsx"
        scope={scope}
        noInline={inLine}
        transformCode={(code) => transformCode(code, ts.ScriptTarget.ES2015)}
      >
        <LivePreview />
        <div className="relative rounded-xl p-3 bg-[#1D1F21] my-10 md:w-full pr-10">
          <Button
            customStyles="absolute right-10 top-5"
            label="Copy"
            onClick={copyToClipboard}
          />
          <DotsCodeEditor padding="5" />
          <LiveEditor onChange={handleChange} language="tsx" />
        </div>
        <LiveError className=" bg-gray-800 rounded-md  md:w-1/2 text-center px-3 py-5 shadow-xl text-white" />
      </LiveProvider>
    </div>
  )
}

export default CodeBlock
