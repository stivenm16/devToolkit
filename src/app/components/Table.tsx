'use client'

// components/DynamicTable.tsx

import React, { useState } from 'react'

interface Props {
  columns: string[]
  data: string[][]
  rowsPerPage: number
}

const DynamicTable: React.FC<Props> = ({ columns, data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {columns.map((column, index) => (
              <th key={index} className="py-3 px-6 text-left">
                {column}
              </th>
            ))}
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 px-6 text-left">
                  {cell}
                </td>
              ))}
              <td className="py-3 px-6 text-left">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        {[...Array(Math.ceil(data.length / rowsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              index + 1 === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DynamicTable
