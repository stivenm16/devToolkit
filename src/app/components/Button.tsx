import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  label: string
}

const ButtonT: React.FC<ButtonProps> = ({ onClick, label, ...props }) => {
  return (
    <button
      className="text-sm font-bold text-white flex items-center bg-sky-600 hover:bg-sky-700  py-2 px-4 rounded transition duration-300 ease-in-out"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

export default ButtonT
