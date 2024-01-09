import React from 'react'
import Option from './Option'

export type Difficulty = 'easy' | 'medium' | 'hard'

interface OptionsProps {
  children?: React.ReactNode
}

const Options: React.FC<OptionsProps> = ({ children }) => {
  const difficulties = ['easy', 'medium', 'hard']
  const onChangeDefault = (value: string) => {
    console.log(value)
  }
  return (
    <div className="hidden md:w-1/4 md:flex md:justify-center md:flex-col md:bg-sky-700 md:ml-10 md:text-white md:rounded-2xl md:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">Options</h2>
      <div className="flex space-x-4 justify-center">
        <span className="font-bold">Difficulty:</span>
        <Option
          options={difficulties}
          defaultValue={difficulties[0]}
          onChange={onChangeDefault}
        />
        {children}
      </div>
    </div>
  )
}

export default Options
