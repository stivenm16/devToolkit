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
    <div className="hidden md:w-1/4 md:flex md:justify-center md:flex-col md:bg-sky-700 md:ml-10 md:text-white md:rounded-2xl md:shadow-xl">
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
