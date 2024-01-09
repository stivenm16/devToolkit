import React from 'react'

interface CellProps {
  value: number
  onChange: (value: number, rowIndex: number, columnIndex: number) => void
  rowIndex: number
  columnIndex: number
}

const aux = (value: string) => {
  return parseInt(value, 10)
}
const Cell: React.FC<CellProps> = ({
  value,
  onChange,
  rowIndex,
  columnIndex,
}) => {
  return (
    <input
      type="text"
      value={value || ''}
      maxLength={1}
      onChange={(e) => {
        const inputValue = e.target.value.trim() // Trim leading/trailing whitespace
        const parsedValue = parseFloat(inputValue)

        if (inputValue === '' || !isNaN(parsedValue)) {
          onChange(inputValue === '' ? 0 : parsedValue, rowIndex, columnIndex)
        }
      }}
      className="w-9 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-0.5 md:w-12 shadow-lg"
    />
  )
}

export default Cell
