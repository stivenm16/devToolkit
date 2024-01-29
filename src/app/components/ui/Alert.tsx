'use client'
import { useState } from 'react'

interface AlertProps {
  title?: string
  content: string
  onClose?: () => void
}

const Alert = ({ title, content, onClose }: AlertProps) => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    visible && (
      <div
        className="bg-indigo-100 z-10 border border-indigo-400 text-indigo-700 px-3 pr-8 pt-2 h-14 rounded fixed bottom-5 animate-fade-in right-10"
        role="alert"
      >
        <div className="relative">
          <span
            className={
              'absolute top-[-0.5rem] right-[-1.5rem] cursor-pointer text-indigo-500'
            }
            onClick={handleClose}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <div className="pt-2">
            {title && <strong className="font-bold mr-2">{title}</strong>}
            <span className="block sm:inline">{content}</span>
          </div>
        </div>
      </div>
    )
  )
}

export default Alert
