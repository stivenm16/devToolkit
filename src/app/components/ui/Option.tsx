import { Difficulty } from '@/app/types/global'
import React from 'react'

interface OptionProps {
  options: string[]
  defaultValue: string
  value: Difficulty
  onChange: (value: Difficulty) => void
}

const Option: React.FC<OptionProps> = ({
  options,
  defaultValue,
  onChange,
  value,
}) => {
  return (
    <select
      value={value || defaultValue}
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
