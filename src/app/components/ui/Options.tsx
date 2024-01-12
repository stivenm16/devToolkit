'use client'
import React, { useState } from 'react'
import Option from './Option'

export type Difficulty = 'easy' | 'medium' | 'hard'

interface OptionsProps {
  children?: React.ReactNode
  onChange: (value: Difficulty) => void
}

const difficulties: Difficulty[] = ['easy', 'medium', 'hard']

const Options: React.FC<OptionsProps> = ({ children, onChange }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(difficulties[0])
  const onChangeDefault = (value: Difficulty) => {
    onChange(value)
    setDifficulty(value)
  }
  return (
    <div className=" w-2/3 p-2 md:w-1/3 md:flex mx-auto mb-6 justify-center md:flex-col bg-indigo-700 md:ml-10 text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">Options</h2>
      <div className="flex space-x-4 justify-center px-5">
        <span className="font-bold">Difficulty:</span>
        <Option
          value={difficulty}
          options={difficulties}
          defaultValue={difficulties[0]}
          onChange={onChangeDefault}
        />
        {children && <>{children}</>}
      </div>
    </div>
  )
}

export default Options
