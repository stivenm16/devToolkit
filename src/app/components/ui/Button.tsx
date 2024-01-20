import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  label: string
  customStyles?: string
}

const ButtonT: React.FC<ButtonProps> = ({
  onClick,
  label,
  customStyles,
  ...props
}) => {
  return (
    <button
      className={`${customStyles} text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700  py-2 px-4 rounded transition duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

export default ButtonT
