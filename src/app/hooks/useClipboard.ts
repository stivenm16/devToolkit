import { useState } from 'react'

const useClipboard = (initialValue: string) => {
  const [codeUpdated, setCodeUpdated] = useState(initialValue)
  const [copy, setCopy] = useState<Boolean>(false)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeUpdated)
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 5000)
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
    copy,
  }
}

export default useClipboard
