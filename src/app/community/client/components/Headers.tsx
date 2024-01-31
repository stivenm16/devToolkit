import React from 'react'
import { Header } from '../types/ClientTypes'
// import { defaultContent } from '../redux/ContentContex'
interface HeadersProps {
  headers: Header[]
  setHeaders: any
}

const Headers: React.FC<HeadersProps> = ({ headers, setHeaders }) => {
  const handleHeaderChange = (
    value: string,
    type: 'key' | 'value',
    index: number,
  ) => {
    const newHeaders = headers.map((header, i) => {
      if (index === i) {
        return { ...header, [type]: value }
      }
      return header
    })

    const activeHeader = newHeaders[index]
    const isLastRow = index === headers.length - 1
    const isEmpty =
      activeHeader.key.trim() === '' && activeHeader.value.trim() === ''

    if (isLastRow && !isEmpty) {
      setHeaders([...newHeaders, { key: '', value: '' }])
    } else {
      const headerToSet = newHeaders.filter(
        (header) => header.key.trim() !== '' || header.value.trim() !== '',
      )
      setHeaders([...headerToSet, { key: '', value: '' }])
    }
  }

  return (
    <div className="my-2">
      {headers.map((header, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            placeholder="Key"
            className="w-1/2 bg-indigo-700 h-9 rounded-sm px-5 border-r-2 border-indigo-900"
            value={header.key}
            onChange={(e) => handleHeaderChange(e.target.value, 'key', index)}
          />
          <input
            type="text"
            placeholder="Value"
            className="w-1/2 bg-indigo-700 h-9 rounded-sm px-5"
            value={header.value}
            onChange={(e) => handleHeaderChange(e.target.value, 'value', index)}
          />
        </div>
      ))}
    </div>
  )
}

export default Headers
