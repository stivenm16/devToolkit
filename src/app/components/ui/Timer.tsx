'use client'
import React, { useEffect, useState } from 'react'

const Timer: React.FC = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div className="flex flex-col items-center justify-center my-3">
      <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
      <div className="flex space-x-4">
        {!isRunning && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={startTimer}
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={stopTimer}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  )
}

export default Timer
