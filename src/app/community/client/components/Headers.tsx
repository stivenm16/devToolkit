import React from 'react'
import { useClient } from '../context/RequestContext'

const Headers: React.FC = () => {
  const { configApiCall, changeContent } = useClient()
  const headers = configApiCall.headers
  const handleHeaderChange = (
    value: string,
    type: 'key' | 'value',
    index: number,
  ) => {
    const newHeaders = headers.map((header: any, i: any) => {
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
      changeContent({
        ...configApiCall,
        headers: [...newHeaders, { key: '', value: '' }],
      })
    } else {
      const headerToSet = newHeaders.filter(
        (header: any) => header.key.trim() !== '' || header.value.trim() !== '',
      )
      changeContent({
        ...configApiCall,
        headers: [...headerToSet, { key: '', value: '' }],
      })
    }
  }

  return (
    <div className="my-2">
      {headers.map((header: any, index: number) => (
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
