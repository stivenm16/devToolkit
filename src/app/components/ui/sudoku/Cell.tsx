import React from 'react'

interface CellProps {
  value: number
  onChange: (value: number, rowIndex: number, columnIndex: number) => void
  rowIndex: number
  columnIndex: number
  isInitial: boolean
}

const Cell: React.FC<CellProps> = ({
  value,
  onChange,
  rowIndex,
  columnIndex,
  isInitial,
}) => {
  return (
    <input
      type="text"
      value={value || ''}
      maxLength={1}
      readOnly={isInitial}
      onChange={(e) => {
        e.preventDefault()
        const inputValue = e.target.value
        const parsedValue = parseFloat(inputValue)

        if (inputValue === '' || !isNaN(parsedValue)) {
          onChange(inputValue === '' ? 0 : parsedValue, rowIndex, columnIndex)
        }
      }}
      className={`w-9 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-0.5 md:w-12 shadow-lg ${
        isInitial ? 'bg-indigo-500' : 'bg-white'
      }`}
    />
  )
}

export default Cell
