// components/CustomSelect.tsx
'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '.'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  selectedOption: Option
  onChange: (option: Option) => void
  customStyles?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedOption,
  onChange,
  customStyles,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleOptionClick = (option: Option) => {
    onChange(option)
    closeDropdown()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    },
    [selectRef, closeDropdown],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])
  return (
    <div ref={selectRef} className="relative inline-block text-left">
      <div>
        <Button onClick={toggleDropdown}>
          <div className={`flex ${customStyles ?? ''} justify-between`}>
            <span className="text-md font-medium text-white mr-3">
              {selectedOption.label}
            </span>
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#ffffff"
                ></path>{' '}
              </g>
            </svg>
          </div>
        </Button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md z-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm  w-full text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomSelect
