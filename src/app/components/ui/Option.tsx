import React from 'react'
import { Difficulty } from './Options'

interface OptionProps {
  options: string[]
  defaultValue: string
  onChange: (value: string) => void
}

const Option: React.FC<OptionProps> = ({ options, defaultValue, onChange }) => {
  return (
    <select
      value={defaultValue}
      onChange={(e) => onChange(e.target.value as Difficulty)}
      className="form-select text-blue-500 w-48 h-8 rounded-md "
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Option
