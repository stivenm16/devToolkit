'use client'

import React, { useState } from 'react'
import { Difficulty } from '../types'
import Option from './Option'

interface OptionsProps {
  children?: React.ReactNode
  onChange: (value: any) => void
  defaultOptions: Difficulty[] | number[]
  defaultValue: Difficulty | number
  defaultLabel: string
}

const Options: React.FC<OptionsProps> = ({
  children,
  onChange,
  defaultOptions,
  defaultValue,
  defaultLabel,
}) => {
  const [difficulty, setDifficulty] = useState<Difficulty | number>(
    defaultOptions[0],
  )
  const onChangeDefault = (value: Difficulty) => {
    onChange(value)
    setDifficulty(value)
  }
  return (
    <div className=" w-full p-2 md:flex mx-auto mb-6 justify-center md:flex-col bg-indigo-700 md:ml-10 text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">Options</h2>
      <div className="flex space-x-4 justify-center px-5 flex-col gap-5">
        <span className="font-bold ml-4">{defaultLabel}:</span>
        <Option
          value={difficulty}
          options={defaultOptions}
          defaultValue={defaultValue}
          onChange={onChangeDefault}
        />
        {children && <>{children}</>}
      </div>
    </div>
  )
}

export default Options
