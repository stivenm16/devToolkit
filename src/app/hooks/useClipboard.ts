import { useState } from 'react'

const useClipboard = (initialValue: string) => {
  const [codeUpdated, setCodeUpdated] = useState(initialValue)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeUpdated)
    } catch (error) {
      console.error('Unable to copy to clipboard', error)
    }
  }

  const handleChange = (code: string) => {
    setCodeUpdated(code)
  }

  return {
    codeUpdated,
    copyToClipboard,
    handleChange,
  }
}

export default useClipboard
