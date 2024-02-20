import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  label?: string
  children?: React.ReactNode
  customStyles?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  children,
  customStyles,
  ...props
}) => {
  return (
    <button
      className={`${customStyles} text-sm font-bold text-white flex items-center justify-center bg-indigo-600 hover:bg-indigo-700  py-2 px-4 rounded transition duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {children ?? label}
    </button>
  )
}

export default Button
